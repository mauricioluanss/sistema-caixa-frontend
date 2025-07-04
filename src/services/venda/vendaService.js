// manda payload para o backend
import axios from 'axios'

const url = 'http://localhost:3000/api/vendas'

export const enviaPayload = async (data) => {
  try {
    const response = await axios.post(url, data)
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
