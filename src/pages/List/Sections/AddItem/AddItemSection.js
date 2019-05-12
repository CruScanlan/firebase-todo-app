import React from 'react';
import {connect} from 'react-redux';
import {listItemsAdd} from '../../../../actions';

import './AddItemSection.scss';

class AddItemSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.name === '') return;
        this.props.listItemsAdd(this.props.listId, this.state.name);
        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <section className="c-addItemSection">
                <div className="c-addItemSection__text">
                    <h4>Add Item</h4>
                </div>
                <form className="c-addItemSection__form">
                    <input className="c-addItemSection__form-text" type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                    <button className="c-addItemSection__form-submit" onClick={this.handleSubmit}>Add</button>
                </form>
            </section>
        )
    }
}

export default connect(null, {listItemsAdd})(AddItemSection);