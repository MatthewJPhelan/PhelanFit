import Cookies from 'js-cookie'

export const state = () => {}

export const mutations = {
  setUser (state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  // Mutation that you need to add
  logout (state) {
    state.user = null
    Cookies.set('user', null)
  }
}

// Define a getter in order to get your current username from your state
export const getters = {
  user: (state) => {
    return state.user
  },
  username: (state) => {
    return state.user && state.user.username
  },
  email: (state) => {
    return state.user.email
  },
  API_URL: (state) => {
    return process.env.API_URL || 'http://localhost:1337'
  }
}
