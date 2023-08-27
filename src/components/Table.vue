<template>
    <!--div class="searchBar">
        <div class="input-group mb-5">
            <input type="search" class="form-control" v-model='searchQuery' placeholder="Name" aria-label="Name"
                aria-describedby="button-addon2">
        </div>
    </div-->
    <table id="tableComponent" class="table table-bordered table-striped" style="padding: 10px;">
        <thead>
            <tr>
                <!-- loop through each value of the fields to get the table header -->
                <th v-for="field in fields" :key='field'> <!-- @click="sortTable(field)"-->
                    {{ field }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- Loop through the list get the each data -->
            <tr v-for="item in tableData" :key='item'>
                <td v-for="field in fields" :key='field'>{{ item[field] }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>

//import { sortBy } from 'lodash';

export default {
    name: 'TableComponent',
    props: {
        // 
        tableData: {
            type: Array,
        },
        fields: {
            type: Array,
        }
    },
    methods: {
        /*sortTable() {
            // a value to check for sort
            let sort = ref(false);
            let updatedList = ref([])
            // a function to sort the table
            const sortTable = (col) => {
                sort.value = true
                // Use of _.sortBy() method
                updatedList.value = sortBy(props.studentData, col)
            }
        } */
    },
}
/* const filteredList = computed(() => {
    return sortedList.value.filter((product) => {
        return (
            // converts the query and value to lower case  index
            product.Name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
        )
    });
}); */
</script>