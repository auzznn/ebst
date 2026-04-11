import { format, isToday, isYesterday, isThisWeek, isThisYear } from 'date-fns'

export function formatMessageTime(date: string | Date): string {
  const d = new Date(date)

  if (isToday(d)) {
    return format(d, 'HH.mm')                // 2:30 PM
  }

  if (isYesterday(d)) {
    return `Yesterday at ${format(d, 'HH.mm')}`  // Yesterday at 2:30 PM
  }

  if (isThisWeek(d)) {
    return format(d, 'EEEE, HH.mm')          // Monday, 2:30 PM
  }

  if (isThisYear(d)) {
    return format(d, 'd MMM, h.mm')         // Jan 5, 2:30 PM
  }

  return format(d, 'd MMM yyyy, h.mm')      // Jan 5 2023, 2:30 PM
}

export function formatDateDivider(date: string | Date): string {
  const d = new Date(date)

  if (isToday(d)) return 'Today'
  if (isYesterday(d)) return 'Yesterday'
  if (isThisWeek(d)) return format(d, 'EEEE')          // Monday
  if (isThisYear(d)) return format(d, 'd MMM')        // January 5
  return format(d, 'd MMM, yyyy')                     // January 5, 2023
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return format(d, 'd MMM yyyy')
}