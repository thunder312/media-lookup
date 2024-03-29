<template>
  <div class="generic-table"> 
    <div class="title">{{ tableName }}</div>
    <div class="container">
      <input v-model.trim="filterKey" placeholder="Suchen..." class="search" />
      <table class="table-striped">
        <thead>
          <tr :class="type">
            <th v-for="(key, index) in columns" :class="[{ active: sortKey === key }]" :key="index" @click="sortBy(key.field)">
              {{ key.label }}
              <span :class="sortOrders[key.field] > 0 ? 'asc' : 'dsc'" class="arrow"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:id="'row'  + index" v-for="(entry, index) in displayedData" :key="index">
            <td v-bind:id="key.field" v-for="(key, index) in columns" :key="index">
              <div v-if="key.field != 'url'">
                {{ formatDataByFieldName(entry, key.field)}}
              </div>
              <!--Looks like I can't format a link within my formatDataByFieldName -->
              <div v-if="key.field == 'url'">
                <a v-if="entry[key.field] != null" target="_blank" :href="entry[key.field]">Info</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!--b-pagination v-if="isPaginated" :total-rows="filteredDataLength" v-model="currentPage" :per-page="limit" />
      <div v-else-if="isButtonsDisplayed">
        <button v-if="limit < filteredDataLength" class="btn btn-primary" @click="setLimit(filteredDataLength)">
          Show all ({{ filteredDataLength }}) rows
        </button>
        <button v-else class="btn btn-primary" @click="setLimit(initLimit)">
          Show less
        </button>
      </div-->
    </div>
  </div>
</template>
  
<script>
import dayjs from 'dayjs';
export default {
  props: {
    tableName: {
      type: String,
      required: false,
      default: 'nicht benannte Daten'
    },
    type: {
      type: String,
      required: false,
      default: ''
    },
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    searchQuery: {
      type: String,
      default: null,
    },
    initLimit: {
      type: Number,
      default: 5,
    },
    isPaginated: {
      type: Boolean,
      default: false,
    },
    initSortKey: {
      type: String,
      default: null,
    },
  },
  data() {
    let initSortOrders = {};
    initSortOrders = this.columns.reduce((obj, key) => {
      const acc = Object.assign({}, obj);
      if (this.initSortKey === key.field) {
        acc[key.field] = 1;
      } else {
        acc[key.field] = -1;
      }
      return acc;
    }, {});
    return {
      sortKey: this.initSortKey,
      sortOrders: initSortOrders,
      currentPage: 1,
      filterKey: this.searchQuery,
      limit: this.initLimit,
    };
  },
  computed: {
    filteredData() {
      const filterKey = this.filterKey && this.filterKey.toLowerCase();
      let { data } = this;
      if (filterKey) {
        data = data.filter(row =>
          Object.keys(row).some((key) => {
            const value = String(row[key]);
            return value.toLowerCase().indexOf(filterKey) !== -1;
          }));
      }
      if (this.sortKey) {
        data = data.slice().sort((a, b) => {
          const aValue = a[this.sortKey];
          const bValue = b[this.sortKey];
          return this.sortValues(aValue, bValue) * this.sortOrders[this.sortKey];
        });
      }
      return data;
    },
    filteredDataLength() {
      return this.filteredData.length;
    },
    displayedData() {
      const dataIndex = (this.currentPage - 1) * this.limit;
      return this.filteredData.slice(dataIndex, dataIndex + this.limit);
    },
    displayedDataLength() {
      return this.displayedData.length;
    },
    isButtonsDisplayed() {
      return this.initLimit < this.displayedDataLength
        || this.initLimit < this.filteredDataLength;
    },
  },
  watch: {
    initLimit(newValue) {
      this.limit = newValue;
    },
    isPaginated() {
      this.limit = this.initLimit;
    },
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('DD.MM.YYYY');
    },
    sortBy(key) {
      console.log('Now sorting by: ' + key + " " + this.sortOrders[key]);
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    sortValues(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    },
    setLimit(limit) {
      this.limit = limit;
    },

    formatDataByFieldName(entry, field) {
      // console.log("field: " + field);
      switch(field) {
        case 'year':
          return this.formatDate(entry[field]);
        default:
          return entry[field];
      }
    }
  },
};
</script>