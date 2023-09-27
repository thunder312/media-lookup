<template>
  <div class="section">
    <div class="title">Filme</div>
    <div class="sub-section">
      <div class="list row">
        <div class="col-md-8">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Filmtitel suchen" v-model="title" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
                Suchen
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h4>Film Liste</h4>
          <ul class="list-group">
            <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(film, index) in films"
              :key="index" @click="setActiveFilm(film, index)">
              {{ film.name }}
            </li>
          </ul>

          <!--button class="m-3 btn btn-sm btn-danger" @click="removeAllFilms">
            Alle Filme löschen
          </button-->
          
          <div class="col-md-6">
            <div v-if="currentFilm">
              <h4>Info</h4>
              <div>
                <strong>Titel:</strong> {{ currentFilm.name }}
              </div>
              <div>
                <strong>Notizen:</strong>{{ currentFilm.notes }}
              </div>
              <div>
                <strong>Erscheinungsdatum:</strong> {{ formatDate(currentFilm.year) }}
              </div>

              <a class="badge badge-warning" :href="'/films/' + currentFilm.id">
                Edit
              </a>
            </div>
            <div v-else>
              <br />
              <p>Bitte wählen Sie einen Film aus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

   
<script>
//import GenericTable from './GenericTable.vue'
import FilmDataService from '../services/FilmDataService'
import dayjs from 'dayjs';
export default {
  // eslint-disable-next-line
  name: 'Films',
  components: {
    // GenericTable
  },
  props: {
    msg: String,
  },
  data() {
    return {
      films: [],
      currentFilm: null,
      currentIndex: -1,
      title: ""
    }
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('DD.MM.YYYY');
    },
    retrieveFilms() {
      FilmDataService.getAll()
        .then(response => {
          this.films = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveFilms();
      this.currentFilm = null;
      this.currentIndex = -1;
    },

    setActiveFilm(film, index) {
      this.currentFilm = film;
      this.currentIndex = index;
    },

    removeAllFilms() {
      FilmDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      FilmDataService.findByTitle(this.title)
        .then(response => {
          this.films = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveFilms();
  }
};
</script>