<template>
    <GoogleLogin :callback="this.callback"/>
    <br/><br/>
    <h3>Suche Buch</h3>
    <table class="inputTable">
        <tr>
          <td class="category">Freitext</td>
          <td class="inputField">
            <input @keyup.enter="search" v-model="this.inputTitle" id="global-input" type="text" placeholder="Freitext"/>
          </td>
          <td class="example">z.B.: Sophies Welt oder James Clavell</td>
        </tr>
        <tr>
          <td class="category">ISBN</td>
          <td class="inputField">
            <input @keyup.enter="searchIsbn" v-model="this.inputIsbn" id="isbn-input" type="text" placeholder="ISBN"/>
          </td>
          <td class="example">z.B.: 9783862222391, 3780200023</td>
        </tr>   
    </table>
    <div> 
    <div v-if="books != null">
      <div class="result">Ergebnisse {{ resultDisplay(books.length) }}</div>
      <br/>
        <table class="resultTable" >
          <tbody>
            <div v-for="(book, index) in books" :key='book.id'>
              <tr>
                <td class="separator" colspan="2">Buch {{ index+1 }}</td>
                </tr>
                <tr>
                  <td class="category">Titel:</td>
                  <td>{{ books[index].volumeInfo.title }}</td>
                </tr>
                <tr>
                  <td class="category">Unter-Titel:</td>
                  <td>{{ books[index].volumeInfo.subtitle }}</td>
                </tr>
                <tr>
                  <td class="category">Beschreibung:</td>
                  <td>{{ books[index].volumeInfo.description}}</td>
                </tr>
                <tr>
                  <td class="category">Autor:</td>
                  <td>{{ books[index].volumeInfo.authors }}</td>
                </tr>
                <tr>
                  <td class="category">Veröffentlichung:</td>
                  <td>{{ formatDate(books[index].volumeInfo.publishedDate) }}</td>
                </tr>
                <tr>
                  <td class="category">Genres:</td>
                  <td>{{ books[index].volumeInfo.categories}}</td>
                </tr>
                <tr>
                  <td class="category">Seitenzahl:</td>
                  <td>{{ books[index].volumeInfo.pageCount }}</td>
                </tr>
                <tr>
                  <td class="category">ISBN (10):</td>
                  <td>{{ this.filterForIsbn(books[index].volumeInfo.industryIdentifiers, "ISBN_10") }}</td>
                </tr>
                <tr>
                  <td class="category">ISBN (13):</td>
                  <td>{{ this.filterForIsbn(books[index].volumeInfo.industryIdentifiers, "ISBN_13") }}</td>
                </tr>
            </div>
          </tbody>
        </table>
        <!-- Das ganze Json -->
        <div v-if="books.length > 0">
          <br/>
          <pre>{{ JSON.stringify(this.books, null, 2) }}</pre>
        </div>
      </div>

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
    /*
    jsonObject: books[index].volumeInfo.industryIdentifiers
    type: ISBN_13 oder ISBN_10 
    */
    filterForIsbn(jsonObject, type) {
      if(jsonObject) {
      for (var i = 0; i < jsonObject.length; i++) {
          if (jsonObject[i].type == type) {
            var result = jsonObject[i].identifier;
            // console.log("filterForIsbn: " + result);
              return result;
          }
      }
      } else { return "";}
    },
    formatDate(dateString) {
      if(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('de-DE', {year: "numeric", month: "2-digit", day: "2-digit"}).format(date);
      } else {return "";}
    },
    resultDisplay(length) {
      console.log("resultDisplay: " + length);
      let result = "";
        switch(length) {
          case 0:
          case undefined:
            result = ": 0";
            break;
          case 40:
            result =  "limitiert auf 40."
            break;
          default:
            result =  ": " + length;
            break;
        }
        console.log("result: " + result);
      return result;
    }
  },
}
</script>
<style>
table.inputTable {
  .category {
    width: 150px;
    font-weight: bold;
  }
  .inputField {
    width: 300px;
  }
  .example {
    width: 300px;
  }
}

table.resultTable {
  .result {
    width: 250px;
  }
  .separator {
    padding-top: 15px;
    font-weight: bold;
    font-size: 20px;
    color: blue;
  }
  .category {
    width: 250px;
    font-size: 20px;
  }
}
</style>
