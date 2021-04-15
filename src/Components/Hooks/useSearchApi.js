import {useEffect, useState} from 'react';
import axios from 'axios';

const useSearchApi = (searchText) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => fetchApi(searchText), 1000);

        return () => {
            console.log('Clean up');
            clearTimeout(timeoutId);
        }
    }, [searchText]);

    const fetchApi = async (searchText) => {
        try {
            if(searchText) {
                const {data} = await axios.get(
                    'https://en.wikipedia.org/w/api.php',
                    {
                        params: {
                            action: 'query',
                            list: 'search',
                            format: 'json',
                            srlimit: 20,
                            srsearch: searchText,
                            origin: '*'
                        }
                    }
                )

                setResults(data.query.search);
            }
        }
        catch(error) {
            console.log('........ Error', error);
        }
    }

    return results;
}

export default useSearchApi;