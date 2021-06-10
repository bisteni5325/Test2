<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse">
                <img src="~/assets/img/hamburger.svg" class="img-fluid" alt="">
            </b-navbar-toggle>
            <b-navbar-brand href="#">
                <img src="~/assets/img/Gari-Logo.svg" class="img-fluid" alt="">
            </b-navbar-brand>

            <b-navbar-toggle>
                <b-button variant="primary" class="cot-head" pill>Cotizar</b-button>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto nv">
                <b-navbar-nav>
                    <b-nav-item href="#beneficios">Inicio</b-nav-item>
                    <b-nav-item href="#planes">¿Cómo funciona?</b-nav-item>
                    <b-nav-item href="#">Preguntas frecuentes</b-nav-item>
                    <b-nav-item class="color-red" href="#">Iniciar sesión</b-nav-item>
                    
                        <b-button variant="primary" pill>Cotizar mi seguro</b-button>
                    
                </b-navbar-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<style scoped>
    .bg-info{
        background-color: rgba(255, 255, 255, 0.95) !important;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    }
    .navbar-brand {
        padding-left: 90px;
    }
    .navbar-collapse {
        padding-right: 90px;
    }
    .navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-nav .nav-link:hover{
        color: #282828;
        font-weight: 500;
        font-size: 16px;
    }
    .color-red a {
        color: #F20C49 !important;
    }
    .btn-primary{
        width: 206px;
        height: 44px;
    }
    .cot-head{
        width: 100px;
    }
    @media (max-width: 768px) {
        .navbar-brand {
            padding-left: 0px;
            margin-left: -30%;
        }
     }
</style>
