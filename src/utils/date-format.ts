const DateFormat = (date: string) => {
  const new_date = new Date(date)

  const formatted_date = new_date.toLocaleDateString('en-us', { 
    year: 'numeric', 
    month: 'short', 
    day: '2-digit',
    timeZone: 'Europe/Berlin'
  })

  return formatted_date
}

export default DateFormat