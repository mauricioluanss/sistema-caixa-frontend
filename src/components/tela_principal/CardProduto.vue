<template>
  <div class="card">
    <div class="card-body">
      <div class="row mt-1 mb-2">
        <div class="col-12 text-left">
          <p class="card-title">{{ descricao }}</p>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-8 text-left">
          <h3 class="card-text">{{ formataPreco(valorUnitario) }}</h3>
        </div>

        <div class="col-4 text-end">
          <small class="text-muted">Qtd: {{ qtdEstoque }}</small>
        </div>
      </div>

      <div class="row mt-2 mb-1">
        <div class="col-12 text-center">
          <button class="btn btn-primary w-100" @click="adicionar">+ Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formataPreco } from '@/utils/formatadores'

export default {
  props: {
    produto: {
      type: Object,
      required: true,
    },
  },

  computed: {
    descricao() {
      return this.produto?.descricao || 'produto nao encontrado'
    },

    valorUnitario() {
      return this.produto?.valorUnitario || 'valor unitario nao disponivel'
    },

    qtdEstoque() {
      return this.produto?.qtdEstoque || 'quantidade nao disponivel'
    },
  },

  methods: {
    adicionar() {
      this.$emit('adicionar_produto', this.produto)
    },

    formataPreco: formataPreco,
  },
}
</script>

<style scoped>
h3 {
  font-weight: bold;
  color: #16a34a;
}

button {
  background-color: #2563eb;
}
button:hover {
  background-color: #3873ff;
}
.card {
  width: 15em;
  border-radius: 1em;
  border-color: rgba(201, 199, 199, 0.659);
}

.card:hover {
  box-shadow: 0 1px 4px 0 #00000133;
}

small {
  font-size: 12px;
}
</style>
