import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../../app/stores/store'
import ApplicationListItem from './ApplicationListItem'

export default observer(function ApplicationList() {
    const { appStore } = useStore()
    const { apps } = appStore;
    return (
        <>
            {apps.map(app => (
                <ApplicationListItem app={app} key={app.id} />
            ))}
        </>
    )
})
