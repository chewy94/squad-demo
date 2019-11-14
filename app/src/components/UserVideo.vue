<template>
  <v-card flat tile height="100%">
    <video v-if="!muted" ref="video" :poster="require('@/assets/squad-logo.png')" autoplay loop muted="true" playsinline="true">
      <source type="video/mp4" :src="require('@/assets/small.mp4')" />
    </video>
    <user-video-muted v-else />
  </v-card>
</template>

<script>
import UserVideoMuted from '@/components/UserVideoMuted'

export default {
  props: {
    muted: {
      type: Boolean
    }
  },
  components: {
    'user-video-muted': UserVideoMuted
  },
  mounted () {
    if (!this.muted && !this.$refs.video.playing) this.$refs.video.play()
  }
}
</script>

<style lang="scss">
video {
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 0px;
  min-width: 100%;
  min-height: 100%;
}
</style>
