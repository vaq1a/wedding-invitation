<template>
  <Form
      v-slot="{ errors }"
      :validation-schema="schema"
      @submit="onSubmit"
  >
    <div>
      <label>Перечислите себя и своих близких</label>
      <Field
          name="fullName"
          type="text"
          :class="{ 'error': errors.fullName }"
      />
      <ErrorMessage name="fullName" />
    </div>

    <div>
      <label>Планируете ли вы присутствовать на свадьбе?</label>
      <div>
        <label>
          <Field name="presence" type="radio" value="yes" /> Да
        </label>
        <label>
          <Field name="presence" type="radio" value="no" /> Нет
        </label>
      </div>
      <ErrorMessage name="presence" />
    </div>

    <div>
      <label>Нужен ли трансфердо места проведения?</label>
      <div>
        <label>
          <Field name="transfer" type="radio" value="yes" /> Да
        </label>
        <label>
          <Field name="transfer" type="radio" value="no" /> Нет
        </label>
      </div>
      <ErrorMessage name="transfer" />
    </div>

    <div>
      <label>Нужен ли ночлег после свадьбы?</label>
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

    <div>
      <label>Кукую песню вы хотите услышать на свадьбе?</label>
      <Field
          name="music"
          type="text"
          :class="{ 'error': errors.music }"
      />
      <ErrorMessage name="music" />
    </div>

    <button type="submit">
      Отправить
    </button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
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
  const {
    fullName,
    presence,
    transfer,
    agreement,
    music
  } = values

  // TODO: try catch
  const newUser = await $fetch('/api/users', {
    method: 'POST',
    body: {
      fullName,
      presence,
      transfer,
      agreement,
      music
    },
  });

  console.log('newUser: ', newUser);
}
</script>
