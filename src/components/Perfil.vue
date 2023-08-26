<template>
  <div class="contenido">
    <div class="contentNav">
      <Navbar />
    </div>
    <div class="content">
      <p class="perfil">Soy un apasionado de la tecnología con un enfoque especial en el desarrollo de Software, tambien
        tengo habilidades en la gestión de documentación con manejo avanzado de paquete office. Mi objetivo se centra en
        la colaboración, la excelencia y responsabilidad, siempre buscando oportunidades para crecer, aprender de manera
        continua. Me entusiasma aplicar mis habilidades y conocimientos, siendo creativo con mentalidad abierta para
        enfrentar nuevos desafíos. Estoy dispuesto a asumir responsabilidades y colaborar de manera efectiva con otros
        profesionales para contribuir en equipo.</p>
    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  name: "PerfilV",
  components: {
    Navbar
  }
}
</script>

