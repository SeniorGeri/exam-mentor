import { Slider } from "@/modules/Storage/resources/sliders/data";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { useLocale } from '@/contexts/locale';

export function Hero({sliders}: {sliders: Slider[]}) {
  
	  const { currentLocale } = useLocale();
	
  return (
		<Carousel className='mt-5'>
			<CarouselContent>
				{sliders.map((slider) => (
					<CarouselItem key={slider.id}>
						<a href={slider.button_url}  className="block w-full group  h-[480px]">
						<div
							className={cn(
							"w-full h-[485px] rounded-2xl",
							"bg-white/80 dark:bg-zinc-900/80",
							"backdrop-blur-xl",
							"border border-zinc-200/50 dark:border-zinc-800/50",
							"shadow-xs",
							"transition-all duration-300",
							"hover:shadow-md",
							"hover:border-zinc-300/50 dark:hover:border-zinc-700/50",
							)}
						>
							<div className="relative">
							<img
								src={slider.image}
								alt={slider.title['en']}
								className="w-full h-[480px] object-cover"
							/>
							</div>

							<div className={cn("absolute inset-0", "bg-linear-to-t from-black/90 via-black/40 to-transparent")} />

							<div className="absolute bottom-0 left-0 right-0 p-5">
								<div className="flex items-center justify-between gap-3">
									<div className="space-y-1.5">
									<h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug">{slider.title[currentLocale]}</h3>
									<p className="text-sm text-zinc-200 dark:text-zinc-300 line-clamp-2">{slider.subtitle[currentLocale]}</p>
									</div>
									<div
									className={cn(
										"p-2 rounded-full",
										"bg-white/10 dark:bg-zinc-800/50",
										"backdrop-blur-md",
										"group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50",
										"transition-colors duration-300 group",
									)}
									>
										<ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
									</div>
								</div>
							</div>
						</div>
						</a>
					</CarouselItem>	
				))}
		</CarouselContent>
	</Carousel>
  ) 
}