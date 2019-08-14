<template>
  <div class="todolist">
    <Heador @add="addUndoItem" data-test="header"></Heador>
    <UndoList
      @status="changeStatus"
      :list="undoList"
      @delete="handleItemDelete"
      data-test="undolist"
      @reset="resetStatus"
      @change="changeItemValue"
    ></UndoList>
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
      this.undoList.push({
        status: 'div',
        value: value
      })
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    },
    changeStatus (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newList.push({ status: 'input', value: item.value })
        } else {
          newList.push({ status: 'div', value: item.value })
        }
        this.undoList = newList
      })
    },
    resetStatus () {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        newList.push({ status: 'div', value: item.value })
      })
      this.undoList = newList
    },
    changeItemValue (options) {
      this.undoList[options.index].value = options.value
    }
  }
}
</script>

<style scoped lang="stylus">
.todolist {
}
</style>
