<template>
  <div class="container">
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error.status }} - {{ error.message }}
    </div>
    <div v-if="artist" class="card center" style="width: 18rem">
      <img
        :src="artist.images[0].url"
        class="card-img-top"
        :alt="artist.name"
      />
      <div class="card-body">
        <h5 class="card-title">{{ artist.name }}</h5>
        <p class="card-text">Followers: {{ artist.followers.total }}</p>
        <p class="card-text">
          Genres:
          <span
            v-for="genre in artist.genres"
            :key="genre"
            class="badge bg-success"
          >
            {{ genre }}
          </span>
        </p>
        <a :href="artist.external_urls.spotify" class="btn btn-primary">
          Go to spotify
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getArtist } from "./services/artist.services";

export default {
  name: "App",
  data() {
    return {
      artist: null,
      error: null,
    };
  },
  mounted() {
    this.loadArtist("3");
  },
  methods: {
    async loadArtist(id) {
      try {
        this.artist = await getArtist(id);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
