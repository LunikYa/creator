<template>
  <div class="conteiner">
    <router-link to="/create/"></router-link>
    <router-view :form="newForm"/>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data () {
    return {
      preview: true,
      newForm:
      {
        title: '',
        discription: '',
        questions:[]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './mixins.scss';
</style>
