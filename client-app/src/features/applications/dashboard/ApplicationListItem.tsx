import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Application } from '../../../app/models/app'

interface Props {
    app: Application
}

export default function ApplicationListItem({ app }: Props) {
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
                        <Item.Image size='tiny' circular src={`/assets/categoryImages/${app.category}.jpg`} />
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
                    <Button
                        as={Link}
                        to={`/apps/${app.id}`}
                        color='teal'
                        floated='right'
                        content='Details'
                    />
                    <Button
                        as={Link}
                        to={{ pathname: app.baseUrl }}
                        color='blue'
                        floated='right'
                        content='Go'
                    />
                </Button.Group>

            </Segment>

            <Segment secondary>
                <span>22 Likes</span>
            </Segment>
        </Segment.Group>
    )
}
