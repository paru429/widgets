import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CustomDropDown from '../CustomDropDown';
import './TranslateWidget.scss';

const TranslateWidget = () => {
    const [language, setSelectedLanguage] = useState({label: 'Select language'});
    const [translatedText, setTranslatedText] = useState('');
    const [text, setText] = useState('');
    const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

    useEffect(() => {
        const translateApi = async () => {
            const {data: response} = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: KEY
                }
            })

            setTranslatedText(response.data.translations[0].translatedText);
        }

        const timeoutId = setTimeout(() => language.label !== 'Select language' && text && translateApi(), 1000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [language, text]);

    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    const options = [
        {
            label: 'Tamil',
            value: 'ta'
        },
        {
            label: 'French',
            value: 'fr'
        },
        {
            label: 'Russian',
            value: 'ru'
        },
        {
            label: 'German',
            value: 'de'
        },
        {
            label: 'Italian',
            value: 'it'
        }
    ]

    return (
        <div className="translate-widget">
            <div className="translate-widget__input-container">
                <label htmlFor="translate-text-input" className="translate-widget__label">Enter text to translate</label>
                <input
                    id="translate-text-input"
                    className="translate-widget__input"
                    value={text}
                    type="text"
                    onChange={handleOnChange}
                />
            </div>
            <CustomDropDown 
                options={options} 
                label="Select a language"
                selectedOption={language}
                setSelectedOption={setSelectedLanguage}
             />
             <h3>Translated Text</h3>
             <div className="translate-widget__translation">{translatedText}</div>
        </div>
    )
};

export default TranslateWidget;