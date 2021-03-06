import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'


export default observer(function ApplicationDetails() {
    const {appStore} = useStore();
    const {selectedApp: app, loadApp, loadingInitial} = appStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadApp(id) 
    }, [id, loadApp])

    if (loadingInitial || !app) return <LoadingComponent />;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${app.category.toLowerCase()}.jpg`} />
            <Card.Content>
                <Card.Header>{app.displayName}</Card.Header>
                <Card.Description>
                    {app.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>{app.category}</span>
            </Card.Content>
        </Card>
    )
})
