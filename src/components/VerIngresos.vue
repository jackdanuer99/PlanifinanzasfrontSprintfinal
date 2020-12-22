<template>
    <div>
        <h2>Información de todos los ingresos</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Fecha de ingreso</th>
                <th>Tipo de ingreso</th>
                <th>Valor</th>
                <th>Entidad Pagadora</th>
                <th>Descripción</th>

            </tr>
              <tr v-for="ingreso in ingresos" v-bind:key="ingreso.id">
                <td>{{ingreso.id}}</td>
                <td>{{ingreso.fechaNuevoIngreso}}</td>
                <td>{{ingreso.tipoIngreso}}</td>
                <td>{{ingreso.valor}}</td>
                <td>{{ingreso.entidadPagadora}}</td>
                <td>{{ingreso.descripcion}}</td>

            </tr>
            

        </table>

    </div>
</template>

<script>
import axios from "axios";
export default {
    
    name: "verIngresos",
    data: function(){
        return{
            ingresos:[
         
            
            ]

        };



    },
    beforeCreate: function (){
        axios
        //.get("http://localhost:8000/ingresos/")
        .get("https://planifinanzas-back-sprint4.herokuapp.com/ingresos/")
        .then(respuesta=>{
            this.ingresos=respuesta.data;
        })
        .catch(error=>{
            console.log(error);
            alert("Error en la peticion con codigo"+ error.response.status);

        });
    }
    
};
</script>

<style scoped>

</style>