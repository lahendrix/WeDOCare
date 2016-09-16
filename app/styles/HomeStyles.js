import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../theme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.silver
  },
  row: {
    flex: 1,
    // backgroundColor: Colors.ricePaper,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.charcoal,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.charcoal
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
