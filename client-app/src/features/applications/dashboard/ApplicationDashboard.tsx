import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ApplicationDetails from '../details/ApplicationDetails'
import ApplicationList from './ApplicationList'

export default observer(function ApplicationDashboard() {
    const {appStore} = useStore();
    const {selectedApp} = appStore;

  useEffect(() => {
    appStore.loadApps();
  }, [appStore]);

  if (appStore.loadingInitial) return <LoadingComponent content='Loading Applications...' />
    return (
        <Grid>
            <Grid.Column width='10'>
                <ApplicationList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedApp && 
                <ApplicationDetails />}
            </Grid.Column>
        </Grid>
    )
})
