import axios from 'axios'

//const url_meubackend = 'http://localhost:3000/api/vendas'
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
    await axios.post(url_payer_pagamento, payload)

    let tentativas = 10
    const timeout = 2000

    while (tentativas > 0) {
      await new Promise((resolve) => setTimeout(resolve, timeout))

      const response = await axios.get(url_payer_resposta)
      const status = response.data?.statusTransaction

      if (status === 'APROVED') {
        console.log('pagamento aprovado paizao')
        return { sucesso: true, dados: response.data }
      }
      if (status === 'REJECTED') {
        console.log('pagamento nao autorizado :(')
        throw new Error('pagamento nao autorizado :(')
      }

      tentativas--
    }

    throw new Error('Tempo de espera esgotado')
  } catch (error) {
    console.error('Erro no serviço de API ao chamar venda:', error.message)
    throw error
  }
}
