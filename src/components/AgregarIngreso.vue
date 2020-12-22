<template>
    <div id = "agregarIngreso">
    <h3>Agregar Ingreso</h3>
    <label for = "id" type="numeric">Id</label>
    <input v-model ="id" id="id">
    <label for = "fechaNuevoIngreso">Fecha de Ingreso</label>
    <input v-model ="fechaNuevoIngreso" id="fecha" type= "date">
     <label for = "tipoIngreso">Tipo de ingreso</label>
    <input v-model="tipoIngreso" id="tipoIngreso">
     <label for = "valor" type="numeric">Valor</label>
    <input v-model="valor" id="valor">
     <label for ="entidadPagadora">Entidad pagadora</label>
    <input v-model="entidadPagadora" id="entidadPagadora">
     <label for = "descripcion">Descripción</label>
    <input v-model="descripcion" id="descripscion">
    <button v-on:click="agregarIngreso">Agregar Ingreso</button>

</div>
</template>


<script>
import axios from "axios";

export default {
    name: "AgregarIngreso",
    data: function(){
        return {

            id:"",
            fechaNuevoIngreso:"",
            tipoIngreso:"",
            valor:"",
            entidadPagadora:"",
            descripcion:"",
            datoRecibido :0
        };

    },

    methods:{

        mostrarId:function(){
            alert(this.id);

        },
        agregarIngreso: function(){
           var datosJSON= {
                id:this.id,
                fechaNuevoIngreso:this.fechaNuevoIngreso,
                tipoIngreso:this.tipoIngreso,
                valor:this.valor,
                entidadPagadora:this.entidadPagadora,
                descripcion:this.descripcion
                
                
            };
            axios
                //.post("http://localhost:8000/ingresos/nuevo/", datosJSON)
                .post("https://planifinanzas-back-sprint4.herokuapp.com/ingresos/nuevo/", datosJSON)
                .then(respuesta =>{
                    alert(respuesta.data.mensaje);

            })
            .catch(error =>{
                alert("Error en el servidor");
            });

        }

    },
    created: function(){

        this.datoRecibido=this.$route.params.dato;
    //alert("Esto pasa antes de que se cree el componente agregar orden")

}


};

</script>

<style  scoped>
#agregarTransaccion{
    background-color: gray;


}

</style>