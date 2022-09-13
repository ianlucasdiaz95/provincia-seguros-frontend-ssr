<template>
  <div class="confirm">
    <div v-if="data.name && data.last_name && data.email && data.phone && data.document_number" class="confirm__content container">
      <div class="titleBlock -center -small">
        <h1 class="titleBlock__title">Confirmar datos</h1>
        <p class="titleBlock__subtitle">Verifique que los datos sean correctos antes de continuar</p>
      </div>

      <div class="data">
        <div class="data__items">
          <p class="data__item">
            <strong>Nombre: </strong> {{data.name}}
          </p>
          <p class="data__item">
            <strong>Apellido: </strong> {{data.last_name}}
          </p>
          <p class="data__item">
            <strong>Correo electrónico: </strong> {{data.email}}
          </p>
          <p class="data__item">
            <strong>Teléfono: </strong> {{data.phone}}
          </p>
          <p class="data__item">
            <strong>Número de documento ({{data.document_type.toUpperCase()}}): </strong> {{data.document_number}}
          </p>
        </div><!-- data__items -->
        <div class="data__actions">
          <RouterLink class="button -alt" to="/form">Modificar solicitud</RouterLink>
          <button @click="submitData" class="button">
            <template v-if="!isLoading">Confirmar solicitud</template>
            <template v-else >Cargando...</template>
          </button>
        </div>
        
      </div><!-- data -->
    </div><!-- confirm__content -->
    <div v-else class="confirm__content container">
      <div class="titleBlock -center -small">
        <h1 class="titleBlock__title">Parece que hubo un error al mostrar la información</h1>
        <p class="titleBlock__subtitle">Por favor complete los campos correctamente en el formulario de registro y vuelva a intentar.</p>
        <div class="titleBlock__actions">
          <RouterLink class="button" to="/form">Ir al formulario</RouterLink>
        </div>
      </div>
    </div>
  </div><!-- confirm -->
</template>

<script setup>
  import { computed, ref} from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router'

  const store = useStore();
  const router = useRouter();

  const data = computed(() => store.state.form);
  const isLoading = ref(false);

  const submitData = async () => {
    try {
      isLoading.value = true;
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(data.value)
      })
      isLoading.value = false;

      if(response.ok){
        router.push({
          name: 'Success'
        })
      }

    } catch (error) {

      console.log(error.message);

    }
  }
  
</script>
