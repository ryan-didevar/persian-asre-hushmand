"use client";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Charity from "@/public/charity.svg";
import System from "@/public/system.svg";
import Date from "@/public/date.svg";
import Key from "@/public/key.svg";
import Strategy from "@/public/strategy.svg";
import Ads from "@/public/ads.svg";
import Money from "@/public/money.svg";
import Target from "@/public/target.svg";
import "swiper/swiper.css";
import "swiper/css/navigation";
import SliderOptions from "../components/SliderOptions";

const sliderOptions = [
  {
    icon: Charity,
    title: "نگرانی از هزینه‌های تبلیغات",
    description:
      "برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران می‌کند.",
  },
  {
    icon: System,
    title: "ترس از پیچیدگی مدیریت",
    description:
      "مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.",
  },
  {
    icon: Date,
    title: "تصور زمان‌بر بودن نتایج",
    description:
      "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
  },
  {
    icon: Key,
    title: "ناآگاهی از تأثیر تبلیغات",
    description:
      " بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به وضوح برای شما نمایش خواهیم داد.",
  },
  {
    icon: Strategy,
    title: "نبود استراتژی مشخص",
    description:
      "نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.",
  },
  {
    icon: Ads,
    title: "عدم تخصص تیم در تبلیغات",
    description:
      "اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم داد.",
  },
  {
    icon: Money,
    title: "دغدغه هدر رفتن بودجه",
    description:
      " اگر نگران عدم کسب نتیجه هستید، پرشین سایت با برنامه‌ریزی دقیق به شما اطمینان می‌دهد که از بودجه خود به بهترین نحو استفاده خواهید کرد.",
  },
  {
    icon: Target,
    title: "نداشتن برنامه برای رشد",
    description:
      "اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه جامعی برای شما طراحی خواهد کرد.",
  },
];
const SliderSection = () => {
  const swiper = useSwiper();
  const [hover, setHover] = useState(false);
  const prevButtonId = "custom-prev-button";
  const nextButtonId = "custom-next-button";
  console.log(hover);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-full h-full flex items-center justify-center"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: hover,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1110: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        navigation={{
          prevEl: `#${prevButtonId}`, // Use CSS selector format to reference the ID
          nextEl: `#${nextButtonId}`,
        }}
      >
        {sliderOptions.map((option, index) => (
          <SwiperSlide key={index}>
            <SliderOptions
              icon={option.icon}
              title={option.title}
              description={option.description}
            />
          </SwiperSlide>
        ))}
        <IoMdArrowDropleft
          id={prevButtonId}
          className="absolute top-1/2 end-2 transform -translate-y-1/2 z-10 text-3xl text-[#B1B1B1]"
          size={32}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={() => swiper.slideNext()}
        />
        <IoMdArrowDropright
          id={nextButtonId}
          className="absolute top-1/2 start-0 transform -translate-y-1/2 z-20 text-3xl text-[#B1B1B1]"
          size={32}
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={() => swiper.slidePrev()}
        />
      </Swiper>
    </div>
  );
};

export default SliderSection;
