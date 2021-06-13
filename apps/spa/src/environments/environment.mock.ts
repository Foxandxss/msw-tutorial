import { worker } from '@msw-tutorial/mock-api';

worker.start({
  onUnhandledRequest: 'bypass',
});

export const environment = {
  production: false,
};
