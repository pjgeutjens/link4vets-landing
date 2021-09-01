import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'

const HomePage = () => {
    return (
            <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                    <Header as='h1' inverted>
                        <Image size='massive' src='assets/logo.jpg' alt='logo' style={{marginBottom: 12}} />
                        Link4Vets
                    </Header>
                    <Header as='h2' inverted content='Welcome to Link4Vets' />
                    <Button as={Link} to='/apps' size='huge' inverted>Dashboard</Button>
                </Container>
            </Segment>
    )
}

export default HomePage;
