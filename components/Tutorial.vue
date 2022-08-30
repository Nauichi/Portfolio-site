<!-- Please remove this file from your project -->
<template>  
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <nav class="nav">
      <ul>
        <li><a href="#Top">TOP</a></li>
        <li><a href="#About">ABOUT</a></li>
        <li><a href="#Works">WORKS</a></li>
        <li><a href="#Skills">SKILLS</a></li>
        <li><a href="#Contact">CONTACT</a></li>
      </ul>
    </nav>
    <section id="Top" class="top">
      <br>
      <br>
      <br>
      <br>
      <h1>Welcome!!</h1>
      <h1>My Portfolio Site</h1>
      <br>
      <div class="scrolldown"><span>Scroll</span></div>
    </section>
    <div id="About" class="about">
      <h2>ABOUT</h2>
        <b>Name :</b>  Shoma
        <br>
        <b>Sex :</b> Man
        <br>
        <b>Birthday :</b>  {{Birthdate.month}}/{{Birthdate.day}}
        <br>
        <b>Hobby  :</b>  Game・Music
        <p style="color: blue;">
          学生。プログラミングは勉強中。
          <br>
          いろいろな経験をしたい。
        </p>
        <div style="display: inline-block">
          <SquareBox pColor="#e1e1ac9e" sColor="rgba(200, 200, 239, 0.662)" />
        </div>
    </div>
    <div id="Works" class="works">
      <h2>WORKS</h2>
      <SlideIn>
        <a href="#">
          <div class="img"/>
        </a>
        <p style="margin: 0 auto"><a href="#" target="_blank" style="color: #9999FF; text-decoration: none;">404 Not Found page</a></p>
      </SlideIn>
      <br>
      <SlideIn>
        <a href="#">
          <div class="img2" />
        </a>
        <p style="margin: 0 auto"><a href="#" target="_blank" style="color: #9999FF; text-decoration: none;">This page</a></p>
      </SlideIn>
      <br>
    </div>
    <div id="Skills" class="skills">
      <h2>SKILLS</h2>
      <FadeIn>
        <div class="circle"> 
          C
          <span><br>大学で一番初めに<br>習った</span>
        </div>
        <div class="circle">
          html
          <span><br>大学で少し習った<br>404ページで使用</span>
        </div>
        <div class="circle">
          css 
          <span><br>404ページで<br>初使用<br>まだ知らないことは多い</span>
        </div>
        <div class="circle">
          java script 
          <span><br>404ページで<br>初使用<br>まだ使いこなせていない</span>
        </div>
      </FadeIn>
      <FadeIn>
        <div class="circle">
          vue.js 
          <span><br>このportfolioで<br>初使用<br>まだ慣れていない</span>
        </div>
        <div class="circle">
          python 
          <span><br>学校で習った程度</span>
        </div>
        <div class="circle">
          mysql
          <span><br>学校で習った程度</span>
        </div>
        <div class="circle">
          etc...
          <span><br>GitHub等<br>日々勉強中</span>
        </div>
      </FadeIn>
    </div>
    <div id="Contact" class="contact">
      <h2>CONTACT</h2>
      <div class="contact_area">
        ご質問、ご感想等、何かコメントがありましたらお気軽にお寄せください。
        <br>
        <div class="contact_items">
          <div class="item">
            <label>Name</label>
            <br>
            <input type="text" name="name" class="name">
          </div>
          <div class="item">
            <label>Email</label>
            <br>
            <input type="text" name="mail" class="mail">
          </div>
          <div class="item">
            <label>Message</label>
            <br>
            <textarea type="text" name="message" class="message" />
          </div>
        </div>
        <div class="submit">
          <button>send</button>
        </div>
        <br>
        My twitter
        <br>
        <a href="https://twitter.com/g07_sh034ma" target="_blank">
          <svg
            class="w-6 h-6 text-gray-600 hover:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="50"
            height="50"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            color="#66CCFF"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
              fill="currentColor" />
          </svg>
        </a>
      </div>
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
    cursor: pointer;
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
    padding-bottom: 40px;

    height: 600px;
    text-align: center;
  }
  .top h1{
    font-size: 50px;
    font-family: cursive;
  }
  .scrolldown{
    position:absolute;
    bottom: 3%;
    left: 3%;
    animation: arrowmove 1s ease-in-out infinite;
  }
  .scrolldown span{
    position: absolute;
    left:-20px;
    bottom:12px;
    color: black;
    font-size: 0.7rem;
    letter-spacing: 0.05em;

    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
  .scrolldown:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: -6px;

    width: 1px;
    height: 20px;
    background: black;
    transform: skewX(-31deg);
  }
  .scrolldown:after{
    content:"";
    position: absolute;
    bottom:0;
    right:0;

    width:1px;
    height: 50px;
    background: black;
  }
  .about {
    background: lightcyan;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;

    color: black;
    text-align: center;
    vertical-align: center;
    font-size: 25px;
    font-family: cursive;
  }
  .about h2{
    color: blue;
    text-align: left;
    font-size: 40px;
    font-family: serif;
  }
  .about th{
    padding-right: 40px;
  }
  .works {
    background: lightgoldenrodyellow;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;

    color: black;
    text-align: center;
    font-size: 20px;
    font-family: cursive;
  }
  .works h2{
    color: blueviolet;
    text-align: left;
    font-size: 40px;
    font-family: serif;
  }
  .works a{
    display: inline-block;
  }
  .skills {
    background: #FFEEFF;
    padding-top: 40px;
    padding-bottom: 80px;
    padding-left: 30px;

    color: black;
    text-align: center;
    font-size: 20px;
    font-family: cursive;
  }
  .skills h2{
    color: red;
    text-align: left;
    font-size: 40px;
    font-family: serif;
  }
  .contact {
    background: #CCFFCC;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;

    color: black;
    text-align: center;
    font-size: 20px;
    font-family: cursive;
  }
  .contact h2{
    color: green;
    text-align: left;
    font-size: 40px;
    font-family: serif;
  }
  .contact_area{
    margin: 10px auto;
    padding: 30px 0;
    max-width: 900px;
    background-color: rgba(213, 236, 228, 0.75);
    -webkit-box-shadow: 0 0 40px -3px rgb(16 39 59 / 78%);
    box-shadow: 0 0 40px -3px rgb(16 39 59 / 78%);
    color: #133344;
    -webkit-transition: height 1s ease;
    transition: height 1s ease;
  }
  .content_items{
    padding: 20px;
  }
  .contact_items .item{
    padding: 5px;
    width: 100%;
    text-align: left;
    padding-left: 15%;
  }
  .contact_items .item label{
    margin-bottom: 5px;
    letter-spacing: .2em;
    font-size: 11pt;
  }
  .contact_items .item .name,
  .contact_items .item .mail{
    display: inline-block;
    width: 40%;
    font-size: 10pt;
    font-family: sans-serif;
    outline: none;
    border: 1px solid gray;
    padding: 5px;
    box-shadow: inset 0 0 2px 0 rgb(16 39 59 / 70%);
    margin: 5px auto;
    
  }
  .contact_items .item textarea{
    display: inline-block;
    width: 68%;
    height: 120px;
    min-height: 80px;
    max-height: 200px;
    border: 1px solid gray;
    box-shadow: inset 0 0 2px 0 rgb(16 39 59 / 70%);
    padding: 5px;
    font-size: 11pt;
    font-family: sans-serif;
    resize: vertical;
  }
  .submit button{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 240px;
    padding: 10px 25px;
    color: #543618;
    transition: 0.3s ease-in-out;
    font-weight: 600;
    background: #eeee;
    border-radius: 50px;
    border: 0.2rem solid #543618;
    box-shadow: 0.2rem 0.2rem 0px 0.1rem #cccccc;
    cursor: pointer;
  }
  .submit button::after{
    content: '';
    width: 5px;
    height: 5px;
    border-top: 3px solid #543618;
    border-right: 3px solid #543618;
    transform: rotate(45deg) translateY(-50%);
    position: absolute;
    top: 50%;
    right: 20px;
    border-radius: 1px;
    transition: 0.3s ease-in-out;
  }
  .submit button:hover{
    transform: translate3d(0.2rem, 0.2rem, 0);
    box-shadow: none;
    opacity: 1;
    transition: all 0.2s;
  }
  .img{
    width: 293px;
    height: 254px;
    background-image: url("./404.png");
    margin: 0 auto;
  }
  .img2{
    width: 250px;
    height: 250px;
    background-color: white;
    margin: 0 auto;
  }
  .circle{
    position: relative;
    display: inline-block;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: pink;
    text-align:center;
    line-height: 70px;
    color: black;
    font-size: 30px;
    font-family: cursive;
    margin: 10px auto;
  }
  .circle span{
    position: absolute;
    left: 8%;
    top: 58%;
    width: 150px;
    line-height: 20px;
    transform: translateY(-50%);
    text-align:center;
    color: black;
    font-size: 17px;
    font-family: cursive;
  }
  @keyframes arrowmove{
    0%{
      bottom: 3%;
    }
    50%{
      bottom: 5%;
    }
    100%{
      bottom: 3%;
    }
  }
</style>

<script>
import SquareBox from './SquareBox.vue';
export default {
    name: "NuxtTutorial",
    data() {
        return {
            Birthdate: {
                day: 16,
                month: 5,
            },
        };
    },
    methods: {},
    components: { SquareBox }
}
</script>
