import React, { Component } from 'react';
import { 
    Grid,
    Row,
    Col,
    Panel,
    Form,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap';
import validateInput from '../utilities/Validations/ChangePassword';
import classnames from 'classnames';

export default class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                currentPassword : '',
                newPassword : '',
                retypePassword : ''
            },
            errors : {}
        }
    }

    onChange = (key, e) =>{
        let { user } = this.state;
        user [key] = e.target.value;
        this.setState({ user }); 
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.isValid()){
            console.log(this.state.user);
            
        }
    }

    isValid = () => {
        const { errors, isValid } = validateInput(this.state.user); 
        
        if(!isValid) { this.setState({ errors }); } 
        
        return isValid;
    }


    render(){
        const { errors } = this.state;

    return(
        <Grid>
            <Row>
                <Col lg={12} sm={12} md={12} xs={12}>
                    <div className="container modifyOrders">
                        <h3> Change Password </h3>
                        <hr />    
                        <Panel>
                            <Form horizontal onSubmit={this.onSubmit}>
                                <Grid className="item form-group" style={{marginTop : '1em'}}>
                                    <Row>
                                        <Col>
                                            <Col md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                            Current Password
                                            <span className="required">*</span>
                                        </Col>
                                        <Col md={6} xs={12} className={classnames("", { 'has-error': errors.currentPassword })}>
                                            <FormControl
                                                type="password"
                                                name="currentPassword"
                                                placeholder="Current Password"
                                                value={this.state.user.currentPassword}
                                                onChange={this.onChange.bind(this, 'currentPassword')}
                                            />
                                             <label className="glorifyErrors">{errors.currentPassword}</label>
                                        </Col>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col>
                                            <Col md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                            New Password
                                            <span className="required">*</span>
                                        </Col>
                                        <Col md={6} xs={12} className={classnames("", { 'has-error': errors.newPassword })}>
                                            <FormControl
                                                type="password"
                                                name="newPassword"
                                                placeholder="New Password"
                                                value={this.state.user.newPassword}
                                                onChange={this.onChange.bind(this, 'newPassword')}
                                            />
                                            <label className="glorifyErrors">{errors.newPassword}</label>
                                        </Col>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col>
                                            <Col md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                                Re-type New Password
                                                <span className="required">*</span>
                                            </Col>
                                            <Col md={6} xs={12} className={classnames("", { 'has-error': errors.retypePassword })}>
                                                <FormControl
                                                    type="password"
                                                    name="retypePassword"
                                                    placeholder="Re-type New Password"
                                                    value={this.state.user.retypePassword}
                                                    onChange={this.onChange.bind(this, 'retypePassword')}
                                                />
                                                <label className="glorifyErrors">{errors.retypePassword}</label>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Grid>
                                <div className="container">
                                    <hr />
                                </div>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col mdOffset={3} md={6} >
                                            <Button 
                                                type="submit"
                                                bsStyle="success"
                                                style={{ width : '100%'}}
                                            > 
                                                Change Password 
                                            </Button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Form>
                        </Panel>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}
}