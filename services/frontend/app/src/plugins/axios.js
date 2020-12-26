export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Request to ' + config.url)
  })
  
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      console.log("400 Error on request")
    }
  })
}