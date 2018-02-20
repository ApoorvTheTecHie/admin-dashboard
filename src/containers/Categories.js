import React from 'react';
import {
    Grid,
    Row,
    Col,
    Panel,
    Tabs,
    Tab,
    Button,
    Table,
    Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Categories extends React.Component{
    constructor(props , context){
        super(props, context);
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteFunc = this.deleteFunc.bind(this);
        
        this.state = {
            show : false
        };
    }

    handleClose(){
        this.setState({ show: false });
    }

    handleShow(){
        this.setState({ show : true });
    }

    deleteFunc(){
        alert('This function is not yet available');
    }

    render(){
    return(
        <div>
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> You are about to delete this category,
                        Everything under this category will be deleted!<br />
                        Do You Still Want To Proceed ?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    <Button bsStyle="danger" onClick={this.deleteFunc}>Delete</Button>
                </Modal.Footer>
                </Modal>
            </div>
            <Grid>
                <Row>
                    <Col md={12} xs={12} lg={12} sm={12}>
                        <div className="container modifyOrders">
                            <h3>Categories</h3>
                        </div>
                        <Grid>
                            <Row>
                                <Col md={12} sm={12} xs={12} lg={12}>
                                    <Panel style={{width : '106%'}}>
                                        <Panel.Body>
                                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                                <Tab eventKey={1} title="Main Category">
                                                    <Grid>
                                                        <Row>
                                                            <Col md={12} sm={12} xs={12} lg={12}>
                                                                <Col md={6} sm={6} xs={6} lg={6}>
                                                                    <h3>Main Category</h3>
                                                                </Col>
                                                                <Col md={6} sm={6} xs={6} lg={6}>
                                                                    <Button 
                                                                        style={{
                                                                            float : 'right',
                                                                            marginTop : '16px'
                                                                        }}
                                                                        bsStyle="primary"
                                                                    >
                                                                        <i className="fas fa-plus"></i> 
                                                                        &nbsp;Add Main Category
                                                                    </Button>
                                                                </Col>
                                                                
                                                            </Col>
                                                            <hr />
                                                            <Panel style={{width : '101%'}}>
                                                                <Panel.Body>
                                                                    <Grid>
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
                                                                    </Grid>  
                                                                    <Grid>
                                                                        <Row>
                                                                            <Col className="container">
                                                                                <Table responsive>
                                                                                    <thead>
                                                                                        <tr>
                                                                            
                                                                                        <th>Category Name</th>
                                                                                        <th>Url Slug</th>
                                                                                        <th>Actions</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                        
                                                                                        <td>Sandals</td>
                                                                                        <td>Sandals</td>
                                                                                        <td>
                                                                                            <Link to="/editCategory">
                                                                                                <Button 
                                                                                                    bsStyle="primary"
                                                                                                >
                                                                                                    <i className="far fa-edit"></i>&nbsp;Edit
                                                                                                </Button>
                                                                                            </Link>
                                                                                            <Button 
                                                                                                bsStyle="danger"
                                                                                                onClick={this.handleShow}
                                                                                                style={{marginLeft : '0.3em'}}
                                                                                            >
                                                                                                <i className="far fa-trash-alt"></i>&nbsp;Remove
                                                                                            </Button>
                                                                                        </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                    
                                                                                        <td>Jeans</td>
                                                                                        <td>Jeans</td>
                                                                                        <td>
                                                                                            <Link to="/editCategory">
                                                                                                <Button 
                                                                                                    bsStyle="primary"
                                                                                                >
                                                                                                    <i className="far fa-edit"></i>&nbsp;Edit
                                                                                                </Button>
                                                                                            </Link>    
                                                                                            <Button 
                                                                                                bsStyle="danger"
                                                                                                onClick={this.handleShow}
                                                                                                style={{marginLeft : '0.3em'}}
                                                                                            >
                                                                                                <i class="far fa-trash-alt"></i>&nbsp;Remove
                                                                                            </Button>
                                                                                        </td>
                                                                                    
                                                                                        </tr>
                
                                                                                    </tbody>
                                                                                </Table>
                                                                            </Col>
                                                                        </Row>
                                                                    </Grid>
                                                                </Panel.Body>
                                                            </Panel>             
                                                        </Row>
                                                    </Grid>
                                                </Tab>
                                                <Tab eventKey={2} title="Sub Category">
                                                    <Grid>
                                                        <Row>
                                                            <Col md={12} sm={12} xs={12} lg={12}>
                                                                <Col md={6} sm={6} xs={6} lg={6}>
                                                                    <h3>Sub Category</h3>
                                                                </Col>
                                                                <Col md={6} sm={6} xs={6} lg={6}>
                                                                    <Button 
                                                                        style={{
                                                                            float : 'right',
                                                                            marginTop : '16px'
                                                                        }}
                                                                        bsStyle="primary"
                                                                    >
                                                                        <i className="fas fa-plus"></i> 
                                                                        &nbsp;Add Sub Category
                                                                    </Button>
                                                                </Col>
                                                                
                                                            </Col>
                                                            <hr />
                                                            <Panel style={{width : '101%'}}>
                                                                <Panel.Body>
                                                                    <Grid>
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
                                                                    </Grid>  
                                                                    <Grid>
                                                                        <Row>
                                                                            <Col className="container">
                                                                                <Table responsive>
                                                                                    <thead>
                                                                                        <tr>
                                                                            
                                                                                        <th>Category Name</th>
                                                                                        <th>Url Slug</th>
                                                                                        <th>Actions</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                        
                                                                                        <td>Sandals</td>
                                                                                        <td>Sandals</td>
                                                                                        <td>
                                                                                            <Link to="/editCategory">
                                                                                                <Button 
                                                                                                    bsStyle="primary"
                                                                                                >
                                                                                                    <i className="far fa-edit"></i>&nbsp;Edit
                                                                                                </Button>
                                                                                            </Link>    
                                                                                            <Button 
                                                                                                bsStyle="danger"
                                                                                                onClick={this.handleShow}
                                                                                                style={{marginLeft : '0.3em'}}
                                                                                            >
                                                                                                <i class="far fa-trash-alt"></i>&nbsp;Remove
                                                                                            </Button>
                                                                                        </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                    
                                                                                        <td>Jeans</td>
                                                                                        <td>Jeans</td>
                                                                                        <td>
                                                                                            <Link to="/editCategory">
                                                                                                <Button 
                                                                                                    bsStyle="primary"
                                                                                                >
                                                                                                    <i className="far fa-edit"></i>&nbsp;Edit
                                                                                                </Button>
                                                                                            </Link>    
                                                                                            <Button 
                                                                                                bsStyle="danger"
                                                                                                onClick={this.handleShow}
                                                                                                style={{marginLeft : '0.3em'}}
                                                                                            >
                                                                                                <i class="far fa-trash-alt"></i>&nbsp;Remove
                                                                                            </Button>
                                                                                        </td>
                                                                                    
                                                                                        </tr>
                
                                                                                    </tbody>
                                                                                </Table>
                                                                            </Col>
                                                                        </Row>
                                                                    </Grid>
                                                                </Panel.Body>
                                                            </Panel>             
                                                        </Row>
                                                    </Grid>
                                                </Tab>
                                                <Tab eventKey={3} title="Child Category">
                                                    <Grid>
                                                        <Row>
                                                            <Col md={12} sm={12} xs={12} lg={12}>
                                                                <Col md={6} sm={6} xs={6} lg={6}>
                                                                    <h3>Child Category</h3>
                                                                </Col>
                                                                <Col md={6} sm={6} xs={6} lg={6}>
                                                                    <Button 
                                                                        style={{
                                                                            float : 'right',
                                                                            marginTop : '16px'
                                                                        }}
                                                                        bsStyle="primary"
                                                                    >
                                                                        <i className="fas fa-plus"></i> 
                                                                        &nbsp;Add Child Category
                                                                    </Button>
                                                                </Col>
                                                                
                                                            </Col>
                                                            <hr />
                                                            <Panel style={{width : '101%'}}>
                                                                <Panel.Body>
                                                                    <Grid>
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
                                                                    </Grid>  
                                                                    <Grid>
                                                                        <Row>
                                                                            <Col className="container">
                                                                                <Table responsive>
                                                                                    <thead>
                                                                                        <tr>
                                                                            
                                                                                        <th>Category Name</th>
                                                                                        <th>Url Slug</th>
                                                                                        <th>Actions</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                        
                                                                                        <td>Sandals</td>
                                                                                        <td>Sandals</td>
                                                                                        <td>
                                                                                            <Link to="/editCategory">
                                                                                                <Button 
                                                                                                    bsStyle="primary"
                                                                                                >
                                                                                                    <i className="far fa-edit"></i>&nbsp;Edit
                                                                                                </Button>
                                                                                            </Link>    
                                                                                            <Button 
                                                                                                bsStyle="danger"
                                                                                                onClick={this.handleShow}
                                                                                                style={{marginLeft : '0.3em'}}
                                                                                            >
                                                                                                <i class="far fa-trash-alt"></i>&nbsp;Remove
                                                                                            </Button>
                                                                                        </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                    
                                                                                        <td>Jeans</td>
                                                                                        <td>Jeans</td>
                                                                                        <td>
                                                                                            <Link to="/editCategory">
                                                                                                <Button 
                                                                                                    bsStyle="primary"
                                                                                                >
                                                                                                    <i class="far fa-edit"></i>&nbsp;Edit
                                                                                                </Button>
                                                                                            </Link>    
                                                                                            <Button 
                                                                                                bsStyle="danger"
                                                                                                onClick={this.handleShow}
                                                                                                style={{marginLeft : '0.3em'}}
                                                                                            >
                                                                                                <i class="far fa-trash-alt"></i>&nbsp;Remove
                                                                                            </Button>
                                                                                        </td>
                                                                                    
                                                                                        </tr>
                
                                                                                    </tbody>
                                                                                </Table>
                                                                            </Col>
                                                                        </Row>
                                                                    </Grid>
                                                                </Panel.Body>
                                                            </Panel>             
                                                        </Row>
                                                    </Grid>
                                                </Tab>
                                            </Tabs>
                                        </Panel.Body>
                                    </Panel>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>    
                </Row>    
            </Grid>    
        </div>
    );
}
}


export default Categories;