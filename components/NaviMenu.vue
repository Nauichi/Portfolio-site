<template>
    <div>
        <div class="gmenu">
            <nav class="nav">
                <ul>
                    <li><a @click="ChangeScroll(p_top)">TOP</a></li>
                    <li><a @click="ChangeScroll(p_about)">ABOUT</a></li>
                    <li><a @click="ChangeScroll(p_works)">WORKS</a></li>
                    <li><a @click="ChangeScroll(p_skills)">SKILLS</a></li>
                    <li><a @click="ChangeScroll(p_contact)">CONTACT</a></li>
                </ul>
            </nav>
        </div>
        <div class="mmenu">
            <button type="button" class="menu-btn" v-on:click="open=!open">
                <div :class="{btnout: open, btnline: !open}" ></div>
            </button>
            <div class="menu" v-bind:class="{'is-active' : open }">
                <li class="menu__item"><a @click="ChangeScroll(p_top)">TOP</a></li>
                <li class="menu__item"><a @click="ChangeScroll(p_about)">ABOUT</a></li>
                <li class="menu__item"><a @click="ChangeScroll(p_works)">WORKS</a></li>
                <li class="menu__item"><a @click="ChangeScroll(p_skills)">SKILLS</a></li>
                <li class="menu__item"><a @click="ChangeScroll(p_contact2)">CONTACT</a></li>
            </div>
        </div>
    </div>
</template>

<style>
    .nav {
    width: 100%;
    height: 50px;
    top: 0;
    background-color: dimgray;
    padding-top: 12px;
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
    background: #555;
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
            p_top: 0,
            p_about: 670,
            p_works: 1230,
            p_skills: 2010,
            p_contact: 2590,
            p_contact2: 3900,
        };
      },
      methods:{
        ChangeScroll(tp){
          window.scrollTo({
            top: tp,
            left: 0,
            behavior: 'smooth'
          });
        },
      }
    }
</script>