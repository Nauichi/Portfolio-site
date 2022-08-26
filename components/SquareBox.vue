<template>
<div
    class="square"
    :style="{background: activeColor}"
    @click="changeColor()">
</div>
</template>

<script>
export default {
    data(){
        return{
            activeColor: this.pColor,
        }
    },
    props:[
      'pColor',
      'sColor',
    ],
    methods:{
      changeColor(){
        switch(this.activeColor){
          case this.pColor:
            this.activeColor = this.sColor;
            break;
          case this.sColor:
            this.activeColor = this.pColor;
            break;
          default:
            break;
        }
      }
    }
}
</script>

<style>
  .square{
    width: 100px;
    height: 100px;
  }
</style>