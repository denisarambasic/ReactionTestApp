<template>
    <div class="playerWrapper">
        <div class="playerForm">
            <h1>Your reaction time is: {{ $store.state.reactionTime / 1000 }}s</h1>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>
                <v-btn
                color="success"
                class="mr-4"
                @click="saveUser"
                >
                Save
                </v-btn>
            </v-form>
        </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ]
    }),
    methods: {
        saveUser() {
            if(this.valid){
                console.log(this.name)
                this.$store.commit("toggleSavePlayerForm")
                //Ovdje ide post request na api i sprema se user i reaction time
            } else{
                console.log("nije ispravan name")
            }
        }
    }
  }
</script>
<style scoped>
.playerWrapper {
    position: absolute;
    top: 0;
    width:100%;
    height: 100%;
    background: #f2f2f2;
}
.playerForm {
    width: 400px;
    margin: 200px auto;
}
</style>