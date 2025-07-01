import axios from 'axios'

const url = 'http://localhost:6060/Client/request'

export const chamaPayer = async (payload) => {
  try {
    const { metodoPagamento, produtos, paymentType } = payload

    const valorTotal = produtos.reduce((total, item) => {
      const totalProdutos = item.quantidade * parseFloat(item.valorUnitario)
      return total + totalProdutos
    }, 0)

    const data = {
      command: 'payment',
      value: valorTotal,
      paymentMethod: paymentType,
      paymentType: metodoPagamento,
    }

    await axios.post(url, data)
  } catch (error) {
    console.error(error)
    throw error
  }
}
