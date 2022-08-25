export const getDateParams = (day: string) => {
  let date = new Date(day)

  let formatterDate = new Intl.DateTimeFormat('ru', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })

  const dayNumber = formatterDate.format(date)

  let formatterWeekday = new Intl.DateTimeFormat('ru', {
    weekday: 'long',
  })

  const weekday = formatterWeekday.format(date)

  return { dayNumber, weekday }
}
