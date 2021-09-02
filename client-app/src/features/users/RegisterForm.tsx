import { ErrorMessage, Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import MyTextInput from '../../app/common/form/MyTextInput'
import { useStore } from '../../app/stores/store'
import * as Yup from 'yup'
import ValidationErrors from '../errors/ValidationErrors'

export default observer(function RegisterForm() {
    const {userStore} = useStore();
    return (
        <Formik
            initialValues={{ email: '', password: '', displayName: '', userName: '', UniqueId: '', error: null }}
            onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => setErrors({error}))}
            validationSchema={Yup.object({
              displayName: Yup.string().required(),
              userName: Yup.string().required(),
              email: Yup.string().required().email(),
              uniqueId: Yup.string().required().matches(/^[FN]\d{4,5}$/, 'Unique Id is of the form F1234[5] or N1234[5]'),
              password: Yup.string().required(),
            })}
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Sign up to Link4Vets' color='teal' textAlign='center' />
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='displayName' placeholder='Display Name' />
                    <MyTextInput name='userName' placeholder='User Name' />
                    <MyTextInput name='uniqueId' placeholder='Unique Id' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage 
                        name='error' render={() => <ValidationErrors errors={errors.error}/>}/>
                    <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} positive content='Sign up' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
})
