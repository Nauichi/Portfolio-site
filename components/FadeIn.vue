<template>
    <div ref="fade" :class="{fadein: visible, hidden: !visible}">
        <div v-show="visible">
            <slot></slot>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if (!this.visible) {
          const top = this.$refs.fade.getBoundingClientRect().top
          this.visible = (top + 100) < window.innerHeight
        }
      }
    }
  }
  </script>
  
  <style>
  .hidden {
    opacity: 0;
  }
  
  .fadein {
    animation: fadeIn 1.5s ease-out forwards;
    opacity: 1;
    display: flex;
    justify-content: space-evenly;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(60%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  </style>