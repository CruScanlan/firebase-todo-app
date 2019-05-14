import React from 'react';

import Page, {PageBoundary} from '../../components/Page/Page';

import ListsSection from './Sections/ListsSection/ListsSection';
import AddListSection from './Sections/AddListSection/AddListSection';

import './ListsPage.scss';

export default props => {
    return (
        <Page
            style="listsPage"
            className="p-listsPage"
            title='Lists'
            background="linear-gradient(40deg,#45cafc,#303f9f)"
        >
            <div className="p-listsPage__inner">
                <PageBoundary>
                    <ListsSection />
                    <AddListSection />
                </PageBoundary>
            </div>
        </Page>
    )
}