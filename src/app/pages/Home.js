import React, { Component }  from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';

class Home extends Component {
    bla = () => {
        this.props.dispatch({type: "SET_USER"});
        let id = this.props.state.user.id;
        this.props.dispatch({type: "SET_PREFERENCE", payload: id});
    }
    render() {
        return (
            <div>
                <div onClick={this.bla}>abc</div>
                <div>{
                    [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                        <div>id = {this.props.state.user.preference}</div>
                        </Alert>
                    ))
              }</div>
            </div>
            
        );
    }
}

function mapDispatchToProps(dispatch) {
    console.log('dispatching:', dispatch);
    return { dispatch };
}
  
  function mapStateToProps(state) {
    return { state }
  }
  
  export default connect(mapStateToProps)(Home);