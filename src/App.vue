<template>
  <div id="app">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from './containers/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
<style lang="stylus">
body{
  margin 0
  padding 0
  background-color #cdcdcd
}
</style>
