import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

// busca todos produtos
export const buscaTodosProdutos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/produtos`)
    return response.data
  } catch (erro) {
    console.error(erro)
    throw erro
  }
}
