import 'normalize.css';
import 'dayjs/locale/zh-cn';
import '@/api';

// 在这里引入sentry
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'http://c3943cb1f3404895aa5efb3586c99e48@60.12.241.84:29177/3',
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
