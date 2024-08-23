<template>
  <div class="ability-panel"><button @click="slap">SLAP</button></div>
</template>

<script setup lang="ts">
import { attack } from "~/lib/ability";
import { useCombatStore } from "~/store/useCombatStore";

const { executePlayerAbility } = useCombatStore();

const slap = () => {
  executePlayerAbility(attack);
};
</script>

<style lang="less" scoped>
.ability-panel {
  display: flex;

  button {
    margin-left: auto;
  }
}
</style>
