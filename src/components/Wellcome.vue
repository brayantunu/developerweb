<template>
    <div class="keyboard">
        <span class="key">W</span>
        <span class="key">E</span>
        <span class="key">L</span>
        <span class="key">C</span>
        <span class="key">O</span>
        <span class="key">M</span>
        <span class="key">E</span>
        <!-- <span class="key">D</span> -->
    </div>
</template>
<script>
export default {
    name: "WellcomE"
}
</script>
<style>

.keyboard {
    color: #fff;
    display: flex;
    margin: auto;

}

.key {
    font-size: 6vw;
    /* Tamaño de texto más pequeño */
    display: inline-block;
    letter-spacing: -0.3vw;
    /* Ajuste del espaciado entre letras */
    transition: transform 0.2s;
    animation-duration: 2s;
    /* Duración de la animación para todos los elementos */
    animation-timing-function: ease-in-out;
    /* Función de tiempo de la animación */
}


@keyframes pressDown1 {

    30%,
    40%,
    100% {
        transform: translateY(0);
    }

    35% {
        transform: translateY(10px);
    }
}

@keyframes pressDown2 {

    70%,
    80%,
    100% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(10px);
    }
}

@keyframes pressDown3 {

    30%,
    40%,
    100% {
        transform: translateY(0);
    }

    35% {
        transform: translateY(10px);
    }
}

@keyframes pressDown4 {

    40%,
    50%,
    100% {
        transform: translateY(0);
    }

    45% {
        transform: translateY(10px);
    }
}

@keyframes pressDown5 {

    20%,
    30%,
    100% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(10px);
    }
}

@keyframes pressDown6 {

    60%,
    70%,
    100% {
        transform: translateY(0);
    }

    65% {
        transform: translateY(10px);
    }
}

@keyframes pressDown7 {

    10%,
    20%,
    100% {
        transform: translateY(0);
    }

    15% {
        transform: translateY(10px);
    }
}

@keyframes pressDown8 {

    35%,
    45%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(10px);
    }
}



.key:nth-child(1) {
    animation: pressDown1 2s infinite;
}

.key:nth-child(2) {
    animation: pressDown2 3s infinite;
}

.key:nth-child(3) {
    animation: pressDown3 4s infinite;
}

.key:nth-child(4) {
    animation: pressDown4 2.5s infinite;
}

.key:nth-child(5) {
    animation: pressDown5 2.5s infinite;
}

.key:nth-child(6) {
    animation: pressDown6 3.5s infinite;
}

.key:nth-child(7) {
    animation: pressDown7 2.2s infinite;
}

.key:nth-child(8) {
    animation: pressDown8 3.2s infinite;
}
a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.05); /* Aumentar ligeramente el tamaño */
}
</style>