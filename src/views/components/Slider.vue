<template>
    <div class="slider">
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            loop
            navigation
            
        >
            <SwiperSlide v-for="(slide,index) in slides" :key="slide.image">
                <div :style="{'background-image': 'url('+ slide.image +')'}" class="slider__slide">
                    <div class="slider__slideContent">
                        <h1 v-if="index == 0">{{slide.title}}</h1>
                        <h2 v-else >{{slide.title}}</h2>
                        <p>{{slide.subtitle}}</p>
                        <a class="button" :href="slide.url">{{slide.button}}</a>
                    </div><!-- slider__slideContent -->
                </div><!-- slider__slide -->
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
    import imgUrl1 from '../../assets/img/slide-1.jpg'
    import imgUrl2 from '../../assets/img/slide-2.jpg'
    import imgUrl3 from '../../assets/img/slide-3.jpg'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';

    let modules = [Navigation];

    let slides = [
        {
            image: imgUrl1,
            title: 'Web clientes',
            subtitle: 'Nuevo diseño y más autogestión',
            button: 'Click acá',
            url: ''
        },
        {
            image: imgUrl2,
            title: 'Cotiza y contrata tu seguro',
            subtitle: 'Asegura tu auto o moto fácil y con beneficios',
            button: 'Cotizá acá',
            url: ''
        },
        {
            image: imgUrl3,
            title: 'Asegura tu hogar de manera fácil y rápida',
            subtitle: 'Contrata el seguro perfecto para vos',
            button: 'Cotizá acá',
            url: ''
        }
    ]
</script>