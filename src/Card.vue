<script setup lang="ts">
import { getUserList } from './api/index'
import { Map as OlMap } from './utils/index'

console.log(OlMap, getUserList);

</script>

<template>
    <h4>SFC Card</h4>
    <a-button type='primary'>测试</a-button>
</template>