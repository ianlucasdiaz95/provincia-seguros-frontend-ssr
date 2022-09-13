<template>
  <div class="home">
    <section class="home__slider">
      <Slider />
    </section><!-- home__slider -->

    <section class="home__cotizar">
      <div class="container">
        <div class="titleBlock -center">
          <h2 class="titleBlock__title">
            Cotización online
          </h2>
          <p class="titleBlock__subtitle">
            Cotizá y obtené en minutos el mejor seguro para tu auto o moto.
          </p>
          <div class="titleBlock__actions">
            <button class="button -big">
              Cotizá el seguro para tu auto
            </button>
            <button class="button -big">
              Cotizá el seguro para tu moto
            </button>
          </div><!-- titleBlock__actions -->
        </div><!-- titleBlock -->
      </div><!-- container -->
    </section><!-- home__cotizar -->

    <div class="home__contact">
      <a href="tel:08102222444">
        <img src="../../assets/img/tel.png" alt="Contactanos - Provincia Seguros">
      </a>
    </div><!-- home__contact -->

    <div class="home__personas">
      <div class="container">
        <div class="titleBlock -small -center">
          <h2 class="titleBlock__title">
            Personas
          </h2>
          <p class="titleBlock__subtitle">
            En <strong>Provincia Seguros</strong> tenemos diferentes propuestas para cada individuo.
          </p>
        </div><!-- titleBlock -->
      
        <div class="grid -four">
          <IconBox v-for="persona in personas" :key="persona.title" :icon="persona.icon" :title="persona.title" :text="persona.text" :url="persona.url" />
        </div><!-- grid -->
      </div><!-- container -->
    </div><!-- home__personas -->

    <div class="home__empresas">
      <div class="container">
        <div class="titleBlock -small -center">
          <h2 class="titleBlock__title">
            Empresas
          </h2>
          <p class="titleBlock__subtitle">
            Tenemos una amplia gama de coberturas a disposición de <strong>cualquier tipo de empresa.</strong>
            <br> En <strong>Provincia Seguros</strong> nos ocupamos de resguardar los valores de las compañías para que estas solo se enfoquen en seguir creciendo.
          </p>
        </div><!-- titleBlock -->
      
        <div class="grid -four">
          <IconBox v-for="empresa in empresas" :key="empresa.title" :icon="empresa.icon" :title="empresa.title" :text="empresa.text" :url="empresa.url" />
        </div><!-- grid -->
      </div><!-- container -->
    </div><!-- home__empresas -->
  </div><!-- home -->
</template>

<script setup>
  import Slider from '../components/Slider.vue';
  import IconBox from '../components/IconBox.vue';
  import useHome from '../../composables/useHome';
  
  const { personas, empresas } = useHome();
</script>