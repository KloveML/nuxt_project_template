import { cookie } from '~/utils';

export default function({ route: { name: routeName }, redirect, req }) {
  process.routerMessage = {
    redirect,
    routeName
  };
  const token = cookie.getCookie(
    process.server ? req.headers['cookie'] : document.cookie,
    'token'
  );
  process.token = token;
  if (routeName !== 'login' && !token) {
    redirect('/login');
  }
}
