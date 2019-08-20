<!-- https://www.photogabble.co.uk/blog/tutorials/build-an-incremental-web-game-with-vue-js/ -->
<template>
  <div id="app">
    <!-- TODO: navbar and some better UI -->
    <h1>Cash Reserves: ${{ cash }}</h1>
    <br>
    <h1>Small loans: {{ smallLoans }}</h1>
    <button v-on:click="getCash">Make it rain!</button>
    <button v-on:click="bakeSale">Ask for a small loan</button>
  </div>
</template>

<script>
import Game from './components/Game.vue';

export default {
  name: 'app',
  components: {
    Game
  },
  data(){
    return {
      //Resources and buildings go here
      //TODO: You must construct additional pylons! (make some buildings, etc)
      salary: 1,
      cash: 0,
      bakeSales: 0
    }
  },
  methods:{
    //ALL YOUR FUNCTIONS ARE BELONG TO US
    earnSalary: function(){
      this.cash += this.salary;
    },
    getCash: function(){
      this.cash++;
    },
    bakeSale: function(){
      this.bakeSales += 1;
      this.cash += (10*this.bakeSales);
    },
  //Gameloop
    gameLoop: function(){
      this.bakeSale();
      //Other building methods once implemented
      //TODO: implement more building-related methods
      //TODO: refactor to have a building manager
    },
    mounted: function(){
      setInterval(this.gameLoop, 1000);
    }
  }
}
</script>

<style>
/* TODO: Style shit */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
