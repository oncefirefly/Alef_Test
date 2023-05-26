<script setup lang="ts">
import { ref } from "vue";

import { useUserStore } from "@/stores/user";
import { useChildrenStore } from "@/stores/children";

import AlefInput from "@/components/utils/AlefInput.vue";
import type { UserData } from "@/types/types";

const userData = ref<UserData>({
  id: 1,
  name: "",
  age: "",
});
const childrenData = ref<Array<UserData>>([
  {
    id: 1,
    name: "",
    age: "",
  },
]);

const storedUserData = useUserStore();
const storedChildrenData = useChildrenStore();

const handleAddChild = () => {
  childrenData.value.push({
    id: childrenData.value.length + 1,
    name: "",
    age: "",
  });
};

const handleRemoveChild = (name: string) => {
  console.log(name);

  childrenData.value = childrenData.value.filter(
    (child) => child.name !== name
  );

  console.log(childrenData.value);
};

const handleSubmit = (e: Event) => {
  e.preventDefault();

  storedUserData.user = userData.value;
  storedChildrenData.children = childrenData.value;
};

const handleUserDataChange = (value: string, valueToUpdate: "name" | "age") => {
  userData.value[valueToUpdate] = value;
};

const handleChildrenChange = (
  value: string,
  valueToUpdate: "name" | "age",
  id: number
) => {
  childrenData.value = childrenData.value.map((child: UserData) => {
    if (child.id === id) {
      child[valueToUpdate] = value;

      return child;
    }

    return child;
  });
};
</script>

<template>
  <form class="form" @submit="(e) => handleSubmit(e)">
    <div>
      <h3 class="form__title">Персональные данные {{ childrenData }}</h3>
      <div class="form__user">
        <AlefInput
          inputId="userName"
          type="text"
          label="Имя"
          :value="userData.name"
          property="name"
          @change="handleUserDataChange"
        />
        <AlefInput
          inputId="userAge"
          type="number"
          label="Взораст"
          :value="userData.age.toString()"
          property="age"
          @change="handleUserDataChange"
        />
      </div>
    </div>
    <div>
      <div class="form__title-container">
        <h3 class="form__title">Дети (макс. 5)</h3>
        <button
          class="form__add-child-btn"
          v-if="childrenData.length < 5"
          type="button"
          @click="handleAddChild"
        >
          <img src="@/assets/img/plus.svg" alt="plus" />
          Добавить ребенка
        </button>
      </div>

      <div class="form__children" v-for="child in childrenData" :key="child.id">
        <AlefInput
          :inputId="'childName' + child.id"
          :id="child.id"
          type="text"
          label="Имя"
          property="name"
          :value="child.name"
          width="260"
          @change="handleChildrenChange"
        />
        <AlefInput
          :inputId="'childAge' + child.id"
          :id="child.id"
          type="number"
          label="Взораст"
          property="age"
          :value="child.age.toString()"
          width="260"
          @change="handleChildrenChange"
        />
        <button
          class="form__remove-child-btn"
          type="button"
          @click="handleRemoveChild(child.name)"
        >
          Удалить
        </button>
      </div>
    </div>
    <button class="form__submit-btn" type="submit">Сохранить</button>
  </form>
</template>

<style scoped>
.form {
  width: 100%;
}

.form__title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form__title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.form__user {
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.form__add-child-btn {
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: none;
  border: 2px solid #01a7fd;
  border-radius: 100px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
}

.form__children {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.form__remove-child-btn {
  border: none;
  background: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
}

.form__submit-btn {
  margin-top: 30px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  background: #01a7fd;
  border: none;
  border-radius: 100px;
}
</style>
