<template>
    <div class="faq-section">
        <div class="container-fluid text-center">
            <div class="section-title">
                Preguntas frecuentes
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img src="~/assets/img/faqs.svg" class="img-general" alt="">        
                </div>
                <div class="col-md-5 text-left">
                    <div class="accordion" role="tablist" v-for="faq in faqs" :key="faq.title">
                        <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab" @click="faq.id = !faq.id">
                            {{faq.title}}
                        </b-card-header>
                        <b-collapse v-model="faq.id" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text>{{ faq.text }}</b-card-text>
                            </b-card-body>
                        </b-collapse>
                        </b-card>
                    </div>
                    <b-btn variant="primary-outline" pill>
                        Ver todas las preguntas
                    </b-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            faqs: [
                {
                    id: '1',
                    title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: '2',
                    title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: '3',
                    title: '¿Cómo cotizo en Gari?',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .section-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;
        /* identical to box height, or 125% */

        text-align: center;
        color: #4A25AA;
        margin-bottom: 65px;
    }
    .card-header{
        background: transparent;
        background: rgba(192, 190, 240, 0.2);
        border-radius: 4px;
        height: 50px;
        padding-top: 10px !important;
        padding-left: 15px !important;
        cursor: pointer;
    }
    .not-collapsed{
        color: #4A25AA;
        font-size: 16px;
        line-height: 23px;
    }
    .btn-primary-outline{
        /* Primary color */

        border: 1px solid #F20C49;
        box-sizing: border-box;
        border-radius: 34px;
        margin-top: 20px;
        color: #F20C49;
    }
</style>