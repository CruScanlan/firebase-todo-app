import React from 'react';
import {Helmet} from "react-helmet";

import PageBoundary from './PageBoundary/PageBoundary';

export default props => {
    let { title, style, className, children, background } = props;

    //Switch classes
    let classes = `c-page ${className||""}`;

    //Setup page title
    let titleHelmet;
    if((!title || !title.length) && style != "home-page") {
        console.exception(`This page (${style||className}) does not have a title!`);
    } else {
        titleHelmet = <title>{ title }</title>
    }

    //Extras
    let bg;
    if(background) {
        //bg = <Image src={ background } className="c-page__background" />;
        classes += ' has-background';
    }

    return (
        <div className={classes}>
            <Helmet >
            { titleHelmet }
            </Helmet>
            { bg }
            { children }
        </div>
    );
};

export {
    PageBoundary
}