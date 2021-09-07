import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Button, Header, Segment } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import { categoryOptions } from '../../../app/common/options/categoryOptions'
import MyDateInput from '../../../app/common/form/MyDateInput'
import { ContactFormValues } from '../../../app/models/contact'


export default observer(function ContactForm() {
    const history = useHistory();
    const { contactStore } = useStore();
    const { createContact, updateContact, loadContact, loadingInitial } = contactStore;
    const { id } = useParams<{ id: string }>();

    const [contact, setContact] = useState<ContactFormValues>( new ContactFormValues())

    const validationSchema = Yup.object({
        displayName: Yup.string().required('The contact displayName is required'),
        category: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadContact(id).then(contact => setContact(new ContactFormValues(contact as ContactFormValues)))
    }, [id, loadContact])

    function handleFormSubmit(contact: ContactFormValues) {
        if (!contact.id) {
            let newContact = { ...contact, id: uuid() }
            createContact(newContact).then(() => history.push(`/contacts`))
        } else {
            updateContact(contact).then(() => history.push(`/contacts`))
        }
    }

    if (loadingInitial) return <LoadingComponent content="loading contact..." />

    return (
        <Segment clearing>
            <Header content="Contact Details" sub color='teal' />
            <Formik enableReinitialize
                validationSchema={validationSchema}
                initialValues={contact}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='displayName' placeholder='displayName' />
                        <MyTextArea rows={3} placeholder='Description' name='description' />
                        <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <Header content="Location Details" sub color='teal' />
                        <MyTextInput placeholder='Address' name='address' />
                        <MyTextInput placeholder='Zip' name='zip' />
                        <MyTextInput placeholder='City' name='city' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting}
                            floated='right' positive type='submit' content='Submit' />
                        <Button as={Link} to={'/contacts'} floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
})
