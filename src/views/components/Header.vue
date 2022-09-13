<template>
    <header class="header">
        <div class="header__content container">
            <div class="header__logo">
                <RouterLink to="/">
                    <img src="../../assets/img/logo.png" alt="Provincia Seguros">
                </RouterLink>
            </div><!-- header__logo -->
            <div class="header__nav">
                <nav class="nav">
                    <RouterLink class="nav__link" to="/">Home</RouterLink>
                    <RouterLink class="nav__link -highlighted" to="/form">Formulario</RouterLink>
                </nav><!-- nav -->
            </div><!-- header__nav -->
        </div><!-- header__content -->
    </header><!-- header -->
</template>

<script setup>

</script>