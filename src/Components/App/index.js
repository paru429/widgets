import React from 'react';
import Accordion from '../Accordion';
import SearchWidget from '../SearchWidget';
import TranslateWidget from '../TranslateWidget';
import FormWidget from '../FormWidget';
import Route from '../Route';
import Tab from '../Tab';
import ModalWidget from '../ModalWidget';
import './App.scss';

//Add google api authentication

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

    const tabItems = [
        {label: 'Accordion', path: '/'},
        {label: 'Search', path: '/search'}, 
        {label: 'Translate', path: '/translate'}, 
        {label: 'Form', path: '/form'}, 
        {label: 'Modal', path: '/modal'}
    ];
    
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
            <Route path="/form">
                <FormWidget />
            </Route>
            <Route path="/modal">
                <ModalWidget />
            </Route>
        </div>
    );
};

export default App;