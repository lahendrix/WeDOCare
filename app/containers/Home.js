import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import styles from '../styles/HomeStyles'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

class Home extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount () {
    console.log("-- Home did mount ---");
    console.log(JSON.stringify(this.props));
    const { dispatch } = this.props
    dispatch(ActionCreators.fetchDiagnoses());
  }

  componentWillReceiveProps (nextProps) {
    console.log("Home will receive props");
    console.log(JSON.stringify(nextProps));
    // this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(nextProps.diagnoses)
    //   })
  }

  renderRow (rowData) {
    console.log('renderRow', rowData.description);
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.diagnosisDate}</Text>
        <Text style={styles.label}>{rowData.description}</Text>
      </View>

    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.props.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  console.log("****** mapStateToProps **** ");
  console.log(state);
  console.log("************");
  return {
    dataSource: dataSource.cloneWithRows(state.default.diagnoses),
  };
}

export default connect(mapStateToProps)(Home);
