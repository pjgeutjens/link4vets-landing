import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { Image, List, Popup } from 'semantic-ui-react'
import { Profile } from '../../../app/models/profile'
import ProfileCard from '../../profiles/ProfileCard'

interface Props {
    favorites: Profile[]
}

export default observer(function ContactListItemFavorite({favorites}: Props) {
    const styles = {
        borderColor: 'orange',
        borderWidth: 2
    }
    return (
        <List horizontal>
            {favorites.map(fan => (
                <Popup hoverable key={fan.userName} trigger={
                    <List.Item key={fan.userName} as={Link} to={`/profiles/${fan.userName}`}>
                    <Image 
                        size='mini' 
                        circular 
                        bordered
                        src={fan.image || '/assets/user.png'} />
                </List.Item>
                }
                >
                    <Popup.Content>
                        <ProfileCard profile={fan} />
                    </Popup.Content>
                </Popup>
                
            ))}
        </List>
    )
})
