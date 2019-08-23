<template>
  <div>
    <Game />
  </div>
  
</template>

<script>
import Game from '../components/Game.vue';
export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>

<style>
/* TODO: Style shit */
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
#game {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
