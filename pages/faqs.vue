<template>
    <div class="faqs-page">
        <Navbar />  
        <img src="~/assets/img/faqs-right.svg" class="faqs-right" alt="">
            <div class="container text-center">
                <h2 class="section-title">¿Tienes dudas? Encuentra tus respuestas aquí</h2>

                <b-input-group class="mt-5">
                <template #append>
                <b-input-group-text>
                <img src="~/assets/img/search.svg" alt="">    
                </b-input-group-text>
                </template>
                <b-form-input size="lg" placeholder="Ingresa una palabra"></b-form-input>
            </b-input-group>

            <div class="tabs-content text-left">
                <b-tabs content-class="mt-3" fill>

                    <b-tab v-for="faq in faqs" :key="faq.item" :title="faq.title" :active="faq.title == 'Gari'">
                        <h4 class="questions-title">Preguntas acerca de Gari</h4>
                        <div class="accordion" role="tablist" v-for="item in faq.items" :key="item.title">
                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab" @click="item.id = !item.id">
                                <div class="accordion-title">{{item.title}}</div>
                            </b-card-header>
                            <b-collapse v-model="item.id" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>{{ item.description }}</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>
                        </div>
                    </b-tab>
                    
                </b-tabs>
            </div>            

            </div>
        <img src="~/assets/img/faqs-left.svg" class="faqs-left" alt="">
        <Footer />
    </div>
</template>
<router>
{
  alias: '/preguntas-frecuentes'
}
</router>
<script>
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    components: { NavBar, Footer },
    data () 
    {
        return {
            faqs:[
                {
                    title: 'Gari',
                    items: [
                        {
                            id:'1',
                            title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'2',
                            title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'3',
                            title: '¿Cómo cotizo en Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'4',
                            title: '¿Qué necesito para sacar una poliza con Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        }
                    ]
                },
                {
                    id:'1',
                    title: 'Cálculo de precio',
                    items: [
                        {
                            id:'5',
                            title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'6',
                            title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'7',
                            title: '¿Cómo cotizo en Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'8',
                            title: '¿Qué necesito para sacar una poliza con Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        }
                    ]
                },
                {
                    title: 'Acerca del seguro',
                    items: [
                        {
                           id:'9',
                            title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'10',
                            title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'11',
                            title: '¿Cómo cotizo en Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'12',
                            title: '¿Qué necesito para sacar una poliza con Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        }
                    ]
                },
                {
                    title: 'Acerca de la app',
                    items: [
                        {
                            id:'12',
                            title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'13',
                            title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'14',
                            title: '¿Cómo cotizo en Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'15',
                            title: '¿Qué necesito para sacar una poliza con Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        }
                    ]
                },
                {
                    title: 'En caso de siniestro/robo',
                    items: [
                        {
                            id:'16',
                            title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'17',
                            title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'18',
                            title: '¿Cómo cotizo en Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'19',
                            title: '¿Qué necesito para sacar una poliza con Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        }
                    ]
                },
                {
                    title: 'Pago',
                    items: [
                        {
                            id:'20',
                            title: '¿Que ventajas tengo con Gari que no tengo con un seguro tradicional?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'21',
                            title: '¿Qué tipo de vehículos aseguran? ¿Puedo asegurar mi motocicleta?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'22',
                            title: '¿Cómo cotizo en Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        },
                        {
                            id:'23',
                            title: '¿Qué necesito para sacar una poliza con Gari?',
                            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit rerum repellendus, illum sequi est ipsum maiores cumque quas magnam delectus accusamus. Laboriosam laudantium, similique ullam nam quos quia voluptates?'
                        }
                    ]
                },
            ]
        }
    }
}
</script>
<style>
    .faqs-page .faqs-right{
        position: absolute;
        right: 0;
        z-index: -1;
    }
    .faqs-page .faqs-left{
       vertical-align: bottom;
        z-index: -1;
    }
    .faqs-page .section-title{
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 40px;

        color: #4A25AA;
        padding-top: 95px;
    }
    .faqs-page .questions-title{
        font-size: 24px;
        line-height: 40px;
        color: #282828;
        margin-top: 50px;
    }
    .faqs-page .form-control{
        border: none;
        border-left: 1px solid #ced4da;
        border-top: 1px solid #ced4da;
        border-bottom: 1px solid #ced4da;
        background-color: #EEEEEE;
    }
    .faqs-page .input-group-text{
        background: transparent;
        border: none;
        border-right: 1px solid #ced4da;
        border-top: 1px solid #ced4da;
        border-bottom: 1px solid #ced4da;
        background-color: #EEEEEE;
    }
    .faqs-page .tabs-content{
        margin-top: 55px;
    }
    .faqs-page .nav-tabs{
        border-bottom: none !important;
    }
    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        background-color: transparent !important;
        border: none !important;
        color: #F20C49 !important;
        border-bottom: 1px solid #F20C49 !important;
    }
    .nav-tabs .nav-link{
        color: black;
    }
    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus{
        border: none;
    }
    .faqs-page .card-header{
        background: transparent;
        background: rgba(192, 190, 240, 0.2);
        border-radius: 4px;
        height: 50px;
        padding-top: 10px !important;
        padding-left: 15px !important;
        cursor: pointer;
    }
    .faqs-page .not-collapsed{
        color: #4A25AA;
        font-size: 16px;
        line-height: 23px;
    }
    .faqs-page .accordion > .card > .card-header {
        height: 85px;
    }
    .faqs-page .accordion-title{
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        padding: 20px;
    }
    .faqs-page .accordion{
        margin-bottom: 10px;
    }
</style>