import React from 'react';

import Page, {PageBoundary} from '../../components/Page/Page';

import ListsSection from './Sections/ListsSection/ListsSection';

import './ListsPage.scss';

export default props => {
    return (
        <Page
            style="listsPage"
            className="p-listsPage"
            title='Lists'
            background="linear-gradient(40deg,#45cafc,#303f9f)"
        >
            <PageBoundary>
                <div className="p-listsPage__inner">
                    <ListsSection />
                </div>
            </PageBoundary>
        </Page>
    )
}