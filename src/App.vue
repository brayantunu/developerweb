<template>
    <div class="structure">
    <div class="corner top-left"></div>
    <div class="corner bottom-right"></div>

    <!-- <Footer/> -->
    <Redes/>
    <router-view/>
  </div>
</template>
<style>
*{
  border: 1px solid red;
}
  .structure {
    position: relative;
    /* padding: 40px; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    overflow: hidden;
  }

  .corner {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #f7f7f7;
    transform-origin: center;
    z-index: -1;
  }

  .top-left {
    top: 0;
    left: 0;
    transform: rotateZ(45deg) translateY(-50%);
  }

  .bottom-right {
    bottom: 0;
    right: 0;
    transform: rotateZ(-135deg) translateY(50%);
  }
  </style>

<script>
// import Footer from './components/Footer.vue';
  import Redes from './components/Redes.vue';
export default{
  name:"AppV",
  
  components:{
// Footer
Redes
  }
}
</script>