<template>
    <div class="app-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="~/assets/img/background-app.svg" class="img-background" alt="">
                    <img src="~/assets/img/app.svg" alt="" class="img-app">
                </div>
                <div class="col-md-6 text-left">
                    <div class="app-title">
                        Todo en tu app
                    </div>
                    <div class="text-special">
                        Puedes ver tus viajes, administrar tu póliza <br>
                        y cancelar en cualquier momento
                    </div>
                    <div class="app-subtitle">
                        Prevención
                    </div>
                    <div class="prev-text">
                        Te motivamos a conducir de forma más segura. Recibirás recomendaciones para prevenir accidentes.
                    </div>
                    <div class="app-subtitle">
                        Seguro divertido
                    </div>
                    <div class="prev-text">
                        Revisa tus viajes y hábitos de manejo. Compite con otros conductores de Gari y recibe descuentos si eres de los mejores conductores
                    </div>
                    <div class="app-subtitle">
                        Fácil, desde tu app
                    </div>
                    <div class="prev-text">
                        Reporta siniestros, chatea con nuestros representantes o cancela tu póliza desde tu app
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .app-section{
        margin-top: 200px;
    }
    .img-background{
        position: absolute;
        left: -190px;
        top: -400px;
        z-index: -1;
        opacity: 0.6;
    }
    .img-app{
        position: relative;
    }
    .app-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */

        margin-top: 150px;

        color: #4A25AA;
    }
    .text-special{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;

        color: #282828;
        margin-top: 20px;
    }
    .prev-text{
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .app-subtitle{
        margin-top: 20px;
    }
</style>