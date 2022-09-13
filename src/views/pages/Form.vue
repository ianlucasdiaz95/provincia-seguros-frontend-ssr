<template>
  <div class="register">
    <div class="register__content container">

      <div class="titleBlock -center -small">
        <h1 class="titleBlock__title">
          Formulario de registro
        </h1>
        <p class="titleBlock__subtitle">
          Complete los siguientes campos para registrarse en nuestra plataforma.
        </p>
      </div>
      <div class="register__form">
        <form class="form" @submit.prevent="onSubmit" action="">
          <div class="form__row -two">
            <div class="form__input">
              <label for="name">
                Nombre
              </label>
              <input type="text" v-model="form.name" placeholder="Susana" name="name" id="">
              <span v-if="validations?.name?.error" class="form__error">{{validations?.name?.message}}</span>
            </div><!-- form__input -->

            <div class="form__input">
              <label for="last_name">
                Apellido
              </label>
              <input type="text" v-model="form.last_name" placeholder="Romero" name="last_name" id="">
              <span v-if="validations?.last_name?.error" class="form__error">{{validations?.last_name?.message}}</span>
            </div><!-- form__input -->
          </div><!-- form__row -->

          <div class="form__row -two">
            <div class="form__input">
              <label for="phone">
                Celular
              </label>
              <input type="text" v-model="form.phone" placeholder="+54 11 4325 8825" name="phone" id="">
              <span v-if="validations?.phone?.error" class="form__error">{{validations?.phone?.message}}</span>
            </div><!-- form__input -->

            <div class="form__input">
              <label for="email">
                Email
              </label>
              <input type="email" v-model="form.email" placeholder="susanaromero@gmail.com" name="email" id="">
              <span v-if="validations?.email?.error" class="form__error">{{validations?.email?.message}}</span>
            </div><!-- form__input -->
          </div><!-- form__row -->

          <div class="form__row -two">
            <div class="form__input -dni">
              <label for="document_number">
                Ingrese su documento (DNI o CUIT)
              </label>
              <div class="form__inputGroup">
                <select v-model="form.document_type" name="document_type" id="">
                  <option value="dni" selected>DNI</option>
                  <option value="cuit">CUIT</option>
                </select>
                <input type="number" v-model="form.document_number" placeholder="23475112" name="document_number" id="">
              </div>
              <span v-if="validations?.document_number?.error" class="form__error">{{validations?.document_number?.message}}</span>
            </div><!-- form__input -->
          </div><!-- form__row -->

          <div class="form__submit">
            <button type="submit" class="button">Continuar</button>
          </div>
        </form><!-- form -->
      </div><!-- register__form -->
    </div><!-- register__content -->
  </div><!-- register -->
</template>

<script setup>

  import { ref } from 'vue';
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import useValidations from '../../composables/useValidations';

  const store = useStore();
  const router = useRouter();

  const {
    validateName,
    validateLastName,
    validateEmail,
    validatePhone,
    validateDocumentNumber,
    validations,
    isValid
  } = useValidations();

  let form = ref(store.state.form);

  const onSubmit = () => {

    //Run form validations
    isValid.value = true;
    validateName(form.value.name);
    validateLastName(form.value.last_name);
    validateEmail(form.value.email);
    validatePhone(form.value.phone);
    validateDocumentNumber(form.value.document_type, form.value.document_number);

    if(!isValid.value){
      return;
    }

    //If everything is ok we update the store
    store.dispatch('setForm',form.value);

    //Redirect to Confirmation Page
    router.push({
      name: 'Confirm'
    })

  }

</script>
