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
                             <div class="items-collapse">
                                <details class="collapse-item" v-for="item in faq.items" :key="item.title">
                                    <summary class="title">{{item.title}}</summary>
                                    <p class="description">
                                        {{item.description}}
                                    </p>
                                </details>
                            </div>
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
    details summary {
	 list-style: inside none;
    }
    .items-collapse .collapse-item {
        --sp-sm: 1.8rem;
        --sp-md: 25px;
         width: 100%;
        
        margin: 0 auto;
        border-radius: 4px;
        background: rgba(192, 190, 240, 0.2);
        transition: box-shadow 250ms;
        will-change: box-shadow;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .items-collapse .collapse-item .title {
        position: relative;
        padding: var(--sp-md);
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        user-select: none;
        cursor: pointer;
    }
    .items-collapse .collapse-item .title::after {
        content: "→";
        position: absolute;
        right: var(--sp-md);
        top: 50%;
        transform: translateY(-50%);
    }
    .items-collapse .collapse-item[open] .title::after {
        content: "↓";
    }
    .items-collapse .collapse-item .description {
        padding: var(--sp-md);
        margin: 0;
        font-size: 14px;
        line-height: 20px;
        background-color: #FFFFFF;
        border: 0.1rem solid #fafafa;
    }
    .items-collapse .collapse-item .description:not(:first-of-type) {
        padding-top: 0;
    }
</style>