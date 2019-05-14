import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';

import Page, {PageBoundary} from '../../components/Page/Page';

import ListHeaderSection from './Sections/ListHeader/ListHeaderSection';
import AddItemSection from './Sections/AddItem/AddItemSection';
import ListItemsSection from './Sections/ListItems/ListItemsSection';

import './ListPage.scss';

export default withRouter(props => {
    if(!props.location.state) return <Redirect to="/" />
    return (
        <Page
            style="listPage"
            className="p-listPage"
            title={`${props.location.state.listName} | List`}
            background="linear-gradient(40deg,#45cafc,#303f9f)"
        >
            <div className="p-listPage__inner">
                <PageBoundary>
                    <ListHeaderSection listName={props.location.state.listName} listId={props.match.params.listId} shouldEdit={props.location.state.shouldEdit} />
                    <AddItemSection listId={props.match.params.listId} shouldEdit={props.location.state.shouldEdit} />
                    <ListItemsSection listId={props.match.params.listId} />
                </PageBoundary>
            </div>
        </Page>
    )
})