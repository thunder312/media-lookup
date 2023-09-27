<template>
  <div class="section">
    <div class="title">Filme</div>
    <!--div class="linkbar">
    <router-link to="/addFilm" class="link">Neuer Film</router-link>
  </div-->
    <div class="sub-section">
      <GenericTable :data="tableData" :columns="tableColumns" :is-Paginated="isPaginated" :init-sort-key="name"
        :init-limit="limit" :tableName="tableName"></GenericTable>
    </div>
  </div>
</template>

   
<script>
import GenericTable from './GenericTable.vue'
//import FilmDataService from '../services/FilmDataService'
export default {
  // eslint-disable-next-line
  name: 'Films',
  components: {
    GenericTable
  },
  props: {
    msg: String,
  },
  data() {
    return {
      films: [],
      /*[
        { ID: "01", Name: "Abiola Esther", Genre: "Computer Science", Bewertung: "Female", Jahr: "17", Notizen:"Das ist einfach nur ein fürterlich langer Text, um zu testen, wie sich die Tabelle streckt." },
        { ID: "02", Name: "Robert V. Kratz", Course: "Philosophy", Gender: "Male", Age: '19' },
        { ID: "03", Name: "Kristen Anderson", Course: "Economics", Gender: "Female", Age: '20' },
        { ID: "04", Name: "Adam Simon", Course: "Food science", Gender: "Male", Age: '21' },
        { ID: "05", Name: "Daisy Katherine", Course: "Business studies", Gender: "Female", Age: '22' }
      ],*/
      tableColumns: [
        'ID', 'Name', 'Genre', 'Jahr', 'Bewertung', 'Notizen'
        /*{ label: 'ID', field: 'id', sortable: true },
        { label: 'Name', field: 'name', sortable: true },
        { label: 'Genre', field: 'genre', sortable: true },
        { label: 'Jahr', field: 'year', sortable: true },
        { label: 'Bewertung', field: 'rating', sortable: true },
        { label: 'Notizen', field: 'notes', sortable: true }*/
      ],
      isPaginated: true,
      limit: 20,
      tableName: 'Filme'
    }
  },
  created() {
    //console.log(FilmDataService.getAll());
  },
  methods: {}
}
</script>