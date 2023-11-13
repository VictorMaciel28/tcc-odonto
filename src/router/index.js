import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth";
import QuestionarioView from '../views/QuestionarioView.vue'
import QuestionarioProjeto from '../views/QuestionarioProjeto.vue'
import DashboardView from '../views/DashboardView.vue'
import PerguntaView from '../views/PerguntaView.vue'
import TrabalhoView from '../views/TrabalhoView.vue'
import RegisterView from '../views/RegisterView.vue'
import SigninView from '../views/SigninView.vue'
import ThreadsView from '../views/ThreadsView.vue'
import store from '../store'
import createPersistedState from 'vuex-persistedstate';

const auth = getAuth();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'threads',
      component: ThreadsView
    },
    {
      path: '/projeto/:id',
      name: 'projeto',
      component: QuestionarioProjeto
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: (to, from, next) => {
        const user = store.getters.getUser 
        if (user) {
          next()
        } else {
          next("/register")
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/threads',
      name: 'ThreadsView',
      component: ThreadsView,
      beforeEnter: (to, from, next) => {
        const user = store.getters.getUser 
        if (user) {
          next()
        } else {
          next("/dashboard")
        }
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/novo-trabalho',
      name: 'novoTrabalho',
      component: TrabalhoView,
      beforeEnter: (to, from, next) => {
        const user = store.getters.getUser 
        if (user) {
          next()
        } else {
          next("/signin")
        }
      }
    },
    {
      path: '/nova-pergunta/:projetoId',
      name: 'novaPergunta',
      component: PerguntaView
    },
    {
      path: '/editar-pergunta/:idPergunta',
      name: 'editarPergunta',
      component: PerguntaView
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: async (to, from, next) => {
        await auth.signOut(); 
        store.dispatch('setUser', null);
        next('signin');
      }
    }
  ]
})

createPersistedState()(store);

export default router