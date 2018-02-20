import React, { Component } from 'react';
import {
    Grid,
    Row,
    Col,
    Button,
    Panel,
    Form,
    FormGroup,
    ControlLabel,
    FormControl
 } from 'react-bootstrap';
 import {Link} from 'react-router-dom';
 import validateInput from '../utilities/Validations/ContactCustomers';
 import classnames from 'classnames';

export default class ContactCustomers extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                email : '',
                subject : '',
                message : ''
            },
            errors : {}
        }
    }
    onChange = (key , e) => {
        let { user } = this.state;
        user[key] = e.target.value;
        this.setState({ user });    //similar to this.setState = { user : user }
    } 

    onSubmit = (e) => {
        e.preventDefault();
        if(this.isValid()){
            console.log(this.state.user);
        }
    }

    isValid = () => {
        const {errors , isValid} = validateInput(this.state.user);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }

    render(){
        const { errors } = this.state;

    return(
        <Grid>
            <Row>
                <Col lg={12} sm={12} md={12} xs={12}>
                    <div className="container modifyOrders">
                        <div className="pullRight">
                            <Link to="/orders"><Button bsStyle="default" style={{ marginTop: '0.9em' }}><i className="fas fa-long-arrow-alt-left"></i> Back </Button></Link>
                        </div>
                        <h3> Send Email to Reviever </h3>
                        <hr />
                        <Panel>
                            <Panel.Body>
                                <Form horizontal onSubmit={this.onSubmit}>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            To:*
                                        </Col>
                                        <Col sm={10} md={7} xs={12} className={classnames("", { 'has-error': errors.email })}>
                                            <FormControl 
                                                type="text"
                                                name="email" 
                                                placeholder="Email" 
                                                value={ this.state.user.email }
                                                onChange={this.onChange.bind(this, 'email')}
                                            />
                                            <label className="glorifyErrors">{errors.email}</label>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalSubject">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Subject*
                                        </Col>
                                        <Col sm={10} md={7} xs={12} className={classnames("", { 'has-error': errors.subject })}>
                                            <FormControl 
                                                type="text"
                                                name="subject" 
                                                placeholder="Subject" 
                                                value={this.state.user.subject}
                                                onChange={this.onChange.bind(this,'subject')}
                                            />
                                            <label className="glorifyErrors">{errors.subject}</label>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalSubject">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Message*
                                        </Col>
                                        <Col sm={10} md={7} xs={12} className={classnames("", { 'has-error': errors.message })}>
                                            <FormControl 
                                                componentClass="textarea"
                                                name="message" 
                                                placeholder="Write Message" 
                                                value={this.state.user.message}
                                                onChange={this.onChange.bind(this,'message')}
                                            />
                                            <label className="glorifyErrors">{errors.message}</label>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col md={7} mdOffset={2}>
                                            <Button 
                                                className="buttonDecorate" 
                                                type="submit" 
                                                bsStyle="success"
                                            > 
                                                Send Email 
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Panel.Body>
                        </Panel>    
                    </div>
                </Col>
            </Row>
        </Grid>            
    );
}
}

