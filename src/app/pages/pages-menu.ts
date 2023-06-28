  import { NbMenuItem } from '@nebular/theme';

  export const MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Registrar usuario',
      icon: 'home-outline',
      children: [
        {
          title: 'Registro de usuario',
          icon: 'home-outline',
          link: '/pages/registro/usuario'
        }
      ]
      },
      {

        title: 'Login usuario',
        icon: 'home-outline',
        children: [
          {
            title: 'Mostrar login usuario',
            icon: 'home-outline',
            link: '/pages/login/usuario'
          }
        ]
      },
      {
        title: 'Sucursales',
        icon: 'briefcase-outline',
        children: [
          {
            icon: 'briefcase-outline',
            title: 'Registrar Sucursal',
            link: '/pages/sucursal/create-sucursal'
          }
        ]
      },
    {
      title: 'Inmuebles',
      icon: 'home-outline',
      children: [
        {
          title: 'Ingresar Inmueble',
          icon: 'home-outline',
          link: '/pages/inmuebles/create-inmuebles'

        },
        {
          title: 'Mostrar Lista Inmuebles',
          icon: 'home-outline',
          link: '/pages/inmueble/list'
        }
      ]
    },
      {
        title: 'Ofertas',
        icon: 'briefcase-outline',
        children: [
          {
            icon: 'home-outline',
            title: 'Lista de Ofertas',
            link: '/pages/oferta/list-oferta'
          }
        ]
      },
    {
      //Listar visitas inmueble
      title: 'visitas',
      icon: 'keypad-outline',
      link: '/pages/visitas/actual-visita'
    },
    
  ];
