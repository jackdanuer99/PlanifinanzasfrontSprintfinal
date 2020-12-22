import VueRouter from 'vue-router';
import AgregarTransaccion from "./components/AgregarTransaccion";
import VerTransacciones from "./components/VerTransacciones";
import AgregarIngreso from "./components/AgregarIngreso";
import VerIngresos from "./components/VerIngresos";


const router = new VueRouter({
//mode: "history",
    routes :[

        {
            name: "agregar",
            path: "/agregar-gasto",
            component: AgregarTransaccion

        },
        {
            name: "verTransacciones",
            path: "/ver-gastos",
            component: VerTransacciones

        },
        {
            name: "agregarIngreso",
            path: "/agregar-ingreso",
            component: AgregarIngreso

        },
        {
            name: "verIngresos",
            path: "/ver-ingreso",
            component: VerIngresos

        }
    ]

});
export default router;