var app = new Vue({
el: '.vue',
data: {
    mensaje: "Aprende vue.js fácilmente",
},

methods: {
    mostrarMensajes: function(){
        return this.mensaje;
    }
}})