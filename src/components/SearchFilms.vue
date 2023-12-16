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
      <br/>
        <table class="resultTable" >
          <tbody>
            <div v-for="(film, index) in films" :key='film.id'>
              <tr>
                <td class="separator" colspan="2">Film {{ index+1 }}</td>
                </tr>
                <tr>
                  <td class="category">Titel:</td>
                  <td>{{ films[index].result.name }}</td>
                </tr>
                <tr>
                  <td class="category">Beschreibung:</td>
                  <td>{{ films[index].result.detailedDescription?.articleBody }}</td>
                </tr>
                <tr>
                  <td class="category">URL:</td>
                  <td><a v-bind:href="films[index].result.detailedDescription?.url" target="_blank">Wiki</a>  </td>
                </tr>
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
import { globalSearch /*, toFile*/ } from "../api/films-api.js";

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
        console.log("response.itemListElement: " + response.itemListElement);
        if (response.itemListElement) {
          this.films = response.itemListElement;
        } else {
          this.films = {};
        }
      })
    },
    formatDate(dateString) {
      if(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('de-DE', {year: "numeric", month: "2-digit", day: "2-digit"}).format(date);
      } else {return "";}
    },
    notUndefined(data) {
      if(data) {
        return data;
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
