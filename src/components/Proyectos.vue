<template>
    <div class="contenido">
        <div class="contentNav">
            <Navbar/>
        </div>
        <div class="content">
            <div class="proyectos">
                <h1>TUSENA</h1>
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
.proyectos{
    margin: auto;
}
</style>