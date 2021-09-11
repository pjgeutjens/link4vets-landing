import { Card, Grid, Icon } from 'semantic-ui-react'
import { Contact } from '../../../app/models/contact'

interface Props {
    contact: Contact
}

export default function ContactListItem({ contact }: Props) {

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header as="h3">{contact.displayName}</Card.Header>
                <Grid>
                    <Grid.Column width={8}>
                        {contact.address && <p>  {contact.address} </p>}
                        {contact.city && <p>  {contact.zip}, {contact.city} </p>}
                        {contact.country && <p>  {contact.country} </p>}

                    </Grid.Column>
                    <Grid.Column width={8}>
                        {contact.website && <p><Icon name='world' />{contact.website}</p>}
                        {contact.email && <p><Icon name='envelope' />{contact.email}</p>}
                        {contact.phoneNumber && <p><Icon name='phone' />{contact.phoneNumber}</p>}
                        {contact.gsmNumber && <p><Icon name='phone' />{contact.gsmNumber}</p>}
                    </Grid.Column>
                </Grid>
            </Card.Content>
            <Card.Content extra>
                {contact.category}
            </Card.Content>
        </Card>
    )

    // return (
    //     <Segment.Group>
    //         <Grid>
    //             <Grid.Column width={8}>
    //             <Segment>
    //             <Item.Group>
    //                 <Item>
    //                     <Item.Content>
    //                         <Item.Header as={Link} to={`/activities/${contact.id}`}>
    //                             {contact.displayName}
    //                         </Item.Header>
    //                         {contact.isFavorited && (
    //                             <Item.Description>
    //                                 <Label color='green' basic>
    //                                     You are fan of this contact
    //                                 </Label>
    //                             </Item.Description>    
    //                         )}
    //                     </Item.Content>
    //                 </Item>
    //             </Item.Group>
    //         </Segment>
    //         <Segment>
    //             <span>  { contact.address } <br/>
    //                     { contact.zip }, {contact.city} <br/>
    //                     { contact.country} </span>
    //         </Segment>
    //             </Grid.Column>
    //             <Grid.Column width={8}>
    //             <Segment>
    //             { contact.email && <p><Icon name='envelope' />{ contact.email }</p>}
    //             { contact.website && <p><Icon name='world' />{ contact.website }</p>}
    //             { contact.phoneNumber && <p><Icon name='phone' />{ contact.phoneNumber }</p>}
    //             { contact.gsmNumber && <p><Icon name='phone' />{ contact.gsmNumber }</p>}
    //         </Segment>
    //             </Grid.Column>
    //         </Grid>



    //     </Segment.Group>
    // )
}
