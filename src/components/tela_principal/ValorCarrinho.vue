<template>
  <div class="valor-total bg-light p-3 m-1" style="width: 95%; border-radius: 8px">
    <div class="row align-items-center">
      <div class="col-6 text-start">
        <h5>Total:</h5>
      </div>

      <div class="col-6 text-end">
        <h3 class="text-success">
          <span class="fw-bold">{{ formataPreco(valorTotal) }}</span>
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
