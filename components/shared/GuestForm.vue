<template>
  <div class="wrapper">
    <BorderIcon class="border--top border" />
    <div class="form">
      <Title class="title">Aнкета гостя</Title>
      <div ref="form" :style="animationStyle">
          <Form v-slot="{ errors }" :validation-schema="schema" class="wedding-form"  @submit="onSubmit">
            <div class="form-group">
              <label class="form-label">Пожалуйста, укажите свои данные: <br>
                <span class="form-label__example">
                  - Фамилия и имя <br>
                  - Члены семьи c которыми идете<br>
                (Пример: Иванов Иван, жена Мария, сын Петр, дочь Анна)
                </span>
              </label>
              <Field
                name="fullName"
                type="text"
                class="text-input"
                placeholder="Введите данные..."
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
              <label class="form-label">Кукие песни Вы хотите услышать на свадьбе?</label>
              <Field class="text-input" name="music" placeholder="Напишите песни..." type="text" :class="{ error: errors.music }" />
              <ErrorMessage class="error-text" name="music" />
            </div>

            <Button class="submit-button" type="submit">Отправить анкету</Button>
          </Form>
        </div>
    </div>
    <BorderIcon class="border--bottom border" />
  </div>
</template>

<script setup lang="ts">
import BorderIcon from '~/components/atomic/BorderIcon.vue';
import Title from '~/components/atomic/Title.vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import Button from '~/components/atomic/Button.vue';
import { useGuestForm } from '~/composables/useGuestForm';
import { useInView } from 'motion-v'

const { schema, onSubmit } = useGuestForm()

const form = ref(null)
const isInView = useInView(form, {
  once: true,
  margin: "-200px 0px -110px 0px"
})

const animationStyle = computed(() => ({
  opacity: isInView.value ? 1 : 0,
  transition: 'all 1s ease-in-out'
}))
</script>

<style scoped lang="scss">
.title {
  color: $color-light;
}

.wrapper {
  position: relative;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: $color-primary;
  padding: 90px 20px;
}

.border {
  position: absolute;
  z-index: 3;

  &--top {
    top: -20px;
    left: 0;
  }

  &--bottom {
    bottom: -25px;
    left: 0;
  }
}

.wedding-form {
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: $color-light;
  position: relative;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-label {
  font-size: 20px;
  line-height: 26px;

  &__example {
    display: inline-block;
    font-size: 16px;
    line-height: 18px;
  }
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
    opacity: 0.6;
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
  margin: 0 auto;
  background-color: $color-light;
  color: $color-primary;
}
</style>
