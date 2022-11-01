<template>
  <v-row class="redak" v-for="row in level" :key="row">
    <v-col class="stupac" 
           v-for="box in boxesInRow" 
           :key="box"
           @click="catchBox"
           :ref="'row_' + row + '_box_' + box"
           >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tempTime: 0,
      boxesInRow: 8,
      level: 1,
      maxLevel: 3,
      levelStartTime:0
    }
  },
  methods: {
    randomDelay() {
      return 2000 + Math.random() * 5000;
    },
    addBoxInRandomTime() {
      setTimeout(()=> {
              this.addRandomBox()
              this.levelStartTime = Date.now();
      }, this.randomDelay())
    },
    addRandomBox() {
      var random_box = Math.floor(Math.random() * this.boxesInRow) + 1
      var random_row = Math.floor(Math.random() * this.level) + 1
      const el = this.$refs['row_' + random_row + '_box_' + random_box][0].$el
      el.classList.add("kocka")
    },
    catchBox(e) {
      //ako smo pogodili elemenat koji ima klasu 'crvena kocka'
      if(e.target.classList.contains("kocka")){
        //izbrisi klasu 'kocka sa elementa'
        e.target.classList.remove("kocka")
        //dohvati timestamp te oduzmi od njega timestamp kad se pokazala kocka te spremi u reactionTime
        this.tempTime += Date.now() - this.levelStartTime;
        //sada uvećamo level i stavljamo random kocku ukoliko nismo dosegli max level
        if(this.level < this.maxLevel){
          this.level++
          //opet random stavljamo kocku
          this.addBoxInRandomTime()
        }else {
          //dosegli smo maksimalni broj levela igra gotova
          this.$store.commit("setReactionTime", this.tempTime)
          this.tempTime = 0
          this.$store.commit('endGame')
          //sada treba ukljucit komponentu za spremanje igraca
          this.$store.commit("toggleSavePlayerForm");
          
        }
      }
    }
  },
  mounted() {
    this.addBoxInRandomTime()
  }
}
</script>

<style>
.kocka {
    background: red;
}
.redak {
    background: #000;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #fff;
}
.stupac {
    height: 100px;
    border-right: 1px solid #fff;
}
.stupac:last-child { 
    border-right: none;
}
</style>