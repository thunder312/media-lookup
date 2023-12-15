<template>
    <GoogleLogin :callback="this.callback"/>
    <h3>Look for book</h3>
    <table>
        <tr>
          <td>
            Buchtitel
          </td>
          <td>
            <input @keyup.enter="search" v-model="this.inputTitle" id="booktitle-input" type="text" placeholder="Buchtitel"/>
          </td>
          <td>Sophies Welt</td>
        </tr>
        <tr>
          <td>
            ISBN
          </td>
          <td>
            <input @keyup.enter="searchIsbn" v-model="this.inputIsbn" id="isbn-input" type="text" placeholder="ISBN"/>
          </td>
          <td>9783862222391</td>
        </tr>   
    </table>
    <div> 
      <pre v-if="books != null">
        <div>Ergebnisse insgesamt: {{ books.length }}</div>

        <table class="resultTable">
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td class="category">Titel:</td>
            <td>{{ books[0].volumeInfo.title }}</td>
          </tr>
          <tr>
            <td class="category">Unter-Titel:</td>
            <td>{{ books[0].volumeInfo.subtitle }}</td>
          </tr>
          <tr>
            <td class="category">Autor:</td>
            <td>{{ books[0].volumeInfo.authors }}</td>
          </tr>
        </table>

        <!--{{ JSON.stringify(this.books, null, 2) }}-->
      </pre>
    </div>
</template>

<script>
import { globalSearch } from "../api/books-api.js";
import { searchByIsbn } from "../api/books-api.js";

export default {
  name: 'GoogleApiTester',
  components: { },
  data () {
    return {
      callback: null,
      books: null,
      inputTitle: "",
      inputIsbn: "",
    }
  },
  created ()  { 
    this.callback = (response) => {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      console.log("Handle the response", response)
    }
  },
  mounted() {},
  methods: {
    async search() {
      await globalSearch(this.inputTitle).then((response) => {
        if (response.items) {
          this.books = response.items;
        } else {
          this.books = {};
          this.noResults = true;
        }
      });
    },
    async searchIsbn() {
      await searchByIsbn(this.inputIsbn).then((response) => {
        if (response.items) {
          this.books = response.items;
        } else {
          this.books = {};
          this.noResults = true;
        }
      });
    },
  },
}
</script>
<style>
table.resultTable {
  .category {
    width: 150px;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
