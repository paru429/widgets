import React, {useState, useEffect, useRef} from 'react';
import arrowDown from '../../Images/arrowDown.svg'
import './CustomDropDown.scss';

const CustomDropDown = ({options, label, selectedOption, setSelectedOption}) => {
    const [showOptions, setShowOptions] = useState(false);
    const dropDownRef = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (dropDownRef.current.contains(event.target)) {
              return;
            }
            setShowOptions(false);
          };
          document.body.addEventListener("click", onBodyClick, { capture: true });
       
          return () => {
            document.body.removeEventListener("click", onBodyClick, {
              capture: true,
            });
          };
    }, [])

    const handleOnClick = (option) => {
        setSelectedOption(option);
        setShowOptions(!showOptions);
    }

    const renderOptions = () => {
        return options.map(option => {
            if(option.label === selectedOption.label) return null;

            return (
                <div key={option.label} className="custom-drop-down__options-item" onClick={() => handleOnClick(option)}>
                    {option.label}
                </div>
            )
        })
    }

    return (
        <div ref={dropDownRef} className="custom-drop-down">
            <label className="custom-drop-down__label">{label}</label>
            <div className="custom-drop-down__input" onClick={() => setShowOptions(!showOptions)}>
                <div className="custom-drop-down__input__text">{selectedOption.label}</div>
                {showOptions ? <img alt="arrow" src={arrowDown} className="custom-drop-down__input__icon__rotate" />
                    : <img alt="arrow" src={arrowDown} className="custom-drop-down__input__icon" /> }
            </div>
            {showOptions && 
                <div className="custom-drop-down__options">
                    {renderOptions()}
                </div>
            }
        </div>
    )
};

export default CustomDropDown;