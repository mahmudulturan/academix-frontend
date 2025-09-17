import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Function to load and merge all translation files for a locale
async function loadMessages(locale: string) {
  const modules = [
    'common',
    'navigation',
    'auth',
    'dashboard',
    'student',
    'teacher',
    'class',
    'subject',
    'attendance',
    'routine',
    'notice',
    'exam',
    'result',
    'document',
    'account',
    'rbac',
    'forms',
    'errors',
    'success',
    'time',
    'constants'
  ];

  const messages: Record<string, unknown> = {};

  for (const m of modules) {
    try {
      const moduleMessages = (await import(`../locales/${locale}/${m}.json`)).default;
      messages[m] = moduleMessages;
    } catch (error) {
      console.warn(`Failed to load ${module} translations for ${locale}:`, error);
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'bn')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await loadMessages(locale)
  };
});