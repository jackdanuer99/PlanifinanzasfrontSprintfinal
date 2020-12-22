/* Representa el HTML (Estructura) */
<template>
  
  <div id="app">
    <div class="header">
      <h1>Planifinanzas - Modulo de Transacciones</h1>
      <nav>
        <button v-on:click="cambiarTransacciones">Ver Gastos</button>
        <button v-on:click="cambiarAgregarTransaccion">Agregar Gastos</button>
        <button v-on:click="VerIngresos">Ver Ingresos</button>
        <button v-on:click="AgregarIngreso">Agregar Ingreso</button>
        <h2>{{nombre}}</h2>
        <router-view></router-view>
      </nav>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
      <p>© 2020 Grupo G3M2</p>
      <p>Tel: +57 31x xxx xxxx</p>
      <p>info@planifinanzas.co</p>
    </div>
  </div>
</template>


/* Representa el JS (Comportamiento) */
<script>
import AgregarTransaccion from "./components/AgregarTransaccion";
import VerTransacciones from "./components/VerTransacciones";
import AgregarIngreso from "./components/AgregarIngreso";
import VerIngresos from "./components/VerIngresos";

export default {
  name: 'App',
  components: {AgregarTransaccion, VerTransacciones, AgregarIngreso, VerIngresos},
  data:function(){
    return{
      nombre:2

    };

  },
  methods: {

    cambiarTransacciones: function(){
      if(this.$route.name !="verTransacciones"){
      this.$router.push({name : "verTransacciones"});
      }
    },

    cambiarAgregarTransaccion: function(){
      if(this.$route.name != "agregar"){
      this.$router.push({
        name:"agregar",
        });
      }
    },

    VerIngresos: function(){
      if(this.$route.name !="verIngresos"){
      this.$router.push({name : "verIngresos"});
      }
    },

    AgregarIngreso: function(){
      if(this.$route.name != "agregarIngreso"){
      this.$router.push({
        name:"agregarIngreso",
        });
      }
    }
  },

    beforeCreate: function (){
   
    if(this.$route.name != "verTransacciones"){
    this.$router.push({name:"verTransacciones"});
    }

    
  }
};
</script>


/* Representa el CCS (Estilo) */
<style>

body{
    margin: 0 0 0 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

/* #app .header1 h1 {
  margin: 0%;
  padding: 0;
  min-height: 100px;
  background-color: #283747 ;
  color:#E5E7E9  ;

  display: flex;
  justify-content: space-between;
  align-items: center;
} */

.header1 h2{
  margin: 0%;
  min-height: 20px;
  text-align: left;
  color: #E5E7E9;
  background: #fabd15;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
}
img{
  display:inline-block;
  margin:0%;
}

.footer{
  margin: 4%;
  text-align: left;
  min-height: 1px;
  background: #0a061bc7;
  color: #E5E7E9;
  border: 1px solid #E5E7E9;
  border-radius: 10px;
  padding: 10px 20px;
}

.footer h2{
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-bottom: -2rem;
}

.footer p{
  text-align: right;
  display: block;
} 


.header h1{
  color: #E5E7E9;
  background: #283747;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
  margin:0%;
}

.header nav button:hover{
    height: 100%;
    width: 45%;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
}

.header nav button{
  color: #E5E7E9;
  background: #283747;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover{
color: #283747;
background: #E5E7E9;
border: 1px solid #E5E7E9;
}

.main-component{
height: 50vh;
margin: 0%;
padding: 0%;
background: #FDFEFE ;
}

</style>
