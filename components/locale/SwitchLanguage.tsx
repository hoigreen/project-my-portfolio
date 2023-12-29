'use client';

import { useChangeLocale } from '../../locales/client';
import { Button } from '../ui/button';

export function Switch() {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);

  return (
    <>
      <Button type="button" onClick={() => changeLocale('en')}>
        ENGLISH
      </Button>
      <Button type="button" onClick={() => changeLocale('vi')}>
        VIỆT NAM
      </Button>
    </>
  );
}