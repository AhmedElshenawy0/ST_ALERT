import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import React from "react";
const Swipper = (props:{data:string[]}) => {
  return (
    <div className="slider-container right-3 relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        direction="vertical"
        mousewheel
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        height={60}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {props.data.map((ele:string) => (
          <SwiperSlide>
            <h3 className="">{ele}</h3>
          </SwiperSlide>
        ))}
        
        <div className="slider-controller"></div>
      </Swiper>
    </div>
  );
};

export default Swipper;
