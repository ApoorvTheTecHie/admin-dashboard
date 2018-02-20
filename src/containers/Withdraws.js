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

const Withdraws = () => {
    return(
        <Grid>
            <Row>
                <Col sm={12} md={12} lg={12} xs={12}>
                    <div className=" container modifyOrders">
                        <div className="goTitle">
                            <div>
                                <h3> 
                                    Withdraws&nbsp;
                                    <Link to="/">
                                        <Button style={{ 
                                                    background : '#5bc0de', 
                                                    borderColor : '#46b8da',
                                                    color : 'white'
                                                }}> 
                                            <strong>
                                                Pending Withdraws&nbsp;
                                                <label className="label label-primary">
                                                    6
                                                </label>
                                            </strong> 
                                        </Button>
                                    </Link> 
                                </h3>
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
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>    
                                       
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td><Link to="/viewDetails"><Button bsStyle="primary"><i className="fas fa-check"></i> View Details</Button></Link>
                                            <Button bsStyle="success" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-check-circle"></i> Accept </Button>
                                            <Button bsStyle="danger"><i className="fas fa-times-circle"></i> Reject </Button>
                                        </td>     
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

export default Withdraws;
