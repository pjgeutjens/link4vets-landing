import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Grid, Loader } from 'semantic-ui-react'
import { PagingParams } from '../../../app/models/pagination'
import { useStore } from '../../../app/stores/store'
import ContactFilters from './ContactFilters'
import ContactList from './ContactList'
import InfiniteScroll from 'react-infinite-scroller'
import ContactListItemPlaceholder from './ContactListItemPlaceholder'

export default observer(function ContactDashboard() {
    const { contactStore } = useStore();
    const { loadContacts, contactRegistry, setPagingParams, pagination } = contactStore
    const [loadingNext, setloadingNext] = useState(false);

    function handleGetNext() {
        setloadingNext(true);
        setPagingParams(new PagingParams(pagination!.currentPage + 1))
        loadContacts().then(() => setloadingNext(false))
    }

    useEffect(() => {
        if (contactRegistry.size <= 1) loadContacts()
    }, [contactRegistry.size, loadContacts])

    return (
        <Grid>
            <Grid.Column width='10'>
                {contactStore.loadingInitial && !loadingNext ? (
                    <>
                        <ContactListItemPlaceholder />
                        <ContactListItemPlaceholder />
                    </>
                ) : (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={handleGetNext}
                        hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                        initialLoad={false}
                    >
                        <ContactList />
                    </InfiniteScroll>
                )}

            </Grid.Column>
            <Grid.Column width='6'>
                <ContactFilters />
            </Grid.Column>
            <Grid.Column width='10'>
                <Loader active={loadingNext} />
            </Grid.Column>


        </Grid>
    )
})
