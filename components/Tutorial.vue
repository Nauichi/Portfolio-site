<!-- Please remove this file from your project -->
<template>  
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <nav class="nav">
      <ul>
        <li><a @click="Change_Page('Top')">TOP</a></li>
        <li><a @click="Change_Page('About')">ABOUT</a></li>
        <li><a @click="Change_Page('Works')">WORKS</a></li>
        <li><a @click="Change_Page('Skills')">SKILLS</a></li>
        <li><a @click="Change_Page('Contact')">CONTACT</a></li>
      </ul>
    </nav>
    <br>
    <br>
      <section id="Top" class="top">
        <h1>Welcome!!</h1>
      <br>
      <br>
      </section>
      <div id="About" class="about">
        <h2>ABOUT</h2>
        <p>Name:   Shoma</p>
        <p>Birthday :  {{Birthdate.month}}/{{Birthdate.day}}</p>
        <p>Hobby  :  Game ・ Music</p>
        <p style="color: blue;">
          学生。プログラミングは勉強中。
        </p>
      </div>
      <div id="Works" class="works">
        <h2>WORKS</h2>
        <p><a href="#" target="_blank">404 Not Found page</a></p>
        <p><a href="#" target="_blank">This page</a></p>
        <br>
      </div>
      <div id="Skills" class="skills">
        <h2>SKILLS</h2>
        <p>C .....etc</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
      <div id="Contact" class="contact">
        <h2>CONTACT</h2>
        <p>お電話はこちらまで</p>
        <br>
        <SquareBox pColor="red" sColor="blue"/>
        <br>
        <a href="https://twitter.com/nuxt_js" target="_blank">
          <svg
            class="w-6 h-6 text-gray-600 hover:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="35"
            height="35"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
              fill="currentColor" />
          </svg>
        </a>
      </div>
  </div>
</template>

<style>
  nav {
    width: 100%;
    height: 50px;
    top: 0;
    background-color: dimgray;
    padding-top: 5px;
    box-sizing: border-box;
    position: fixed;
    z-index: 500;
  }
  ul {
    display: flex;
    justify-content: right;
    align-items: right;
    list-style: none;
  }
  nav li {
    list-style: none;
  }
  nav a{
    display: inline-block;
    color: white;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    margin-right: 35px;
  }
  nav a:after {
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
  nav a:hover:after {
    transform: translate(0, 0);
  }
  .top {
    padding-top: 40px;
  }
  .about {
    background: lightcyan;
    color: blue;
    padding-top: 40px;
  }
  .works {
    background: lightgoldenrodyellow;
    color: blueviolet;
    padding-top: 40px;
  }
  .skills {
    background: #FFEEFF;
    color: red;
    padding-top: 40px;
  }
  .contact {
    background: #CCFFCC;
    color: green;
    padding-top: 40px;
  }
  p {
    color: black;
    text-align: center;
    font-size: 20px;
    font-family: cursive;
  }
</style>

<script>
import SquareBox from "./SquareBox.vue";
export default {
  name: 'NuxtTutorial',
  components: { SquareBox },
    data(){
      return {
        Birthdate: {
          day: 16,
          month: 5,
        }
      }
    },
    methods: {
      Change_Page(page){
        const PageTop = document.getElementById(page).getBoundingClientRect().top;
            window.scrollTo({
                left: 0,
                top: PageTop,
                behavior: 'smooth'
            })
      }
    }
}
</script>
