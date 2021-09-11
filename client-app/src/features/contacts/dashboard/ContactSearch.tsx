import { Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Header, Select } from 'semantic-ui-react'
import MyTextInput from '../../../app/common/form/MyTextInput'
import { useStore } from '../../../app/stores/store'

class SearchFormValues {
    searchString: string = ""
}

export default observer(function ContactSearch() {
    const { contactStore: { searchString, setSearchString }} = useStore()
    const [search, setSearch] = useState<SearchFormValues>({ searchString: ""})

    const selectOptions = [
        {key: 'professional', value: 'professional', text: 'Professional Organisations'},
        {key: 'practice', value: 'practice', text: 'Veterinary Practice'},
        {key: 'breeder', value: 'breeder', text: 'Breeder'}
    ]
    return (
        <>
        <Formik
        onSubmit={values => console.log(values)}
        initialValues={search}
        >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form className='ui form'>        
            <Header icon='search' attached color='teal' content='Search' />
            <Select fluid multiple options={selectOptions} placeholder='Contact Types'/>
            <MyTextInput name="search" placeholder="Search" />
        </Form>)}
        </Formik>
        <Header />
        </>

    )
})
function handleFormSubmit(values: React.FormEvent<HTMLFormElement>): void {
    console.log(values);
}

