<template>
<div id="game">
    <h1>Cash Reserves: ${{ cash }}</h1>
    <br>
    <h1>Bake Sales: {{ bakeSales }}</h1>
    <button v-on:click="getCash">Make it rain!</button>
    <button v-on:click="bakeSale">Run a bake sale!</button>
  </div>
</template>

<script>
export default {
  name: 'Game',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
