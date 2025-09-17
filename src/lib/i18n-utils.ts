import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

type TranslationKey =
  | 'common'
  | 'navigation'
  | 'auth'
  | 'dashboard'
  | 'student'
  | 'teacher'
  | 'class'
  | 'subject'
  | 'attendance'
  | 'routine'
  | 'notice'
  | 'exam'
  | 'result'
  | 'document'
  | 'account'
  | 'rbac'
  | 'forms'
  | 'errors'
  | 'success'
  | 'time'
  | 'constants';

export const useTypedTranslations = (namespace: TranslationKey) => {
  return useTranslations(namespace);
};

export const useCommonTranslations = () => useTranslations('common');
export const useNavigationTranslations = () => useTranslations('navigation');
export const useAuthTranslations = () => useTranslations('auth');
export const useDashboardTranslations = () => useTranslations('dashboard');
export const useStudentTranslations = () => useTranslations('student');
export const useTeacherTranslations = () => useTranslations('teacher');
export const useClassTranslations = () => useTranslations('class');
export const useSubjectTranslations = () => useTranslations('subject');
export const useAttendanceTranslations = () => useTranslations('attendance');
export const useRoutineTranslations = () => useTranslations('routine');
export const useNoticeTranslations = () => useTranslations('notice');
export const useExamTranslations = () => useTranslations('exam');
export const useResultTranslations = () => useTranslations('result');
export const useDocumentTranslations = () => useTranslations('document');
export const useAccountTranslations = () => useTranslations('account');
export const useRbacTranslations = () => useTranslations('rbac');
export const useFormTranslations = () => useTranslations('forms');
export const useErrorTranslations = () => useTranslations('errors');
export const useSuccessTranslations = () => useTranslations('success');
export const useTimeTranslations = () => useTranslations('time');
export const useGenderTranslations = () => useTranslations('constants.gender');
export const useReligionTranslations = () => useTranslations('constants.religion');
export const useBloodGroupTranslations = () => useTranslations('constants.bloodGroup');

// Utility function for formatted translations with placeholders
export const formatTranslation = (template: string, params: Record<string, string | number>) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key]?.toString() || match;
  });
};


// Define locale type to match our routing configuration
export type Locale = 'en' | 'bn';

// Interface for database Name type (from ER diagram)
export interface LocalizedName {
  en?: string;
  bn?: string;
}

/**
 * Get localized name from database Name field
 */
export const getLocalizedName = (nameObj: LocalizedName | string, locale: Locale): string => {
  if (typeof nameObj === 'string') {
    return nameObj;
  }

  if (!nameObj) {
    return '';
  }

  // Return the requested locale if available, otherwise fallback to other language
  return nameObj[locale] || nameObj.en || nameObj.bn || '';
};

/**
 * React hook to get localized name - works with next-intl
 */
export const useLocalizedName = () => {
  const locale = useLocale() as Locale;

  return (nameObj: LocalizedName | string) => getLocalizedName(nameObj, locale);
};

/**
 * Format date according to locale
 */
export const formatDate = (date: Date | string, locale: Locale, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formatOptions = { ...defaultOptions, ...options };

  if (locale === 'bn') {
    // Use Bengali locale for date formatting
    return new Intl.DateTimeFormat('bn-BD', formatOptions).format(dateObj);
  }

  return new Intl.DateTimeFormat('en-US', formatOptions).format(dateObj);
};

/**
 * React hook for date formatting with current locale
 */
export const useLocalizedDate = () => {
  const locale = useLocale() as Locale;

  return (date: Date | string, options?: Intl.DateTimeFormatOptions) =>
    formatDate(date, locale, options);
};

/**
 * Format time according to locale
 */
export const formatTime = (time: Date | string, locale: Locale): string => {
  const timeObj = typeof time === 'string' ? new Date(time) : time;

  if (locale === 'bn') {
    return new Intl.DateTimeFormat('bn-BD', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(timeObj);
  }

  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(timeObj);
};

/**
 * React hook for time formatting with current locale
 */
export const useLocalizedTime = () => {
  const locale = useLocale() as Locale;

  return (time: Date | string) => formatTime(time, locale);
};

/**
 * Format numbers according to locale
 */
export const formatNumber = (number: number, locale: Locale): string => {
  if (locale === 'bn') {
    return new Intl.NumberFormat('bn-BD').format(number);
  }

  return new Intl.NumberFormat('en-US').format(number);
};

/**
 * React hook for number formatting with current locale
 */
export const useLocalizedNumber = () => {
  const locale = useLocale() as Locale;

  return (number: number) => formatNumber(number, locale);
};

/**
 * Format currency (BDT) according to locale
 */
export const formatCurrency = (amount: number, locale: Locale): string => {
  if (locale === 'bn') {
    return new Intl.NumberFormat('bn-BD', {
      style: 'currency',
      currency: 'BDT',
    }).format(amount);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BDT',
  }).format(amount);
};

/**
 * React hook for currency formatting with current locale
 */
export const useLocalizedCurrency = () => {
  const locale = useLocale() as Locale;

  return (amount: number) => formatCurrency(amount, locale);
};

/**
 * Get direction for locale (future RTL support)
 */
export const getDirection = (): 'ltr' | 'rtl' => {
  // Bengali is LTR, but this function is future-proof for RTL languages
  return 'ltr';
};

/**
 * Translate enum values
 */
export const translateEnum = (
  enumValue: string,
  enumType: 'gender' | 'status' | 'bloodGroup' | 'religion' | 'paymentStatus' | 'paymentMethod',
  locale: Locale
): string => {
  const translations: Record<string, Record<string, Record<Locale, string>>> = {
    gender: {
      male: { en: 'Male', bn: 'পুরুষ' },
      female: { en: 'Female', bn: 'মহিলা' },
      other: { en: 'Other', bn: 'অন্যান্য' },
    },
    status: {
      active: { en: 'Active', bn: 'সক্রিয়' },
      inactive: { en: 'Inactive', bn: 'নিষ্ক্রিয়' },
      pending: { en: 'Pending', bn: 'অপেক্ষমাণ' },
      approved: { en: 'Approved', bn: 'অনুমোদিত' },
      rejected: { en: 'Rejected', bn: 'প্রত্যাখ্যাত' },
      blocked: { en: 'Blocked', bn: 'ব্লক করা' },
    },
    bloodGroup: {
      'A+': { en: 'A+', bn: 'এ+' },
      'A-': { en: 'A-', bn: 'এ-' },
      'B+': { en: 'B+', bn: 'বি+' },
      'B-': { en: 'B-', bn: 'বি-' },
      'AB+': { en: 'AB+', bn: 'এবি+' },
      'AB-': { en: 'AB-', bn: 'এবি-' },
      'O+': { en: 'O+', bn: 'ও+' },
      'O-': { en: 'O-', bn: 'ও-' },
    },
    religion: {
      islam: { en: 'Islam', bn: 'ইসলাম' },
      hinduism: { en: 'Hinduism', bn: 'হিন্দু ধর্ম' },
      christianity: { en: 'Christianity', bn: 'খ্রিস্ট ধর্ম' },
      buddhism: { en: 'Buddhism', bn: 'বৌদ্ধ ধর্ম' },
      other: { en: 'Other', bn: 'অন্যান্য' },
    },
    paymentStatus: {
      pending: { en: 'Pending', bn: 'অপেক্ষমাণ' },
      paid: { en: 'Paid', bn: 'প্রদত্ত' },
      failed: { en: 'Failed', bn: 'ব্যর্থ' },
    },
    paymentMethod: {
      bkash: { en: 'bKash', bn: 'বিকাশ' },
      nagad: { en: 'Nagad', bn: 'নগদ' },
      card: { en: 'Card', bn: 'কার্ড' },
    },
  };

  return translations[enumType]?.[enumValue]?.[locale] || enumValue;
};

/**
 * React hook for enum translation with current locale
 */
export const useLocalizedEnum = () => {
  const locale = useLocale() as Locale;

  return (
    enumValue: string,
    enumType: 'gender' | 'status' | 'bloodGroup' | 'religion' | 'paymentStatus' | 'paymentMethod'
  ) => translateEnum(enumValue, enumType, locale);
};

/**
 * Get browser locale
 */
export const getBrowserLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const browserLocale = navigator.language.split('-')[0];
  return browserLocale === 'bn' ? 'bn' : 'en';
};

/**
 * React hook for getting current locale from next-intl
 */
export const useCurrentLocale = (): Locale => {
  return useLocale() as Locale;
};