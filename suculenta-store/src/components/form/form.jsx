import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


function PlantRegistration() {
  const validationSchema = yup.object({
  PlantName: yup
    .string()
    .matches(/^[^\d]*$/, 'Nome da planta não pode conter números')
    .required('Nome da planta é obrigatório'),
 PlantSub: yup
    .string()
    .matches(/^[^\d]*$/, 'Nome da espécie não pode conter números')
    .required('Nome da espécie é obrigatório'),
  PlanType: yup
    .string()
    .matches(/^[^\d]*$/, 'Nome da planta não pode conter números')
    .required('Nome da planta é obrigatório'),
 preco: yup
    .number()
    .positive('Preço deve ser maior que zero')
    .required('Preço é obrigatório'),
    discount: yup
    .number()
    .positive('Preço deve ser maior que zero'),
    features: yup
    .string()
    .required('requer algum caracter'),
    description: yup
    .string()
    .required('requer algum caracter'),

  });

  const [values] = useState({
    nomeDaPlanta: '',
    nomeDaEspecie: '',
    preco: '',
    plantType: '',
    discount: '',
    features: '',
    descricao: '',
   });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={values}
      
    >
      <div>
        <h1>Plant Registration</h1>
        <Form>
          <div>
            Plant name: 
            <Field type="PlantName" name="PlantName" placeholder="PlantName" />
            <ErrorMessage component="div" name="PlantName" />
          </div>
          <br />
          <div>
            plant subtitle:
            <Field type="PlantSub" name="PlantSub" placeholder="PlantSub" />
            <ErrorMessage component="div" name="PlantSub" />
            <div>
            <br />
            Plant type:
            <Field type="PlanType" name="PlanType" placeholder="PlanType" />
            <ErrorMessage component="div" name="PlanType" />
            
          </div>
          <br />
          <div>
          price:
            <Field type="number" name="preco" placeholder="preco" />
            <ErrorMessage component="div" name="preco" />
          </div>
          <br />
          <div>
          Discount percentage(optional):
            <Field type="number" name="discount" placeholder="discount" />
            <ErrorMessage component="div" name="discount" />
            
          </div>
          <br />
          <div>
          <div>
            indoor
            <Field type="radio" name="indoor" va/>
            <ErrorMessage component="div" name="indoor" />
            
            <Field type="radio" name="outdoor" />
            outdoor
            <ErrorMessage component="div" name="outdoor" />
          </div>
          features:
            <textarea type="features" name="features" placeholder="features" as='textarea' cols="100" rows="8" maxlength='300' />
            <ErrorMessage component="div" name="features" />
          </div>
          <br />
          <div>
          description:
            <textarea type="description" name="description" placeholder="description" as='textarea' cols="100" rows="8" maxlength='300' />
            <ErrorMessage component="div" name="description" />
          </div>
          
          </div>

          <button type="submit">Register</button>
        </Form>
      </div>
    </Formik>
  );
}
export default PlantRegistration;