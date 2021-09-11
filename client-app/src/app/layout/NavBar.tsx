import i18next from 'i18next';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import i18n from '../../i18n';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const { userStore: { user, logout } } = useStore()
    const {t} = useTranslation();
    const languageOptions = [
        { key: 'nl', text: 'NL', value: 'nl' },
        { key: 'en', text: 'EN', value: 'en' },
      ]

    const handleSelectLanguage = (event: SyntheticEvent, data: any) => {
        i18n.changeLanguage(data.value)
    }

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.jpg" alt="logo" style={{ marginRight: '10px' }} />
                    Link4Vets
                </Menu.Item>
                <Menu.Item as={NavLink} to='/apps' name="Apps" />
                <Menu.Item as={NavLink} to='/errors' name="Errors" />
                <Menu.Item as={NavLink} to='/feedback' name="Feedback" />
                <Menu.Item position='right'>
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profiles/${user?.userName}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown icon='world' options={languageOptions} simple item onChange={handleSelectLanguage}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
})