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

/* import axios from 'axios'

const url_meubackend = 'http://localhost:3000/api/vendas'
const url_payer_pagamento = 'http://localhost:6060/Client/request'
const url_payer_resposta = 'http://localhost:6060/Client/response'

export const enviaPayload = async (data) => {
  try {
    const { paymentMethod, paymentType, produtos } = data

    const value = produtos.reduce((prev, curr) => {
      const subtotal = curr.quantidade * parseFloat(curr.valorUnitario)
      return subtotal + prev
    }, 0)

    const payload = {
      command: 'payment',
      value: value,
      paymentMethod: paymentMethod,
      paymentType: paymentType,
    }

    console.log(payload)
    await axios.post(url_payer_pagamento, payload) // MANDA A TRANSAÇÃO

    let tentativas = 10
    const timeout = 3000

    while (tentativas > 0) {
      await new Promise((resolve) => setTimeout(resolve, timeout))

      const response = await axios.get(url_payer_resposta)
      const status = response.data?.statusTransaction

      console.log(status)

      if (status === 'APPROVED') {
        await axios.post(url_meubackend, data)
        return { sucesso: true, dados: response.data }
      }
      if (status === 'REJECTED') {
        throw new Error('pagamento nao autorizado :(')
      }
      if (status === 'CANCELLED') {
        throw new Error('pagamento cancelado')
      }
      if (status === 'ABORTED') {
        throw new Error('pagamento abortada')
      }

      tentativas--
    }

    throw new Error('Tempo de espera esgotado')
  } catch (error) {
    console.error('Erro no serviço de API ao chamar venda:', error.message)
    throw error
  }
}
 */
