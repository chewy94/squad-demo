<template>
  <v-card class="round-card text-center">
    <v-card-text class="title-bg">
      <div class="inviter-name" v-text="caller" />
      <div class="inviter-text">invited you to join a video chat</div>
    </v-card-text>
    <v-card-text class="name-question pb-0">
      What's your full name?
    </v-card-text>
    <v-card-text class="pb-0">
      <v-form ref="form">
        <v-text-field
          v-model="name"
          class="join-name mx-auto"
          :rules="[v => !!v || 'Please enter a name']"
          color="#feb600"
          placeholder="Please enter name"
          dense
        />
      </v-form>
    </v-card-text>
    <v-card-text>
      <v-btn class="join-btn text-none" depressed @click="toCall">Join the room</v-btn>
    </v-card-text>
    <v-card-text class="terms-root pt-0">
      You agree to our <span class="terms-privacy">Terms</span> & <span class="terms-privacy">Privacy Policy</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    caller: {
      type: String
    }
  },
  data: () => ({
    name: null
  }),
  methods: {
    toCall () {
      if (this.$refs.form.validate()) {
        this.$router.push('/call')
      }
    }
  }
}
</script>

<style lang="scss">
.round-card {
  border-radius: 16.5px !important;
}
.title-bg {
  background-image: url('~@/assets/squad-bg.png');
  background-size: cover;
  background-position: bottom;
}
.join-btn {
  background-color: #0088ff !important;
  color: white !important;
  height: 50px !important;
  width: 85% !important;
}
.join-name {
  width: 75% !important;
  input {
    text-align: center;
    color: #182e6a !important;
    font-weight: 700;
    font-size: 20px;
  }
}
.inviter-name {
  font-weight: 900;
  font-size: 23px;
  color: white;
}
.inviter-text {
  font-weight: 500;
  font-size: 17px;
  color: white;
}
.name-question {
  font-size: 16px !important;
  color: black !important;
}
.terms-privacy {
  color: black;
  font-weight: 700
}
.terms-root {
  font-size: 11px !important;
  color: #868686 !important;
}
</style>
