<template>
  <div id="app">
    <h1>Cash Reserves: ${{ cash }}</h1>
    <br>
    <h1>Bake Sales: {{ bakeSales }}</h1>
    <button v-on:click="getCash">Make it rain!</button>
    <button v-on:click="bakeSale">Run a bake sale!</button>
  </div>
</template>

<script>
import Game from '../components/Game.vue';
export default {
  name: 'Home',
  components: {
    Game
  },
  data(){
    return {
      //Resources and buildings go here
      //TODO: You must construct additional pylons! (make some buildings, etc)
      salary: 1,
      cash: 0,
      bakeSales: 0,
      yardSales: null,
      marketStalls: null,
      onlineStores: null,
      youTubeChannels: null,
      viralMarketingCampaigns: null,
      interns: null,
      employees: null,
      llcs: null,
      brandDeals: null,
      stockPrice:null,
      shares:null,
      subsidiaries:null,
      contractors: null
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
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
