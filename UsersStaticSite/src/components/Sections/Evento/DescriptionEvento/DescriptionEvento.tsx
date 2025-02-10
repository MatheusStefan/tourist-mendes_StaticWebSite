import React from 'react';
import ContactEvento from '../ContactEvento/ContactEvento';

interface Props {
  description: string | undefined;
  info: string | undefined;
  timeInfo: string;
  contacts: {
    phoneNumbers: string[];
    email: string[];
    site: string[];
    address: string[];
  };
  socials: {
    instagram?: string;
    facebooK?: string;
    tiktok?: string;
    whatsapp?: string;
    twitter?: string;
  }
}

function DescriptionEvento({ description, info, contacts, socials }: Props): React.ReactNode {

  return (
    <section className='px-4 flex flex-col gap-12 md:px-8 lg:px-0 md:items-start md:justify-center md:mx-auto lg:mx-0'>
      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[530px] xl:max-w-[530px] xl:max-h-[242px]'>
        <h2 className='text-h2 text-black'>Sobre o Evento</h2>
        <p className='text-level-1 font-normal '>{description}</p>
      </section>

      <section className='max-w-[335px] flex flex-col gap-4 md:max-w-[770px] lg:max-w-[944px] xl:max-w-[530px] xl:max-h-[410px]'>
        <h2 className='text-h2 text-black'>História</h2>
        <p className='text-level-1 font-normal'>{info}</p>
      </section>

      <div className='hidden xl:flex'>
        <ContactEvento content={contacts} socials={socials} />
      </div>
    </section>
  )

}


export default DescriptionEvento;