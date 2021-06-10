<template>
    <div class="billboard-section text-center">
        <div class="billboard-title">
            Un seguro justo y divertido
        </div>
        <div class="billboard-tag">Seguro basado en cuanto y como conduces</div>
        
        <b-btn variant="primary" fill>Cotizar ahora</b-btn>
    </div>
</template>
<style scoped>
    .billboard-section{
        height: 100vh;
        background-image: url('~/assets/img/prueba-fondo.svg');
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
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

        padding-top: 16px;
    }
    .btn-primary{
        width: 188px;
        height: 44px;
        margin-top: 70px;
    }
</style>