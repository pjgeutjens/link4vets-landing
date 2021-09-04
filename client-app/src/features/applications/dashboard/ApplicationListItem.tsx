import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Application } from '../../../app/models/app'
import { useStore } from '../../../app/stores/store'

interface Props {
    app: Application
}

export default function ApplicationListItem({ app }: Props) {
    const {appStore: {setSelectedapp}} = useStore()
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        {app.isExternal && <Label
                            style={{ position: 'absolute', marginLeft: '-12px' }}
                            color='orange'
                            ribbon='right'
                        >
                            External
                        </Label>}
                        <Item.Image size='tiny' avatar src={`/assets/categoryImages/${app.category.toLowerCase()}.jpg`} />
                        <Item.Content>
                            <Item.Header as={Link} to={`/apps/${app.id}`}>{app.displayName}</Item.Header>
                            <Item.Description>{app.category}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment clearing>
                <span>{app.description}</span>
                <Button.Group floated='right'>
                <Button onClick={() => setSelectedapp(app)} floated='right' content='Details' color='green' />
                    <Button
                        as={Link}
                        target="_blank"
                        to={{ pathname: app.baseUrl }}
                        color='blue'
                        floated='right'
                        content='Go'
                    />
                </Button.Group>

            </Segment>

            <Segment secondary>
                <span>23 Likes</span>
            </Segment>
        </Segment.Group>
    )
}
