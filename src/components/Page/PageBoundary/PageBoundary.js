import React from 'react';

import './PageBoundary.scss';

export default (props) => {
  let newProps = { ...props };
  let { full, small, className } = props;

  ["full","small"].forEach(e => delete newProps[e]);

  let clazzes = "c-page-boundary";
  if(full) clazzes += " is-full";
  if(small) clazzes += " is-small";
  if(className) clazzes += ` ${className}`

  return (
    <div {...newProps} className={ clazzes }>
      { props.children }
    </div>
  );
}
