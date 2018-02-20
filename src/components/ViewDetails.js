import React from 'react';
import { 
    Grid,
    Row,
    Col,
    Panel,
    Button,
    Table        
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewDetails = () => {
    return(
        <Grid>
            <Row>
                <Col lg={12} sm={12} md={12} xs={12}>
                    <div className="container modifyOrders">
                        <div className="pullRight">
                           <Link to="/orders"><Button bsStyle="default" style={{ marginTop: '0.9em' }}><i className="fas fa-long-arrow-alt-left"></i> Back </Button></Link>
                        </div>
                        <h3> Order Details </h3>
                            <Panel>
                                <Panel.Body>
                                <Table responsive>
                                <tbody>
                                    <tr>
                                        <td>Order Id#</td>
                                        <td>972b1517963719</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Name</td>
                                        <td>dfghdfgh dfghd fgh</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Email</td>
                                        <td>dfghdfgh@gmail.com</td>
                                    </tr>
                                        <tr>
                                            <td>Customer Phone</td>
                                            <td>345634563456</td>
                                        </tr>
                                        <tr>
                                            <td>Customer Address</td>
                                            <td>hdfghdfgh</td>
                                        </tr>
                                        <tr>
                                            <td>Customer City</td>
                                            <td>dghdfghdfg</td>
                                        </tr>
                                        <tr>
                                            <td>Customer Postal Code</td>
                                            <td>2353345</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Option</td>
                                            <td>Ship to address</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Name</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Email</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Phone</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Address</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping City</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Postal Code</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Total Product</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Total Cost</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Ordered Date</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Payment Method</td>
                                            <td>dfghdfgh@gmail.com</td>
                                        </tr>
                                </tbody>
                            </Table>
                                <h3 style={{textAlign : 'center'}}> Product Ordered </h3>
                                <Table responsive>
                                    <thead className="decorate">
                                        <tr>
                                            <th>Product Id#</th>
                                            <th>Product Title</th>
                                            <th>Quantity</th>
                                            <th>Size</th>
                                            <th>Owner</th>  
                                            <th>Status</th>
                                        </tr>        
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>26</td>
                                            <td>Product Name Here</td>
                                            <td>1</td>
                                            <td> </td>
                                            <td>Genius Vendor</td>
                                            <td className="oComplete">Completed</td>
                                        </tr>
                                    </tbody>    
                                </Table>     
                                <Link to="/contactCustomer"><Button bsStyle="primary"><i className="far fa-paper-plane"></i> Contact Customer</Button></Link>   
                                </Panel.Body>
                            </Panel>
                        </div>
                </Col>
            </Row>        
        </Grid>    
    );
}

export default ViewDetails;