<template>
    <div ref="slide" :class="{slidein: visible, hidden: !visible}">
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
            const top = this.$refs.slide.getBoundingClientRect().top
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
    .slidein {
        width: 100%;
        animation: slideIn 1.5s ease-out forwards;
    }
    @keyframes slideIn {
    0% {
		opacity: 0;
        transform: translateX(-50%);
	  }
	  100% {
		opacity: 1;
		transform: translateX(0);
	  }
  }
</style>
