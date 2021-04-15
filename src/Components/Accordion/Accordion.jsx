import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.scss';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState();

    const titleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="accordion-container">
            {items.map(item => {
                return (
                    <AccordionItem item={item} activeIndex={activeIndex} titleOnClick={titleOnClick} key={item.title}/>
                )
            })}
        </div>
    );
};

export default Accordion;