<template>
  <Button
    class="ability-button"
    @click="handleAbility"
    v-on:focus="tooltipContent = props.ability"
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
import useSafeInject from "~/lib/useSafeInject";

const props = defineProps<{
  ability: AbilityName;
}>();

const combatStore = useCombatStore();

const tooltipContent = useSafeInject<Ref<string>>("tooltipContent");
const buttonEl = ref<HTMLButtonElement>();
const selectedAbility = ref<AbilityName | null>(null);

onClickOutside(buttonEl, () => {
  selectedAbility.value = null;
});

const handleAbility = () => {
  if (!combatStore.playerCanAct) return;

  if (!selectedAbility.value) {
    selectedAbility.value = props.ability;
    tooltipContent.value = props.ability;
    return;
  }

  combatStore.executeTurn(selectedAbility.value);
  selectedAbility.value = null;
  tooltipContent.value = "";
};
</script>
