  var app = new Vue({
    el:'#app',
    data:{
        titulo : 'Lista de tareas',
        tareas: [
            {
                texto: 'Aprender vue.js',
                terminada : false
            },
            {
                texto: 'Aprender angular 2 ',
                terminada : false
            },
            {
                texto: 'Aprender iconic 2',
                terminada : false
            },
        ],
        nuevaTarea = ''

    },
    methods:{
        
    }
 })