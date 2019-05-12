import React from 'react';
import {connect} from 'react-redux';
import {listItemsFetch, listItemsSetCompleted} from '../../../../actions';

import Loader from '../../../../components/Loader/Loader';

import tickSvg from '../../../../assets/icons/tick.svg';
import tickedSvg from '../../../../assets/icons/ticked.svg';

import './ListItemsSection.scss';

class ListItemsSection extends React.Component {
    constructor(props) {
        super(props);

        this.handleTickEvent = this.handleTickEvent.bind(this);
    }

    getList() {
        if(!this.props.lists || this.props.lists.length === 0) return undefined;
        return this.props.lists.find(list => list.id === this.props.listId);
    }

    componentDidMount() {
        this.props.listItemsFetch(this.props.listId);
    }

    handleTickEvent(item) {
        this.props.listItemsSetCompleted(this.props.listId, item.id, !item.completed);
    }

    renderListItems(list) {
        if(list.itemsIsLoading) {
            return (
                <div className="c-listItemsSection__loaderContainer">
                    <Loader />
                </div>
            )
        }
        if(list.itemsHasErrored) {
            return (
                <div>
                    Error loading items
                </div>
            )
        }
        return list.items.map(item => {
            return (
                <div className="c-listItemsSection__item" key={item.id}>                        
                    <h5>{item.name}</h5>
                    {this.renderTick(item)}
                </div>
            )
        })
    }

    renderTick(item) {
        return <img className="c-listItemsSection__item-tick" src={item.completed ? tickedSvg : tickSvg} onClick={() => this.handleTickEvent(item)} />
    }

    render() {
        return (
            <section className="c-listItemsSection">
               {this.renderListItems(this.getList())}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps, {listItemsFetch, listItemsSetCompleted})(ListItemsSection);