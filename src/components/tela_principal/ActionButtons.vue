<template>
  <div class="row">
    <div class="col-6">
      <BotaoLimparCarrinho />
    </div>

    <div class="col-6">
      <BotaoPagar />
    </div>
  </div>
</template>

<script>
import BotaoPagar from './botoes/BotaoPagar.vue'
import BotaoLimparCarrinho from './botoes/BotaoLimparCarrinho.vue'

export default {
  components: {
    BotaoPagar,
    BotaoLimparCarrinho,
  },
}
</script>
