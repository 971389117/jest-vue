<template>
  <div class="todolist">
    <Heador @add="addUndoItem" data-test="header"></Heador>
    <UndoList data-test="undolist"></UndoList>
  </div>
</template>

<script>
import Heador from '@/containers/Header'
import UndoList from '@/containers/UndoList'

export default {
  name: 'TodoList',
  components: {
    Heador,
    UndoList
  },
  props: {
    msg: String
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (value) {
      this.undoList.push(value)
    }
  }
}
</script>

<style scoped lang="stylus">

.todolist{

}
</style>
