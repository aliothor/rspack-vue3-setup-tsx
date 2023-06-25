# rspack-vue3-setup-tsx

rspack构建vue3 setup tsx语法测试

### 使用tsx会构建失败
```tsx
<script setup lang="tsx">

function FCTest() {
  return <div>test</div>
}

</script>

<template>
  <h4>setip tsx</h4>
  <FCTest></FCTest>
</template>
```

### 使用jsx会构建成功
```tsx
<script setup lang="jsx">

function FCTest() {
  return <div>test</div>
}

</script>

<template>
  <h4>setip tsx</h4>
  <FCTest></FCTest>
</template>
```