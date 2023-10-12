import { createI18n, localeFrom, browser } from '@nanostores/i18n'
import { fetchJson } from 'fetch-json'
import { persistentAtom } from '@nanostores/persistent'
import Cookies from 'js-cookie'

export const setting = persistentAtom<string | undefined>('locale', Cookies.get('locale') ?? '', {})

export const locale = localeFrom(
  setting,
  browser({
    available: ['en', 'pl'],
    fallback: 'en',
  }),
)

export const i18n = createI18n(locale, {
  async get(code) {
    if (code === 'pl') {
      return Promise.resolve({})
    }
    return fetchJson.get(`/translations/${code}.json`)
  },
  baseLocale: 'pl'
})

export const navigation = i18n('navigation', {
  app: 'Aplikacja',
  about: 'O nas',
  contact: 'Kontakt',
  login: 'Zaloguj się',
  download: 'Pobierz',
  agility: 'Agility',
})

navigation.subscribe(t => {
  console.log(t.app)
})
