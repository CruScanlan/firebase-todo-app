import React from 'react';

import Page from '../../components/Page/Page';

import './MainPage.scss';

export default props => {
    return (
        <Page
            style="main-page"
            className="p-main-page"
            title={0}
            background="linear-gradient(40deg,#45cafc,#303f9f)"
        >
            Main Page
        </Page>
    )
}