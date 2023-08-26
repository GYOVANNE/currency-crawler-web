<script setup lang="ts">

import type {Currency} from '@/types/currency'

type CurrencyTableProps = {
  currencies: Currency[]
  fallback?: string
}
defineProps<CurrencyTableProps>()

</script>

<template>
  <div class="template">
    <table v-if="currencies.length > 0">
      <thead >
        <tr>
          <th class="code">Código</th>
          <th class="number">Número</th>
          <th class="decimal">Casas decimais</th>
          <th class="currency">Moeda</th>
          <th class="locations">Locais em circulação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in currencies" :key="currency.code" >
          <td>{{ currency.code }}</td>
          <td>{{ currency.number }}</td>
          <td>{{ currency.decimal }}</td>
          <td>{{ currency.currency }}</td>
          <td>
            <div class="location-list">
              <div v-for="(location, index) in currency.currency_locations" :key="index" class="location">
                <div>
                <img v-if="location.icon" class="icon" :src="location.icon" />
                <span>{{ location.location }}</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>{{ fallback }}</p>
  </div>
</template>

<style scoped>
.template {
  justify-content: center;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

table thead .code,
table thead .number,
table thead .decimal,
table thead .currency,
table thead  .locations {
  padding: 10px;
  text-align: left;
}

table tbody tr td {
  padding: 10px;
  text-align: left;
  border:1px solid
}

.row {
  border-bottom: 1px solid #ccc;
}

table thead .code,
table thead .number,
table thead .decimal
{
  width: 5%;
}
table tbody tr {
  border-bottom:1px solid
}
table thead .currency
{
  width: 10%;
}

table thead .locations {
  width: 70%;
}

.location-list {
  display: flex;
  flex-wrap: wrap;
  gap:5px;
  justify-content: left;
}

.location-list .location .icon {
  margin-right: 5px;
  max-width: 20px;
}
</style>
