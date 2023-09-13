<template>
    <div class="contenido">
        <div class="contentNav">
            <Navbar/>
        </div>
        <div class="content">
            <div class="proyectos">
                <div class="conten-tusena">
                <h1>TUSENA</h1>
                <p>La funcionalidad del aplicativo es dar a los aprendices un buscador para investigar los PROYECTOS o SEMILLEROS creados por el sena la cual para informarse de mas de los proyectos a nivel nacional</p>
                <div class="content-desapp">
                    <img class="tusena" src="../assets/tusena.png" alt="">
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default{
    name:"ProyectoS",
    components:{
        Navbar
    }
}
</script>
<style>

.conten-tusena{
    margin: auto 10px;
    text-align: justify;
}
.content-desapp{
display: flex;
}
</style>