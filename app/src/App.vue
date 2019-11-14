<template>
  <v-app id="app">
    <v-content>
      <v-slide-x-transition>
        <router-view/>
      </v-slide-x-transition>
    </v-content>
    <v-footer class="pa-0">
      <v-card color="black" flat tile>
        <v-card-text class="py-0">
          <v-row align="center">
            <v-col cols="3">
              <v-img :src="require('@/assets/squad-logo.png')" />
            </v-col>
            <v-col cols="6">
              <div style="color: white;">Squad works best in our iPhone app</div>
            </v-col>
            <v-col cols="3">
              <v-btn class="text-none white--text" color="#0088ff" rounded>Get</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  mounted () {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
}
</script>

<style lang="scss">
.v-footer {
  flex-shrink: 0 !important;
}
.v-application--wrap {
  min-height: 0 !important;
  height: calc(var(--vh, 1vh) * 100);
}
</style>
