<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import validator from '@/helpers/validator'
import {PLACE_HOLDER_NUMBER,PLACE_HOLDER_STRING} from '@/helpers/constants'
const inputType = ref<string>('string')
const inputValue = ref<string>('')

export type ParamsSubmit = {
  type: string
  value: string
}

const emit = defineEmits<{ submit: [ParamsSubmit] }>()

defineProps<{loading:boolean}>()

const fetchCurrency = () => {
  emit('submit', {
    type: inputType.value,
    value: inputValue.value
  })
}

const placeholder = computed(() => {
  return inputType.value == 'string' ? PLACE_HOLDER_STRING : PLACE_HOLDER_NUMBER
})

const pattern = computed(() =>  validator.get(inputType.value).source);

watch(inputType, () => inputValue.value = '')

</script>

<template>
  <form class="filter" @submit.prevent="fetchCurrency">
    <select v-model="inputType">
      <option value="string">Código ISO 4217</option>
      <option value="number">Número ISO 4217</option>
    </select>
    <input required v-model="inputValue" :placeholder="placeholder" :pattern="pattern"/>
    <button>
      <i v-if="loading" class="fas fa-spinner fa-spin"></i>
      <span v-else>Buscar Moeda</span>
    </button>

  </form>
</template>

<style scoped>
.filter {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filter:has(input:valid) > input {
  border: 2px solid rgb(0, 158, 0);
}

.filter:has(input:invalid:not(:placeholder-shown)) > input {
  border: 1px solid red;
}

input,
select,
button {
  border: 1px solid gray;
  width: 15%;
  font-size: 1rem;
  padding: 10px;
}

input {
  width: 70%;
  padding: 5px;
}

select {
  cursor: pointer;
  text-align: center;
  background: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

button {
  cursor: pointer;
  background: #008cff;
  border: none;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.2s;
}

button:hover {
  background: #0164b5;
}
</style>
