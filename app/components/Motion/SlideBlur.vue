<template>
  <component
    :is="props.as"
    ref="container"
    :class="props.class"
  >
    <!-- When used inside v-for, animate as a single element -->
    <Motion
      v-if="singleMode"
      :initial="initialState()"
      :while-in-view="inViewState()"
      :in-view-options="{ once: true }"
      :transition="{
        duration: props.duration,
        delay: props.index ? props.delay * props.index : props.delay,
        ease: 'easeOut',
        type: 'tween',
      }"
    >
      <slot />
    </Motion>
    <!-- When used normally, animate each child separately -->
    <Motion
      v-for="(child, childIndex) in children"
      v-else
      :key="childIndex"
      ref="childElements"
      :initial="initialState()"
      :while-in-view="inViewState()"
      :in-view-options="{ once: true }"
      :transition="{
        duration: props.duration,
        delay: props.delay * childIndex,
        ease: 'easeOut',
        type: 'tween',
      }"
    >
      <component :is="child" />
    </Motion>
  </component>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  duration?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  class?: string
  index?: number
  as?: string | undefined
}>(), {
  duration: 0.5,
  delay: 0.1,
  direction: 'down',
  as: 'div',
})

const container = ref(null)
const childElements = ref([])
const slots = useSlots()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const children = ref<any>([])

const singleMode = computed(() => {
  return props.index !== undefined || (slots.default && slots.default().length === 1)
})

onMounted(() => {
  watchEffect(() => {
    children.value = slots.default ? slots.default() : []
  })
})

const transformMap = {
  down: { initial: 'translateY(-50px)', final: 'translateY(0px)' },
  up: { initial: 'translateY(50px)', final: 'translateY(0px)' },
  left: { initial: 'translateX(-50px)', final: 'translateX(0px)' },
  right: { initial: 'translateX(50px)', final: 'translateX(0px)' },
}

function initialState() {
  return {
    opacity: 0,
    transform: transformMap[props.direction].initial,
  }
}

function inViewState() {
  return {
    opacity: 1,
    transform: transformMap[props.direction].final,
  }
}
</script>
