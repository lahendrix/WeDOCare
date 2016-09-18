import React, { PropTypes } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import NavigationRouter from './navigation/navigationRouter'


export default class Root extends React.Component {

  render () {
    return (
      <Provider store={this.props.store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle='default' />
          <NavigationRouter />
        </View>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
