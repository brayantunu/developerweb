<template>
  <div class="app">
    <nav class="navbar-vertical">
      <div class="hola">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <h1>WELCOME</h1>
          </router-link>
        </li>
      </div>
      <div class="vertical-line">
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Perfil" class="nav-link">Perfil</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/lenguaje" class="nav-link">Lenguajes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.app {
  height: 100vh;
  display: flex;
}

.navbar-vertical {
  margin: auto;
  position: relative;
  padding-left: 20px;
}

.vertical-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #dadada;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin-left: 10px;
}

.nav-item {
  margin-bottom: 20px;
  color: #fff7f7;
}

.nav-link {
  text-decoration: none;
  color: #fff7f7;
  font-size: 18px;
  transition: color 0.3s ease;
  list-style-type: none;
}



</style>

<script>
export default {
  name: "NabVar"
}
</script>