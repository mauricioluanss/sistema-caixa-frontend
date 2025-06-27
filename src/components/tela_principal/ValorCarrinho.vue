<template>
  <div class="card">
    <label for="total">TOTAL</label>
    <p id="total">{{ formataPreco(valorTotal) }}</p>
  </div>
</template>
<script>
import { formataPreco } from '@/utils/formatadores'

export default {
  computed: {
    valorTotal() {
      return this.$store.getters.valorTotalCarrinho
    },
  },

  methods: {
    formataPreco: formataPreco,
  },
}
</script>
