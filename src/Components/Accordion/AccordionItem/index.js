import React from 'react';
import arrowDown from '../../../Images/arrowDown.svg'
import './AccordionItem.scss';

const AccordionItem = ({item, activeIndex, titleOnClick}) => {
    const activeClass = activeIndex === item.title ? 'accordion-item__active' : '';

    return (
        <div className={`accordion-item ${activeClass}`} onClick={() => titleOnClick(item.title)}>
            <div className="accordion-item__header-part">
                <div className="accordion-item__header-part__title">{item.title}</div>
                <img alt="arrow" src={arrowDown} className="accordion-item__header-part__icon" />
            </div>
            <div className="accordion-item__content">
                {item.content}
            </div>
        </div>

    );
};

export default AccordionItem;