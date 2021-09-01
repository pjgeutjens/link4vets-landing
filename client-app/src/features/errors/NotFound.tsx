import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search'/>
                Oops - we've looked everywhere but could not find this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/apps' primary>
                    Return to Apps dashboard
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
