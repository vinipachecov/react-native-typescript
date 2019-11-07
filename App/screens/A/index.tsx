import React from 'react';
import { Container, CenterView, Button } from '../../styles/styled/common';
import { Text, TextInput, View } from 'react-native';
import { Routes } from '../../Navigation/Routes';
import NavigationService from '../../Navigation/NavigationService';
import withTodos from '../../containers/todos';
import { ScreenAprops } from '../../interfaces/ScreenProps';
import { env } from '../../../env';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormComponent = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email('Type a valid email')
        .required('This field is required!'),
      password: Yup.string()
        .min(6, 'Minimum length is 6.')
        .required('This filed is required!'),
    })}
    onSubmit={values => console.log(values.email)}>
    {({ values, handleChange, submitForm, handleSubmit, isSubmitting }) => {
      return (
        <View
          style={{
            width: '100%',
            padding: 40,
          }}>
          <TextInput
            placeholder={'Email'}
            onChangeText={handleChange('email')}
            value={values.email}
            placeholderTextColor={'black'}
            style={{
              paddingLeft: 10,
              height: 42,
              width: '100%',
              borderWidth: 1,
              borderColor: 'red',
              marginBottom: 10,
            }}
          />
          <TextInput
            value={values.password}
            placeholder={'Password'}
            onChangeText={handleChange('password')}
            placeholderTextColor={'black'}
            style={{
              paddingLeft: 10,
              height: 42,
              width: '100%',
              borderWidth: 1,
              borderColor: 'red',
            }}
          />
          <Button title="Submit Form" onPress={submitForm} />
        </View>
      );
    }}
  </Formik>
);

export function A(props: ScreenAprops) {
  console.log(env.DB);
  function navigateToScreenB() {
    NavigationService.navigate(Routes.B, {});
    console.log('navigating to screen B');
  }
  return (
    <Container>
      <CenterView>
        <Text>Screen A</Text>
        <Button
          title={'Change to Screen B'}
          onPress={() => navigateToScreenB()}
        />
        <Text>Form with Formik</Text>
        <FormComponent />
      </CenterView>
    </Container>
  );
}

export default withTodos(A);
