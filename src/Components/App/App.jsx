import React from 'react';
import Accordion from '../Accordion';
import SearchWidget from '../SearchWidget';
import TranslateWidget from '../TranslateWidget';
import Route from '../Route';
import Tab from '../Tab';
import './App.scss';

const App = () => {
    const items = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Section 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
        {
            title: 'Section 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        },
    ];

    const tabItems = [{label: 'Accordion', path: '/'}, {label: 'Search', path: '/search'}, {label: 'Translate', path: '/translate'}];
    
    return (
        <div>
            <Tab tabItems={tabItems} />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search">
                <SearchWidget />
            </Route>
            <Route path="/translate">
                <TranslateWidget />
            </Route>
        </div>
    );
};

export default App;