export type Lang = 'it' | 'en'

export const templates: Record<Lang, { subject: string; body: string }> = {
  it: {
    subject: 'Richiesta prenotazione BlueWave',
    body: `Buongiorno,\n\nVorrei prenotare la BlueWave dal: \nData arrivo:\nData partenza:\nNumero ospiti:\nNome:\nTelefono:\nNote:\n\nGrazie,\n`,
  },
  en: {
    subject: 'Booking request BlueWave',
    body: `Hello,\n\nI would like to book BlueWave from: \nArrival date:\nDeparture date:\nNumber of guests:\nName:\nPhone:\nNotes:\n\nThanks,\n`,
  },
}

export function getMailHref(lang: Lang = 'it', email?: string) {
  const t = templates[lang]
  const subject = encodeURIComponent(t.subject)
  const body = encodeURIComponent(t.body)
  const addr = email ?? 'bluewavehhouse@gmail.com'
  return `mailto:${addr}?subject=${subject}&body=${body}`
}
