'use client'

import Slider from "@/components/Slider"

export default function Experience(){

    const navigation= {
        nextEl: '.fraction-slide-carousel .slider-button-right',
        prevEl: '.fraction-slide-carousel .lider-button-left'
    }


    return (
        <section className="mb-20">
                <h1 className="text-5xl mb-10">Projects</h1>
                <div className="w-full relative">
                    <Slider/>        
                </div>
                        
        </section>
    )
}