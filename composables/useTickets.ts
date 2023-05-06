import type { EventTicket } from '~~/types/tickets'

export function useTickets (): EventTicket[] {
  return [
    {
      id: 1,
      titleKey: 'tickets.trancedance20march',
      unitPrice: 48,
      date: new Date('03/20/2023')
    },
    {
      id: 2,
      titleKey: 'tickets.trancedance17april',
      unitPrice: 48,
      date: new Date('04/17/2023')
    }
  ]
}
