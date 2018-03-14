<template>
  <div>
    <div class="cont-prev">
      <div class="count-forms">
        <p class="count">{{CountForms}}</p>      
        <div>
          <img src="../assets/eye.svg" alt="preview on" v-show="preview" @click="invertPreview(), sendEmitPrev()" class="icon-prev">
          <img src="../assets/eye-off.svg" alt="preview off" v-show="!preview" @click="invertPreview(), sendEmitPrev()" class="icon-prev">
          <button class="button-back" @click="sendForm()">SAVE</button><br/>
        </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'CreateProcessTopBar',
  props: ['CountForms', 'prev'],
  data () {
    return {
      preview: false,
    }
  },
  methods:{
    invertPreview(bool){
      this.preview = !this.preview
    },
    sendEmitPrev(){
      this.$parent.invert()
    },
    sendForm(){
      this.$parent.sendForm();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './mixins.scss';
  @import './createProcessStyle.scss';
</style>
