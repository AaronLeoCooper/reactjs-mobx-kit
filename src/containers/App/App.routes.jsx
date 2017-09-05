import Hello from '../../components/Hello';

const routes = [
  {
    path: '/',
    component: Hello,
    exact: true,
    navOptions: {
      label: 'Home'
    }
  },
  {
    path: '/temp',
    component: Hello,
    navOptions: {
      label: 'Home 2'
    }
  }
];

export default routes;
