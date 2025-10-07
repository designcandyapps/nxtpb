<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark||header?.logo?.light"><UColorModeImage v-bind="{ class:'h-6 w-auto',...header?.logo }" /></template>
      <template v-else>
        <img id="ee" src="https://pinfluents.com/_BCK/4/im/bp1.png" width="60" height="60">
        <!--NuxtImg id="nu" src="/public/dc2.png" width="60" height="60" format="png" @load="getCP" /-->
      </template>
    </template>

    <template v-if="header?.search" #center>
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" :label="null" class="lg:hidden" />
      <template v-if="header?.links"><UButton v-for="(link,index) of header.links" :key="index" v-bind="{ color:'gray',variant:'ghost',...link }" /></template>
    </template>

    <template #panel><UNavigationTree :links="mapContentNavigation(navigation)" /></template>
  </UHeader>
</template>
