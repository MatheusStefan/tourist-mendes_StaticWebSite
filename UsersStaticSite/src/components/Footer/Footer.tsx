import React from 'react';
import { useTheme } from '../../hooks/useTheme';

function Footer(): React.ReactNode {
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-white-100 dark:bg-black-200 text-black-100 dark:text-white-100 w-full pb-10 before:bg-black-200 dark:before:bg-white-100 before:content-[''] before:w-full before:absolute before:h-[1px] transition-all duration-300" >
      <section className="flex flex-col gap-4 lg:gap-10 px-4 md:px-20 lg:px-40 2xl:px-64">
        <h3 className="text-2xl relative bottom-7 bg-white-100 dark:bg-black-200 w-fit p-3">
          Sobre
        </h3>
        <p className='w-full'>Lorem ipsum dolor sit amet consectetur. Scelerisque vel nunc pretium eu. Nibh ornare imperdiet fusce aliquam est. Mauris amet nisi facilisis commodo orci enim malesuada ante. Ultrices egestas arcu a elementum in in sit et. Sem nisl ipsum eleifend orci tincidunt non urna amet. Integer nisl amet in sit amet posuere vel. Sed condimentum vivamus adipiscing commodo leo ullamcorper suspendisse. Consectetur suscipit.</p>
        <div className='flex flex-col items-start justify-between gap-4 lg:flex-row'>
          <div className='flex flex-col'>
            <p className='font-bold'>
              Endereço
            </p>
            <a
              href="https://maps.app.goo.gl/PmbUi59FwJSkGMRP7"
              target='_blank'
              rel="noreferrer"
              className='pl-2'>

              <address>
                Av. Júlio Braga, N° 86 - Centro - Mendes/RJ CEP: 26700-000
              </address>
            </a>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold'>
              Email
            </p>
            <a href="mailto:imprensademendes@mendes.rj.gov.br"
              className='pl-2'
            >
              imprensademendes@mendes.rj.gov.br
            </a>
          </div>
          <div className='flex flex-col'>
            <p className='font-bold'>
              Telefone
            </p>
            <div className='flex lg:flex-row'>
              <a
                href="tel:+24 2465-0661"
                className='pl-2'
              >(24) 2465-0661</a>
              <a
                href="tel:+24 2465-4058"
                className='pl-2'
              >(24) 2465-4058</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-10'>
          <img src="" alt="TurisMendes-logo" />
          <img
            src={isDarkMode ? './src/assets/logos/SomosDev-White.svg' : './src/assets/logos/SomosDev-Black.svg'}
            alt="SomosDev-logo"
            className='w-[100px] md:w-[90px] object-cover' />
          <img
            src={isDarkMode ? "./src/assets/logos/ColetivoCafe.svg" : "./src/assets/logos/ColetivoCafeina-Black.svg"}
            alt="ColetivoCafe-logo"
            className='w-[100px] md:w-[90px] object-cover' />
          <img
            src={isDarkMode ? "./src/assets/logos/GovernoFederal.svg" : "./src/assets/logos/GovernoFederal-Black.svg"}
            alt="GovernoFederal-logo"
            className='w-[100px] md:w-[90px] object-cover' />
          <img
            src="./src/assets/logos/PrefeituraMendes.svg"
            alt="PrefeituraMendes-logo"
            className='w-[100px] md:w-[90px] object-cover' />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
