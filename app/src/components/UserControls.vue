<template>
  <v-card flat color="transparent" class="control-card text-center px-5" width="85%">
    <v-card-actions>
      <v-row align="end" justify="space-between">
        <v-col class="px-0">
          <v-icon color="white" v-text="'close'" />
        </v-col>
        <v-col class="px-0">
          <v-icon color="white" @click.stop="muted = !muted" v-text="`${muted ? 'videocam_off' : 'videocam'}`" />
        </v-col>
        <v-col class="px-0">
          <v-icon color="white" v-text="'mic_none'" />
        </v-col>
        <v-col class="px-0">
          <v-icon color="white" v-text="'sync'" />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    muted: false
  }),
  watch: {
    muted (val) {
      console.log(val)
      this.$emit('mute', val)
    }
  }
}
</script>

<style lang="scss">
.control-card {
  z-index: 1000;
  position: absolute;
  bottom: 0;
  margin-left: 7.5%;
}
</style>
