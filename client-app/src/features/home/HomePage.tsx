import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import {useStore} from "../../app/stores/store";
import {observer} from "mobx-react-lite";
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

export default observer(function HomePage(){
    const {userStore, modalStore} = useStore();

    return (
            <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                    <Header as='h1' inverted>
                        <Image size='massive' src='assets/logo.jpg' alt='logo' style={{marginBottom: 12}} />
                        Link4Vets
                    </Header>
                    {userStore.isLoggedIn ? (
                        <>
                        <Header as='h2' inverted content='Welcome to Link4Vets' />
                        <Button as={Link} to='/apps' size='huge' inverted>Dashboard</Button>
                        </>
                    ) : (
                        <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>Login</Button>
                        <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>Register</Button>
                        </>
                    )}
                </Container>
            </Segment>
    )
})
