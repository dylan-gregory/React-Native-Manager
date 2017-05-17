import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCT7w_Hliwty8oEZyHdI3wOtx72dOAtu10",
      authDomain: "manager-71009.firebaseapp.com",
      databaseURL: "https://manager-71009.firebaseio.com",
      projectId: "manager-71009",
      storageBucket: "manager-71009.appspot.com",
      messagingSenderId: "163137213845"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
