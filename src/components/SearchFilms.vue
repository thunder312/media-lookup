<template>
    <h3>Suche Film</h3>
    <table class="inputTable">
        <tr>
          <td class="category">Freitext</td>
          <td class="inputField">
            <input @keyup.enter="search" v-model="this.inputTitle" id="global-input" type="text" placeholder="Freitext"/>
          </td>
          <td class="example">American Pie</td>
        </tr>
    </table>
    <div> 
    <div v-if="films != null">
      <div class="result">Ergebnisse {{ resultDisplay(films.length) }}</div>
      <div class="result">Films: {{ films }}</div>
      <br/>
        <table class="resultTable" >
          <tbody>
            <div v-for="(film, index) in films" :key='film.id'>
              <tr>
                <td class="separator" colspan="2">Film {{ index+1 }}</td>
                </tr>
                <tr>
                  <td class="category">Titel:</td>
                  <td>{{ films.itemListElement[index].name }}</td>
                </tr>
                <tr>
                  <td class="category">Beschreibung:</td>
                  <td>{{ films.itemListElement[index].detailedDescription.articleBody }}</td>
                </tr>
                <!--tr>
                  <td class="category">Autor:</td>
                  <td>{{ films[index].volumeInfo.authors }}</td>
                </tr>
                <tr>
                  <td class="category">Veröffentlichung:</td>
                  <td>{{ formatDate(films[index].volumeInfo.publishedDate) }}</td>
                </tr>
                <tr>
                  <td class="category">Genres:</td>
                  <td>{{ films[index].volumeInfo.categories}}</td>
                </tr>
                <tr>
                  <td class="category">Seitenzahl:</td>
                  <td>{{ films[index].volumeInfo.pageCount }}</td>
                </tr-->
            </div>
          </tbody>
        </table>
        <!-- Das ganze Json -->
        <div v-if="films.length > 0">
          <br/>
          <pre>{{ JSON.stringify(this.films, null, 2) }}</pre>
        </div>
      </div>

    </div>
</template>

<script>
import { globalSearch } from "../api/films-api.js";

export default {
  name: 'SearchFilms',
  components: { },
  data () {
    return {
      callback: null,
      films: null,
      inputTitle: "",
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
          console.log("response.items: " + response.items);
          this.films = response.items;
        } else {
          this.films = {};
          this.noResults = true;
        }
      });
    },
    formatDate(dateString) {
      if(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('de-DE', {year: "numeric", month: "2-digit", day: "2-digit"}).format(date);
      } else {return "";}
    },
    resultDisplay(length) {
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
