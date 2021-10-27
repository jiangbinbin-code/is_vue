<template>
  <div>
    // 会员列表 ID={{$route.params.id}}  #接受参数

    会员列表 ID={{id}}  #props接受参数
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'MemberList'
}
</script>

<style scoped>

</style>
