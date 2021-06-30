var data={
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
}
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
        methods: {
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
Vue.component('lista-de-tareas',{
    template: `
            <ul class="list-group">
            <li v-for="(tarea, indice) of tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
                {{tarea.texto}}
        <span class="pull-right">
            <button type="button" class="btn btn-success glyphicon glyphicon-ok"
                v-on:click =" tarea.terminada = !tarea.terminada"></button>
            <button type="button" class="btn btn-danger glyphicon glyphicon-remove"
                v-on:click ="borrar()"></button>   
        </span>
        </li>
        </ul>    
        `,
        data: function(){

            return data; 
        },
    methods: {
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }

    }
})



new Vue({
    el:'#app',
    data: data
    
 })