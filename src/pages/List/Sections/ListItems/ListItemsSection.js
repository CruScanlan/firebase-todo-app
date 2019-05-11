import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {listsFetch} from '../../../../actions';

import Loader from '../../../../components/Loader/Loader';

import './ListItemsSection.scss';

class ListItemsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listsFetch();
    }

    getRenderedLists() {
        if(this.props.listsIsLoading) {
            return (
                <div className="c-listsSection__loader-container">
                    <Loader />
                </div>
            )
        }
        if(this.props.listsHasErrored) {
            return (
                <div>
                    Error Loading Lists
                </div>
            )
        }
        return this.props.lists.map(list => {
            return (
                <Link className="c-listsSection__listItem" key={list.id} to={`/list/${list.id}`}>
                    <div className="c-listsSection__listItem-name">
                        {list.name}
                    </div>
                    <img className="c-listsSection__listItem-chevron" src={rightChevronSvg}/>
                </Link>
            )
        })
    }

    render() {
        return (
            <section className="c-listsSection">
                <div className="c-listsSection__list">
                    <div className="c-listsSection__list-titleContainer">
                        <h2>Lists</h2>
                    </div>
                    <div className="c-listsSection__list-container">
                        {this.getRenderedLists()}
                    </div>
                </div>
            </section>
        )
    }
}

/*

*/

const mapStateToProps = state => {
    return {
        lists: state.lists,
        listsIsLoading: state.listsIsLoading,
        listsHasErrored: state.listsHasErrored
    }
}

export default connect(mapStateToProps, {listsFetch})(ListItemsSection);