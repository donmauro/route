<template>
  <div class="ui container">
    <SearchBox @search="onSearch" />
    <input v-model="filterBy" placeholder="Filter By Last Name">
    <h1 class="ui center aligned header">Staff Directory</h1>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th @click="f = (a, b) => a.name.first.localeCompare(b.name.first)">First Name</th>
          <th @click="f = (a, b) => a.name.last.localeCompare(b.name.last)">Last Name</th>
          <th @click="f = (a, b) => a.email.localeCompare(b.email)">Email</th>
          <th >Phone</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in sortedEmployees" :key="index">
          <td>
            <img :src="employee.photoUrl" class="ui mini rounded image" />
          </td>
          <td>{{ employee.name.first }}</td>
          <td>{{ employee.name.last }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.phone }}</td>
          
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{sortedEmployees.length}} employees</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
import SearchBox from './SearchBox.vue'

  export default {
    components: {
      SearchBox,
    },
    name: 'StaffDirectory',
    data() {
      return {
        heading: "Staff Directory",
        filterBy: "",
        sortBy: "last",
        f: (a, b) => a.name.last.localeCompare(b.name.last),
        employees: []
      }
    },
    methods: {
      onSearch( terms ) {
        fetch('https://randomuser.me/api/?nat=us,dk,fr,gb&results='+ terms)
          .then(response => response.json())
          .then(json => this.employees = json.results);
      }
    },
    computed: {
      sortedEmployees() {
        return this.employees.filter(employee => employee.name.last.includes(this.filterBy))
        .sort( this.f );
      }
    }
    // computed: {
    //   sortedEmployees() {
    //     return this.employees.filter(
    //       employee => employee.name.last.includes(this.filterBy)
    //     ).sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
    //   }
    // }
  }
</script>
<style>
  h1.ui.center.header {
    margin-top: 3em;
  }

  .ui.table th:not(:first-child):hover {
    cursor: pointer;
  }

  input {
    padding: 3px;
  }
</style>