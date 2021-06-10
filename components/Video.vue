<template>
    <div class="video-section text-center">
        <div class="video-container">
            <img src="~/assets/img/video.svg" alt="">
        </div>
    </div>
</template>
<style scoped>
    .video-section{
        min-height: 800px;
        background: conic-gradient(from 189.41deg at 56.22% 28.4%, rgba(8, 191, 217, 0) -41.05deg, rgba(131, 236, 195, 0) 23.2deg, rgba(153, 206, 213, 0.5) 36.74deg, rgba(175, 175, 232, 0.7) 89.55deg, #AFAFE8 200.48deg, rgba(175, 175, 232, 0.7) 240.14deg, rgba(8, 191, 217, 0) 318.95deg, rgba(131, 236, 195, 0) 383.2deg);
        padding-top: 110px;
    }
    .video-container{
        width: 70%;
        height: 470px;
        background: #F6F6F6;
        border-radius: 25px;
        margin-left: 20%;
    }
    .video-container img{
        vertical-align: middle;
        margin-top: 200px;
    }
    @media (max-width: 576px) { 
        .video-container{
            width: 70%;
            height: 20%;
            background: #F6F6F6;
            border-radius: 25px;
            margin-left: 20%;
        }
        .video-container img{
            vertical-align: middle;
            margin-top: 20%;
            padding-bottom: 20%;
        }
        .video-section{
            min-height: 400px;
        }
    }

    @media (max-width: 768px) {
        .video-container{
            width: 70%;
            height: 20%;
            background: #F6F6F6;
            border-radius: 25px;
            margin-left: 20%;
        }
        .video-container img{
            vertical-align: middle;
            margin-top: 20%;
            padding-bottom: 20%;
        }
        .video-section{
            min-height: 400px;
        }    
    }


    @media (min-width: 992px) {

     }
</style>