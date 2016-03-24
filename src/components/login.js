import React from 'react';
import {Textfield, Button} from 'react-mdl';
import {setUserFieldValue, login} from '../state/user'

export const LoginForm = React.createClass({
  setField: function(e) {
    this.props.dispatch(setUserFieldValue(e.target.name, e.target.value))
  },
  handleSubmit: function() {
    this.props.dispatch(login(this.props.User.toJS()))
  },
  render: function() {
    return (
      <div>
        <Textfield
          label="Username"
          floatingLabel
          name="Username"
          value={this.props.User.get("Username")}
          onChange={this.setField}
        />
        <br/>
        <Textfield
          label="Password"
          floatingLabel
          name="Password"
          value={this.props.User.get("Password")}
          onChange={this.setField}
        />
        <br/>
        <Button colored raised onClick={this.handleSubmit}>Login</Button>
      </div>
    )
  }
})
