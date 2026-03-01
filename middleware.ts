import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Aplica o middleware a todas as rotas exceto API, _next e arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
