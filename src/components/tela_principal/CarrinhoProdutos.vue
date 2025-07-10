<template>
  <div v-for="produto in carrinho" :key="produto.id" class="card mx-auto">
    <div class="card-body py-2">
      <div class="row">
        <div class="col-6">
          <small class="text-muted">{{ produto.descricao }}</small>
        </div>

        <div class="col-6 d-flex align-items-center justify-content-end">
          <BotaoGenerico id="butao" @click="decrementarOuRemover(produto)">
            <IconDiminuirQtd />
          </BotaoGenerico>

          <section
            class="rounded-3 p-1 d-flex justify-conten-center align-items-center"
            style="background-color: #d6d9d7; width: auto; height: 26px"
          >
            {{ produto.quantidade }}
          </section>

          <BotaoGenerico id="butao" @click="incrementarQuantidade(produto)">
            <IconAumentarQtd />
          </BotaoGenerico>

          <BotaoGenerico
            id="butao"
            style="background-color: rgb(234, 23, 23)"
            @click="removerProdutoCarrino(produto)"
          >
            <IconRemover />
          </BotaoGenerico>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h6 class="fw-bold" style="color: #16a34a">{{ formataPreco(produto.valorUnitario) }}</h6>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-end">
          <hr class="my-1" />
          <strong>Subtotal: {{ formataPreco(produto.valorUnitario * produto.quantidade) }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formataPreco } from '@/utils/formatadores'
import BotaoGenerico from './BotaoGenerico.vue'
import IconAumentarQtd from '../icons/IconAumentarQtd.vue'
import IconDiminuirQtd from '../icons/IconDiminuirQtd.vue'
import IconRemover from '../icons/IconRemover.vue'

export default {
  components: {
    BotaoGenerico,
    IconAumentarQtd,
    IconDiminuirQtd,
    IconRemover,
  },

  computed: {
    carrinho() {
      return this.$store.state.moduloCarrinho.carrinho
    },
  },

  methods: {
    removerProdutoCarrino(produto) {
      return this.$store.dispatch('moduloCarrinho/chamaRemoverProduto', produto)
    },

    incrementarQuantidade(produto) {
      return this.$store.dispatch('moduloCarrinho/incrementarQuantidade', produto)
    },

    decrementarOuRemover(produto) {
      return this.$store.dispatch('moduloCarrinho/decrementarOuRemover', produto)
    },

    formataPreco: formataPreco,
  },
}
</script>

<style scoped>
.card {
  width: 95%;
  border-radius: 8px;
  box-shadow: 0 1px 5px 0 #00000133;
}

#butao {
  border-style: hidden;
  box-shadow: 0 1px 4px 0 #00000133;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
</style>
