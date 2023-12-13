<template>
  <div class="section">
    <div class="sub-section">
      <GenericTable :type="type" :data="receipts" :columns="tableColumns" :is-Paginated="isPaginated" :init-sort-key="name"
        :init-limit="limit" :tableName="tableName"></GenericTable>
      </div>
    </div>
</template>
<script>
import GenericTable from './GenericTable.vue'
import ReceiptDataService from '../services/ReceiptDataService'
export default {
  // eslint-disable-next-line
  name: 'Receipts',
  components: {
    GenericTable
  },
  props: {
    msg: String,
  },
  data() {
    return {
      receipts: [],
      currentReceipt: null,
      currentIndex: -1,
      title: "",
      tableColumns: [
      { label: 'ID', field: 'id', sortable: true },
        { label: 'Name', field: 'name', sortable: true },
        { label: 'Genre', field: 'genre', sortable: true },
        { label: 'Bewertung', field: 'rating', sortable: true },
        { label: 'Notizen', field: 'notes', sortable: true }
      ],
      isPaginated: true,
      limit: 20,
      tableName: 'Receipts',
      type: 'receipts'
    }
  },
  methods: {
    retrieveFilms() {
      ReceiptDataService.getAll()
        .then(response => {
          this.films = response.data;
          console.log("Response: " + JSON.stringify(response.data[0]));
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
      ReceiptDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      ReceiptDataService.findByTitle(this.title)
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