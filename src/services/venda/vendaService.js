import axios from 'axios'

export const chamaVenda = async (payload) => {
  try {
    const response = await axios.post('http://localhost:3000/api/vendas', payload)
    return response.data
  } catch (error) {
    console.error('Erro no serviço de API ao chamar venda:', error)
    throw error
  }
}
