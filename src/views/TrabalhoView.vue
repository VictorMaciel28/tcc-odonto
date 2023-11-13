<template>
  <div class="container column is-5">


    <h2 class="title">Informações do trabalho</h2>

    <div class="field">
      <label class="label">Título</label>
      <div class="control">
        <input class="input" type="text" v-model="formulario.nome">
      </div>
    </div>

    <div class="field">
      <label class="label">Conteúdo </label>
      <div class="control">
        <textarea class="textarea" placeholder="Digite aqui o conteúdo do trabalho" v-model="formulario.descricao"></textarea>
      </div>
    </div>

    

    <!-- <div class="file has-name">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" v-on:change="imagemSelecionada($event)">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Escolha uma imagem...
          </span>
        </span>
        <span class="file-name">
          {{ arquivoImagem.nome_imagem ? arquivoImagem.nome_imagem : '...' }}
        </span>
      </label>
    </div> -->

    <!-- <div class="image-container">
      <img class="image" :src="arquivoImagem.url_imagem" alt="">
    </div> -->

    <!-- <div
      v-for="(opcao, index) in formulario.opcoes"
      :key="index"
      class="field is-grouped mt-5"
    >
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Texto da opção" v-model="opcao.opcao_texto">
      </div>

      <div class="select">
        <select @change="alterarProximaPerguntaDaOpcao($event, index)">
          <option selected>Seleciona a próxima pergunta</option>
          <option
            v-for="proximaPergunta in proximasPerguntas"
            :key="proximaPergunta.id"
            :value="proximaPergunta.id"
            :selected="opcao.proxima_pergunta === proximaPergunta.id"
          >
            {{ proximaPergunta.data().nome }}
          </option>
        </select>
      </div>

      <div class="control ml-3">
        <button class="button" @click="removerOpcao(index)">Remover opcao</button>
      </div>
    </div> -->

    <label class="label">Administradores </label>
      <div
        v-for="(permissao, index) in formulario.administradores"
        :key="index"
        class="field is-grouped mt-5"
      >
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="Email" v-model="permissao.email">
        </div>
      </div>
     <div class="control mt-5">
      <button class="button" @click="adicionarNovoEmail()">Novo administrador</button>
    </div> 

    

    <div class="field is-grouped is-grouped-right mt-6">
      <div class="control" v-if="!route.params.idPergunta">
        <button @click="registrarTrabalho()" class="button">Cadastrar</button>
      </div>
      <div class="control" v-if="route.params.idPergunta">
        <button @click="editarPergunta()" class="button">Salvar Edicao</button>
      </div>
      <div class="control">
        <button class="button is-danger is-light" @click="this.$router.go(-1);">Voltar</button>
      </div>
    </div>
  </div>
  
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { db, storage } from '@/firebase';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import store from '../store'
import { 
  collection, getDocs, addDoc, 
  doc, getDoc, updateDoc 
} from "firebase/firestore";
import { 
  ref as refStorage, uploadBytes, 
  getDownloadURL, deleteObject 
} from "firebase/storage";

const router = useRouter()
const route = useRoute()

let administradores =  ref([{"email":store.getters.getUser.email}]);
/*
  REFERÊNCIAS DO FORMULÁRIO
*/
const proximasPerguntas = ref([]);
const arquivoImagem = ref({})
const formulario = ref({
  descricao: '',
  nome: '',
  administradores: administradores
})

/*
  REFERÊNCIAS DO FIREBASE
*/
const perguntasRef = collection(db, "perguntas");
const trabalhosRef = collection(db, "projetos");

/*
  OUTRAS VARIÁVEIS
*/
let idPergunta = null


onMounted( () => {
  if(route.params.idPergunta) {
    idPergunta = route.params.idPergunta;
    carregaPerguntaParaEdicao(idPergunta);
  }

});

/*
//   GET TODAS AS PERGUNTAS
// */
// const getTodasPerguntas = async () => {
//   const querySnapshot = await getDocs(perguntasRef);
//   querySnapshot.forEach((doc) => {
//     proximasPerguntas.value.push(doc);
//   });
// }

/**
 * ALTERA PROXIMA PERGUNTA
 */
const alterarProximaPerguntaDaOpcao = (event, index) => {
  formulario.value.opcoes[index]['proxima_pergunta'] = event.target.value;
}

/**
 * FUNCOES QUE GERENCIAM AS OPCOES
 */
const removerOpcao = (index) => {
  formulario.value.opcoes.splice(index, 1);
}

const adicionarNovoEmail = () => {
  formulario.value.administradores.push({email: ''});
}

const getAdministradores = () =>{
  return [{"email":"teste@email.com"}] 
}

/**
 * FUNCOES QUE SE COMUNICAM COM O FIREBASE
 */

const carregaPerguntaParaEdicao = async (idPergunta) => {
  const docRef = doc(db, "perguntas", idPergunta);
  const docSnap = await getDoc(docRef);

  formulario.value = docSnap.data();
  arquivoImagem.value.url_imagem = docSnap.data().url_imagem;
}


const registrarTrabalho = async () => {
  if(Object.keys(arquivoImagem.value).length > 0){
    await enviarImagem();
  }

  formulario.value.created_at = Date.now()

  await addDoc(trabalhosRef, formulario.value);
  router.push("/");
}

const editarPergunta = async () => {
  if("type" in arquivoImagem.value){
    await apagarImagemAntiga();
    await enviarImagem();
  }  

  const docRef = doc(db, "perguntas", idPergunta);
  await updateDoc(docRef, formulario.value);
  router.push("/dashboard");
}

/**
 * FUNÇOES QUE MANIPULAM A IMAGEM
 */
const enviarImagem = async () => {
  const extensaoImagem = arquivoImagem.value.type.split('/')[1];
  const nomeDaImagem = Date.now() + extensaoImagem;
  const mountainsRef = refStorage(storage, nomeDaImagem);

  await uploadBytes(mountainsRef, arquivoImagem.value).then( async () => {
    formulario.value.url_imagem = await getDownloadURL(mountainsRef);
    formulario.value.nome_imagem_firestore = nomeDaImagem;
  });
}

const apagarImagemAntiga = async () => {
  const imagemParaApagarRef = refStorage(storage, formulario.value.nome_imagem_firestore);
  await deleteObject(imagemParaApagarRef)
}

const imagemSelecionada = (event) => {
  const imagem = event.target.files[0]
  arquivoImagem.value = imagem
  arquivoImagem.value.url_imagem = URL.createObjectURL(imagem)
}
</script>

<style>
.container {
  padding: 10px;
}

.button, .button:active, .button:visited, .button:focus {
  background-color: #008f4f;
  color: #FDFDFF
}

.button:hover {
  background-color: #008f4f;
  color: #ffcc29;
  border-color: #FDFDFF;
}
</style>