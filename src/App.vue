<script setup lang="ts">
import { ref } from 'vue'
import CurrencyTable from '@/components/CurrencyTable.vue'
import CurrencyFilter, { type ParamsSubmit } from '@/components/CurrencyFilter.vue'
import type { Currency } from './types/currency'
import { filterCurrency } from '@/services/api'
import {formater} from '@/helpers/formater'

const currencies = ref<Currency[]>([])
const fallback = ref<string>('')
const loading = ref<boolean>(false)

const getCurrencies = async ({ type, value }: ParamsSubmit) => {
  const payload = formater(type, value)
  loading.value = true
  const data = await filterCurrency(payload)
  loading.value = false
  currencies.value = data
  fallback.value = data.length == 0 ? 'Nenhum resultado encontrado' : ''
}

</script>

<template>
  <div class="container">
    <h2>Códigos ISO para moedas</h2>
    <currency-filter :loading="loading" @submit="getCurrencies" />
    <currency-table v-bind="{ currencies, fallback }" />
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.container h2 {
  text-align: center;
  margin: 20px 0;
}

</style>
