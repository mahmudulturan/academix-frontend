"use client";

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const locales = ['en', 'bn'];

const getLanguageFlag = (locale: string) => {
  switch (locale) {
    case 'en':
      return '🇺🇸';
    case 'bn':
      return '🇧🇩';
    default:
      return '🇺🇸';
  }
};

const getLanguageName = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'bn':
      return 'বাংলা';
    default:
      return 'English';
  }
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <span>{getLanguageFlag(locale)}</span>
          <span>{getLanguageName(locale)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLocale(lang)}
            className={`gap-2 ${locale === lang ? 'bg-accent' : ''}`}
          >
            <span>{getLanguageFlag(lang)}</span>
            <span>{getLanguageName(lang)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}