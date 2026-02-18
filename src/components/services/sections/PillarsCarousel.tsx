import { useState, useEffect, useRef } from "react";
import { pillars } from "../data";
import { useLocale } from '@/lib/locale';
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function PillarsCarousel() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(1); // Start at 1 (first real slide)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Extended array with clones for infinite effect
  const extendedPillars = [
    pillars[pillars.length - 1], // Clone of last item
    ...pillars,
    pillars[0] // Clone of first item
  ];

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index + 1); // +1 because of the prepended clone
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);

      // Handle wrap around
      if (activeIndex === 0) {
        setActiveIndex(pillars.length);
      } else if (activeIndex === extendedPillars.length - 1) {
        setActiveIndex(1);
      }
    }, 700); // Match transition duration

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, isTransitioning, extendedPillars.length, pillars.length]);

  // Auto-play carousel
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveIndex((prev) => prev + 1);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoPlayInterval);
  }, [isTransitioning]);

  // Helper function to get real pillar index from extended array index
  const getRealIndex = (extendedIndex: number) => {
    if (extendedIndex === 0) return pillars.length - 1; // Clone of last
    if (extendedIndex === extendedPillars.length - 1) return 0; // Clone of first
    return extendedIndex - 1; // Regular item
  };

  return (
    <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 py-6">
      {/* Hero Title Section */}
      <div className="text-center mb-12 space-y-3">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-violet-300 font-semibold shadow-lg shadow-violet-500/20">
          <Sparkles className="w-3 h-3 text-violet-400" />
          {t('services.badge')}
        </div>
        
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.15] mt-4">
          <span className="block text-foreground">{t('services.titleLine1')}</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400 animate-gradient bg-[length:200%_auto]">{t('services.titleLine2')}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-sm md:text-base text-muted-foreground/90 leading-relaxed mt-3">{t('services.subtitle')}</p>

        {/* Tech Note */}
        <div className="inline-flex items-center gap-2 rounded-lg border border-violet-400/20 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 backdrop-blur-md px-3 py-1.5 text-xs text-violet-300/80 font-medium mt-3">
          <Sparkles className="w-3 h-3 text-violet-400" />
          {t('services.techNote')}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-2 mb-3 overflow-x-auto scrollbar-hide">
        {pillars.map((pillar, index) => {
          const isActive = (activeIndex === index + 1) || 
                          (activeIndex === 0 && index === pillars.length - 1) || 
                          (activeIndex === extendedPillars.length - 1 && index === 0);
          
          return (
            <button
              key={pillar.id}
              onClick={() => goToSlide(index)}
              className={`group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 border-2 border-white/10 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${pillar.iconColor} ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                <pillar.icon className="w-4 h-4" />
              </div>
              <span className={`hidden sm:block font-semibold text-xs uppercase tracking-wide ${
                isActive ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {t(`solutions.pillars.${index}.title`).split(':')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 p-3 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 p-3 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slides */}
        <div className="overflow-hidden rounded-3xl">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {extendedPillars.map((pillar, index) => (
              <div key={pillar.id} className="min-w-full">
                <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl min-h-[350px] h-[350px] md:h-[380px]">
                  {/* Background Image */}
                  <img 
                    src={pillar.image}
                    alt={`${t(`solutions.pillars.${getRealIndex(index)}.title`)} - ${t(`solutions.pillars.${getRealIndex(index)}.description`)}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === activeIndex ? "eager" : "lazy"}
                    fetchPriority={index === activeIndex ? "high" : "auto"}
                  />
                  {/* Dark Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-900/50" />

                  {/* Content Container */}
                  <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-4 p-6 md:p-8">
                    {/* Left Content */}
                    <div className="space-y-3">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 backdrop-blur-md">
                        <div className={`p-1 rounded-lg ${pillar.iconColor} bg-white/20`}>
                          <pillar.icon className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                          {t(`solutions.pillars.${getRealIndex(index)}.title`).split(':')[0]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                        {t(`solutions.pillars.${getRealIndex(index)}.title`).split(':')[1]?.trim() || t(`solutions.pillars.${getRealIndex(index)}.description`)}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm md:text-base text-muted-foreground">
                        {t(`solutions.pillars.${getRealIndex(index)}.description`)}
                      </p>

                      {/* Services List */}
                      <div className="space-y-2 pt-2">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="flex items-start gap-2 group">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:scale-125 transition-transform" />
                            <span className="text-xs md:text-sm text-gray-300 leading-relaxed">
                              {t(`solutions.pillars.${getRealIndex(index)}.services.${i}`)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Result Badge */}
                      <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-400/20 backdrop-blur-sm">
                        <p className="text-xs md:text-sm leading-relaxed">
                          <span className="font-bold text-cyan-300">{t('solutions.result')} : </span>
                          <span className="text-gray-300">{t(`solutions.pillars.${getRealIndex(index)}.result`)}</span>
                        </p>
                      </div>
                    </div>

                    {/* Right Illustration Area */}
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-40">
                        {/* Decorative Icons/Shapes */}
                        <div className="absolute top-10 right-10 w-16 h-16 border-2 border-cyan-400/30 rounded-lg animate-float" />
                        <div className="absolute top-32 right-24 w-12 h-12 border-2 border-violet-400/30 rounded-lg rotate-12 animate-float-delayed" />
                        <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-cyan-400/30 rounded-lg -rotate-6 animate-float" />
                        <div className="absolute bottom-10 right-32 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full animate-pulse" />
                        
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <line x1="20%" y1="20%" x2="80%" y2="40%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                          <line x1="80%" y1="40%" x2="60%" y2="80%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {pillars.map((_, index) => {
            const isActive = (activeIndex === index + 1) || 
                            (activeIndex === 0 && index === pillars.length - 1) || 
                            (activeIndex === extendedPillars.length - 1 && index === 0);
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-12 bg-gradient-to-r from-cyan-400 to-violet-400'
                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
