import type User from '@nuxtjs/supabase'

export interface EventTicket {
  id: number
  titleKey: string
  date: Date
  unitPrice: number
}

export interface TicketOrder {
  ticket: EventTicket
  fullname: string
  email: string
}

export interface Order {
  ticketOrder: Maybe<TicketOrder[]>
  user: Maybe<typeof User>
}
