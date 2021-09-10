import { observer } from 'mobx-react-lite'
import { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ContactListItem from './ContactListItem'

export default observer(function ContactList() {
    const { contactStore } = useStore()
    const { groupedContacts } = contactStore

    return (
        <>
            <Header color='teal' content="Contact List" />
            {groupedContacts.map(([group, contacts]) => (
                <Fragment key={group}>
                    {contacts.map(contact => (
                        <ContactListItem contact={contact} key={contact.id} />
                    ))}
                </Fragment>
            ))}
        </>

    )
})
