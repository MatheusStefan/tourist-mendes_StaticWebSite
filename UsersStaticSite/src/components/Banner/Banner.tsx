import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HomeBanner } from '../../shared-lib/typesHomePage';
import { useQuery } from '@tanstack/react-query';
import BannerSkeleton from '../Skeletons/BannerSkeleton.tsx';
import { getBanners } from '../../api/banners/index.ts';
import { ApiResponse } from '../../api/types.ts';
import { FetchError } from '../Errors/FetchError.tsx';

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { data: bannerResponse, isLoading, isError, refetch } = useQuery<ApiResponse<HomeBanner[]>>({
    queryKey: ['banners'],
    queryFn: getBanners,
  });

  const banners = useMemo(() => bannerResponse?.data || [], [bannerResponse?.data]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % (banners?.length || 1);
        handleNavDotClick(nextIndex);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, currentIndex, banners]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setCurrentIndex(index);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    const slides = scrollContainerRef.current?.querySelectorAll('[data-slide]');
    slides?.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);


   const handleNavDotClick = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;
    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  if (isLoading) return <BannerSkeleton />

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={() => setIsAutoPlaying(false)}
      onTouchEnd={() => setIsAutoPlaying(true)}
    >

      {isError && (
        <FetchError action={refetch} content='banners'/>
      )}

      <div
        ref={scrollContainerRef}
        className="flex w-full h-full items-center overflow-x-auto snap-x snap-mandatory touch-pan scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {banners?.map((banner: HomeBanner, index: number) => (
          <div
            key={index}
            data-index={index}
            className="w-full flex-shrink-0 snap-start"
          >
            <a
              href={banner.linkUrl}
              className="flex relative w-full h-full"
            >
              <img
                src={banner.imageData.imageUrl}
                alt={banner.imageData.altDescription}
                className="w-full h-[516px] lg:h-[800px] object-cover"
              />
              {banner.description && (
                <div className="absolute bottom-0 md:bottom-[40%] lg:bottom-28 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 lg:left-40 w-[260px] md:w-[400px]">
                  <h1 className='text-h1 text-xl md:text-3xl text-white leading-8 text-center md:text-start w-full'>
                    {banner.description}
                  </h1>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleNavDotClick((currentIndex - 1 + banners!.length) % banners!.length)}
        className="absolute hidden md:flex left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors"
        aria-label="Banner anterior"
        tabIndex={-1}
      >
        <ChevronLeft className="w-6 lg:w-10 h-6 lg:h-10 text-black" />
      </button>
      <button
        onClick={() => handleNavDotClick((currentIndex + 1) % banners!.length)}
        className="absolute hidden md:flex right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-grey text-white rounded-full p-2 transition-colors"
        aria-label="Próximo banner"
        tabIndex={-1}
      >
        <ChevronRight className="w-6 lg:w-10 h-6 lg:h-10 text-black" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners?.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavDotClick(index)}
            aria-label={`Ir para banner ${index + 1}`}
            className={`w-4 h-4 rounded-full transition-colors ${currentIndex === index ? 'scale-125 bg-primary dark:bg-secondary' : 'scale-75 bg-white'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;