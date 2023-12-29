'use client';

import Image from 'next/image';
import { useChangeLocale } from '../../locales/client';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

export function Switch({ locale }: { locale: string }) {
  const changeLocale = useChangeLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='flex items-center justify-between gap-x-2'>
          {locale === 'en' ?
            <>
              <Image
                src='/language/us.svg'
                width={20}
                height={20}
                alt='English'
              />
              <p>English</p>
            </> :
            <>
              <Image
                src='/language/vi.svg'
                width={20}
                height={20}
                alt='Việt Nam'
              />
              <p>Tiếng Việt</p>
            </>
          }
        </div>

      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          <div className='flex items-center justify-between gap-x-2'>
            <Image
              src='/language/us.svg'
              width={20}
              height={20}
              alt='English'
            />
            <p>English</p>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => changeLocale('vi')}>
          <div className='flex items-center justify-between gap-x-2'>
            <Image
              src='/language/vi.svg'
              width={20}
              height={20}
              alt='Việt Nam'
            />
            <p>Việt Nam</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}