import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <header className={'header'}>
            <a className={'about'} href={'#pop-up'}> </a>
            <div className={'pop-up'} id={'pop-up'}>
                <div className={'info'}>
                    Some info
                </div>
                <a className={'close'} href={'#'}>
                    x
                </a>
            </div>
        </header>
    );
};

export default Header;