import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'https://serene-refuge-08748.herokuapp.com'
const strapi = new Strapi(apiUrl)

export default strapi
export { apiUrl }
