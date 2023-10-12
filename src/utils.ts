import * as Astro from 'astro'

export const setCookie = (cookies: Astro.AstroCookies, key: string, value: string) => {
  cookies.set(key, value, {
    sameSite: 'lax',
    path: '/',
  })
}

export const getCookie = (cookies: Astro.AstroCookies, key: string): string | undefined =>
  cookies.get(key)?.value
