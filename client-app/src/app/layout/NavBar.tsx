import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.jpg" alt="logo" style={{ marginRight: '10px' }} />
                    Link4Vets
                </Menu.Item>
                <Menu.Item name="Apps" />
            </Container>
        </Menu>
    )
}