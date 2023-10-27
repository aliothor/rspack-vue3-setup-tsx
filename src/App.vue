<script setup lang="tsx">
import { FunctionalComponent, ref } from 'vue'

import './App.css'
import vueLogo from './assets/vue.svg'

import Button from './Button.vue'
import Card from './Card.vue'

const count = ref(0)
const add = () => count.value++

const CounterButton: FunctionalComponent<{
  onClick: () => void
  value: number
}> = ({ onClick, value }) => {
  return <button onClick={onClick}>count is {value}</button>
}

</script>

<template>
  <div class="App">
    <div>
      <a href="https://vuejs.org" target="_blank">
        <img :src="vueLogo" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>Rspack + Vue JSX</h1>
    <div class="card">
      <CounterButton @click="add" :value="count" />
    </div>
    <Button></Button>
    <Card></Card>
  </div>
</template>
