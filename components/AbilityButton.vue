<template>
  <button
    class="ability-button"
    @click="handleAbility"
    v-on:mouseover="combatStore.tooltipContent = props.ability"
    v-on:mouseleave="combatStore.tooltipContent = ''"
    v-on:focus="combatStore.tooltipContent = props.ability"
    ref="buttonEl"
  >
    {{ props.ability }}
  </button>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";
import type { AbilityName } from "~/types/ability";

const props = defineProps<{
  ability: AbilityName;
}>();

const combatStore = useCombatStore();

const buttonEl = ref<HTMLButtonElement>();
const selectedAbility = ref<AbilityName | null>(null);

const handleAbility = () => {
  if (!combatStore.playerCanAct) return;

  if (!selectedAbility.value) {
    selectedAbility.value = props.ability;
    combatStore.tooltipContent = props.ability;
    return;
  }

  combatStore.executeTurn(selectedAbility.value);
  selectedAbility.value = null;
  combatStore.tooltipContent = "";
};
</script>

<style lang="less" scoped>
.ability-button {
  all: unset;
  height: 4rem;
  aspect-ratio: 1/1;
  padding: 0.2rem;
  text-align: center;
  background-color: #444;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>
