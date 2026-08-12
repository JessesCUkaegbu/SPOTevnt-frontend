import client from './client'

export const initiateCheckout = (payload) => client.post('/ticketing/checkout/', payload)
export const createOrder = (payload) => client.post('/ticketing/orders/', payload)
export const verifyTicket = (payload) => client.post('/ticketing/verify/', payload)
