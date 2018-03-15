import Vue 						from 'vue'
import Router 				from 'vue-router'
import ListOfForm 		from '../components/ListsOfForm.vue'
import Home 					from '../components/Home.vue'
import Create 				from '../components/Create.vue'
import CreatePreview 	from '../components/CreatePreview.vue'
import CreateProcess 	from '../components/CreateProcess.vue'
import ListsOfForm 		from '../components/ListsOfForm.vue'
import HomeLogin      from '../components/HomeLogin.vue'
import HomeRegister   from '../components/HomeRegister.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lists',
      name: 'Lists',
      component: ListsOfForm 
    },
    {
      path: '/register',
      name: 'Register',
      component: HomeRegister,
    },
    {
      path: '/login',
      name: 'Login',
      component: HomeLogin,
    },
  	{
      path: '/create',
      name: 'Create',
      component: Create,
      children: [
				{
					path: 'preview',
					component: CreatePreview,
					props: {obj: true}
				},

				{
					path: '/create/',
					component: CreateProcess
				}
      ]
    }
  ]
})
