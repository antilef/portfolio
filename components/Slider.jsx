import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function Slider() {
    return (
      <div className="w-full h-[500px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="h-full"
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="h-full flex flex-col  items-center justify-center bg-contrast text-white text-xl">
                <div className="h-[70%] w-full">
                    <img
                    className="h-full w-full object-cover"
                    src="https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8960807/og_image/optimized/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png"
                    alt="REST API Node.js"
                    />
                </div>

                <div className="h-[30%] flex flex-col items-center justify-center gap-2">
                    {/* Text Description */}
                    <div className="text-center font-medium text-md">
                    <p>Javascript, TailwindCSS, React, Next.js</p>
                    </div>

                    {/* GitHub Link */}
                    <Link href="https://github.com/antilef/fsucv" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-2x duration-500 hover:scale-105 hover:text-gray-400"></i>
                    </Link>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="h-full flex flex-col  items-center justify-center bg-contrast text-white text-xl">
                <div className="h-[70%] w-full">
                    <img
                    className="h-full w-full object-cover"
                    src="https://www.angularminds.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fangularminds.com%2Fblog%2Fcover%2Fangular-ecommerce-website-20240627120122794.jpg&w=1920&q=75"
                    alt="REST API Node.js"
                    />
                </div>

                <div className="h-[30%] flex flex-col items-center justify-center gap-2">
                    {/* Text Description */}
                    <div className="text-center font-medium text-md">
                    <p>Typescript, Angular</p>
                    </div>

                    {/* GitHub Link */}
                    <Link href="https://github.com/antilef/fsucv" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-2x duration-500 hover:scale-105 hover:text-gray-400"></i>
                    </Link>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }