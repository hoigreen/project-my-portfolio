import { createI18nServer } from 'next-international/server';
// import en from './en';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer(
  {
    en: () => import('./en'),
    vi: () => import('./vi'),
  },
  {
    // Uncomment to use custom segment name
    // segmentName: 'locale',
    // Uncomment to set fallback locale
    // fallbackLocale: en,
  },
);