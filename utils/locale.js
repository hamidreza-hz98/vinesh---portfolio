export const getCurrentLocale = () => {
  if (typeof document !== 'undefined') {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];
    return cookieLocale || 'en';
  }
  return 'en';
}

export const setLangDirection = (locale) => {
  if(locale === "fa"){
    return "rtl"
  }

  return "ltr"
}