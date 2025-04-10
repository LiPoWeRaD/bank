import { useState } from 'react';
import ArrowLeft from '../svg/arrowLeft'; // Предполагаем, что у вас есть такой компонент
import quration2 from '../assets/quration.svg';
import Quotation from '../svg/quotation';
import Image from 'next/image';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
      {
        bg: 'left',
        text: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
        name: 'Sara T'
      },
      {
        bg: 'none',
        text: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
        name: 'John D'
      },
      {
        bg: 'right',
        text: `I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.`,
        name: 'Emily G'
      },
    ];
  
    // Функция для получения класса фона
    const getBgClass = (bgType: string) => {
      switch(bgType) {
        case 'left': 
          return '';
        case 'right':
          return '';
        default:
          return '';
      }
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <>
      <div className="items-center justify-center gap-[30px] w-full hidden xl:flex">
        <button 
          onClick={prevSlide}
          className="p-6 bg-grey11 rounded-full border border-grey15 cursor-pointer w-fit h-fit shrink-0 hover:bg-grey15 transition-colors"
        >
          <ArrowLeft />
        </button>
  
        <div className="relative flex gap-[30px] overflow-hidden w-full items-center  justify-center h-[600px] 2xl:h-[400px]">
          {testimonials.map((testimonial, index) => {
            const position = (index - currentIndex + testimonials.length) % testimonials.length;
            const isActive = position < 3;
            
            return (
              <div 
                key={`${testimonial.name}-${index}`}
                className={`absolute flex items-center justify-center flex-shrink-0 flex-col rounded-2xl transition-all duration-500 ease-in-out
                  ${getBgClass(testimonial.bg)}
                  ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  ${
                    position === 0 ? 'left-0 translate-x-0 bg-gradient-to-l from-grey30/100 via-grey30/50 to-grey30/0' :
                    position === 1 ? 'left-1/2 -translate-x-1/2 bg-grey30' :
                    position === 2 ? 'right-0 translate-x-0 bg-gradient-to-r from-grey30/100 via-grey30/50 to-grey30/0' :
                    'left-full'
                  }
                  w-full sm:w-[90%] md:w-[calc(50%-30px)] lg:w-[calc(33.333%-30px)] 
                  h-[300px] sm:h-[330px] md:h-[350px] lg:h-[500px] xl:h-[550px] 2xl:h-[450px]
                  ${position === 1 ? 'z-10' : 'z-0'}`}
              >
                <div className="flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-[30px] lg:gap-y-[50px] p-4 sm:p-6 md:p-8 lg:p-[50px] flex-grow w-full">
                  <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 items-center justify-between">
                    <span className="w-full border-b-[1px] sm:border-b-[2px] border-grey15"></span>
                    <span className="text-sm sm:text-base hidden lg:block"><Quotation /></span>
                    <span className="text-sm sm:text-base lg:hidden"><Image src={quration2.src} alt="quration" width={50} height={0} /></span>
                    <span className="w-full border-b-[1px] sm:border-b-[2px] border-grey15"></span>
                  </div>
                  <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center font-light flex-grow">
                    {testimonial.text}
                  </p>
                  <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center text-green60 font-medium mt-auto">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
  
        <button 
          onClick={nextSlide}
          className="p-6 bg-grey11 rounded-full border border-grey15 cursor-pointer w-fit h-fit shrink-0 rotate-180 hover:bg-grey15 transition-colors"
        >
          <ArrowLeft />
        </button>
      </div>

      <div className="flex flex-col items-center gap-[30px] w-full xl:hidden">
      {/* Основной контейнер с карточкой */}
      <div className="relative w-full h-[400px] sm:h-[300px] md:h-[450px] overflow-hidden">
        {testimonials.map((testimonial, index) => {
          const position = (index - currentIndex + testimonials.length) % testimonials.length;
          const isActive = position === 0; // На мобильных показываем только одну карточку
          
          return (
            <div 
              key={`${testimonial.name}-${index}`}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out
                ${getBgClass(testimonial.bg)}
                ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                ${
                  position === 0 ? 'left-0 translate-x-0' :
                  position < testimonials.length/2 ? 'left-full' :
                  'right-full'
                }
                w-full
                h-full
                z-10`}
            >
              <div className="flex flex-col gap-y-6 p-6 sm:p-8 md:p-[50px] w-full h-[300px] xl:h-full max-w-[500px]">
                <div className="flex gap-x-4 items-center justify-between">
                  <span className="w-full border-b-[2px] border-grey15"></span>
                  <span className="text-sm sm:text-base hidden xl:block"><Quotation /></span>
                  <span className="text-sm sm:text-base xl:hidden w-full -mx-3 sm:-mx-10 md:-mx-14 flex justify-center"><Image src={quration2.src} alt="quration" width={50} height={0} /></span> 
                  <span className="w-full border-b-[2px] border-grey15"></span>
                </div>
                <p className="text-[16px] sm:text-[18px] text-center font-light flex-grow">
                  {testimonial.text}
                </p>
                <p className="text-[16px] sm:text-[18px] text-center text-green60 font-medium">
                  {testimonial.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Стрелки для навигации (под карточкой) */}
      <div className="flex gap-[30px] md:hidden">
        <button 
          onClick={prevSlide}
          className="p-4 bg-grey11 rounded-full border border-grey15 cursor-pointer w-fit h-fit hover:bg-grey15 transition-colors"
        >
          <ArrowLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 bg-grey11 rounded-full border border-grey15 cursor-pointer w-fit h-fit rotate-180 hover:bg-grey15 transition-colors"
        >
          <ArrowLeft />
        </button>
      </div>

      {/* Стрелки для десктопной версии (сбоку) */}
      <div className="hidden md:flex items-center justify-center gap-[30px] w-full">
        <button 
          onClick={prevSlide}
          className="p-6 bg-grey11 rounded-full border border-grey15 cursor-pointer w-fit h-fit hover:bg-grey15 transition-colors"
        >
          <ArrowLeft />
        </button>
        <div className="w-full max-w-4xl"></div>
        <button 
          onClick={nextSlide}
          className="p-6 bg-grey11 rounded-full border border-grey15 cursor-pointer w-fit h-fit rotate-180 hover:bg-grey15 transition-colors"
        >
          <ArrowLeft />
        </button>
      </div>
      </div>
      </>
    );
  };

export default TestimonialsCarousel;