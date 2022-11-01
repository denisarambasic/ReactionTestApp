<template>
  <h1>Reaction Game</h1>
  <p>Test your reaction speed</p>
  <v-btn
      class="ma-2"
      :disabled="$store.state.gameStarted"
      color="success"
      @click="$store.commit('startGame')"
    >
      Start Game
  </v-btn>
  <Block v-if="$store.state.gameStarted" />
  <AddPlayer v-if="$store.state.savePlayerFormVisible" />
</template>

<script>
import Block from '../components/Block.vue'
import AddPlayer from '../components/AddPlayer.vue'

export default {
  name: 'HomeView',
  components: { Block, AddPlayer },
}
</script>
