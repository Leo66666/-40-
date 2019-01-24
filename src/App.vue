<template>
  <div id="app">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide home-page bg swiper-no-swiping">
            <!-- 背景层 -->
            <img swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="0s" class="bg-box ani bounceIn" src="../static/images/bg-box.png" alt="">
            <img src="../static/images/bg-bot.png" alt="" class="bg-bot">

            <img swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" swiper-animate-delay="0.5s" src="../static/images/home-book.png" alt="" class="home-book ani  bounceInRight">
            <img swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="1.5s"  src="../static/images/home-title1.png" alt="" class="home-title1 ani fadeInUp">       
            <img swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="2s"  src="../static/images/home-title2.png" alt="" class="home-title2 ani fadeInDown">       


            <div class="home-title-rounds">
                <img swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="2s" class="home-title3 ani home-title-round fadeInRight" src="../static/images/home-title3.png" alt="">
                <img swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="2.5s" class="home-title4 ani home-title-round fadeInRight" src="../static/images/home-title4.png" alt="">
                <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="2.5s" class="home-title5 ani home-title-round fadeInLeft" src="../static/images/home-title5.png" alt="">
                <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="2s" class="home-title6 ani home-title-round fadeInLeft" src="../static/images/home-title6.png" alt="">
            </div>
            <p swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="2s" class="ani home-version">（第二期）</p>

            <img swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="3s"  src="../static/images/hoem-slogan.png" alt="" class="home-slogan ani fadeInUp">
            <p swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="3.5s" class="home-content ani fadeIn">2018年12月18日，庆祝改革开放40周年大会在人民大会堂举行。习近平总书记出席大会并发表重要讲话。关于改革开放，习近平在讲话中作出了哪些重要论述？羊城手机学堂特别制作系列“学习笔记”，今天推出第二期，一起来学习！</p>
            <span @click='goEnter' swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="3.5s" to="/enter" class="home-start ani fadeInDown"></span>

        </div>
        <div class="swiper-slide enter-page bg">
            <!-- 背景层 -->
            <img swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="0s" class="bg-box ani bounceIn" src="../static/images/bg-box.png" alt="">
            <img  src="../static/images/bg-bot.png" alt="" class="bg-bot">

            <img swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="0.5s" src="../static/images/enter-title.png" alt="" class="enter-title ani fadeInDown">
            <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="1s" src="../static/images/enter-title1.png" alt="" class="enter-title2 ani fadeInLeft">
            <img swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1.5s" src="../static/images/enter-title2.png" alt="" class="enter-title1 ani fadeInRight">
        </div>
        <div :data-index='index' v-for="(item,index) in testLists" class="swiper-slide test-page bg">
            <!-- 背景层 -->
            <img swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="0s" class="bg-box ani bounceIn" src="../static/images/bg-box.png" alt="">
            <img src="../static/images/bg-bot.png" alt="" class="bg-bot">
            <img src="../static/images/hand.png" alt="" class="hand">
            <img swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="0.5s" src="../static/images/test-title.png" alt="" class="test-title ani fadeInDown">
            <img swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="1s" src="../static/images/test-line.png" alt="" class="test-line ani fadeInUp">
            <p swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="1.5s" v-show="!item.isShow" v-html="item.content" :class="{font14:index == 7}" :data-index='index' class="test-content ani fadeInLeft"></p>
            <p v-show="item.isShow" v-html="item.answer" :class="{font14:index == 7}" :data-index='index' class="test-content"></p>
            <a swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="2s" @click="showAnswer($event)" href="javascript:void(0)" class="test-btn ani fadeInDown"></a>
        </div>
        <div class="swiper-slide end-page bg swiper-no-swiping">
          <!-- 背景层 -->
          <img swiper-animate-effect="bounceIn" swiper-animate-duration="2s" swiper-animate-delay="0s" class="bg-box ani bounceIn" src="../static/images/bg-box.png" alt="">
          <img src="../static/images/bg-bot.png" alt="" class="bg-bot">

          <div class="end-box">
            <p swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="0s"  class="end-content1 end-content ani fadeInLeft">信仰、信念、信心，任何时候都至关重要。无论过去、现在还是将来，对马克思主义的信仰，对中国特色社会主义的信念，对实现中华民族伟大复兴中国梦的信心，都是指引和支撑中国人民站起来、富起来、强起来的强大精神力量。</p>
            <img @click="back" swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="2.5s" src="../static/images/back.png" alt="" class="back ani">
            <div class="clear"></div>
            <img swiper-animate-effect="fadeIn" swiper-animate-duration="2s" swiper-animate-delay="0.5s"   src="../static/images/end-title.png" alt="" class="end-title ani fadeIn">
            <p swiper-animate-effect="fadeInDown" swiper-animate-duration="2s" swiper-animate-delay="1s"   class="end-content2 end-content ani fadeInDown">“学习笔记”栏目将继续推出习近平在庆祝改革开放40周年大会上的重要讲话(第三期)，敬请期待！</p>
            <img swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s" swiper-animate-delay="2s"   class="end-code ani fadeInLeft" src="../static/images/code.png" alt="">
            <p swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="2s"   class="end-content end-content4 ani fadeInRight"><strong>羊城手机学堂微信公众号</strong></p>
            <p swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="2s"   class="end-content3 end-content ani fadeInRight">参考资料来源：新华社、人民日报客户端、央视新闻、中国共产党新闻网、中国习观等。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper"

import "../static/css/animate.min.css";
import "swiper/dist/css/swiper.min.css";
import "../static/css/min.css";

export default {
  data(){
    return {
      mySwiper:null,
      testLists:[
        {
          content:`1、40年来，我们始终：<br>
                  <i class="dot"></i>	坚持解放思想、实事求是、与时俱进、求真务实，坚持<span class="line">马克思主义</span>指导地位不动摇，坚持<span class="line">科学社会主义</span>基本原则不动摇。<br>
                  <i class="dot"></i>	坚持以<span class="line">经济建设</span>为中心，不断解放和发展社会生产力。<br>
                  <i class="dot"></i>	坚持中国特色社会主义政治发展道路，不断深化<span class="line">政治体制</span>改革。<br>
                  <i class="dot"></i>	坚持发展社会主义先进文化，加强<span class="line">社会主义精神文明建设。</span>
                   <span class="next-page">（接下页）</span>`,
          answer:`1、40年来，我们始终：<br>
                  <i class="dot"></i>	坚持解放思想、实事求是、与时俱进、求真务实，坚持<span class="line2">马克思主义</span>指导地位不动摇，坚持<span class="line2">科学社会主义</span>基本原则不动摇。<br>
                  <i class="dot"></i>	坚持以<span class="line2">经济建设</span>为中心，不断解放和发展社会生产力。<br>
                  <i class="dot"></i>	坚持中国特色社会主义政治发展道路，不断深化<span class="line2">政治体制</span>改革。<br>
                  <i class="dot"></i>	坚持发展社会主义先进文化，加强<span class="line2">社会主义精神文明建设。</span>
                  <span class="next-page">（接下页）</span>`,
          isShow:false
        },
        {
          content:`<i class="dot"></i>坚持在发展中保障和改善民生。<br>
                  <i class="dot"></i>坚持保护环境和节约资源，坚持推进<span class="line">生态文明建设</span>。<br>
                  <i class="dot"></i>坚持党对军队的绝对领导，不断推进<span class="line">国防和军队现代化</span>。<br>
                  <i class="dot"></i>坚持推进祖国和平统一大业，实施<span class="line">“一国两制”</span>基本方针。<br>
                  <i class="dot"></i>坚持<span class="line">独立自主</span>的和平外交政策。<br>
                  <i class="dot"></i>坚持加强和改善党的领导。
                  `,
          answer:`<i class="dot"></i>坚持在发展中保障和改善民生。<br>
                  <i class="dot"></i>坚持保护环境和节约资源，坚持推进<span class="line2">生态文明建设</span>。<br>
                  <i class="dot"></i>坚持党对军队的绝对领导，不断推进<span class="line2">国防和军队现代化</span>。<br>
                  <i class="dot"></i>坚持推进祖国和平统一大业，实施<span class="line2">“一国两制”</span>基本方针。<br>
                  <i class="dot"></i>坚持<span class="line2">独立自主</span>的和平外交政策。<br>
                  <i class="dot"></i>坚持加强和改善党的领导。 `,
          isShow:false
        },
        {
          content:'2、40年春风化雨、春华秋实，改革开放极大改变了中国的面貌、中华民族的面貌、中国人民的面貌、中国共产党的面貌。中华民族迎来了<span class="line">从站起来、富起来到强起来</span>的伟大飞跃！中国特色社会主义迎来了<span class="line">从创立、发展到完善</span>的伟大飞跃！中国人民迎来了<span class="line">从温饱不足到小康富裕</span>的伟大飞跃！ ',
          answer:'2、40年春风化雨、春华秋实，改革开放极大改变了中国的面貌、中华民族的面貌、中国人民的面貌、中国共产党的面貌。中华民族迎来了<span class="line2">从站起来、富起来到强起来</span>的伟大飞跃！中国特色社会主义迎来了<span class="line2">从创立、发展到完善</span>的伟大飞跃！中国人民迎来了<span class="line2">从温饱不足到小康富裕</span>的伟大飞跃！ ',
          isShow:false
        },
        {
          content:'3、40年来取得的成就不是天上掉下来的，更不是别人恩赐施舍的，而是全党全国各族人民用<span class="line">勤劳、智慧、勇气</span>干出来的！',
          answer:'3、40年来取得的成就不是天上掉下来的，更不是别人恩赐施舍的，而是全党全国各族人民用<span class="line2">勤劳、智慧、勇气</span>干出来的！',
          isShow:false
       },
        {
          content:`4、40年的实践充分证明：<br>
                  <i class="dot"></i>党的十一届三中全会以来我们党团结带领全国各族人民开辟的中国特色社会主义<span class="line">道路、理论、制度、文化</span>是完全正确的，形成的党的<span class="line">基本理论、基本路线、基本方略</span>是完全正确的。<br>
                  <i class="dot"></i>中国发展为广大<span class="line">发展中国家</span>走向现代化提供了成功经验、展现了光明前景，是促进世界<span class="line">和平与发展</span>的强大力量，是中华民族对人类文明进步作出的重大贡献。
                  <span class="next-page">（接下页）</span>`,
          answer:`4、40年的实践充分证明：<br>
                  <i class="dot"></i>党的十一届三中全会以来我们党团结带领全国各族人民开辟的中国特色社会主义<span class="line2">道路、理论、制度、文化</span>是完全正确的，形成的党的<span class="line2">基本理论、基本路线、基本方略</span>是完全正确的。<br>
                  <i class="dot"></i>中国发展为广大<span class="line2">发展中国家</span>走向现代化提供了成功经验、展现了光明前景，是促进世界<span class="line2">和平与发展</span>的强大力量，是中华民族对人类文明进步作出的重大贡献。
                  <span class="next-page">（接下页）</span>`,
          isShow:false
        },
        {
          content:'<i class="dot"></i><span class="line">改革开放</span>是党和人民大踏步赶上时代的重要法宝，是坚持和发展中国特色社会主义的<span class="line">必由之路</span>，是决定当代中国命运的关键一招，也是决定实现<span class="line">“两个一百年”奋斗目标、实现中华民族伟大复兴</span>的关键一招。',
          answer:'<i class="dot"></i><span class="line2">改革开放</span>是党和人民大踏步赶上时代的重要法宝，是坚持和发展中国特色社会主义的<span class="line2">必由之路</span>，是决定当代中国命运的关键一招，也是决定实现<span class="line2">“两个一百年”奋斗目标、实现中华民族伟大复兴</span>的关键一招。',
          isShow:false
        },
        {
          content:`5、改革开放40年宝贵经验的九个“必须坚持”<br>
                  <i class="dot"></i>必须坚持<span class="line">党对一切工作的领导</span>，不断加强和改善党的领导。<br>
                  <i class="dot"></i>必须坚持<span class="line">以人民为中心</span>，不断实现人民对美好生活的向往。<br>
                  <i class="dot"></i>必须坚持<span class="line">马克思主义指导地位</span>，不断推进实践基础上的理论创新。<br>
                  <i class="dot"></i>必须坚持<span class="line">走中国特色社会主义道路</span>，不断坚持和发展中国特色社会主义。
                  <span class="next-page">（接下页）</span>`,
          answer:`5、改革开放40年宝贵经验的九个“必须坚持”<br>
                  <i class="dot"></i>必须坚持<span class="line2">党对一切工作的领导</span>，不断加强和改善党的领导。<br>
                  <i class="dot"></i>必须坚持<span class="line2">以人民为中心</span>，不断实现人民对美好生活的向往。<br>
                  <i class="dot"></i>必须坚持<span class="line2">马克思主义指导地位</span>，不断推进实践基础上的理论创新。<br>
                  <i class="dot"></i>必须坚持<span class="line2">走中国特色社会主义道路</span>，不断坚持和发展中国特色社会主义。
                  <span class="next-page">（接下页）</span>`,
          isShow:false
        },
        {
          content:`<i class="dot"></i>必须坚持<span class="line">完善和发展中国特色社会主义制度</span>，不断发挥和增强我国制度优势。<br>
                  <i class="dot"></i>必须坚持<span class="line">以发展为第一要务</span>，不断增强我国综合国力。<br>
                  <i class="dot"></i>必须坚持<span class="line">扩大开放</span>，不断推动共建人类命运共同体。<br>
                  <i class="dot"></i>必须坚持<span class="line">全面从严治党</span>，不断提高党的创造力、凝聚力、战斗力。<br>
                  <i class="dot"></i>必须坚持<span class="line">辩证唯物主义</span>和<span class="line">历史唯物主义</span>世界观和方法论，正确处理改革发展稳定关系。
                  `,
          answer:`<i class="dot"></i>必须坚持<span class="line2">完善和发展中国特色社会主义制度</span>，不断发挥和增强我国制度优势。<br>
                  <i class="dot"></i>必须坚持<span class="line2">以发展为第一要务</span>，不断增强我国综合国力。<br>
                  <i class="dot"></i>必须坚持<span class="line2">扩大开放</span>，不断推动共建人类命运共同体。<br>
                  <i class="dot"></i>必须坚持<span class="line2">全面从严治党</span>，不断提高党的创造力、凝聚力、战斗力。<br>
                  <i class="dot"></i>必须坚持<span class="line2">辩证唯物主义</span>和<span class="line2">历史唯物主义</span>世界观和方法论，正确处理改革发展稳定关系。
                  `,
          isShow:false
        },
        {
          content:`6、改革开放40年的实践启示我们：<br>
                  <i class="dot"></i><span class="line">中国共产党领导</span>是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势。<br>
                  <i class="dot"></i>为中国人民谋幸福，为中华民族谋复兴，是<span class="line">中国共产党人</span>的初心和使命，也是<span class="line">改革开放</span>的初心和使命。<br>
                  <i class="dot"></i><span class="line">创新</span>是改革开放的生命。实践发展永无止境，解放思想永无止境。<br>
                  <i class="dot"></i><span class="line">方向决定前途，道路决定命运。</span>我们要把命运掌握在自己手中，就要有志不改、道不变的坚定。
                  <span class="next-page">（接下页）</span>`,
          answer:`6、改革开放40年的实践启示我们：<br>
                  <i class="dot"></i><span class="line2">中国共产党领导</span>是中国特色社会主义最本质的特征，是中国特色社会主义制度的最大优势。<br>
                  <i class="dot"></i>为中国人民谋幸福，为中华民族谋复兴，是<span class="line2">中国共产党人</span>的初心和使命，也是<span class="line2">改革开放</span>的初心和使命。<br>
                  <i class="dot"></i><span class="line2">创新</span>是改革开放的生命。实践发展永无止境，解放思想永无止境。<br>
                  <i class="dot"></i><span class="line2">方向决定前途，道路决定命运。</span>我们要把命运掌握在自己手中，就要有志不改、道不变的坚定。
                  <span class="next-page">（接下页）</span>`,
          isShow:false
        },
        {
          content:`<i class="dot"></i><span class="line">制度</span>是关系党和国家事业发展的根本性、全局性、稳定性、长期性问题。<br>
                  <i class="dot"></i>解放和发展社会生产力，增强社会主义国家的综合国力，是社会主义的<span class="line">本质要求</span>和<span class="line">根本任务</span>。<br>
                  <i class="dot"></i><span class="line">开放带来进步</span>，封闭必然落后。中国的发展离不开世界，世界的繁荣也需要中国。<br>
                  <i class="dot"></i>打铁必须自身硬。办好中国的事情，关键在党，关键在坚持<span class="line">党要管党、全面从严治党</span>。<br>
                  <i class="dot"></i>我国是一个大国，决不能在<span class="line">根本性问题上</span>出现颠覆性错误。
                  `,
          answer:`<i class="dot"></i><span class="line2">制度</span>是关系党和国家事业发展的根本性、全局性、稳定性、长期性问题。<br>
                  <i class="dot"></i>解放和发展社会生产力，增强社会主义国家的综合国力，是社会主义的<span class="line2">本质要求</span>和<span class="line2">根本任务</span>。<br>
                  <i class="dot"></i><span class="line2">开放带来进步</span>，封闭必然落后。中国的发展离不开世界，世界的繁荣也需要中国。<br>
                  <i class="dot"></i>打铁必须自身硬。办好中国的事情，关键在党，关键在坚持<span class="line2">党要管党、全面从严治党</span>。<br>
                  <i class="dot"></i>我国是一个大国，决不能在<span class="line2">根本性问题上</span>出现颠覆性错误。
                  `,
          isShow:false
        },
      ],
      answerLists:[]
    }
  },
  methods: {
      goEnter(){
        this.mySwiper.slideNext();
      },
      showAnswer(e){
        let data=e.currentTarget.previousSibling.innerHTML;
        let index=e.currentTarget.previousSibling.getAttribute('data-index');
        this.testLists[index].isShow=true;
      },
      getAnswer(){
        this.testLists.forEach((item) => {
          let content=item.content;
          item.answer.forEach((obj,index)=>{
            let num=item.replace[index];  
            var subStr=new RegExp(`_{${num}}`); 
            content=content.replace(subStr,`<span class='line_down'>${obj}</span>`);
          });
          this.answerLists.push(content)
        });
      },
      back(){
        this.mySwiper.slideTo(1, 1000, true);//切换到第一个slide，速度为1秒
        this.mySwiper.allowSlidePrev=false;
      }
  },
  mounted() {
    let self=this;
    
    // 在创建完成dom之后创建swiper实例
    this.mySwiper = new Swiper(".swiper-container", {
      direction: "vertical",
      lazyLoading: true,
      allowSlidePrev : false,
      loop:true,
      on: {
        init: function() {
          swiperAnimateCache(this); //隐藏动画元素
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function() {
          swiperAnimateCache(this); //隐藏动画元素
          swiperAnimate(this); //初始化完成开始动画
          
          self.testLists.forEach(item=>{
            item.isShow=false;
          })

          if(this.activeIndex == 11){
            this.allowSlidePrev=true;
          }
        },
        slideChangeTransitionStart: function() {
          console.log(this.activeIndex)
        }
      },
    });

    // 微信分享模块
    var shareTxt = document.title;
    var shareesac = document.querySelector("[name='Description']").getAttribute('content');
    var shareurl = 'http://huodong.dayoo.com/html/gaigekaifang40nian2/index.html';
    var sharephoto ='http://huodong.dayoo.com/html/gaigekaifang40nian2/'+require('../static/images/share.jpg');
    
    //vue-axios不支持jsonp请求 需要使用vuejsonp进行请求
    this.$jsonp("http://mp.i.dayoo.com/activityinterface/wechat/share").then((response)=>{
        if (typeof response.timestamp != 'undefined' && typeof response.nonceStr != 'undefined' && typeof response.signature != 'undefined') {
            wx.config({
                debug: false,
                appId: response.appId,
                timestamp: response.timestamp,
                nonceStr: response.nonceStr,
                signature: response.signature,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
            });
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: shareTxt,
                    link: shareurl,
                    imgUrl: sharephoto,
                    success: function success() {
                        if (callback) {
                            callback();
                        }
                    }
                });
                wx.onMenuShareAppMessage({
                    title: shareTxt,
                    desc: shareesac,
                    link: shareurl,
                    imgUrl: sharephoto,
                    success: function success() {
                        if (callback) {
                            callback();
                        }
                    }
                });
                wx.onMenuShareQQ({
                    title: shareTxt,
                    desc: shareesac,
                    link: shareurl,
                    imgUrl: sharephoto
                });
                wx.onMenuShareWeibo({
                    title: shareTxt,
                    desc: shareesac,
                    link: shareurl,
                    imgUrl: sharephoto
                });
            });
        }
      }).catch((error)=>{
        console.log(error)
    })
  }
};
</script>
<style>
.hidden{
}
.home-book{
     width:2.34rem ;
     position: absolute;
     right: 0.8rem;
     top:0.9rem
}
.home-title1{
     width: 6.4rem;
     display: block;
     margin: 2rem auto 0.4rem;
}
.home-title2{
     width: 5.84rem;
     display: block;
     margin: 0 auto 0.4rem;
}
.home-title-rounds{
     width: 5.6rem;
     display: block;
     margin: 0 auto 0.4rem;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-pack: justify;
     -ms-flex-pack: justify;
     justify-content: space-between;
     -webkit-box-align: center;
     -ms-flex-align: center;
     align-items: center;
}
.home-title-round{
     width: 1.253rem;
}
.home-version{
     width: 100%;
     display: block;
     margin: 0 auto 0.8rem;
     color: #a72d33;
     font-size: 0.55rem;
     font-style: italic;
     font-weight: bold;
     text-align: center;
     letter-spacing: 0.2rem;
}
.home-slogan{
     width: 3.84rem;
     display: block;
     margin: 0 auto 0.4rem;
}
.home-content{
     width: 80%;
     font-size: 12px;
     text-indent: 2em;
     display: block;
     margin: 0 auto 0.4rem;
     line-height: 2;
}
.home-start{
     width: 3rem;
     height: 1.21rem;
     display: block;
     background: url("../static/images/home-btn.png")no-repeat center/100%;
     display: block;
     margin: 0 auto 0.4rem;
}
  .enter-title{
      width: 4.693rem;
      position: absolute;
      left: 50%;
      top: 1.84rem;
      margin-left:-2.347rem;
      animation-duration: 2s; 
  }
  .enter-title1{
      width: 8rem;
      position: absolute;
      left: 50%;
      top: 8rem;
      margin-left:-4rem; 
      animation-duration: 2s; 
  }
  .enter-title2{
      width: 5rem;
      position: absolute;
      left: 50%;
      top: 6.66rem;
      margin-left:-2.5rem; 
      animation-duration: 2s; 
  }
  .test-title{
    width: 4.586rem;
    position: absolute;
    left: 50%;
    top: 1.2rem;
    margin-left: -2.293rem;
  }
  .test-line{
    width: 8.293rem;
    position: absolute;
    left: 50%;
    top: 2.6rem;
    margin-left: -4.1465rem;
  }
  .test-content{
    width: 8.13rem;
    position: relative;
    margin: 3.2rem auto 0.5rem;
    /* rem进行字体控制 */
    font-size: 0.38rem;
    line-height: 2;
    overflow: hidden;
  }
  .next-page {
    display: block;
    font-size: 12px;
    float: right;
    width: 100%;
    text-align: right;
    margin: 0.5rem auto 0;
    color: #666;
    font-weight: bold
  }
  .dot{
    display: inline-block;
    width:0.21rem;
    height: 0.21rem;
    background: black;
    border-radius: 50%;
    transform: translate(0,-0.05rem);
    margin-right: 0.1rem
  }
  .test-btn{
    width: 2.77rem;
    height: 1.04rem;
    background: url('../static/images/test-btn.png')no-repeat center/100%;
    margin: 0 auto;
    display: block;
    position: relative;
    z-index: 2;
  }
  .test-answer-lists{
    width: 5rem;
    margin: 1rem auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .test-answer-lists li{
    font-size: 12px;
    list-style: none;
    margin: 0.2rem auto;
  }
  .line_down{
    border-bottom: 1px solid black;
  }

  .end-box{
    width: 8.2rem;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
  .end-content{
    width: 100%;
    margin: 0 auto 0.15rem;
    font-size: 0.33rem;
    line-height: 2;
    text-indent: 2em
  }
  .back{
    width: 3rem;
    display: block;
    margin: 0.3rem auto;
  }
  .end-content4{
    text-align: center;
    text-indent: 0;
  }
  .end-title{
    width: 3.84rem;
    display: block;
    margin: 0 auto 0.1rem;
  }

  .end-code{
    width: 2rem;
    display: block;
    margin: 0 auto 0.2rem;
  }
  .line{
    border-bottom: 1px solid black;
    color: transparent;
  }
  .line2{
    border-bottom: 1px solid black;
  }


  .hand{
    width: 1rem;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    opacity: 0;
    margin: -0.5rem;
    animation: hand linear 1.5s infinite;
  }
  @keyframes hand{
    0%{
      opacity: 1;
      bottom: 2rem
    }
    100%{
      opacity: 1;
      bottom: 3rem
    }
  }
  .clear{
    clear: both;
  }


</style>
