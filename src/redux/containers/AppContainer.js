import App from '../../components/App'
import { connect } from 'react-redux'

const mapStateToProps = state => {return {
  instagramFeed: state.instagramFeed
}}

const mapDispatchToProps = dispatch => {return {
}}

export default connect(mapStateToProps, mapDispatchToProps)(App)