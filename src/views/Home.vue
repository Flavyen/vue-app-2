<template>
  <v-container>
    <v-text-field v-model="search"></v-text-field>
    <v-row>
      <v-col v-for="(game, idx) in filteredArticles" :key="idx">
        <Game :game="game"/>
      </v-col>
      <div>
        <v-col v-if="!loading">

        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Game from "@/components/GamesComponent";
import axios from "axios";

export default {
  name: "Home",
  components: {Game},
  data() {
    return {
      games: [],
      search: '',
      loading: false
    }
  },
  computed: {
    filteredArticles: function () {
      let games_array = this.games,
          searchString = this.search
      if (!searchString) return games_array
      searchString = searchString.trim().toLowerCase();
      games_array = games_array.filter(item => {
        if (item.name.toLowerCase().includes(searchString)) {
          return item
        }
      })
      return games_array
    }
  },
  methods: {
    getData() {
      axios.get('https://bgg-json.azurewebsites.net/collection/edwalter')
          .then(response => {
            this.games = response.data
            this.loading = false
          })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>

</style>