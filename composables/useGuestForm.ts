import * as yup from 'yup';
import type { FormValues } from '~/types/guest-form';

export const useGuestForm = () => {
  const toast = useToast()

  const triggerConfetti = () => {
    const COLORS = ["#eac60b", "#fffc46"];

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
      .min(6, 'Минимум 6 символов')
      .matches(/^[a-zA-Zа-яА-Я\s\-,.]+$/, 'Только буквы и пробелы'),
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
      .optional()
      .min(6, 'Минимум 6 символов')
      .matches(/^[a-zA-Zа-яА-Я0-9\s\-,.]+$/, 'Только буквы, цифры и пробелы'),
  });

  const onSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
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

      resetForm()
      toast.success({ message: 'Форма успешно отправлена!' })
      triggerConfetti()
    } catch (error) {
      console.log(error);

      toast.error({ message: 'Произошла ошибка. Повторите снова.' })
    }
  };

  return {
    schema,
    onSubmit,
  }
}
