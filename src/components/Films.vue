<template>
  <div><SearchFilms/></div>
  <div class="section">
    <div class="sub-section">
      <GenericTable :type="type" :data="films" :columns="tableColumns" :is-Paginated="isPaginated" :init-sort-key="name"
        :init-limit="limit" :tableName="tableName"></GenericTable>
      </div>
    </div>
</template>
<script>
import GenericTable from './GenericTable.vue'
import SearchFilms from './SearchFilms.vue'
import FilmDataService from '../services/FilmDataService'
export default {
  // eslint-disable-next-line
  name: 'Films',
  components: {
    GenericTable, SearchFilms
  },
  props: {
    msg: String,
  },
  data() {
    return {
      films: [],
      currentFilm: null,
      currentIndex: -1,
      title: "",
      tableColumns: [
        { label: 'ID', field: 'id', sortable: true },
        { label: 'Name', field: 'name', sortable: true },
        { label: 'Genre', field: 'genre', sortable: true },
        { label: 'Bewertung', field: 'rating', sortable: true },
        { label: 'Notizen', field: 'notes', sortable: true },
        { label: 'Medium', field: 'media', sortable: true },
        { label: 'Ort', field: 'location', sortable: true },
        { label: 'Start', field: 'year', sortable: true },
        { label: 'IMDB', field: 'url', sortable: true },
        
      ],
      isPaginated: true,
      limit: 20,
      tableName: 'Filme',
      type: 'films',
      name: 'name'
    }
  },
  methods: {
    retrieveFilms() {
      FilmDataService.getAll()
        .then(response => {
          this.films = response.data;
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