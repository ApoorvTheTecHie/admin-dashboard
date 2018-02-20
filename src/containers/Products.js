import React from 'react';
import {
    Grid,
    Col,
    Row,
    Button,
    Panel,
    Table 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    return(
        <Grid>
            <Row>
                <Col md={12} xs={12} sm={12} lg={12}>
                    <div className="container modifyOrders">
                        <div className="pullRight">
                            <Link to="/orders"><Button bsStyle="primary" style={{ marginTop: '0.9em' }}><i className="fas fa-plus"></i> Add New Product </Button></Link>
                        </div>
                        <h3> Products </h3>    
                        <hr />
                            <Col md={12} xs={12} sm={12} lg={12}>
                                <Panel>
                                    <Panel.Body>
                                        <Row>
                                            <Col sm={6}>
                                                <label>
                                                    Show
                                                    <select
                                                        name="exampleLength"
                                                        className="form-control input-sm"
                                                    >
                                                        <option value=""> 10 </option>
                                                        <option value=""> 25 </option>
                                                        <option value=""> 50 </option>
                                                        <option value=""> 100 </option>
                                                    </select>
                                                </label>
                                            </Col>
                                            <Col md={6}>
                                                <label style={{ float: 'right' }}>
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
                                                <th>Id#</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Category</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>20</td>
                                                <td>Here Will Be Your Product Title</td>
                                                <td>$1600</td>
                                                <td>Sandals <br />
                                                    T-shirts <br />
                                                    Black
                                                </td>
                                                <td>Active</td>
                                                <td>
                                                    <Link to="/updateProducts"><Button bsStyle="primary"><i className="far fa-edit"></i> Edit </Button></Link>
                                                    <Button bsStyle="warning" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-times"></i> Deactivate </Button>
                                                    <Button bsStyle="danger"><i className="far fa-trash-alt"></i> Remove </Button>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>22</td>
                                                <td>Testing Project</td>
                                                <td>$20</td>
                                                <td>Sandals <br />
                                                    T-shirts <br />
                                                    Black
                                                </td>
                                                <td>Active</td>
                                                <td>
                                                    <Link to="/updateProducts"><Button bsStyle="primary"><i className="far fa-edit"></i> Edit </Button></Link>
                                                    <Button bsStyle="warning" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-times"></i> Deactivate </Button>
                                                    <Button bsStyle="danger"><i className="far fa-trash-alt"></i> Remove </Button>
                                                </td>
                                              
                                            </tr>
                                            <tr>
                                                <td>25</td>
                                                <td>Testing Project Float</td>
                                                <td>$200</td>
                                                <td>Sandals <br />
                                                    T-shirts <br />
                                                    Black
                                                </td>
                                                <td>Active</td>
                                                <td>
                                                    <Link to="/updateProducts"><Button bsStyle="primary"><i className="far fa-edit"></i> Edit </Button></Link>
                                                    <Button bsStyle="warning" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-times"></i> Deactivate </Button>
                                                    <Button bsStyle="danger"><i className="far fa-trash-alt"></i> Remove </Button>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>Product Name Here</td>
                                                <td>$20.99</td>
                                                <td>Sandals <br />
                                                    T-shirts <br />
                                                    Black
                                                </td>
                                                <td>Active</td>
                                                <td>
                                                    <Link to="/updateProducts"><Button bsStyle="primary"><i className="far fa-edit"></i> Edit </Button></Link>
                                                    <Button bsStyle="warning" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-times"></i> Deactivate </Button>
                                                    <Button bsStyle="danger"><i className="far fa-trash-alt"></i> Remove </Button>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>Test Product for Pickup</td>
                                                <td>$20</td>
                                                <td>Sandals <br />
                                                    T-shirts <br />
                                                    Black
                                                </td>
                                                <td>Active</td>
                                                <td>
                                                    <Link to="/updateProducts"><Button bsStyle="primary"><i className="far fa-edit"></i> Edit </Button></Link>
                                                    <Button bsStyle="warning" style={{ marginLeft: '0.5em', marginRight: '0.5em' }}><i className="fas fa-times"></i> Deactivate </Button>
                                                    <Button bsStyle="danger"><i className="far fa-trash-alt"></i> Remove </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    </Panel.Body>
                                </Panel>
                            </Col>
                        </div>                
                </Col>
            </Row>
        </Grid>            
    );
}

export default Products;