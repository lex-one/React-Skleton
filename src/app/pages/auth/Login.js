import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jwtAuthenticationService from "../../services/authService/JwtAuthenticationService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        
        const formDom = this.form.current;
        const {username, password} = formDom;
        const credentials = {
            username: username.value,
            password: password.value
        }
        jwtAuthenticationService.loginWithUsernameAndPassword(credentials);
    }

    render(){
        return (
            <Container>
                <Card style={{width: "400px"}} className="mx-auto">
                    <Card.Body>
                        <h4 className="mb-4">Login to your account</h4>
                        <Row className="show-grid">
                            <Col>
                                <Form ref={this.form} noValidate onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="d-none">Email address</Form.Label>
                                        <Form.Control name="username" type="text" placeholder="Email Address" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="d-none">Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="success" type="submit" className="float-right">Login</Button>
                                </Form>
                            </Col>
                        </Row>
                        Forgot your password?<br/>no worries, click here to reset your password.
                        <Row>
                            <Alert variant={"danger"}>
                                Access to Auto Quotation System (AQS) is solely for FALP's appointed FARs only. User shall maintain the confidentiality of the User Access at all times and shall not disclose the User ID & Password to any other person or entity.
                                Sharing of the User Access is strictly prohibited. Management reserves the right to take any disciplinary action for any misuse of the User Access and take necessary legal action against you to indemnify the Company for all and any damages suffered and costs incurred by the Company as a result of your unauthorized disclosure or misuse of the User Access.
                            </Alert>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
export default Login;