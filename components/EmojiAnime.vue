<template>
  <div class="c">
		<span class="c-person">(／‵Д′)／</span>~ <span class="c-table">╧╧</span>
  </div>
</template>

<style>
  .c {
    padding-top: 5px;
	  --dur: 1s;
	  --color1: #17181c;
	  --color2: #e3e4e8;
	  font-size: calc(12px + (36 - 12) * (100vw - 320px) / (1280 - 320));
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
</style>

<script>

</script>