
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfileAbout from './ProfileAbout';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {
    const panes = [
        {menuItem: 'About', render: () => <Tab.Pane><ProfileAbout/></Tab.Pane>},
        {menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} />},
        {menuItem: 'Settings', render: () => <Tab.Pane>Settings Content</Tab.Pane>},
    ];

    return (
        <Tab 
            menu={{fluid: true, vertical: true,}}
            menuPosition='right'
            panes={panes}
        />
    )
})