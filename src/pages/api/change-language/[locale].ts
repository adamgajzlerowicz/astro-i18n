import * as Astro from 'astro'
import { setCookie } from '../../../utils.ts'

export const GET: Astro.APIRoute = ({ params, cookies, redirect }) => {
  if (params.locale && ['en', 'pl'].includes(params.locale)) {
    setCookie(cookies, 'locale', params.locale)

    return redirect('/')
  }

  return new Response('incorrect language', {
    status: 400,
  })
}
