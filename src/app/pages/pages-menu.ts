import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
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
    title: 'Propiedades',
    icon: 'home-outline',
    children: [
      {
        title: 'Listar',
        link: '/pages/estate'
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
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
