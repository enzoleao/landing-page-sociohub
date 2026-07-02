"use client";

import React, { useMemo } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type Slide = {
  title: string
  description: string
  iconBg: string
  icon: React.ReactNode
}

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props

  const baseOptions: EmblaOptionsType = useMemo(
    () => ({ 
        align: 'start', 
        loop: false, 
        containScroll: 'trimSnaps', 
        draggable: false,
        dragFree: false,
        watchDrag: false,
        watchPointer: false,
        
        }),
    []
  )

  const [emblaRef] = useEmblaCarousel({ ...baseOptions, ...(options || {}) }, [
    AutoScroll({ playOnInit: true, speed: 1.2 })
  ])

  return (
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4"> {/* slide-spacing */}
                {slides.map((slide, index) => {
                return (
                    <div
                        className="pl-4 flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] select-none"
                        key={index}
                    > 
                        <div className="flex items-center">
                            <div key={slide.title} className="flex flex-col items-center text-center p-6">
                                <div className={`w-16 h-16 rounded-full ${slide.iconBg} flex items-center justify-center mb-4`}>{slide.icon}</div>
                                <h3 className="font-semibold mb-2 select-none">{slide.title}</h3>
                                <p className="text-muted-foreground select-none">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                )
                })}
               
                </div>
            </div>
            </div>
  )
}

export default EmblaCarousel
