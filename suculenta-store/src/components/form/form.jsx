import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  plantName: yup.string().required('Nome é obrigatório'),
  plantSubtitle: yup.string().required('Subtitulo é obrigatório'),
  plantType: yup.string().required('Tipo é obrigatório'),
  price: yup.number().required('Preço é obrigatório'),
  label: yup.string().oneOf(['Indoor', 'Outdoor']).required('Rótulo é obrigatório'),
  features: yup.string().required('Características são obrigatórias'),
  discountPercentage: yup.number().required('Porcentagem de desconto é obrigatória'),

});

const PlantRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="forma" onSubmit={handleSubmit(onSubmit)}>
      <h1>Plant Registration</h1>
      <label>Plant Name:</label>
      <input
        type="text"
        id="plantName"
        name="plantName"
        placeholder="Name"
        required
        {...register('plantName')} />
      {errors.plantName && <p>{errors.plantName.message}</p>}
      <label for="plantSubtitle">Plant Subtitle:</label>
      <input
        type="text"
        id="plantSubtitle"
        name="plantSubtitle"
        placeholder="Subtitle"
        required
        {...register('plantSubtitle')} />
      {errors.plantSubtitle && <p>{errors.plantSubtitle.message}</p>}
      <label for="plantType">Plant Type:</label>
      <input
        type="text"
        id="plantType"
        name="plantType"
        placeholder="Type"
        required
        {...register('plantType')} />
      {errors.plantType && <p>{errors.plantType.message}</p>}
      <label for="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        placeholder="Price"
        required
        {...register('price')} />
      {errors.price && <p>{errors.price.message}</p>}
      <label for="discountPercentage">Discount Percentage:</label>
      <input
        type="number"
        id="discountPercentage"
        name="discountPercentage"
        placeholder="Discount"
        required
        {...register('discountPercentage')} />
      {errors.discountPercentage && <p>{errors.discountPercentage.message}</p>}
      <label for="label">Label:</label>
      <label>
        <input type="radio" id="indoor" name="label" value="Indoor" />
        Indoor
      </label>
      <label>
        <input type="radio" id="outdoor" name="label" value="Outdoor" />
        Outdoor
      </label>
      <label for="features">Features:</label>
      <textarea
        id="features"
        name="features"
        rows="8"
        cols="100"
        placeholder="Features"
        required
        {...register('features')}
      ></textarea>
      {errors.features && <p>{errors.features.message}</p>}
      <label for="descricao">Descrição:</label>
      <textarea
        id="descricao"
        name="descricao"
        rows="8"
        cols="100"
        placeholder="Suculenta cactus"
        required
        {...register('features')}
      ></textarea>
      {errors.features && <p>{errors.features.message}</p>}
      <input type="submit" value="submit" />
    </form>

  );
};

export default PlantRegistration;
