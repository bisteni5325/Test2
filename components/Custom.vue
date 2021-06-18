<template>
    <div class="custom-app-section">
        <div class="custom-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 text-section offset-md-6">
                    <div class="custom-title" v-animate.repeat="'fade-in-right'">Personalizado para ti</div>
                    <div class="goods" v-animate.repeat="'fade-in-left'">Los buenos ahorran más</div>
                    <div class="text" v-animate.repeat="'fade-in-left'">Estos son sólo algunos de los muchos conductores que se benefician de Gari. <br> ¡Lo más probable es que tú también lo hagas!</div>

                    <div class="cta-btn" v-animate.repeat="'fade-in-up'">
                        <b-btn variant="primary" pill>
                        Cotizar ahora
                    </b-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="app-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-left offset-md-6 text-container">
                    <div class="app-title animate__animated" v-animate.repeat="'fade-in-right'">
                        Todo en tu app
                    </div>
                    <div class="text-special animate__animated" v-animate.repeat="'fade-in-left'">
                        Puedes ver tus viajes, administrar tu póliza
                        y cancelar en cualquier momento
                    </div>
                    <div class="app-subtitle animate__animated" v-animate.repeat="'fade-in-up'">
                        Prevención
                    </div>
                    <div class="prev-text animate__animated" v-animate.repeat="'fade-in-up'">
                        Te motivamos a conducir de forma más segura. Recibirás recomendaciones para prevenir accidentes.
                    </div>
                    <div class="app-subtitle animate__animated" v-animate.repeat="'fade-in-up'">
                        Seguro divertido
                    </div>
                    <div class="prev-text animate__animated" v-animate.repeat="'fade-in-up'">
                        Revisa tus viajes y hábitos de manejo. Compite con otros conductores de Gari y recibe descuentos si eres de los mejores conductores
                    </div>
                    <div class="app-subtitle animate__animated" v-animate.repeat="'fade-in-up'">
                        Fácil, desde tu app
                    </div>
                    <div class="prev-text animate__animated" v-animate.repeat="'fade-in-up'">
                        Reporta siniestros, chatea con nuestros representantes o cancela tu póliza desde tu app
                    </div>
                    <img src="~/assets/img/app-movil.png" class="img-fluid app-mov" alt="">

                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.app-mov{
    display: none;
}
.custom-app-section{
    background-image: url('~/assets/img/personas-desktop.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
    .text-container{
        margin-bottom: 490px;
    }
    .custom-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */

        color: #4A25AA;
    }
    .text-section{
        margin-top: 150px;
    }
    .goods{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;

        color: #282828;
        margin-top: 20px;
    }
    .text{
        /* Label */

        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .text{
        margin-top: 18px;
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .btn-primary{
        margin-top: 65px;
        width: 188px;
        height: 44px;
    }

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
    .container-fluid{
        padding-right: 15px;
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
    @media (max-width: 576px) { 
        .custom-app-section{
            background-image: url('~/assets/img/personas-movil.png');
            background-repeat: no-repeat;
            background-size: 100%;
        }
    }


    @media (max-width: 768px) {
        .app-subtitle, .prev-text{
            display: none;
        }
        .app-title{
            margin-top: 50px;
        }
        .app-section{
            margin-top: 0px;
        }
        .text-section{
            margin-top: 400px;
        }
        .cta-btn{
            text-align: center;
        }
            .text-container{
                margin-bottom: 10px;
            }
            .text-section {
                margin-top: 500px;
            }
            .app-mov{
                display: inherit;
            }
     }


    @media (min-width: 992px) {

     }
</style>