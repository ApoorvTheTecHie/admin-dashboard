import React from 'react';
import { 
    Grid, 
    Row, 
    Col,
    Panel,
    Table,
    Button,
    DropdownButton, 
    MenuItem} 
from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style.css';

const Orders = () => {
    return(
        <Grid>
            <Row>
                <Col sm={12} md={12} lg={12} xs={12}>
                    <div className=" container modifyOrders">
                        <div className="goTitle">
                            <div className="pullRight">
                                <span>
                                    <span style={{ backgroundColor: 'green' }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    Completed &nbsp; 
                                </span>
                                <span>    
                                    <span style={{ backgroundColor: 'cyan' }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    Processing 
                                </span>    
                            </div>
                            <div>
                                <h3> Orders </h3>
                                <div className="goLine">
                                    <hr />
                                </div>
                            </div>
                        </div>    
                    </div>
                </Col>   
            </Row>
            <div className="container">
                <Col md={12} xs={12} sm={12} lg={12}> 
                    <Panel style={{width : '106%'}}>
                        <Panel.Body>
                            <Row>
                                <Col sm={6}>
                                    <label> 
                                        Show
                                        <select 
                                            name="exampleLength"
                                            className="form-control input-sm"
                                            style={{width : '75px'}}
                                        >
                                            <option value=""> 10 </option>
                                            <option value=""> 25 </option>
                                            <option value=""> 50 </option>
                                            <option value=""> 100 </option>
                                        </select>    
                                    </label>    
                                </Col>
                                <Col md={6}>
                                    <label style={{float : 'right'}}>
                                        Search :
                                        <input 
                                            type="search"
                                            className="form-control input-sm"
                                         />
                                    </label>
                                </Col>
                            </Row>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Customer Email</th>
                                        <th>Customer Name</th>
                                        <th>Total Product</th>
                                        <th>Total Cost</th>
                                        <th>Payment Method</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>dfghdfgh@gmail.com</td>
                                        <td>user@gmail.com</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td> 
                                            <Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton 
                                                bsStyle="primary"
                                                title="Primary"    
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton>    
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Link to="/contactCustomer"><Button bsStyle="primary" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="far fa-paper-plane"></i> Send Email</Button></Link>
                                            <DropdownButton
                                                bsStyle="primary"
                                                title="Primary"
                                            >
                                                <MenuItem eventKey="1">Processing</MenuItem>
                                                <MenuItem eventKey="2">Completed</MenuItem>
                                            </DropdownButton></td>
                                       
                                    </tr>
                                </tbody>
                            </Table>
                        </Panel.Body>
                    </Panel>
                </Col>    
            </div>    
        </Grid>    
    );
} 

export default Orders;
