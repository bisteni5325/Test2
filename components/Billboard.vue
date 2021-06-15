<template>
    <div class="billboard-section text-center">
        <div class="billboard-title animate__animated" v-animate.repeat="'animate__fadeInRight'">
            Un seguro justo y divertido
        </div>
        <div class="billboard-tag animate__animated" v-animate.repeat="'animate__fadeInLeft'">Seguro basado en cuanto y como conduces</div>
        
        <b-btn variant="primary animate__animated" v-animate.repeat="'animate__fadeInUp'" fill>Cotizar ahora</b-btn>
    </div>
</template>
<style scoped>
    .billboard-section{
        background-image: url('~/assets/img/billboard.png');
        background-repeat: no-repeat;
        background-size: cover;
        height: max-content;
    }
    .billboard-title{
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 69px;
        color: #4A25AA;
        padding-top: 130px;
    }
    .billboard-tag{
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        color: #282828;
    }
    .btn-primary{
        width: 188px;
        height: 44px;
        background: #F20C49;
        border-radius: 30px;
        margin-top: 70px;
        margin-bottom: 250px;
    }

    @media (max-width: 576px) { 
       .billboard-section{
            background-image: url('~/assets/img/billboard.png');
            background-repeat: no-repeat;
            background-size:contain;
            height: max-content;
        }
    }

    @media (max-width: 768px) {
        .billboard-title{
            font-weight: 500;
            font-size: 32px;
            line-height: 40px;
            padding-top: 40px;
        }
        .billboard-tag{
            font-weight: 500;
            font-size: 16px;
            line-height: 40px;
        }
        .btn-primary{
            width: 188px;
            height: 44px;
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }

    @media (min-width: 992px) {

    }

    .animate {
    transition-delay: .5s;
    transition-duration: .6s;
    transition-timing-function: ease-in;
    }

    .slide-up {
        transform: translateY(0);
    }

    .slide-up.animate-active {
        transform: translateY(-100px);
    }

    .fade-in-scroll {
        opacity: 0;
    }
    .fade-in-scroll.animate-active {
        display: block;
        opacity: 1;
    }
</style>