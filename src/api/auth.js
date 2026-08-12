import client from './client'

export const login = (payload) => client.post('/auth/login/', payload)
export const register = (payload) => client.post('/auth/register/', payload)
export const getProfile = () => client.get('/auth/profile/')
export const logout = () => localStorage.removeItem('spot_token')
