import { defineStore } from 'pinia'
import type { Order, TicketOrder } from '~~/types/tickets'

export const useCart = defineStore(
  'cart',
  () => {
    const user = useSupabaseUser()

    // Initialize progress from local storage
    const order = ref<Order>({ user })

    // Toggle the progress of a lesson based on chapter slug and lesson slug
    const addTicketOrder = (
      ticketOrder: TicketOrder
    ) => {
      // If there's no user we can't update the cart
      if (!user.value || !ticketOrder) { return }
      if (!order.value.ticketOrder) { order.value.ticketOrder = [ticketOrder] } else { order.value.ticketOrder[order.value.ticketOrder.length] = ticketOrder }
    }

    return {
      order,
      addTicketOrder
    }
  }
)
