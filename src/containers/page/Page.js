import React from 'react';
import './Page.scss'
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

const Page = () => {
    return (
        <div className={'page'}>
            <Header/>
            <Main/>
        </div>
    );
};

export default Page;