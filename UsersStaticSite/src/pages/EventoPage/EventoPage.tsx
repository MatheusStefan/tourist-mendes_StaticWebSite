import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FullEventoType from '../../shared-lib/FullEventoType';
import { useQuery } from '@tanstack/react-query';
import { getEventoById } from '../../api/getEventoById/getEventoById';
import { Helmet } from 'react-helmet-async';
import CoverImage from '../../components/Sections/LocalAttraction/CoverImage/CoverImage';
import Breadcrumb from '../../components/Sections/LocalAttraction/Breadcrumb/Breadcrumb';
import DescriptionEvento from '../../components/Sections/Evento/DescriptionEvento/DescriptionEvento';
import CarouselVideos from '../../components/Sections/LocalAttraction/CarouselVideos/CarouselVideos';
import CarouselPhotos from '../../components/Sections/LocalAttraction/CarouselPhotos/CarouselPhotos';
import LocationMap from '../../components/Sections/LocalAttraction/LocationMap/LocationMap';
import ButtonBackToTop from '../../components/ButtonBackToTop/ButtonBackToTop';
import Calendario from '../../components/Sections/Evento/Calendario/Calendario';
import ContactEvento from '../../components/Sections/Evento/ContactEvento/ContactEvento';
import EventoPageSkeleton from './EventoPageSkeleton';

function EventoPage(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventoById(id!),
    enabled: !!id,
  });
  const selectedEvento: FullEventoType | undefined = data?.data;

  useEffect(() => {
    if (!id) {
      navigate("/notFound");
      return;
    }
    if (isError) {
      navigate("/notFound");
    }
  }, [id, isError, error, navigate]);

  return (
    <>
      {isLoading ? <EventoPageSkeleton /> : <>
        {selectedEvento && (<>
          <Helmet>
            <title>{selectedEvento.title}</title>
            <meta
              name="description"
              content={`Descubra sobre ${selectedEvento.title}. Saiba mais sobre sua história, horários, veja fotos e vídeos sobre o evento.`} />
          </Helmet>
          <main className="relative bg-white dark:bg-lightBlack pb-20">
            <div className='flex flex-col'>
              <CoverImage src={selectedEvento.coverImage} title={selectedEvento.title} category={selectedEvento.category} />
              <Breadcrumb title={selectedEvento.title} />
            </div>
            <div className='w-full mt-12 flex gap-12 flex-col md:max-w-[770x] md:mt-20 md:items-start md:justify-center md:mx-auto lg:gap-20 lg:max-w-[944px] xl:flex-row xl:justify-between xl:max-w-[1140px]'>
              <DescriptionEvento
                description={selectedEvento.longDescription}
                info={selectedEvento.historicalInfo}
                timeInfo={JSON.stringify(selectedEvento.schedule)}
                contacts={selectedEvento.contacts}
                socials={selectedEvento.socialMedia}

              />
              <div className="flex flex-col gap-12 md:max-w-[770px] md:items-start justify-center md:mx-auto xl:gap-16 lg:max-w-[944px] xl:mx-0">
                <Calendario schedule={selectedEvento.schedule} />
                <CarouselPhotos photos={selectedEvento.photoGallery} />
                {selectedEvento.videos.length > 0 && <CarouselVideos videos={selectedEvento.videos} />}
                <LocationMap link={selectedEvento.mapUrlLink} />
              </div>

              <div className='flex flex-col md:min-w-[740px] md:w-[770px] md:items-start justify-center md:mx-auto lg:w-[944px] xl:hidden'>
                <ContactEvento content={selectedEvento.contacts} socials={selectedEvento.socialMedia} />
              </div>

            </div>
            <ButtonBackToTop />
          </main>
        </>)}</>}
    </>
  )
}

export default EventoPage;
