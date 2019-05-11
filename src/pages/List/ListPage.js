import React from 'react';

import Page, {PageBoundary} from '../../components/Page/Page';

import './ListPage.scss';

export default props => {
    return (
        <Page
            style="listPage"
            className="p-listPage"
            title={0}
            background="linear-gradient(40deg,#45cafc,#303f9f)"
        >
            <PageBoundary>
                Wow
            </PageBoundary>
        </Page>
    )
}