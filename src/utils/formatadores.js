export function formataPreco(valor) {
  const valorConvertido = parseFloat(valor)

  if (!isNaN(valorConvertido)) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valorConvertido)
  }
  return 'Valor não disponível.'
}
