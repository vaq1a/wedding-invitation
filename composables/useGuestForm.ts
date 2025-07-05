import * as yup from 'yup';
import type { FormValues } from '~/types/guest-form';
import type { GenericObject, SubmissionHandler } from 'vee-validate';

export const useGuestForm = () => {
  const toast = useToast()

  const triggerConfetti = () => {
    const scalar = 2;
    const unicorn = useConfetti.shapeFromText({ text: "🕊️", scalar });
    const stars = useConfetti.shapeFromText({ text: "🍾", scalar });
    const sparkles = useConfetti.shapeFromText({ text: "🌟", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn, stars, sparkles],
      scalar,
    };

    function shoot() {
      useConfetti({
        ...defaults,
        particleCount: 30,
      });

      useConfetti({
        ...defaults,
        particleCount: 5,
      });

      useConfetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
  };

  const schema = yup.object({
    fullName: yup
      .string()
      .required('Имя и фамилия обязательны')
      .min(6, 'Минимум 6 символов')
      .matches(/^[a-zA-Zа-яА-Я\s\-,.!]+$/, 'Только буквы и пробелы'),
    presence: yup
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
      .matches(/^[a-zA-Zа-яА-Я0-9\s\-,.!]+$/, 'Только буквы, цифры и пробелы'),
  });

  const onSubmit: SubmissionHandler<FormValues, GenericObject, unknown> = async (values, { resetForm }) => {
    const { fullName, presence, agreement, music } = values;

    try {
      await $fetch('/api/users', {
        method: 'POST',
        body: {
          fullName,
          presence,
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
