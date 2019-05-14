import React from 'react';
import {connect} from 'react-redux';
import {listsSetName, listsSetOld} from '../../../../actions';

import penSvg from '../../../../assets/icons/pen-solid.svg';

import './ListHeaderSection.scss';

class ListHeaderSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: !!this.props.shouldEdit,
            name: this.props.listName
        };

        this.handlePenClick = this.handlePenClick.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if(!!this.props.shouldEdit) this.inputRef.current.focus();
    }

    handlePenClick() {
        if(this.state.name === '') return;
        this.setState({
            editing: !this.state.editing
        });
        if(!!this.props.shouldEdit) this.props.listsSetOld(this.props.listId);
        this.props.listsSetName(this.props.listId, this.state.name);
    }

    handleInputChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const staticClasses = this.state.editing ? 'c-listHeaderSection__static c-listHeaderSection__static-isInactive' : 'c-listHeaderSection__static';
        const editableClasses = this.state.editing ? 'c-listHeaderSection__editable c-listHeaderSection__editable-isActive' : 'c-listHeaderSection__editable';

        return (
            <section className="c-listHeaderSection">
                <div className={staticClasses}>
                    <div className="c-listHeaderSection__static-title">
                        <h2>{this.state.name}</h2>
                    </div>
                    <img src={penSvg} className="c-listHeaderSection__static-pen" onClick={this.handlePenClick}/>
                </div>
                <div className={editableClasses}>
                    <form className="c-listHeaderSection__editable-form" onSubmit={this.handlePenClick}>
                        <input type="text" className="c-listHeaderSection__editable-title" onChange={this.handleInputChange} value={this.state.name}  ref={this.inputRef} placeholder="List Name"/>
                    </form>
                    <img src={penSvg} className="c-listHeaderSection__static-pen" onClick={this.handlePenClick}/>
                </div>
            </section>
        )
    }
}

export default connect(null, {listsSetName, listsSetOld})(ListHeaderSection);