<template>
    <div class="contenido">
        <div class="contentNav">
            <Navbar/>
        </div>
        <div class="content">
            <div class="proyectos">
                <div class="conten-tusena">
                <h1>TUSENA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad quia nam aperiam recusandae esse obcaecati quas voluptate minima voluptas, iure harum sint corrupti enim sunt nobis delectus. Unde, ab.</p>
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
.tusena{
    width: 50%;
}
</style>