import React from 'react';
import { View, TextInput } from 'react-native';
import { Container, CenterView, Button } from '../../styles/styled/common';
import { Text } from 'react-native';
import { Routes } from '../../Navigation/Routes';
import { useNavigation } from 'react-navigation-hooks';
import { Form, Field } from 'react-final-form';

const FormEl = () => {
  return (
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit }) => (
        <View
          style={{
            width: '100%',
            padding: 40,
          }}>
          <Field
            name={'email'}
            render={({ input }) => (
              <TextInput
                placeholder={'Email'}
                onChangeText={text => input.onChange(text)}
                value={input.value}
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
            )}
          />
          <Field
            name="password"
            render={({ input }) => (
              <TextInput
                value={input.value}
                placeholder={'Password'}
                onChangeText={text => input.onChange(text)}
                placeholderTextColor={'black'}
                style={{
                  paddingLeft: 10,
                  height: 42,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: 'red',
                }}
              />
            )}
          />
          <Button title="Submit Form" onPress={() => handleSubmit()} />
        </View>
      )}
    />
  );
};

export default function B() {
  const { navigate } = useNavigation();

  function navigateToScreenA() {
    navigate(Routes.A);
    console.log('navigating to screen A');
  }
  return (
    <Container>
      <CenterView>
        <Text>Screen B</Text>
        <Button
          title={'Navigate to Screen A'}
          onPress={() => navigateToScreenA()}
        />
        <Text>What a great day to use final form!</Text>
        <FormEl />
      </CenterView>
    </Container>
  );
}
