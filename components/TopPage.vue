<template>
    <div class="hello-parent">
        <svg class="hello-word" width="365" height="365" viewBox="0 0 365 365">
          <g id="H-letter">
            <line class="H-left-stroke" x1="17" y1="0" x2="17" y2="124" stroke="#000" fill="none" stroke-width="34" />
            <line class="H-mid-stroke" x1="33" y1="62" x2="68" y2="62" stroke="#000" fill="none" stroke-width="34" />
            <line class="H-right-stroke" x1="84" y1="0" x2="84" y2="124" stroke="#000" fill="none" stroke-width="34" />
          </g>
    
          <g id="E-letter">
            <line class="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="#000" fill="none" stroke-width="34" />
            <line class="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="#000" fill="none" stroke-width="34" />
            <line class="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="#000" fill="none" stroke-width="34" />
            <line class="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="#000" fill="none" stroke-width="34" />
          </g>
    
          <g id="L-one-letter">
            <line class="L-one-long-stroke" x1="17" y1="153" x2="17" y2="277" stroke="#000" fill="none" stroke-width="34" />
            <line class="L-one-short-stroke" x1="33" y1="260" x2="77" y2="260" stroke="#000" fill="none" stroke-width="34" />
          </g>
    
          <g id="L-two-letter">
            <line class="L-two-long-stroke" x1="104" y1="153" x2="104" y2="277" stroke="#000" fill="none" stroke-width="34" />
            <line class="L-two-short-stroke" x1="120" y1="260" x2="164" y2="260" stroke="#000" fill="none" stroke-width="34" />
          </g>
    
          <g id="O-letter">
            <circle class="O-stroke" cx="231" cy="215" r="48" stroke="#000" fill="none" stroke-width="31" />
          </g>
    
          <g id="red-dot">
            <line x1="325" y1="260" x2="325" y2="260" class="dot" @click="Change()"/>
          </g>  
        </svg>
      </div>
</template>

<script>
  export default {
    methods:{
      Change(){
        const m = Math.floor( Math.random() * 5 );
        if(m === 1){
          document.querySelector(".dot").classList.add("is-Active4");
        }
        else if(m === 2){
          document.querySelector(".dot").classList.add("is-Active3");
        }
        else if(m === 3){
          document.querySelector(".dot").classList.add("is-Active2");
        }
        else if(m === 4){
          document.querySelector(".dot").classList.add("is-Active1");
        }
        else{
          document.querySelector(".dot").classList.add("Is-Active");
        }

        setTimeout(() => {
          if (document.querySelector(".dot").classList.contains('Is-Active') === false ) {
            const n = Math.floor( Math.random() * 3 );
            if (document.querySelector(".dot").classList.contains('A') === true ) {
              document.querySelector(".dot").classList.remove("A");
            }
            else if (document.querySelector(".dot").classList.contains('B') === true ) {
              document.querySelector(".dot").classList.remove("B");
            }

            if(n === 1){
              document.querySelector(".dot").classList.add("A");
            }
            else if(n === 2){
              document.querySelector(".dot").classList.add("B");
            }
          }
        }, 1000);

        setTimeout(() => {
          if (document.querySelector(".dot").classList.contains('Is-Active') === true ) {
            document.querySelector(".dot").classList.remove("Is-Active");
          }
          if (document.querySelector(".dot").classList.contains('is-Active1') === true ) {
            document.querySelector(".dot").classList.remove("is-Active1");
          }
          if (document.querySelector(".dot").classList.contains('is-Active2') === true ) {
            document.querySelector(".dot").classList.remove("is-Active2");
          }
          if (document.querySelector(".dot").classList.contains('is-Active3') === true ) {
            document.querySelector(".dot").classList.remove("is-Active3");
          }
          if (document.querySelector(".dot").classList.contains('is-Active4') === true ) {
            document.querySelector(".dot").classList.remove("is-Active4");
          }
        }, 2500);
      },
    }
  }
</script>

<style>
  .hello-parent {
    padding-top: 100px;
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    background: white; 
  }
  .hello-word {
    margin:auto;
  }

  .H-left-stroke {
    stroke-dasharray: 124px;
    stroke-dashoffset: 124px;
    animation: H-left-move 20s ease forwards;
  }
  .H-mid-stroke {
    stroke-dasharray: 37px;
    stroke-dashoffset: 37px;
    animation: H-mid-move 9s ease forwards;
  }
  .H-right-stroke {
    stroke-dasharray: 124px;
    stroke-dashoffset: 124px;
    animation: H-right-move 13s ease forwards;
  }
  @keyframes H-left-move {
    0% {
      stroke-dashoffset: 124px;
    }
    5% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes H-mid-move {
    0% {
      stroke-dashoffset: 37px;
    }
    5% {
      stroke-dashoffset: 37px;
    }
    10% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes H-right-move {
    0% {
      stroke-dashoffset: 124px;
    }
    5% {
      stroke-dashoffset: 124px;
    }
    10% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  .E-left-stroke {
    stroke-dasharray: 124px;
    stroke-dashoffset: 124px;
    animation: E-left-move 20s ease forwards;
  }
  .E-top-stroke {
    stroke-dasharray: 47px;
    stroke-dashoffset: 47px;
    animation: E-top-move 10s ease forwards;
  }
  .E-mid-stroke {
    stroke-dasharray: 42px;
    stroke-dashoffset: 42px;
    animation: E-mid-move 10s ease forwards;
  }
  .E-bottom-stroke {
    stroke-dasharray: 47px;
    stroke-dashoffset: 47px;
    animation: E-bottom-move 10s ease forwards;
  }
  @keyframes E-left-move {
    0% {
      stroke-dashoffset: 124px;
    }
    3% {
      stroke-dashoffset: 124px;
    }
    7% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes E-top-move {
    0% {
      stroke-dashoffset: 47px;
    }
    8% {
      stroke-dashoffset: 47px;
    }
    14% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes E-mid-move {
    0% {
      stroke-dashoffset: 42px;
    }
    11% {
      stroke-dashoffset: 42px;
    }
    17% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes E-bottom-move {
    0% {
      stroke-dashoffset: 47px;
    }
    15% {
      stroke-dashoffset: 47px;
    }
    21% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  .L-one-long-stroke {
    stroke-dasharray: 124px;
    stroke-dashoffset: 124px;
    animation: L-one-long-move 20s ease forwards;
  }
  .L-one-short-stroke {
    stroke-dasharray: 44px;
    stroke-dashoffset: 44px;
    animation: L-one-short-move 10s ease forwards;
  }
  @keyframes L-one-long-move {
    0% {
      stroke-dashoffset: 124px;
    }
    6% {
      stroke-dashoffset: 124px;
    }
    9% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes L-one-short-move {
    0% {
      stroke-dashoffset: 44px;
    }
    17% {
      stroke-dashoffset: 44px;
    }
    20% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  .L-two-long-stroke {
    stroke-dasharray: 124px;
    stroke-dashoffset: 124px;
    animation: L-two-long-move 20s ease forwards;
  }
  .L-two-short-stroke {
    stroke-dasharray: 44px;
    stroke-dashoffset: 44px;
    animation: L-two-short-move 10s ease forwards;
  }
  @keyframes L-two-long-move {
    0% {
      stroke-dashoffset: 124px;
    }
    7% {
      stroke-dashoffset: 124px;
    }
    10% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes L-two-short-move {
    0% {
      stroke-dashoffset: 44px;
    }
    18% {
      stroke-dashoffset: 44px;
    }
    21% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  .O-stroke {
    stroke-dasharray: 302px;
    stroke-dashoffset: 302px;
    animation: O-move 20s ease forwards;
  }
  @keyframes O-move {
    0% {
      stroke-dashoffset: 302px;
    }
    9% {
      stroke-dashoffset: 302px;
    }
    14% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  .dot {
    stroke: red;
    stroke-width: 44px;
    stroke-linecap: round;
    animation: red-dot-grow 8s ease-out forwards;

    transition: .8s;
    cursor: pointer;
  }
  .dot.A{
    stroke: blue;
    stroke-width: 44px;
    stroke-linecap: round;

    transition: .8s;
    cursor: pointer;
  }
  .dot.B{
    stroke: green;
    stroke-width: 44px;
    stroke-linecap: round;

    transition: .8s;
    cursor: pointer;
  }
  .dot.Is-Active{
    transition: .8s;
    transform: scale(0.5) translate(75%, 75%);
  }
  .dot.is-Active1{
    transition: .8s;
    transform: translate(0px, -500px);
  }
  .dot.is-Active2{
    transition: .8s;
    transform: translate(100px, 0px);
  }
  .dot.is-Active3{
    transition: .8s;
    transform: translate(0px, 200px);
  }
  .dot.is-Active4{
    transition: .8s;
    transform: translate(-500px, 0px);
  }
  @keyframes red-dot-grow {
    0% {
      stroke-width: 0px;
    }
    30% {
      stroke-width: 0px;
    }
    40% {
      stroke-width: 44px;
    }
    100% {
      stroke-width: 44px;
    }
  }
</style>