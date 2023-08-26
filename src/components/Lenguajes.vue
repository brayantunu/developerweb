<template>
    <div class="contenido">
        <div class="contentNav">
            <Navbar />
        </div>
        <div class="content">
            <div class="lenguajes">
                <p class="learning">
                    Comencé explorando Java, creando la logica en pequeños scripts para backend . Mi enfoque cambió a
                    JavaScript, donde experiencia de java me permitieron crear interacciones dinámicas y mejorar la
                    usabilidad web.
                </p>
                <p class="learning">
                    Mi viaje me llevó a Vue.js , en el que he estado inmerso durante durante mi etapa lectiva. He construido
                    interfaces de usuario flexibles y componentes reutilizables, colaborando con equipos multidisciplinarios
                    para llevar a cabo proyectos completos. Siempre estoy buscando aprender y aplicar las últimas tendencias
                    para crear soluciones impactantes.
                </p>
                <p class="learning">
                    Estoy emocionado por continuar mi trayectoria, enfrentar nuevos desafíos y aportar valor a través del
                    desarrollo. Mi pasión por la resolución de problemas y el aprendizaje constante me impulsa a innovar y
                    enriquecer las experiencias digitales.
                </p>
            </div>

        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
    name: "LenguajE",

    components: {
        Navbar
    }
}

</script>
<style>
.lenguajes {
    margin: auto;

}</style>