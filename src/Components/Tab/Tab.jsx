import React, {useState, useEffect} from 'react';
import CustomLink from '../CustomLink'
import './Tab.scss';

const Tab = ({tabItems}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popState', onLocationChange);

        return () => window.removeEventListener('popState', onLocationChange);
    }, []);
    return (
        <div className="tab">
            {
                tabItems.map(item => {
                    const active = currentPath === item.path;

                    return (
                        <CustomLink key={item.label} active={active} path={item.path}>
                            <li className="tab__list">{item.label}</li>
                        </CustomLink>
                    )
                })
            }
        </div>
    );
};

export default Tab;