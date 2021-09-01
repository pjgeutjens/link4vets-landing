import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.jpg" alt="logo" style={{ marginRight: '10px' }} />
                    Link4Vets
                </Menu.Item>
                <Menu.Item as={NavLink} to='/apps' name="Apps" />
                <Menu.Item as={NavLink} to='/errors' name="Errors" />
            </Container>
        </Menu>
    )
}