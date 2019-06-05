import { connect } from 'react-redux'
import Counter from '../components/counter'
import { increment, decrement, reset } from '../actions/action';
//this file is used so that the component can access the redux state and props
const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);