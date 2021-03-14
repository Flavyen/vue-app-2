<template>
  <v-card class="mx-auto"  max-width="400">
    <v-img class="white--text align-end" height="200px" :src="game.image">
    </v-img>

    <v-card-subtitle class="pb-0">
      <v-row>
        <v-col>
          <font-awesome-icon icon="users" />  {{ game.minPlayers}} à {{ game.maxPlayers}}
        </v-col>
      </v-row>

    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ game.name }}</div>

      <div><font-awesome-icon icon="clock" /> {{ game.playingTime }} min</div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: "GamesComponent",
  props: {
    game: {}
  }
}
</script>

<style scoped>

</style>