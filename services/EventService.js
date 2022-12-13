import axios from 'axios'

const BASE_URL = process.env.BASE_URL ?? '/api/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  }
}
