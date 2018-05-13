<template>
    <div class="tab-detail">
        {{id}}
    </div>
</template>
<script>
export default {
  data () {
    return {
      id: '1'
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  watch: {
    '$route': function () {
      this.id = this.$route.query.id
    }
  }
}
</script>
