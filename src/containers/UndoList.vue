<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span data-test="count" class="counter">{{list.length}}</span>
    </div>
    <ul class="list">
      <li
        @click="()=>changeStatus(index)"
        class="item"
        v-for="(item, index) in list"
        :key="index"
        data-test="item"
      >
        <input
        class="input"
          @change="(e)=>handleInputChange(e.target.value,index)"
          @blur="handleInputBlur"
          v-if="item.status==='input'"
          type="text"
          data-test="input"
          :value="item.value"
        />
        <span v-else>{{item.value}}</span>
        <span class="delete" data-test="delete-button" @click="()=>{handleDelete(index)}">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'undolist',
  props: ['list'],
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    },
    handleInputChange (value, index) {
      this.$emit('change', {
        value,
        index
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.undolist {
  width: 600px;
  margin: 0 auto;
}

.title {
  margin: 10px 0;
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
}

.counter, .delete {
  margin-top: 5px;
  font-size: 12px;
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  background-color: #e6e6e6;
  text-align: center;
  border-radius: 10px;
  color: #000;
}

.delete {
  margin-right: 10px;
  text-indent: 0;
}

.list {
  list-style-type: none;
}

.item {
  margin-bottom: 10px;
  line-height: 32px;
  font-size: 14px;
  background-color: #fff;
  border-left: 5px solid #629a9a;
  border-radius: 3px;
  text-indent: 10px;
}
.input{
  width 460px
  height 30px
  text-indent 1em
}
</style>
