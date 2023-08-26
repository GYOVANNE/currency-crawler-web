import axios from 'axios'

export const api = axios.create({
  baseURL: `http://localhost:4002/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response.status == 422) {
        console.error(error.response.errors)
      return Promise.reject(error)
    }
    return api
  }
)
