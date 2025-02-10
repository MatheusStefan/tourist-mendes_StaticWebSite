import React from 'react';
import CoverImageSkeleton from '../../components/Sections/LocalAttraction/CoverImage/CoverImageSkeleton';
import BreadcrumbSkeleton from '../../components/Sections/LocalAttraction/Breadcrumb/BreadcrumbSkeleton';
import DescriptionTrilhaSkeleton from '../../components/Sections/Trilha/DescriptionTrilha/DescriptionTrilhaSkeleton';
import CarouselSkeleton from '../../components/Sections/LocalAttraction/CarouselPhotos/CarouselSkeleton';
import Foto360Skeleton from '../../components/Sections/Trilha/Foto360/Foto360Skeleton';
import WorkingTimeSkeleton from '../../components/Sections/LocalAttraction/WorkingTime/WorkingTimeSkeleton';
import ContactTrilhaSkeleton from '../../components/Sections/Trilha/ContactTrilha/ContactTrilhaSkeleton';
import TrilhaMapSkeleton from '../../components/Sections/Trilha/TrilhaMap/TrilhaMapSkeleton';

function EventoPageSkeleton(): React.ReactNode {
  return (
    <div className="relative w-full">
      <CoverImageSkeleton />
      <BreadcrumbSkeleton />
      <div className="w-full mt-12 flex gap-12 flex-col md:max-w-[770x] md:mt-20 md:items-start md:justify-center md:mx-auto lg:gap-6 lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]">
        <DescriptionTrilhaSkeleton />
        <div className="flex flex-col gap-12 md:max-w-[770px] md:items-start justify-center md:mx-auto xl:w-full xl:gap-16 lg:max-w-[944px] xl:mx-0">
          <CarouselSkeleton />
          <CarouselSkeleton />
          <Foto360Skeleton />
          <TrilhaMapSkeleton />
        </div>
        <div className="flex flex-col gap-12 md:w-full md:max-w-[770px] md:items-start justify-center md:mx-auto lg:max-w-[944px] xl:hidden">
          <WorkingTimeSkeleton />
          <ContactTrilhaSkeleton />
        </div>
      </div>
    </div>
  )
}

export default EventoPageSkeleton;