<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  id?: number;
  inputId: string;
  type: string;
  label: string;
  property: "name" | "age";
  value: string;
  width?: string;
}>();

const emit = defineEmits<{
  change: [value: string, valueToUpdate: any, id?: number];
}>();

const inputValue = ref(props.value);

const handleInputChange = () => {
  emit("change", inputValue.value, props.property, props.id);
};
</script>

<template>
  <label
    class="alef__label"
    :for="props.inputId"
    :style="{
      width: props.width + 'px',
    }"
  >
    <span class="alef__label-text">{{ props.label }}</span>
    <input
      class="alef__input"
      v-model="inputValue"
      :id="props.inputId"
      :type="props.type"
      @change="handleInputChange"
      required
    />
  </label>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.alef__label {
  padding: 8px 16px 6px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}

.alef__label-text {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
}

.alef__input {
  padding: 0;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #111111;
}

.alef__input:focus {
  outline: none;
}
</style>
