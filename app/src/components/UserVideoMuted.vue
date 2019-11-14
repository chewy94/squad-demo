<template>
  <v-card flat tile color="#7610cf" height="100%" class="text-center">
    <v-row align="center" style="height: 100%">
      <v-col>
        <v-card-text class="pb-1">
          <v-avatar size="48" style="border: 3px solid white;">
            <v-img :src="require('@/assets/squad-avatar.png')"></v-img>
          </v-avatar>
        </v-card-text>
        <v-card-text class="white--text pt-0" style="font-size: 12px;">
          <span class="font-weight-black">Simon Nova</span> is paused
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>
