import client from './client'

export const getEvents = (params) => client.get('/events/', { params })
export const getEvent = (slug) => client.get(`/events/${slug}/`)
export const createEvent = (payload) => client.post('/organizer/events/', payload)
export const updateEvent = (id, payload) => client.patch(`/organizer/events/${id}/`, payload)
export const deleteEvent = (id) => client.delete(`/organizer/events/${id}/`)
export const getOrganizerEvents = () => client.get('/organizer/events/')
