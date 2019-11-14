<template>
  <v-container class="home">
    <v-row justify="center" align="center" style="height: 100%;">
      <v-col>
        <name-card :caller="caller" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NameCard from '@/components/NameCard'
import axios from 'axios'

export default {
  components: {
    'name-card': NameCard
  },
  data: () => ({
    caller: null
  }),
  async mounted () {
    console.log(this.$route.params.invite)
    console.log(await axios.get('http://localhost:3000/user'))
    this.caller = (await axios.get('http://localhost:3000/user')).data
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
  background-image: linear-gradient(0deg,rgba(31, 30, 31, 0.71),rgba(31, 30, 31, 0.71)), url('~@/assets/squad-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
