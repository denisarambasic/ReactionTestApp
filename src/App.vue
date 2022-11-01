<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-tabs>
              <router-link :to="{name:'home'}">
                <v-tab>Home</v-tab>
              </router-link>
              <router-link :to="{name:'top3'}">
                <v-tab>Top 3</v-tab>
              </router-link>
              <router-link :to="{name:'allPlayers'}">
                <v-tab>All Players</v-tab>
              </router-link>
            </v-tabs>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="center-content">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.v-main{
  background:#f2f2f2 ;
}
.v-slide-group__content a {
  text-decoration: none;
}
.center-content {
  text-align: center;
}
</style>