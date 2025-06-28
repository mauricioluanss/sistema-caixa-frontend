import axios from 'axios'

// busca todos produtos
export const buscaTodosProdutos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/produtos')
    return response.data
  } catch (erro) {
    console.error(erro)
    throw erro
  }
}
