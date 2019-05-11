import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';

import Page, {PageBoundary} from '../../components/Page/Page';
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
                    <div className="p-listPage__title">
                        <h2>{props.location.state.listName}</h2>
                    </div>
                    <ListItemsSection listId={props.match.params.listId}/>
                </PageBoundary>
            </div>
        </Page>
    )
})