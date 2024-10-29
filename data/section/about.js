import SvgInstagram from "@/components/Section/About/SvgInstagram";
import SvgWeb from "@/components/Section/About/SvgWeb";

export const about = {
  es: {
    title: 'Nuestro grupo',
    subtitle:'Empresas',
    paragraph1:<>Somos el <b>Grupo Apícola de la Región Centro Argentina</b>, una sólida unión de <b>ocho empresas de apicultores locales</b> provenientes de <b>tres provincias</b> diferentes de la República Argentina.<b> Esta colaboración estratégica</b> nos permite combinar nuestras fortalezas y experiencia para ofrecer productos y servicios de calidad al mundo.</>,
    paragraph2:<>Con más de <b>30 años de experiencia</b>, desarrollamos productos apícolas en <b>biomas únicos y naturales</b>, garantizando la <b>trazabilidad</b> de nuestros productos y el cumplimiento de los más altos <b>estándares de calidad</b>. Esto nos ha otorgado un <b>reconocimiento destacado</b> tanto a nivel nacional como internacional.</>,
    paragraph3:<>Actualmente, exportamos a <b>más de diez países del mundo</b>, ofreciendo <b>productos naturales sin adulterantes</b>, con <b>sabores diferenciados</b> y una calidad única. Contamos con mieles de <b>múltiples orígenes botánicos</b>, incluyendo monofloral, cremosa, pradera, montaña, entre otras variedades.</>,
    poster:'¡Haz click en el mapa!'
  },
  en: {
    title: 'Our group',
    subtitle:'Companies',
    paragraph1:<>We are the <b>Beekeeping Group of Central Argentina</b>, a solid union of <b>eight companies of local beekeepers</b> from <b>three different provinces</b> of Argentina. This <b>strategic collaboration</b> allows us to combine our strengths and experience in order to offer quality products and services to the world.</>,
    paragraph2:<>With more than <b>30 years of experience</b>, we develop beekeeping products in <b>unique and natural biomes</b>, guaranteeing the <b>traceability</b> of our products and compliance with the highest <b>quality standards</b>. This has given us an <b>outstanding recognition</b> both nationally and internationally.</>,
    paragraph3:<>Currently, we export to <b>more than ten countries around the world</b>, offering <b>natural, unadulterated products</b>, with <b>differentiated flavors</b> and unique quality. We have honeys of <b>multiple botanical origins</b>, including monofloral, creamy, meadow, mountain, among other varieties.</>,
    poster:'Click on the map!',
  },
};

export const features = [
  {   
    id: 1,
    name: 'Entre Rios',   
    empresas: {
      title: 'Empresas',
      list: [
        {id: 1, description: 'Charadia Apicultura', redes: () => <><SvgWeb link="https://charadiamateriales.com/" /><SvgInstagram link="https://www.instagram.com/clarodia.miel/" /></> , logo: '/company/logoCharadia.jpeg'}, 
        {id: 2, description: 'COADELPA', redes: () => <><SvgWeb link="https://coadelpa.com/" /><SvgInstagram link="https://www.instagram.com/coadelpaltda/" /></>, logo: '/company/logoCOADELPA.jpg'},
        {id: 3, description: 'Schneiter', redes: () => <><SvgWeb link="https://www.schneiteralimentos.com.ar/" /><SvgInstagram link="https://www.instagram.com/schneiter.consultores/" /></>, logo: '/company/logoSchneiter.png'},
        {id: 4, description: 'Entrenuts', redes: () => <><SvgWeb link="https://entrenuts.com.ar/" /><SvgInstagram link="https://www.instagram.com/entrenuts_en/" /></>, logo: '/company/logoEntreNuts.png'}
      ]
    }
  },
  {
    id: 2,
    name: 'Santa Fe',
    empresas: {
      title: 'Empresas',
      list: [
        {id: 1, description: 'Mielaq', redes: () => <><SvgWeb link="https://mielaqargentina.wixsite.com/mielaq" /><SvgInstagram link="https://www.instagram.com/mielaqnatural/" /></>, logo: '/company/logoMielaq.png'}  
      ]
    }
  },
  {
    id: 3,
    name: 'Cordoba',
    empresas: {
      title: 'Empresas',
      list: [
        {id: 1, description: 'Diego Bessone Apicultura',redes: () => <><SvgWeb link="" /><SvgInstagram link="https://www.instagram.com/" /></>, logo: '/company/logoBessone.jpg'}  
      ]
    }
  }
];


export const companySupport = [
{
  id: 1,
  src:'/companySupport/logoAA.png',
},
  {
    id: 2,
    src:'/companySupport/logoICBC.png',
  },
  {
    id: 3,
    src:'/companySupport/logoICBC.png',
  }
];
