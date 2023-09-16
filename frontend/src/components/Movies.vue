<template>
  <div class="section">
  <div class="title">Filme</div>
<div class="sub-section">
  <Table :fields='fields' :tableData="tableData"></Table>
</div>
</div>
</template>

   
<script>
import Table from './Table.vue'
export default {
  // eslint-disable-next-line
  name: 'Movies',
  components: {
    Table
  },
  props: {
    msg: String,
  },
  data() {
    return {}
  },
  setup() {
    //An array of values for the data
    const tableData = [
      { ID: "01", Name: "Abiola Esther", Course: "Computer Science", Gender: "Female", Age: "17" },
      { ID: "02", Name: "Robert V. Kratz", Course: "Philosophy", Gender: "Male", Age: '19' },
      { ID: "03", Name: "Kristen Anderson", Course: "Economics", Gender: "Female", Age: '20' },
      { ID: "04", Name: "Adam Simon", Course: "Food science", Gender: "Male", Age: '21' },
      { ID: "05", Name: "Daisy Katherine", Course: "Business studies", Gender: "Female", Age: '22' },
    ]
    const fields = [
      'ID', 'Name', 'Genre', 'Jahr', 'Bewertung', 'Notizen'
    ]
    return { tableData, fields }
  },
}
</script>