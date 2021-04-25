import React from 'react';
import './CustomLink.scss';

const CustomLink = ({active, path, children}) => {
    const activeLink = active ? 'custom-link__active' : '';
    const handleOnclick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', path);

        const navEvent = new PopStateEvent('popState');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={handleOnclick} className={`custom-link ${activeLink}`}>
            {children}
        </a>
    )
}

export default CustomLink;