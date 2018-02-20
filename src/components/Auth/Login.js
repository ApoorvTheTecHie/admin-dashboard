import React, {Component} from 'react';
import { 
    Grid, 
    Col, 
    Row,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Checkbox,
    Button,
    Panel,
    InputGroup,
    Alert
} from 'react-bootstrap';
import validateInput from '../../utilities/Validations/Login';
import actions from '../../actions';
import classnames from 'classnames';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                email : '',
                password : ''
            },
            errors : {},
            showAlert: false
        }
    }

    onChange = (key, e) => {
        let { user } = this.state;
        user [key] = e.target.value;
        this.setState({ user }); 
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.isValid()){
            console.log(this.state.user);
            actions.login(this.state.user)
            .then(res => {
                console.log(res);
                this.props.history.push('/dashboard');
            })
            .catch(err => {
            console.log(err);
        });
            
    }
}

    isValid = () => {
        const { errors, isValid } = validateInput(this.state.user); 
        
        if(!isValid) { this.setState({ errors,  showAlert: true }); } 
        
        return isValid;
    }    



    render(){
        const { errors, showAlert } = this.state;
        return( 
            <Grid>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12} className="container"> 
                        <Col  lgOffset={4} mdOffset={1} lg={4} md={9} sm={12} xs={12}>
                            <Panel style={{ marginTop : '45%'}}>
                                <h3 className="loginTextAlign"> Login </h3>
                                <Col mdOffset={1} lgOffset={1} smOffset={1} xsOffset={1}>
                                    <Form horizontal onSubmit={this.onSubmit}>
                                        <FormGroup controlId="formHorizontalEmail">
                                            <Col sm={11}>
                                                {showAlert ? <Alert bsStyle="danger">
                                                    <p><span style={{ fontWeight : '700'}}>{errors.email}</span> 
                                                    &nbsp;&nbsp;<span style={{fontWeight : '700'}}>{errors.password}</span> </p> 
                                                </Alert>: ''}
                                            </Col>
                                            <Col sm={11} xs={11} className={classnames("", { 'has-error': errors.email })}>
                                            <InputGroup>
                                                <InputGroup.Addon><i className="fas fa-envelope"></i></InputGroup.Addon>
                                                <FormControl 
                                                    type="text"
                                                    name="email"
                                                    value={this.state.user.email} 
                                                    onChange={this.onChange.bind(this, 'email')}
                                                />
                                            </InputGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalPassword">
                                            
                                            <Col sm={11} xs={11} className={classnames("", { 'has-error': errors.password })}>
                                            <InputGroup>
                                                <InputGroup.Addon><i className="fas fa-certificate"></i></InputGroup.Addon>
                                                <FormControl 
                                                    type="password"
                                                    name="password"
                                                    value={this.state.user.password}
                                                    onChange={this.onChange.bind(this, 'password')} 
                                                />
                                            </InputGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col smOffset={3} sm={11}>
                                            <Checkbox>Remember me</Checkbox>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col smOffset={1} sm={9} xs={11}>
                                            <Button
                                                type="submit"
                                                bsStyle="success"
                                                style={{width : '100%'}}
                                            >   
                                                Sign in
                                            </Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>  
                                </Col>    
                            </Panel>  
                        </Col>         
                    </Col>
                </Row>
            </Grid>        
        );
    }
}

export default Login;