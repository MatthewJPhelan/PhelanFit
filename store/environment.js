// Define a getter in order to get your current username from your state
export const getters = {
  API_URL: () => {
    return process.env.API_URL || 'http://localhost:1337'
  }
}
