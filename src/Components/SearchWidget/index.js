import React, {useState} from 'react';
import useSearchApi from '../Hooks/useSearchApi';
import './SearchWidget.scss';

const SearchWidget = () => {
    const [text, setText] = useState('');
    const results = useSearchApi(text);

    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
    };

    const renderResults = () => {
        return results.map(result => {
            return (
                <div className='result-widget' key={result.pageid}>
                <div className='result-widget__left'>
                    <div className='result-widget__title'>{result.title}</div>
                    <div className='result-widget__snippet'><span dangerouslySetInnerHTML={{__html: result.snippet}}></span></div>
                </div>
                <div className='result-widget__right'></div>
                    <a className='result-widget__button' href={`https://en.wikipedia.org?curid=${result.pageid}`} target="__blank">
                        Open article
                    </a>
                </div>
            )
        })
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="search-widget">
            <div className="search-widget__bar">
                <label className="search-widget__label">Enter search</label>
                <input
                    className="search-widget__input"
                    value={text}
                    type="text"
                    onChange={handleOnChange}
                />
            </div>
            {renderResults()}
            </div>
        </form>
    );
};

export default SearchWidget;