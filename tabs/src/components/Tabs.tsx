import React, {useState} from "react";
import "./Tabs.css";

type TabItem = {
    title: string;
    component: () => React.ReactNode;
}

export type TabsProps = {
    tabs: TabItem[];
    onTabChange?: (tabIndex: number) => boolean;
}

const Tabs = (props: TabsProps) => {
    const {tabs, onTabChange} = props;
    const initializeCurrentTab = tabs?.length ? 0 : -1;
    const [currentTab, setCurrentTab] = useState<number>(initializeCurrentTab);

    const onButtonClickHandler = (tabIndex: number) => {
        setCurrentTab(tabIndex);
        onTabChange?.(tabIndex);
    }

    const renderTabButtons = () => tabs?.map((tab, tabIndex) => (
        <button
            onClick={() => onButtonClickHandler(tabIndex)}
            className={tabIndex === currentTab ? 'tab-active' : ''}
        >{tab?.title}
        </button>
    ))
    const renderTabContent = () => {
        const selectedTab = tabs?.find((tab, index) => index === currentTab);
        return selectedTab?.component?.()
    }
    return (
        <div className='tab'>
            {renderTabButtons()}
            <div className='tab-content'>
                {renderTabContent()}
            </div>
        </div>
    )
}

export default Tabs;
