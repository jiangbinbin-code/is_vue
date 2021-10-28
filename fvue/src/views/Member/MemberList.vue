<template>
  <div>
    // 会员列表 ID={{$route.params.id}}  #接受参数

    会员列表 ID={{id}}  #props接受参数
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'MemberList',
  beforeRouteEnter: (to, from, next) => {
    console.log('进入会员等级页面')
    next(vm => {
      vm.getData()
    })
  },
  beforeRouteLeave: (to, form, next) => {
    console.log('离开会员等级页面')
    next()
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8080/data.json'})
        .then(function (repos) {
          console.log(repos)
        }).catch(function (error) {
          console.log(error)
        })
    }
  }

}
</script>

<style scoped>

</style>
