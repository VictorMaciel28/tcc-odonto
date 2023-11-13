<template>
  <div class="container">
    <h3 class="title has-text-centered is-1">Configurar trabalho</h3>

    <div class="columns is-centered">
      <div class="column is-10">
        <div class="is-flex is-justify-content-space-between">
          <!-- <RouterLink to="/novo-trabalho" class="button has-text-centered">Novo trabalho</RouterLink>
          <RouterLink to="/logout" class="button has-text-centered" style="background-color: rgb(243, 125, 125);">Sair</RouterLink> -->


          <RouterLink :to="`/nova-pergunta/${route.params.id}`" class="button">Adicionar nova pergunta</RouterLink>
          <button class="button is-danger is-light" @click="this.$router.go(-1);">Voltar</button>
        </div>
      </div>
    </div>

    

    <div class="columns is-multiline is-centered">
      <div 
        v-for="pergunta in perguntas"
        :key="pergunta.id"
        class="card column is-one-fifth">
        <header class="card-header">
            <p class="card-header-title">
              {{ pergunta.data().nome }}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
              <h1>{{ pergunta.data().titulo }}</h1>
              <p>
                {{ pergunta.data().texto }}
              </p>
              <div class="image-container">
                <img class="image has-image-centered" :src="pergunta.data().url_imagem" alt="">
              </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="{name:'editarPergunta', params: {idPergunta : pergunta.id}}" class="card-footer-item">Editar</RouterLink>
            <RouterLink to="#" @click="apagarPergunta(pergunta.id)" class="card-footer-item delete-link">Apagar</RouterLink>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute} from 'vue-router';
import { db } from '@/firebase';
import { 
  collection, getDocs, query,
  deleteDoc, doc, orderBy, where
} from 'firebase/firestore'
import store from '../store';

/**
 * Referências do dashboard
 */
const perguntas = ref([]);

const route = useRoute();

const c = route.params.id;

const userRole = store.getters.getUser.role;

/**
 * Referências do firebase
 */
const perguntasRef = collection(db, "perguntas");

onMounted( () => {
  getTodasPerguntas();
});

const getTodasPerguntas = async () => {
  const queryPerguntas = query(perguntasRef, where("projetoId", "==", route.params.id));
  const querySnapshot = await getDocs(queryPerguntas);
  querySnapshot.forEach((doc) => {
    perguntas.value.push(doc);
  });
}

const apagarPergunta = async (perguntaId) => {
  await deleteDoc(doc(perguntasRef, perguntaId));

  perguntas.value = perguntas.value.filter( (pergunta) => pergunta.id !== perguntaId);
}
</script>

<style scoped>
.card {
  margin: 10px 10px;
}

.delete-link {
  color: red;
}
</style>