import React from 'react';
import {connect} from 'react-redux';
import {listsFetch} from '../../../../actions/index';

import './ListsSection.scss';

class ListsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listsFetch();
    }

    render() {
        return (
            <section className="c-listsSection">
                {
                    this.props.lists.map(list => {
                        return <div>List Id: {list.id} List Name: {list.name}</div>
                    })
                }
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps, {listsFetch})(ListsSection);