<template>
  <div class="questionario">
    <div class="box my-4">

      <div class="botao-inicio mb-2">
        <RouterLink
          to="/threads"
          class="button" title="Início">
          <i class="fa-solid fa-house"></i>
        </RouterLink>
      </div>

      <h2 class="title has-text-centered">{{ pergunta.titulo }}</h2>

      <p class="is-size-3 mb-5 has-text-justified texto" 
        v-html="pergunta.texto">
      </p>

      <div class="image-container">
        <img class="image has-image-centered" :src="pergunta.url_imagem" alt="">
      </div>

      <div class="opcoes-container buttons are-medium mt-6 is-justify-content-center">
        <button 
          v-for="(opcao, index) in pergunta.opcoes"
          :key="index" 
          @click="getProximaPergunta(opcao.proxima_pergunta)"
          class="button">{{ opcao.opcao_texto }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  IMPORTS
*/
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { useRoute } from 'vue-router'; 
import { 
  collection, getDocs, query, 
  limit, where, getDoc, doc
} from 'firebase/firestore';


const perguntasRef = collection(db, "perguntas");
const pergunta = ref('');



onMounted( () => {
  const route = useRoute();
  getPrimeiraPergunta(route.params.id);
}); 

const getPrimeiraPergunta = async (projetoId) => {
  const primeiraPerguntaQuery = query(perguntasRef, where("is_inicio", "==", true), where("projetoId", "==", projetoId), limit(1));
  const primeiraPerguntaQuerySnapshot = await getDocs(primeiraPerguntaQuery);

  primeiraPerguntaQuerySnapshot.forEach(async (primeiraPergunta) => {
    pergunta.value = primeiraPergunta.data();
  }); 
}

const getProximaPergunta = async (idProximaPergunta) => {
  const docRef = doc(db, "perguntas", idProximaPergunta);
  const docSnap = await getDoc(docRef);

  pergunta.value = docSnap.data();
}
</script>

<style>
.box {
  background-color: #FDFDFF;
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

.texto {
  white-space: pre-line;
}

@media (max-width: 600px) {
  .texto {
    font-size: 1.2rem !important;
  }
}

.questionario {
  max-width: 1000px;
  align-self: center;
  display: inherit;
}

.referencia {
  font-size: 15px;
}

.referencia > p {
  white-space: normal;
}


</style>


