import React, { Component } from 'react'
import axios from 'axios'
import { Stack, FormControl, Input, Button } from 'native-base'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      username: '',
      email: '',
      password: '',
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(text) {
    this.setState({ fullName: text })
  }
  changeUsername(text) {
    this.setState({ username: text })
  }
  changeEmail(text) {
    this.setState({ email: text })
  }
  changePassword(text) {
    this.setState({ password: text })
  }
  onSubmit() {
    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    axios
      .post('http://192.168.1.107:4000/api/signup', registered)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({
      fullName: '',
      username: '',
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <FormControl my={8} alignItems="center">
        <Stack space={4} w={80}>
          <FormControl.Label>Full Name</FormControl.Label>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={this.state.fullName}
            onChangeText={this.changeFullName}
          />
          <FormControl.Label>Username</FormControl.Label>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChangeText={this.changeUsername}
          />
          <FormControl.Label>Email</FormControl.Label>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.changeEmail}
          />
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type="password"
            name="password"
            placeholder="Email"
            value={this.state.password}
            onChangeText={this.changePassword}
          />
          <Button colorScheme="success" onPress={this.onSubmit}>
            Success
          </Button>
        </Stack>
      </FormControl>
    )
  }
}

export default Signup
