<template>
    <div>
        <div class="gmenu">
            <nav class="nav">
                <ul>
                  <button @click="ChangeScroll('Top')">
                    <span class="home1"><span class="home2"></span></span>
                  </button>
                  <li><a @click="ChangeScroll('About')">ABOUT</a></li>
                  <li><a @click="ChangeScroll('Works')">WORKS</a></li>
                  <li><a @click="ChangeScroll('Skills')">SKILLS</a></li>
                  <li><a @click="ChangeScroll('Contact')">CONTACT</a></li>
                </ul>
            </nav>
        </div>
        <div class="mmenu">
            <button type="button" class="menu-btn" v-on:click="open=!open">
                <div :class="{btnout: open, btnline: !open}" ></div>
            </button>
            <div class="menu" v-bind:class="{'is-active' : open }">
                <li class="menu__item"><a @click="ChangeScroll('Top')">TOP</a></li>
                <li class="menu__item"><a @click="ChangeScroll('About')">ABOUT</a></li>
                <li class="menu__item"><a @click="ChangeScroll('Works')">WORKS</a></li>
                <li class="menu__item"><a @click="ChangeScroll('Skills')">SKILLS</a></li>
                <li class="menu__item"><a @click="ChangeScroll('Contact')">CONTACT</a></li>
            </div>
        </div>
    </div>
</template>

<style>
    .nav {
    width: 100%;
    height: 50px;
    top: 0;
    background-color: rgba(30, 30, 30, 0.75);
    box-sizing: border-box;
    position: fixed;
    z-index: 500;
  }
  .nav ul {
    display: flex;
    justify-content: right;
    align-items: right;
    list-style: none;
  }
  .nav li {
    padding-top: 12px;
    list-style: none;
    cursor: pointer;
  }
  .nav a{
    display: inline-block;
    color: white;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    margin-right: 35px;
  }
  .nav a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transform: translate(-101%, 0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
    content: "";
  }
  .nav a:hover:after {
    transform: translate(0, 0);
  }
  .nav span{
    display: block;
    position: relative;
    cursor: pointer;
  } 
  .home1{
    width: 30px;
    height: 30px;
    display:block;
    padding-right: 35px;
  }
  .home1:before{
    content: '';
    display:block;
    position: absolute;
    top: 10px;
    left: 7px;
    border: 10px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    transform: scale(1,0.8);
  }
  .home1:after{
    content: '';
    height: 8px;
    width: 8px;
    display: block;
    position: absolute;
    top: 18.5px;
    left: 7px;
    border: 6px white solid; 
    border-top-width: 2px;
    border-bottom: 0;
  }
  .home2:before{
    content: '';
    height: 6px;
    width: 3px;
    display: block;
    position: absolute;
    top: 6px;
    left: 23px;
    background: white;
    transition: all 0.5s ease;
  }
  .home2:after{
    content: '';
    height: 18px;
    width: 18px;
    border-top: 4px white solid;
    border-right: 4px white solid;
    position: absolute;
    top: 6px;
    left: 6px;
    transform: scale(1,0.8) rotate(-45deg);
  }
  span:hover .home2:before{
    top: 1px;
    height: 11px;
  }
  @media screen and (max-width: 650px){
    .gmenu{
      display: none;
    }
  }
  button {
	  margin: 0;
	  padding: 0;
	  outline: 0;
	  border: 0;
	  border-radius: 0;
	  background: transparent;
	  color: inherit;
	  vertical-align: middle;
	  text-align: inherit;
	  font: inherit;
	  appearance: none;
  }
  .menu-btn{
    position: fixed;
    top: 10px;
    right: 16px;
    z-index: 10;
    width: 37px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .btnline {
	  display: block;
	  position: relative;
	  width: 100%;
	  height: 5px;
	  background-color: red;
	  transition: .2s;
  }
  .btnline::before , .btnline::after {
    content: "";
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background-color: red;
	  transition: .5s;
  }
  .btnline::before {
	  transform: translateY(-16px);
  }
  .btnline::after {
	  transform: translateY(16px);
  }
  .btnout {
    display: block;
	  position: relative;
	  width: 100%;
	  height: 4px;
    background-color: transparent;
    transition: .2s;
  }
  .btnout::before , .btnout::after {
	  content: "";
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background-color: red;
	  transition: .5s;
  }
  .btnout::before {
	  transform: rotate(45deg);
  }
  .btnout::after {
	  transform: rotate(-45deg);
  }
  .menu{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 30vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(30, 30, 30, 0.75);
  }
  .menu__item{
    width: 100%;
    height: auto;
    padding: .3em 1em;
    color: #fff;
    box-sizing: border-box;
    list-style: none;
    cursor: pointer;
  }
  .menu__item a{
    display: inline-block;
    color: white;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    margin-right: 35px;
  }
  .menu__item a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transform: translate(-100%, 0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
    content: "";
  }
  .menu__item a:hover:after {
    transform: translate(0, 0);
  }
  .menu{
    transform: translateY(-100vw);
    transition: all .5s linear;
  }
  .menu.is-active{
    transform: translateY(0vw);
  }
  @media screen and (min-width: 650px){
    .mmenu{
      display: none;
    }
  }
</style>
    

<script>
    export default{
      data() {
        return {
            open: false,
        };
      },
      methods:{
        ChangeScroll(pg){
          const element = document.getElementById(pg);
          element.scrollIntoView({
            behavior: "smooth"
          });
        },
      }
    }
</script>