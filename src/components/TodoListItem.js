import React, { Component } from 'react';
import { ListGroupItem, Button, Label, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { updateTodoItemStart } from '../actions/todo';

class TodoListGroupItem extends Component {
    render() {
        return (
            <ListGroupItem style={{ display: 'flex' }}>
                <div style={{ flexGrow: 1 }}>
                    <span>
                        {this.props.model.description}
                    </span>

                    <FormGroup check>
                    <Label check>
                        <Input id={'' + this.props.model.rowid + '-cb'} type="checkbox" checked={!!this.props.model.isDone} onChange={(ev) => this.onIsDoneChange(ev)} />{' '}
                        Is Done?
                    </Label>
                    </FormGroup>
                </div>
                <div style={{ width: '120px' }}>
                    <Button color="danger">DELETE</Button>
                </div>
            </ListGroupItem>
        );
    }

    onDelete() {

    }

    onIsDoneChange() {
        const item = {
            ...this.props.model,
            isDone: !this.props.model.isDone
        }
        this.props.updateTodoItemStart({ item });
    }
}

export default connect(null, {
    updateTodoItemStart
})(TodoListGroupItem);
