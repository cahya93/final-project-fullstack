import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: {}};
  }

  onSubmit = () => {
    const {email, password} = this.state;
    const listUser = this.props.users;
    let dataLogin = {
      email: email,
      password: password,
    };
    for (let i = 0; i < listUser.length; i++) {
      if (
        email === listUser[i]['email'] &&
        password === listUser[i]['password']
      ) {
        this.setState({
          email: '',
          password: '',
        });
        // console.log(`login sukses :`);
        this.props.navigation.replace('Main');
        this.props.doLogin(dataLogin);
        return Alert.alert('Okey', 'Login success');
      }
    }
    return Alert.alert('Ops!', 'email / password is wrong');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: 'https://img.icons8.com/nolan/40/000000/email.png',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({email: value})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: 'https://img.icons8.com/nolan/40/000000/key.png',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({password: value})}
          />
        </View>

        <TouchableOpacity style={styles.restoreButtonContainer}>
          <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.onSubmit}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  continerOr: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineOr: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: '45%',
    height: 1,
  },
});
const mapStateToProps = state => {
  console.log(`state login:`, state.Auth);
  return {
    users: state.Auth.listUser,
  };
};
const mapDispatchToProps = dispatch => ({
  doLogin: dataLogin => dispatch({type: 'LOGIN', payload: {dataLogin}}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
