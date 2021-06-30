Vue.component('titulo',{
    template: '<h2>{{titulo}}</h2>',
    data:function(){
        return{ titulo: '- Lista de tareas -'}
    }
})

    Vue.component('nueva-tarea',{
    template: `
        <div class="input-group">
        <input type="text" 
            placeholder="escribe una tarea" 
            v-model='nuevaTarea'
            class="form-control"
            v-on:keypress.enter = "agregarTarea">
         <span class="input-group-btn">
            <button type="button" 
            v-on:click="agregarTarea()" 
            class="btn btn-primary">Agregar tarea</button>
         </span>
        </div>`,

        data: function(){
            return data;
        },

        methods:{
            agregarTarea: function(){
                var texto = this.nuevaTarea.trim();
                if(texto){
                    this.tareas.push({
                        texto: texto,
                        terminada: false
                    })
                }
            }
        }
    })



new Vue({
    el:'#app',
    data:{
        titulo : 'Lista de tareas',
        tareas: [
            {
                texto: 'Aprender vue.js',
                terminada: false
            },
            {
                texto: 'Aprende Angular 2',
                terminada :false
            },
            {
                texto: 'Aprender Iconic 2',
                terminada: false
            }
        ],
        nuevaTarea: ''
    },
    methods:{
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }
    }
 })