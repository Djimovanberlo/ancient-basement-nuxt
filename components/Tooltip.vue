<template>
  <div v-if="tooltipContent" class="tooltip" ref="tooltipRef">
    <p>{{ tooltipContent }}</p>
  </div>
</template>

<script setup lang="ts">
import useSafeInject from "~/lib/useSafeInject";

const tooltipRef = ref<HTMLDivElement>();
const tooltipContent = useSafeInject<Ref<string>>("tooltipContent");

onClickOutside(tooltipRef, () => {
  if (tooltipContent) {
    tooltipContent.value = "";
  }
});
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.tooltip {
  padding: 30px;
  .panel-brown();
}
</style>
