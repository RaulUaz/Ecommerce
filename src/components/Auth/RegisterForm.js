import React from "react";
import { View, Text } from "react-native";
import {TextInput, Button } from "react-native-paper";
import {useFormik} from "formik";
import * as yup from "yup";
import { registerApi } from "../../api/user";
import { formStyles } from "../../Styles";

export default function RegisterForm(props) {
    const { changeForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: yup.object(validationSchema()),
        onSubmit: async (formData) => {
            try {
                await registerApi(formData);
                console.log("OK");
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <View>
            <TextInput
             label="Email"
             style={formStyles.input}
             onChangeText={(text) => formik.setFieldValue("email", text)}
             value={formik.values.email}
             error={formik.errors.email}
           />

            <TextInput label="Nombre de usuario"
             style={formStyles.input}
             onChangeText={(text) => formik.setFieldValue("username", text)}
             value={formik.values.username}
             error={formik.errors.username}
             />
            <TextInput label="Password"
             style={formStyles.input} 
             secureTextEntry
             onChangeText={(text) => formik.setFieldValue("password", text)}
             value={formik.values.password}
             error={formik.errors.password}
              />
            <TextInput 
              label="Confirma tu Password"
              style={formStyles.input}
              secureTextEntry
              onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
              value={formik.values.repeatPassword}
              error={formik.errors.repeatPassword}
            />
            <Button mode="contained" onPress={formik.handleSubmit}>Registrate</Button>
           

            <Button mode="text"labelStyle={formStyles.btnTextLabel} onPress={changeForm}>
              Iniciar sesion
            </Button>
        </View>
    );
}

function initialValues() {
     return {
         email: "",
         username: "",
         password: "",
         repeatPassword: "",
     };
}

function  validationSchema() {

    return {
     
       username: yup.string().required(true),
       email: yup.string().email(true).required(true),
       password: yup.string().required(true),
       repeatPassword: yup.string().
       required(true)
       .oneOf([yup.ref("password")], true),

    };
}