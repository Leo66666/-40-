<template>
  <div class="swiper-slide home-page bg swiper-no-swiping">
    <!-- 背景层 -->
    <img swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="0s" class="bg-box ani bounceIn" src="../../../static/images/bg-box.png" alt="">
    <img src="../../../static/images/bg-bot.png" alt="" class="bg-bot">

    <img swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" swiper-animate-delay="0.5s" src="../../../static/images/home-book.png" alt="" class="home-book ani  bounceInRight">
    <img swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="1.5s"  src="../../../static/images/home-title1.png" alt="" class="home-title1 ani fadeInUp">       
    <img swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="2s"  src="../../../static/images/home-title2.png" alt="" class="home-title2 ani fadeInDown">       

    <div class="home-title-rounds">
        <img swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="2s" class="home-title3 ani home-title-round fadeInRight" src="../../../static/images/home-title3.png" alt="">
        <img swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="2.5s" class="home-title4 ani home-title-round fadeInRight" src="../../../static/images/home-title4.png" alt="">
        <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="2.5s" class="home-title5 ani home-title-round fadeInLeft" src="../../../static/images/home-title5.png" alt="">
        <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="2s" class="home-title6 ani home-title-round fadeInLeft" src="../../../static/images/home-title6.png" alt="">
    </div>

    <img swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="3s"  src="../../../static/images/hoem-slogan.png" alt="" class="home-slogan ani fadeInUp">
    <p swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="3.5s" class="home-content ani fadeIn">2018年12月18日，庆祝改革开放40周年大会在人民大会堂举行。习近平总书记出席大会并发表重要讲话。关于改革开放，习近平在讲话中作了哪些重要论述？让我们一起来学习。</p>
    <router-link swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="3.5s" to="/enter" class="home-start ani fadeInDown"></router-link>

  </div>
</template>
<script>
export default {

};
</script>
<style>
    .home-book{
        width:2.34rem ;
        position: absolute;
        right: 0.8rem;
        top:0.9rem
    }
    .home-title1{
        width: 5.786rem;
        position: absolute;
        top: 2.53rem;
        left: 50%;
        margin-left: -2.893rem
    }
    .home-title2{
        width: 5.6rem;
        position: absolute;
        top: 3.73rem;
        left: 50%;
        margin-left: -2.8rem
    }
    .home-title-rounds{
        width: 5.6rem;
        position: absolute;
        top: 5.2rem;
        left: 50%;
        margin-left: -2.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .home-title-round{
        width: 1.253rem;
    }
    .home-slogan{
        width: 3.84rem;
        position: absolute;
        left: 50%;
        top: 7.1rem;
        margin-left: -1.92rem;
    }
    .home-content{
        width: 80%;
        font-size: 12px;
        text-indent: 2em;
        position: absolute;
        left: 50%;
        top: 9rem;
        margin-left: -40%;
        line-height: 2;
    }
    .home-start{
        width: 3.84rem;
        height: 1.52rem;
        display: block;
        background: url("../../../static/images/home-btn.png")no-repeat center/100%;
        position: absolute;
        top: 12.5rem;
        left: 50%;
        margin-left: -1.92rem
    }
</style>
