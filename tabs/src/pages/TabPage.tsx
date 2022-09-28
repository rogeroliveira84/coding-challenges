import React from 'react';
import Tabs, {TabsProps} from "../components/Tabs";

const tabProps: TabsProps = {
    tabs: [
        {
            title: 'Projects',
            component: () => <div>Projects Tab</div>
        },
        {
            title: 'Issues',
            component: () => <div>Issues Tab</div>
        },
        {
            title: 'Settings',
            component: () => <div>Settings Tab</div>
        }
    ]
}

const TabPage = () => {
    return (
        <Tabs {...tabProps} />
    );
}

export default TabPage;
