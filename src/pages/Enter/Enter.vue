<template>
    <div class="swiper-slide enter-page bg">
        <!-- 背景层 -->
        <img swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="0s" class="bg-box ani bounceIn" src="../../../static/images/bg-box.png" alt="">
        <img  src="../../../static/images/bg-bot.png" alt="" class="bg-bot">

        <img swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="0.5s" src="../../../static/images/enter-title.png" alt="" class="enter-title ani fadeInDown">
        <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="1s" src="../../../static/images/enter-title1.png" alt="" class="enter-title2 ani fadeInLeft">
        <img swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1.5s" src="../../../static/images/enter-title2.png" alt="" class="enter-title1 ani fadeInRight">
    </div>
</template>
<script>
    export default{

    }
</script>
<style>
    .enter-title{
        width: 4.693rem;
        position: absolute;
        left: 50%;
        top: 1.84rem;
        margin-left:-2.347rem;
        animation-duration: 2s; 
    }
    .enter-title1{
        width: 4.8rem;
        position: absolute;
        left: 50%;
        top: 7.81rem;
        margin-left:-2.4rem; 
        animation-duration: 2s; 
    }
    .enter-title2{
        width: 6.96rem;
        position: absolute;
        left: 50%;
        top: 6.66rem;
        margin-left:-3.48rem; 
        animation-duration: 2s; 
    }
</style>