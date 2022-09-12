<template>
  <div>
    <div class="c">
		  <span class="c-person">(／‵Д′)／</span>~ <span class="c-table">╧╧</span>
    </div>
    <div class="h">
		  <span class="h-person">(</span><span class="h-arm">ノ</span><span class="h-person"><span class="h-face">#--</span>)</span><span class="h-arm">ノ</span><span class="h-board">＼</span><span class="h-marble1">。</span><span class="h-marble2">゜</span><span class="h-marble3">。</span>
	  </div>
  </div>
</template>

<style>
  .c {
    padding-top: 15px;
	  --dur: 1s;
	  --color1: #17181c;
	  --color2: #e3e4e8;
	  font-size: calc(25px + (38 - 25) * (100vw - 320px) / (1280 - 320));
    font-family: "MS Pゴシック";
  }
  .c span {
	  display: inline-block;
  }
  .c-person {
	animation: c-rage var(--dur) linear infinite
  }
  .c-table {
	animation: c-tableSpin var(--dur) linear infinite;
	transform-origin: 50% 33%;
  }
  @keyframes c-rage {
	from,10%,20%,30%,40%,50%,60%,70%,80%,90%,to{transform: translateX(0)}
	5%,15%,25%,35%,45%,55%,65%,75%,85%,95%{transform: translateX(-5%)}
  }
  @keyframes c-tableSpin {
	from {transform: rotate(0)}
	to {transform: rotate(2turn)}
  }
  @media screen and (max-width: 650px){
    .c{
      display: none;
    }
  }
  .h {
    padding-top: 12px;
	  --dur: 1s;
	  --color1: #17181c;
	  --color2: #e3e4e8;
	  font-size: calc(25px + (38 - 25) * (100vw - 320px) / (1280 - 320));
    font-family: "MS Pゴシック";
  }
  .h span {
	  display: inline-block;
  }
  .h-arm {
	  animation: h-armMove var(--dur) ease-out infinite;
	  transform-origin: 0% 100%;
  }
  .h-person, .h-face {
	  animation: h-crouch var(--dur) ease-out infinite;
  }
  .h-board {
	  animation: h-boardFlip var(--dur) linear infinite;
	  transform-origin: 100% 100%;
}
  .h-marble1 {
	  animation: h-marble1Fly var(--dur) linear infinite;
  }
  .h-marble2 {
	  animation: h-marble2Roll var(--dur) linear infinite;
  }
  .h-marble3 {
	  animation: h-marble3Roll var(--dur) linear infinite;
  }
  @keyframes h-armMove {
	  from {transform: translateY(0) rotate(45deg)}
	  35%, 45% {transform: translateY(0.2em) rotate(90deg)}
	  55%, to {transform: translateY(0) rotate(0)}
  }
  @keyframes h-crouch {
	  from {transform: translateY(0)}
	  35%, 45% {transform: translateY(0.2em)}
	  55%, to {transform: translateY(0)}
  }
  @keyframes h-boardFlip {
	  from, 48% {transform: translateX(-2em) rotate(-50deg)}
	  to {transform: translateX(0) rotate(0)}
  }
  @keyframes h-marble1Fly {
	  from, 48% {transform: translate(-2.8em,0.1em)}
	  to {transform: translate(0)}
  }
  @keyframes h-marble2Roll {
	  from, 48% {transform: translate(-4em,0.8em)}
	  to {transform: translate(0)}
  }
  @keyframes h-marble3Roll {
	  from, 48% {transform: translate(-4.5em,0.1em)}
	  to {transform: translate(0)}
  }
  @media screen and (min-width: 650px){
    .h{
      display: none;
    }
  }
</style>

<script>

</script>