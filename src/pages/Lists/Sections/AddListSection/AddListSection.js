import React from 'react';
import {connect} from 'react-redux';
import {listsAddList} from '../../../../actions';

import './AddListSection.scss';

class AddListSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="c-addListSection">
                <button className="c-addListSection__button" onClick={() => this.props.listsAddList()}>
                    Add New List
                </button>
            </section>
        )
    }
}

export default connect(null, {listsAddList})(AddListSection);