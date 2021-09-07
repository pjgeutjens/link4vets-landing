import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react'
import { Contact } from '../../../app/models/contact'
import ContactListItemFavorite from './ContactListItemFavorite'

interface Props {
    contact: Contact
}

export default function ContactListItem({ contact }: Props) {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${contact.id}`}>
                                {contact.displayName}
                            </Item.Header>
                            {contact.isFavorited && (
                                <Item.Description>
                                    <Label color='green' basic>
                                        You are fan of this contact
                                    </Label>
                                </Item.Description>    
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{ format(contact.createdAt!, 'dd MMM yyyy h:mm aa') }
                </span>
            </Segment>
        </Segment.Group>
    )
}
