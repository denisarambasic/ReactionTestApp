<template>
<h1>Top 3 players</h1>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Reaction Time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="player in players"
          :key="player.id"
        >
          <td>{{ player.name }}</td>
          <td>{{ player.reactionTime }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { id:1, name: "player1", reactionTime: 4.151 },
        { id:2, name: "player2", reactionTime: 4.552 },
        { id:3, name: "player3", reactionTime: 5.251 },
      ]
    }
  }

}
</script>

<style>

</style>