import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CustomLink from '../CustomLink';
import {updateSignInStatus} from '../../actions';
import googleIcon from '../../Images/google.png';
import './Tab.scss';

const Tab = ({tabItems, signInStatus, updateSignInStatus}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [authInstance, setAuthInstance] = useState({});
    
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popState', onLocationChange);

        return () => window.removeEventListener('popState', onLocationChange);
    }, []);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
              .init({
                clientId:
                  'replace with original key',
                scope: 'email'
              })
              .then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                setAuthInstance(auth);
                onSignInChange(auth);
                auth.isSignedIn.listen(() => onSignInChange(auth));
              });
          });
    }, []);

    const onSignInChange = (authInstance) => {
        updateSignInStatus(authInstance.isSignedIn.get());
    }

    const onSignInClick = () => {
        authInstance.signIn();
        onSignInChange(authInstance);
    }

    const onSignOutClick = () => {
        authInstance.signOut();
        onSignInChange(authInstance);
    }

    const renderButton = (text, onClickHandler) => {
        return (
            <button onClick={onClickHandler}>
                <img src={googleIcon} alt='googleIcon' className="tab__button__image"/>
                {text}
            </button> 
        )
    }

    return (
        <div className="tab">
            <div className="tab__items-container">
                {
                    tabItems.map(item => {
                        const active = currentPath === item.path;

                        return (
                            <CustomLink key={item.label} active={active} path={item.path}>
                                <li className="tab__items-container__list">{item.label}</li>
                            </CustomLink>
                        )
                    })
                }
            </div>
            <div className="tab__button">
                {signInStatus ? 
                    renderButton('Sign Out', onSignOutClick) : 
                    renderButton('Sign In', onSignInClick)
                }
            </div>
        </div>
    );
};

//Connect component

const mapStateToProps = (state) => {
    return {
        signInStatus: state.signInState.signInStatus
    }
}

const mapDispatchToProps = {
    updateSignInStatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);