import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useSwiper } from "swiper/react"

export function SliderNavigation () {
    const swiper = useSwiper()
    
    return(
       <div>
        <button className=" absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-gray-100 to-transparent">
            <ChevronLeftIcon
                onClick={()=> swiper.slidePrev()}
            />
        </button>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12  from-gray-100 to-transparent">
            <ChevronRightIcon  
                onClick={()=> swiper.slideNext()}
            />
        </button>
       </div>
    )
}