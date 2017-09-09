import Editor from '../../components/Editor';

const routes = [
  {
    path: '/',
    component: Editor,
    exact: true,
    navOptions: {
      label: 'Editor'
    }
  }
];

export default routes;
