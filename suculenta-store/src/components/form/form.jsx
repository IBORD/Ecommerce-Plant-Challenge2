import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import './form.css';
import Logo from '../../assets/plantaform.svg'
import Header from '../header/Header'
import Rodape from "../footer/Footer";
import axios from "axios";

function PlantRegistration() {

  const validationSchema = yup.object({
    PlantName: yup
      .string()
      .required('Nome da planta é obrigatório')
      .test({ name: 'validPlantName', message: "Nome da planta não pode conter números", test: (value) => /^[^\d]*$/.test(value) }),
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

  })


  const initialValues = {
    PlantName: "",
    PlantSub: "",
    radioForm: "",
    price: "",
    features: "",
    description: ""

  }

  const handleSubmit = async (data) => {

    const postData = {
      name: data.PlantName,
      subtitle: data.PlantSub,
      label: [
        data.radioForm
      ],
      price: data.preco,
      features: data.features,
      description: data.description

    }

    axios.post('http://localhost:4000/plants', postData).then(data => console.log(data)).catch(err => console.log(err));

  };

  return (
    <><Header /> <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <React.Fragment>
        <div className="divBody">
          <div>
            <h1>Plant registration</h1>
            <Form>
              <div className="divform">
                <label htmlFor="PlantName">Plant name</label>
                <Field type="text" id="PlantName" name="PlantName" placeholder="PlantName" />
                <ErrorMessage component="div" name="PlantName" />
              </div>
              <br />
              <div className="divform">
                <label htmlFor="PlantaName">Plant Subtitle</label>
                <Field className="inputField" type="text" name="PlantSub" placeholder="PlantSub" />
                <ErrorMessage component="div" name="PlantSub" />
                <div className="divform">
                  <br />
                  <label htmlFor="PlantName">Plant type</label>
                  <Field className="inputField" type="text" name="PlanType" placeholder="PlanType" />
                  <ErrorMessage component="div" name="PlanType" />

                </div>
                <br />
                <div className="divdesconto">
                  <div>
                    <label htmlFor="PlantName">Price</label>
                    <br />
                    <Field type="number" name="preco" placeholder="Price" />
                    <ErrorMessage component="div" name="preco" />
                    <br />
                  </div>
                  <div>
                    <label htmlFor="PlantName">Discount</label>
                    <Field type="number" name="discount" placeholder="Discount" />
                    <ErrorMessage component="div" name="discount" />
                  </div>
                </div>
                <br />
                <div className="divLabel">
                  <div className="divradio">
                    <input type="radio" name="indoor" value="indoor" id="indoor" />
                    <label for="indoor">Indoor</label>
                    <ErrorMessage component="div" name="indoor" />
                  </div>
                  <div>
                    <input type="radio" name="outdoor" value="outdoor" id="outdoor" />
                    <label for="outdoor">Outdoor</label>
                    <ErrorMessage component="div" name="outdoor" />
                  </div>
                </div>
                <div>
                  <label htmlFor="PlantName">Features:</label>
                  <Field type="textarea" name="features" placeholder="features" as='textarea' cols="100" rows="8" maxlength='300' />
                  <ErrorMessage component="div" name="features" />
                </div>
                <br />
                <div>
                  <label htmlFor="PlantName">Description:</label>
                  <Field type="textarea" name="description" placeholder="description" as='textarea' cols="100" rows="8" maxlength='300' />
                  <ErrorMessage component="div" name="description" />
                </div>

              </div>

              <input type="submit" class="btn-reg" value="Register" />
            </Form>
          </div>
          <div className="divImg">
            <img src={Logo} alt="plantaform" />
          </div>
        </div>
      </React.Fragment>
    </Formik> <Rodape />   </>

  );

};

export default PlantRegistration;

