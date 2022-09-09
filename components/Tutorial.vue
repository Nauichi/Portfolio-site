<!-- Please remove this file from your project -->
<template>  
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
  <NaviMenu />
    <section id="Top" class="top">
      <TopPage />
      <div class="scrolldown" @click="Scroll()"><span>Scroll</span></div>
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
        <FadeIn>
        <div class="introduce_area">
          大学生<br>
          プログラミング等は勉強中<br>
          ゲームはやるのも見るのも好き<br>
          音楽はよくボカロ曲を聴く<br>
          ベースやピアノも弾ける<br>
          いろいろな経験をしたい!!
          <br>
        </div>
        </FadeIn>
        <SlideIn>
        <EmojiAnime /></SlideIn>
    </div>
    <div id="Works" class="works">
      <h2>WORKS</h2>
      <SlideIn>
        <a href="Not.html" target="_blank">
          <div class="img"/>
          404 Not Found page
        </a>
      </SlideIn>
      <br>
      <SlideIn>
        <a href="IoT_browser.html" target="_blank">
          <div class="img3" />
          Microbit使用IoT体験
        </a>
      </SlideIn>
      <br>
      <SlideIn>
        <a href="#" target="_blank">
          <div class="img2" />
          This page
        </a>
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
          HTML
          <span><br>大学で少し習った<br>404ページで使用</span>
        </div>
        <div class="circle">
          CSS
          <span><br>404ページで<br>初使用<br>まだ知らないことは多い</span>
        </div>
        <div class="circle">
          JavaScript 
          <span><br>404ページで<br>初使用<br>まだ使いこなせていない</span>
        </div>
      </FadeIn>
      <FadeIn>
        <div class="circle">
          Vue.js 
          <span><br>このportfolioで<br>初使用<br>まだ慣れていない</span>
        </div>
        <div class="circle">
          Python 
          <span><br>学校で習った程度</span>
        </div>
        <div class="circle">
          MySQL
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
              <label for="name">Name</label>
              <br>
              <input id="name" type="text" name="name" placeholder="山田太郎">
            </div>
            <div class="item">
              <label for="email">Email</label>
              <br>
              <input id="email" type="email" name="mail" placeholder="sample@mail.co.jp">
            </div>
            <div class="item">
              <label for="message">Message</label>
              <br>
              <textarea id="message" type="text" name="message" placeholder="コメントや感想などを記入ください"/>
            </div>
          </div>
          <div class="submit">
            <a href="/InMaking.html" target="_blank" style="text-decoration: none;">
              <button>send</button>
            </a>
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
    <div class="footer">
      &copy; 2022 nauichi
    </div>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .footer{
    position: fixed;
    bottom: 0;
    text-align: right;
    z-index: 1;
    width: 100%;
    height: 4vh;

    color: white;
    background-color: rgba(105, 105, 105, 0.75);
  }
  .top {
    padding-top: 40px;
    padding-bottom: 40px;
    height: 600px;
  }
  .about {
    background: linear-gradient(to bottom, white, lightcyan);
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 4vh;
    cursor: default;

    color: black;
    text-align: center;
    vertical-align: center;
    font-size: 25px;
    font-family: "Segoe Script", "SavoyeLetPlain";
  }
  .about h2{
    color: blue;
    text-align: left;
    font-size: calc(30px + (40 - 30) * (100vw - 320px) / (1280 - 320));
    font-family: serif;
  }
  .introduce_area{
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 10px auto;
    max-width: 500px;
    max-height: 210px;
    padding-top: 20px;
    padding-bottom: 20px;

    color: rgb(65, 65, 65);
    font-size: 20px;
    padding-left:20px;
    padding-right:20px;
    font-family: "HGS行書体", "Georgia-BoldItalic";
  }
  .introduce_area::before{
    transform: skewX(-20deg);
    content: "";
    position: absolute;
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: rgb(205, 241, 253);
    border: double 4px blue;

  }
  .works {
    background: linear-gradient(to bottom, lightcyan, lightgoldenrodyellow);
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 4vh;
    cursor: default;

    color: black;
    text-align: center;
    font-size: 20px;
    font-family: "Segoe Script", "SavoyeLetPlain";
  }
  .works h2{
    color: blueviolet;
    text-align: left;
    font-size: 40px;
    font-family: serif;
  }
  .works a{
    display: inline-block;
    color: #9999FF;
    text-decoration: none;
  }
  .skills {
    background: linear-gradient(to bottom, lightgoldenrodyellow, #FFEEFF);
    padding-top: 40px;
    padding-bottom: 80px;
    padding-left: 4vh;
    cursor: default;

    color: black;
    text-align: center;
    font-size: 20px;
    font-family: "Segoe Script", "SavoyeLetPlain";
  }
  .skills h2{
    color: red;
    text-align: left;
    font-size: 40px;
    font-family: serif;
  }
  .contact {
    background: linear-gradient(to bottom, #FFEEFF, #CCFFCC);
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 4vh;
    cursor: default;

    color: black;
    text-align: center;
    font-size: 20px;
    font-family: "Segoe Script", "SavoyeLetPlain";
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
    width: 80%;
    text-align: left;
    padding-left: 20%;
  }
  .contact_items .item label{
    margin-bottom: 5px;
    letter-spacing: .2em;
    font-size: 11pt;
  }
  .contact_items .item input{
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
    color: #00CC66;
    transition: 0.3s ease-in-out;
    font-weight: 600;
    background: #eeee;
    border-radius: 50px;
    border: 0.2rem solid #009966;
    box-shadow: 0.2rem 0.2rem 0px 0.1rem #cccccc;
    cursor: pointer;
  }
  .submit button::after{
    content: '';
    width: 5px;
    height: 5px;
    border-top: 3px solid #009966;
    border-right: 3px solid #009966;
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
    width: 300px;
    height: 255px;
    background: center;
    background-image: url("./404.png");
    margin: 0 auto;

    transition: all 0.5s ease 0s;
  }
  .img:hover{
    -webkit-box-shadow: 0 0 20px -3px rgb(16 39 59 / 78%);
    box-shadow: 0 0 20px -3px rgb(16 39 59 / 78%);
  }
  .img2{
    width: 300px;
    height: 255px;
    background: center;
    background-image: url("./MyPortfolio.png");
    margin: 0 auto;

    transition: all 0.5s ease 0s;
  }
  .img2:hover{
    -webkit-box-shadow: 0 0 20px -3px rgb(16 39 59 / 78%);
    box-shadow: 0 0 20px -3px rgb(16 39 59 / 78%);
  }
  .img3{
    width: 300px;
    height: 255px;
    background: center;
    background-image: url("./IoT.png");
    margin: 0 auto;

    transition: all 0.5s ease 0s;
  }
  .img3:hover{
    -webkit-box-shadow: 0 0 20px -3px rgb(16 39 59 / 78%);
    box-shadow: 0 0 20px -3px rgb(16 39 59 / 78%);
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
    font-family: "Segoe Script", "SavoyeLetPlain";
    margin: 10px auto;

	  transition: all 0.5s ease 0s;
  }
  .circle:hover{
    transform: scale(1.1, 1.1);
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
    font-family: "Segoe Script", "SavoyeLetPlain";
  }
  .scrolldown{
    position:absolute;
    bottom: 1%;
    left: 5%;
    animation: arrowmove 1s ease-in-out infinite;
    cursor: pointer;
  }
  .scrolldown span{
    position: absolute;
    left:-20px;
    bottom:12px;
    color: black;
    font-size: 0.7rem;
    letter-spacing: 0.1em;

    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
  .scrolldown:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: -6px;

    width: 2px;
    height: 20px;
    background: black;
    transform: skewX(-31deg);
  }
  .scrolldown:after{
    content:"";
    position: absolute;
    bottom:0;
    right:0;

    width:2px;
    height: 50px;
    background: black;
  }
  @keyframes arrowmove{
    0%{
      bottom: 1%;
    }
    50%{
      bottom: 3%;
    }
    100%{
      bottom: 1%;
    }
  }
  .sizuku {
    animation: sizuku .3s linear 0s;
    background-color: #D0B0FF;
    border-radius: 50%;
    border: 4px solid #D0B0FF;
    position: absolute;
    z-index: 300;
  }
  @keyframes sizuku {
    0% {
        height: 0; 
        opacity: 1;
        transform: translate(0, 0);
        width: 0;
    }
    100% {
        height: 120px;
        opacity: 0;
        transform: translate(-60px, -60px);
        width: 120px;
    }
}
</style>

<script>
import TopPage from './TopPage.vue';
import NaviMenu from './NaviMenu.vue';
import EmojiAnime from './EmojiAnime.vue';
import FadeIn from './FadeIn.vue';
import SlideIn from './SlideIn.vue';
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
    mounted(){
      document.body.addEventListener("click", drop, false);

      function drop(e) {
        const x = e.pageX;
        const y = e.pageY;

        const sizuku = document.createElement("div");
        sizuku.style.top = y + "px";
        sizuku.style.left = x + "px";
        document.body.appendChild(sizuku);

        sizuku.className = "sizuku";

        sizuku.addEventListener("animationend", function() {
            this.parentNode.removeChild(this);
        }, false);
      }
    },
    methods: {
      Scroll(){
        window.scrollBy({
          top: 700,
          left: 0,
          behavior: 'smooth'
        });
      },
    },
    components: { TopPage, NaviMenu, EmojiAnime, FadeIn, SlideIn }
}
</script>
