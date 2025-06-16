<template>
  <div class="wrapper">
    <Description class="description">
      Пожалуйста, подтвердите свое присутствие и заполните анкету до <span class="description__date"
        >10.07.2025 <OutlineIcon class="description__icon description__icon--position" /></span
      >, чтобы мы могли планировать торжество наилучшим образом
    </Description>
    <BorderIcon class="border--top border" />
    <div class="form">
      <Title class="title">АНКЕТА ГОСТЯ</Title>
      <Form v-slot="{ errors }" :validation-schema="schema" class="wedding-form" @submit="onSubmit">
        <div class="form-group">
          <label class="form-label">Пожалуйста, введите имя и фамилию всех, кто планирует посетить мероприятие:</label>
          <Field
            name="fullName"
            type="text"
            class="text-input"
            placeholder="Здесь ввод данных :)"
            :class="{ error: errors.fullName }"
          />
          <ErrorMessage class="error-text" name="fullName" />
        </div>

        <div class="form-group">
          <label class="form-label">Планируете ли вы присутствовать на свадьбе?</label>
          <div class="radio-group">
            <label class="radio-label">
              <Field class="form-radio" name="presence" type="radio" value="yes" /> Да
            </label>
            <label class="radio-label">
              <Field class="form-radio" name="presence" type="radio" value="no" /> Нет
            </label>
          </div>
          <ErrorMessage class="error-text" name="presence" />
        </div>

        <div class="form-group">
          <label class="form-label">Нужен ли трансфердо места проведения?</label>
          <div class="radio-group">
            <label class="radio-label">
              <Field class="form-radio" name="transfer" type="radio" value="yes" /> Да
            </label>
            <label class="radio-label">
              <Field class="form-radio" name="transfer" type="radio" value="no" /> Нет
            </label>
          </div>
          <ErrorMessage class="error-text" name="transfer" />
        </div>

        <div class="form-group">
          <label class="form-label">Нужен ли ночлег после свадьбы?</label>
          <div class="radio-group">
            <label class="radio-label">
              <Field class="form-radio" name="agreement" type="radio" value="yes" /> Да
            </label>
            <label class="radio-label">
              <Field class="form-radio" name="agreement" type="radio" value="no" /> Нет
            </label>
          </div>
          <ErrorMessage class="error-text" name="agreement" />
        </div>

        <div class="form-group">
          <label class="form-label">Кукую песню Вы хотите услышать на свадьбе?</label>
          <Field class="text-input" name="music" placeholder="Здесь ввод музыки :)" type="text" :class="{ error: errors.music }" />
          <ErrorMessage class="error-text" name="music" />
        </div>

        <Button class="submit-button" type="submit">Отправить анкету</Button>
      </Form>
    </div>
    <BorderIcon class="border--bottom border" />
  </div>
</template>

<script setup lang="ts">
import BorderIcon from '~/components/atomic/BorderIcon.vue';
import Description from '~/components/atomic/Description.vue';
import OutlineIcon from '~/components/atomic/OutlineIcon.vue';
import Title from '~/components/atomic/Title.vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as yup from 'yup';
import type { User } from '~/server/db/schema';
import Button from '~/components/atomic/Button.vue';

const triggerConfetti = () => {
  const COLORS = ["#eac60b", "#fffc46", "#ffffff"];

  const end = Date.now() + 5 * 1000;
  function frame() {
    useConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: COLORS,
    });
    useConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: COLORS,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
};


const schema = yup.object({
  fullName: yup
    .string()
    .required('Имя и фамилия обязательны')
    .min(2, 'Минимум 2 символа')
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Только буквы и пробелы'),
  presence: yup
    .string()
    .required('Выберите один из вариантов')
    .oneOf(['yes', 'no'], 'Выберите один из вариантов'),
  transfer: yup
    .string()
    .required('Выберите один из вариантов')
    .oneOf(['yes', 'no'], 'Выберите один из вариантов'),
  agreement: yup
    .string()
    .required('Выберите один из вариантов')
    .oneOf(['yes', 'no'], 'Выберите один из вариантов'),
  music: yup
    .string()
    .min(2, 'Минимум 2 символа')
    .matches(/^[a-zA-Zа-яА-Я0-9\s]+$/, 'Только буквы, цифры и пробелы'),
});

const onSubmit = async (values: User) => {
  const { fullName, presence, transfer, agreement, music } = values;

  try {
    await $fetch('/api/users', {
      method: 'POST',
      body: {
        fullName,
        presence,
        transfer,
        agreement,
        music,
      },
    });
  } catch (error) {
    console.error(error);
  }


  triggerConfetti()
};
</script>

<style scoped lang="scss">
.description {
  color: $color-primary;
  padding: 20px;

  &__date {
    display: inline-block;
    position: relative;
  }

  &__icon {
    &--position {
      position: absolute;
      top: -3px;
      left: -3px;
    }
  }
}

.title {
  color: $color-light;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 70px;
  background-color: $color-primary;
  padding: 70px 20px;
}

.border {
  position: relative;
  z-index: 3;

  &--top {
    top: 20px;
  }

  &--bottom {
    bottom: 20px;
  }
}

.wedding-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: $color-light;
  position: relative;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-label {
  font-size: 18px;
  line-height: 21px;
}

.text-input {
  font-size: 16px;
  line-height: 20px;
  color: $color-light;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid $color-light;
  padding: 10px 5px;
  border-radius: 0;

  &::placeholder {
    color: $color-light;
  }

  &:focus {
    outline: none;
  }
}

.error-text {
  font-size: 15px;
  line-height: 18px;
  color: $color-error-40;
}

.radio-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  line-height: 20px;
}

.form-radio[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid $color-light;
  background-color: $color-primary;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  margin: 0;

  &:checked:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $color-light;
  }
}

.submit-button {
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}
</style>
