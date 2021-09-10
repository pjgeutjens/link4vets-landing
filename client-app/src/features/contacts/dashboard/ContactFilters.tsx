import { observer } from 'mobx-react-lite'
import React from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function ContactFilters() {
    const { contactStore: { predicate, setPredicate }} = useStore()
    return (
        <>
        <Menu vertical size='large' style={{width:'100%', marginTop: 30}}>
            <Header icon='filter' attached color='teal' content='Filters' />
            <Menu.Item 
                content="All Contacts"
                active={predicate.has('all')}
                onClick={() => setPredicate('all', 'true')}
            />
            <Menu.Item 
                content="Favorites"
                active={predicate.has('isFavorite')}
                onClick={() => setPredicate('isFavorite', 'true')}
            />
        </Menu>
        <Header />
        {/* <Calendar 
            onChange={(date: any) => setPredicate('createdAt', date as Date)}
            value={predicate.get('createdAt') || new Date()}
        /> */}
        </>

    )
})
