import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import styles from '../styles/HomeStyles'

class Home extends Component {
  constructor(props) {
    super(props)
    let rows = [
      {id: 1, description: "Diabetes", date: "01/01/2016"},
      {id: 2, description: "High Cholesterol", date: "11/01/2015"},
      {id: 3, description: "Heart Failure", date: "09/01/2007"}
    ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(rows),
    };
  }

  renderRow (rowData) {
    console.log('renderRow', rowData.description);
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.date}</Text>
        <Text style={styles.label}>{rowData.description}</Text>
      </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
