---
time: 2022-11-24 10:23:11
title: swiper的使用
subTtile: 暂无
titleImg: ./404.jpg
permalink: /page/f1345d0
categories: web
sticky: true
---
swiper使用记录,记录一些使用swiper的一些api,方便之后的使用 
<!-- more -->
## 在react中使用swiper
* onSwiper:接收 Swiper 实例的回调
* onSlideChange:页面切换时触发
* loop:无限循环 如果与 slidesPerView: 'auto' 一起使用，需要设置 loopedSlides 指定要循环（重复）的幻灯片数量。
```
    <Swiper
      // install Swiper modules
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
```
### swiper实例的方法
* slideTo:Swiper切换到指定slide
* slideToLoop:在Loop模式下Swiper切换到指定slide