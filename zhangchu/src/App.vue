<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
i,em{
  font-style: normal;
}
ul,ol{
  list-style: none;
}
html{
  font-size: 20px;
  height:100%;
}
.ch-clearfixed:after{
  content:".";
  font-size:0;
  display:block;
  clear:both;
}

@media only screen and (min-width: 401px){
    html {
        font-size: 25px !important;;
    }
}
@media only screen and (min-width: 428px){
    html {
        font-size: 26.75px !important;;
    }
}
@media only screen and (min-width: 481px){
    html {
        font-size: 30px !important;; 
    }
}
@media only screen and (min-width: 569px){
    html {
        font-size: 35px !important;; 
    }
}
@media only screen and (min-width: 641px){
    html {
        font-size: 40px !important;;
    }
}
</style>
