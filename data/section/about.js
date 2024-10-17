import SvgInstagram from "@/components/Section/About/SvgInstagram";
import SvgWeb from "@/components/Section/About/SvgWeb";


export const features = [
    {   
      id: 1,
      name: 'Entre Rios',   
      empresas: {
        title: 'Empresas',
        list: [
          {id: 1, description: 'Charadia Apicultura', redes: () => <SvgInstagram link="https://www.instagram.com/clarodia.miel/" />, logo: '/company/logoCharadia.jpeg'}, 
          {id: 2, description: 'COADELPA', redes: () => <SvgWeb link="https://coadelpa.com/" />, logo: '/company/logoCOADELPA.jpg'},
          {id: 3, description: 'Schneiter', redes: () => <SvgWeb link="https://www.schneiteralimentos.com.ar/" />, logo: '/company/logoSchneiter.png'},
          {id: 4, description: 'Entre Nuts', redes: () => <SvgWeb link="https://entrenuts.com.ar/" />, logo: '/company/logoEntreNuts.png'}
        ]
      }
    },
    {
      id: 2,
      name: 'Santa Fe',
      empresas: {
        title: 'Empresas',
        list: [
          {id: 1, description: 'Mielaq', redes: () => <SvgWeb link="https://mielaqargentina.wixsite.com/mielaq" />, logo: '/company/logoMielaq.jpg'}  
        ]
      }
    },
    {
      id: 3,
      name: 'Cordoba',
      empresas: {
        title: 'Empresas',
        list: [
          {id: 1, description: 'Diego Bessone Apicultura', logo: '/company/logoBessone.jpg'}  
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