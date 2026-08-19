import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

export const CAL_LINK = 'digitalimpacto/45min'
export const CAL_NAMESPACE = '45min'

/**
 * Inicializa el embed de Cal.com una sola vez. Los botones que lleven los
 * atributos `data-cal-link` / `data-cal-namespace` abren el popup.
 */
export function useCalPopup() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#E31E24' },
          dark: { 'cal-brand': '#E31E24' },
        },
      })
    })()
  }, [])
}

/** Props que convierten cualquier botón en disparador del popup de Cal.com. */
export const calTriggerProps = {
  'data-cal-namespace': CAL_NAMESPACE,
  'data-cal-link': CAL_LINK,
  'data-cal-config': '{"layout":"month_view"}',
}
