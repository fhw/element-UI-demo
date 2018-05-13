<template>
  <div class="nav-left">
    <el-row>
      <el-col :span='6'>
        <router-link v-for="item in list" :key="item.id" :to="item.url" @click.native="addTab">id:{{item.id}}</router-link>
      </el-col>
      <el-col :span='18'>
        <el-tabs v-model="activatedTabName" type="card" editable>
          <el-tab-pane :key="item.name" v-for="(item) in tabList" :label="item.title" :name="item.name"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'NavLeft',
  data () {
    let arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i + 1,
        url: `/TabDetail?id=${i + 1}`
      })
    }
    return {
      list: arr,
      tabList: [],
      activatedTabName: ''
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    addTab () {
      let arr = []
      arr = this.tabList
      arr.push({
        title: this.$route.query.id,
        name: this.$route.name + this.$route.query.id
      })
      this.tabList = _.unionBy(arr, 'name')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    display: block;
  }
</style>
