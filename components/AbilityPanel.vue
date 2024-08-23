<template>
  <div class="ability-panel"><button @click="slap">SLAP</button></div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";
import { AbilityName } from "~/types/ability";

const { executePlayerAbility } = useCombatStore();

const slap = () => {
  executePlayerAbility(AbilityName.Attack);
};
</script>

<style lang="less" scoped>
.ability-panel {
  display: grid;
  background-color: lightgray;

  button {
    margin-left: auto;
  }
}
</style>
