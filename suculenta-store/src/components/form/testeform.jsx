import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';


const validationSchema = yup.object({
  PlantName: yup
  .string()
  .matches(/^[^\d]*$/, 'Nome da planta não pode conter números')
  .required('Nome da planta é obrigatório'),
PlantSub: yup
  .string()
  .matches(/^[^\d]*$/, 'Nome da espécie não pode conter números')
  .required('Nome da espécie é obrigatório'),
preco: yup
  .number()
  .positive('Preço deve ser maior que zero')
  .required('Preço é obrigatório'),
});

export default validationSchema;