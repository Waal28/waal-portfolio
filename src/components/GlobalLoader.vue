<template lang="">
  <span class="loader font-emilysCandy sm:text-8xl text-[18vw] tracking-widest"
    >Loading</span
  >
</template>
<script></script>
<style>
.loader {
  display: inline-block;
  font-weight: bold;
  color: #554b38;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #d4c4ac;
  text-shadow:
    0 0 2px #554b38,
    0 0 1px #554b38,
    0 0 1px #554b38;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
</style>
