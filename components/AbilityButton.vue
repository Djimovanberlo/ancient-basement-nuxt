<template>
  <Button
    class="ability-button"
    @click="handleAbility"
    v-on:mouseover="combatStore.tooltipContent = props.ability"
    v-on:mouseleave="combatStore.tooltipContent = ''"
    v-on:focus="combatStore.tooltipContent = props.ability"
    variant="square"
    size="md"
    ref="buttonEl"
  >
    {{ props.ability }}
  </Button>
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

onClickOutside(buttonEl, () => {
  selectedAbility.value = null;
});

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
