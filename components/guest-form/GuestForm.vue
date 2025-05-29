<template>
  <Form
      v-slot="{ errors }"
      :validation-schema="schema"
      @submit="onSubmit"
  >
    <div>
      <label>Имя и Фамилия</label>
      <Field
          name="fullName"
          type="text"
          :class="{ 'error': errors.fullName }"
      />
      <ErrorMessage name="fullName" />
    </div>

    <div>
      <label>Вы согласны с условиями?</label>
      <div>
        <label>
          <Field name="agreement" type="radio" value="yes" /> Да
        </label>
        <label>
          <Field name="agreement" type="radio" value="no" /> Нет
        </label>
      </div>
      <ErrorMessage name="agreement" />
    </div>

    <button type="submit">
      Отправить
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup
      .string()
      .required('Имя и фамилия обязательны')
      .min(2, 'Минимум 2 символа')
      .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Только буквы и пробелы'),
  agreement: yup
      .string()
      .required('Выберите один из вариантов')
      .oneOf(['yes', 'no'], 'Выберите один из вариантов')
});

const onSubmit = (values) => {
  console.log('Форма отправлена:', values);
};
</script>
