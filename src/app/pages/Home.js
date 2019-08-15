import React, { Component }  from 'react';
import Alert from 'react-bootstrap/Alert';

class Home extends Component {
    render() {
        return (
            <div>
                <div>abc</div>
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
                        </Alert>
                    ))
              }</div>
            </div>
            
        );
    }
}

export default Home;