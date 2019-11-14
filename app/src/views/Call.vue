<template>
  <div class="call" @click="click">
    <v-row v-for="row in rows" :key="row" no-gutters :style="`height: ${100 / rows}%;`">
      <v-col v-for="user in columns[row - 1]" :key="users[getOffset(row, user)].id" :cols="12 / columns[row - 1]" style="height: 100%;">
        <user-video :muted="muted && users[getOffset(row, user)].id === users.length - 1" />
      </v-col>
    </v-row>
    <user-controls @mute="muted = !muted" />
  </div>
</template>
<script>
import UserControls from '@/components/UserControls'
import UserVideo from '@/components/UserVideo'

export default {
  components: {
    'user-controls': UserControls,
    'user-video': UserVideo
  },
  data: () => ({
    clicks: 0,
    doubleClickTimer: null,
    muted: false,
    users: [
      { id: 0, name: 'Sara' },
      { id: 1, name: 'Sara' }
    ]
  }),
  computed: {
    columns () {
      let rows = this.users.length < 5 ? 2 : 3
      let users = this.users.length
      let final = []

      while (rows > 0) {
        const value = Math.round(users / rows)
        final.push(value)

        users -= value
        rows--
      }

      return final
    },
    rows () {
      return this.users.length < 5 ? 2 : 3
    }
  },
  methods: {
    getOffset (row, user) {
      if (row === 1) {
        return user - 1
      } else if (row === 2) {
        return user + this.columns[row - 1] - 1
      } else {
        return user + this.columns[row - 1] + this.columns[row - 2] - 1
      }
    },
    click () {
      this.clicks++
      if (this.clicks === 1) {
        let self = this
        this.doubleClickTimer = setTimeout(() => {
          self.clicks = 0
          if (this.users.length === 9) return
          self.users.push({ id: this.users.length, name: 'Test' })
        }, 2000)
      } else {
        clearTimeout(this.doubleClickTimer)
        this.clicks = 0
        if (this.users.length === 2) return
        this.users.pop()
      }
    }
  }
}
</script>

<style lang="scss">
.call {
  height: 100%;
}
</style>
