<script setup lang="ts">
import { ref } from "vue";

import { useUserStore } from "@/stores/user";
import { useChildrenStore } from "@/stores/children";

import AlefInput from "@/components/utils/AlefInput.vue";
import type { UserData } from "@/types/types";

const userData = ref<UserData>({
  name: "",
  age: "",
});
const childrenData = ref<Array<UserData>>([
  {
    name: "",
    age: "",
  },
]);

const storedUserData = useUserStore();
const storedChildrenData = useChildrenStore();

const handleAddChild = () => {
  childrenData.value.push({
    name: "",
    age: "",
  });
};

const handleRemoveChild = (index: number) => {
  childrenData.value.splice(index, 1);
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
  index: number
) => {
  childrenData.value = childrenData.value.map(
    (child: UserData, idx: number) => {
      if (idx === index) {
        child[valueToUpdate] = value;

        return child;
      }

      return child;
    }
  );
};
</script>

<template>
  <form class="form" @submit="(e) => handleSubmit(e)">
    <div>
      <h3 class="form__title">Персональные данные</h3>
      <div class="form__user">
        <AlefInput
          id="userName"
          type="text"
          label="Имя"
          value="name"
          @change="handleUserDataChange"
        />
        <AlefInput
          id="userAge"
          type="number"
          label="Взораст"
          value="age"
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
      <template v-for="(children, index) in childrenData" :key="index">
        <div class="form__children">
          <AlefInput
            :id="children.name + index"
            type="text"
            label="Имя"
            value="name"
            :index="index"
            width="260"
            @change="handleChildrenChange"
          />
          <AlefInput
            :id="children.name + index"
            type="number"
            label="Взораст"
            value="age"
            :index="index"
            width="260"
            @change="handleChildrenChange"
          />
          <button
            class="form__remove-child-btn"
            type="button"
            @click="handleRemoveChild(index)"
          >
            Удалить
          </button>
        </div>
      </template>
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
