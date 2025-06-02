<template>
  <div class="wrapper">
    <Description class="description">
      Пожалуйста, подтвердите свое <br />
      присутствие и заполните анкету до <br />
      <span class="description__date"
        >10.07.2025 <OutlineIcon class="description__icon description__icon--position" /> </span
      >, чтобы мы могли <br />
      планировать торжество <br />
      наилучшим образом
    </Description>
    <BorderIcon class="border--top border" />
    <div class="form">
      <Title class="title">АНКЕТА ГОСТЯ</Title>
      <Form v-slot="{ errors }" :validation-schema="schema" class="wedding-form" @submit="onSubmit">
        <div class="form-group">
          <label class="form-label">Перечислите себя и своих близких</label>
          <Field
            name="fullName"
            type="text"
            class="text-input"
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
          <label class="form-label">Кукую песню вы хотите услышать на свадьбе?</label>
          <Field class="text-input" name="music" type="text" :class="{ error: errors.music }" />
          <ErrorMessage class="error-text" name="music" />
        </div>

        <button class="submit-button" type="submit">Отправить</button>
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

  // TODO: try catch
  const newUser = await $fetch('/api/users', {
    method: 'POST',
    body: {
      fullName,
      presence,
      transfer,
      agreement,
      music,
    },
  });

  console.log('newUser: ', newUser);
};
</script>

<style scoped lang="scss">
.description {
  color: $color-primary;

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
</style>
