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
import validateInput from '../utilities/Validations/EditProfile';
import classnames from 'classnames';

export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                adminName : '',
                email : '',
                phoneNumber : ''
            },
            errors : {}
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
                <Col md={12} sm={12} lg={12} xs={12}>
                    <div className="container modifyOrders">
                        <h2> Admin Profile </h2>
                        <hr />
                        <Panel>
                           <Form horizontal onSubmit={this.onSubmit}>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col style={{marginTop : '90px', paddingTop: '7px' ,marginBottom: '0px',
                                            textAlign: 'right'}} md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                            Current Photo
                                            <span className="required">*</span>
                                        </Col>
                                        <Col md={2} sm={6} xs={12}>
                                            <span><img style={{height : '120px', width : '120px'}} src="https://ae01.alicdn.com/kf/HTB1L.JqNpXXXXbmaXXXq6xXFXXXn/120-pcs-lot-Hot-Fashion-Mini-Supermarket-Hand-Trolleys-Mini-Shopping-Cart-Desktop-Decoration-Storage-Phone.jpg" /></span>
                                        </Col>
                                        <Col md={4} sm={6} xs={12}>
                                            <input className="hidden" id="uploadFile" name="photo" type="file" />
                                            <Button 
                                                bsStyle="default"
                                                style={{ 
                                                    whiteSpace : 'normal',
                                                    marginTop : '90px',
                                                    width : '100%'
                                                }}>
                                                <i className="fas fa-upload"></i>
                                                    Change Photo
                                            </Button>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                            Admin Name
                                            <span className="required">*</span>
                                        </Col>
                                        <Col md={6} xs={12} className={classnames("", { 'has-error': errors.adminName })}>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Name"
                                                name="adminName"
                                                value={this.state.user.adminName}
                                                onChange={this.onChange.bind(this, 'adminName')}
                                            />
                                            <label className="glorifyErrors">{errors.adminName}</label>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                            Email Address
                                            <span className="required">*</span>
                                        </Col>
                                        <Col md={6} xs={12} className={classnames("", { 'has-error': errors.email })}>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter email"
                                                name="email"
                                                value={this.state.user.email}
                                                onChange={this.onChange.bind(this, 'email')}
                                            />
                                            <label className="glorifyErrors">{errors.email}</label>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid className="item form-group">
                                    <Row>
                                        <Col md={3} sm={3} xs={12} componentClass={ControlLabel}>
                                            Phone Number
                                            <span className="required">*</span>
                                        </Col>
                                        <Col md={6} xs={12} className={classnames("", { 'has-error': errors.phoneNumber })}>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter Number"
                                                name="phoneNumber"
                                                value={this.state.user.phoneNumber}
                                                onChange={this.onChange.bind(this, 'phoneNumber')}
                                            />
                                            <label className="glorifyErrors">{errors.phoneNumber}</label>
                                        </Col>
                                    </Row>
                                </Grid>
                                <hr style={{marginLeft:'2%' , marginRight: '2%'}}/>
                                <Grid>
                                    <Row>
                                        <Col md={6} mdOffset={3}>
                                            <Button style={{width : '100%', marginTop : '0.5em', marginBottom : '2em'}} type="submit" bsStyle="success"> Update Profile</Button>
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
