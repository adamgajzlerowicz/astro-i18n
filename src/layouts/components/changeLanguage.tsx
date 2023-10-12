import { useStore } from '@nanostores/solid'
import { navigation } from '../../stores/i18n.ts'

export default function () {
  const t = useStore(navigation)

  return (
    <div>
      <div class="flex gap-5 items-center p-20 justify-center bg-blue-400">
        {t().app}
        <a href="/api/change-language/pl">
          <img
            class="underline cursor-pointer"
            src={'https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg'}
            alt="język polski"
            width="100"
            height="100"
          />
        </a>

        <a href="/api/change-language/en">
          <img
            class="underline cursor-pointer"
            src={'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'}
            alt="change page language to english"
            width="100"
            height="100"
          />
        </a>
      </div>
    </div>
  )
}
