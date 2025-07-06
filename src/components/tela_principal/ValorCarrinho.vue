<template>
  <div class="bg-light p-3 rounded-3 valor-total">
    <div class="row align-items-center">
      <div class="col-6 text-start">
        <h5>Total:</h5>
      </div>

      <div class="col-6 text-end">
        <h3 class="text-success">
          {{ formataPreco(valorTotal) }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import { formataPreco } from '@/utils/formatadores'

export default {
  computed: {
    valorTotal() {
      return this.$store.getters['moduloCarrinho/valorTotalCarrinho']
    },
  },

  methods: {
    formataPreco: formataPreco,
  },
}
</script>

<style scoped>
.valor-total {
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
