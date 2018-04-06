import { API_URL } from '../app/config'

export function validateDataFromServer (data) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const url = `${API_URL}v1/admin`

  return window.fetch(url, options)
}
