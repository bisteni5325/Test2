<template>
    <div class="general-section mt-5">
        <div class="container-fluid">
            <img src="~/assets/img/left.svg" class="img-left" alt="">
            <img src="~/assets/img/right.svg" class="img-right" alt="">
            <div class="row info-container">
                <div class="col-md-4">
                    <img src="~/assets/img/general-seguros.svg" class="img-general img-fluid" v-animate.repeat="'fade-in-up'" alt="">        
                </div>
                <div class="col-md-8 text-section">
                    <div class="general-title " v-animate.repeat="'fade-in-right'">
                        ¡Gari está respaldado por una de las mejores aseguradoras del país!
                    </div>
                    <p v-animate.repeat="'fade-in-left'">
                        Cambiar al texto de abajo. Todas las pólizas de Gari están suscritas por General de Seguros, por lo que la solidez y <br> respaldo de nuestro producto está garantizado.  <br><br>

                        General de Seguros es una de las mejores aseguradoras mexicanas y cuenta con más de 50 años de experiencia en el <br> cuidado de las personas y empresas.  <br><br>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.info-container{
    padding-top: 100px;
    margin-bottom: 150px;
    margin-top: 50px;
}
.container-fluid{
    padding-left: 0px;
}
    .img-left{
        position: absolute;
    }
    .img-right{
        position: absolute;
        right: 0px;
    }
    .wrap{
        position: relative;
        right: -1200px;
    }
    .general-title{
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
        /* identical to box height, or 100% */

        color: #282828;
    }
    .text-section p{
        margin-top: 30px;
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;

        /* Text dark */

        color: #282828;
    }
    .img-general{
        position: absolute;
        left: 180px;
        margin-top: 40px;
    }

    @media (max-width: 576px) { 
        
    }


    @media (max-width: 768px) {
        .img-left, .img-right {
            display: none;
        }
        .img-general{
            left: 24%;
        }
        .text-section{
            margin-top: 150px;
        }
        .container-fluid{
            padding-left: 15px;
        }
        .info-container{
            padding-top: 0px !important;
            margin-bottom: 0px;
        }
     }


    @media (min-width: 992px) {

     }
</style>