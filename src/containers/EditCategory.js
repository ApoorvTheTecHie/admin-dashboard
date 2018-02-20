import React from 'react';
import {
    Grid,
    Row,
    Col,
    Button,
    Panel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditCategory = () => {
    return(
        <Grid>
            <Row>
                <Col sm={12} md={12} xs={12} lg={12}>
                    <div className="pullRight">
                        <Link to="/categories">
                            <Button bsStyle="default" style={{ marginTop: '5em' }}><i className="fas fa-long-arrow-alt-left"></i> 
                                &nbsp;Back 
                            </Button>
                        </Link> 
                    </div>
                    <div className="container modifyOrders">
                        <h3> Edit Category </h3>
                    </div>
                    <hr />
                    <Panel>
                        <Panel.Body>
                            <Grid>
                                <Row>
                                    <Col md={3} sm={3} xs={12} className="textDecorate">
                                        <label> Category Display Name
                                            <span className="required">*</span>
                                            <p className="small-label">(In Any Language)</p>
                                        </label> 
                                    </Col>     
                                    <Col md={6} sm={6} xs={12}>
                                        <input 
                                            id="name" 
                                            className="form-control col-md-7 col-xs-12" 
                                            name="title" 
                                            placeholder="Example"
                                            required="required" 
                                            type="text"
                                        />
                                    </Col>      
                                </Row>
                            </Grid>
                            <Grid>
                                <Row>
                                    <Col md={3} sm={3} xs={12} className="textDecorate">
                                        <label> Category URL Slug
                                            <span className="required">*</span>
                                            <p className="small-label">(In English Must Be Unique)</p>
                                        </label> 
                                    </Col>     
                                    <Col md={6} sm={6} xs={12}>
                                        <input 
                                            id="name" 
                                            className="form-control col-md-7 col-xs-12" 
                                            name="title" 
                                            placeholder="Example"
                                            required="required" 
                                            type="text"
                                        />
                                    </Col>      
                                </Row>
                            </Grid>
                            <Grid>
                                <Row>
                                    <Col md={3} sm={3} xs={12} className="textDecorate">
                                        <label>
                                        </label> 
                                    </Col>     
                                    <Col md={6} sm={6} xs={12}>
                                        <label>
                                            <strong>
                                                <input type="checkbox"/>
                                                &nbsp;Add To Featured 
                                            </strong>
                                        </label>    
                                    </Col>      
                                </Row>
                            </Grid>
                            <Grid>
                                <Row>
                                    <Col md={3} sm={3} xs={12} className="textDecorate">
                                        <label> Current Featured Image
                                            <span className="required">*</span>
                                        </label> 
                                    </Col>     
                                    <Col md={6} sm={6} xs={12}>
                                        <img 
                                            style={{ height : '300px', width : '300px'}} 
                                            src="http://markinternational.info/data/out/572/223938606-butterflies-images.png" 
                                        />
                                    </Col>      
                                </Row>
                            </Grid>
                            <Grid>
                                <Row>
                                    <Col md={3} sm={3} xs={12} className="textDecorate">
                                        <label> Change Featured Image
                                            <span className="required">*</span>
                                            <p className="small-label"> Must Be a Square Sized Image(400*400)</p>
                                        </label> 
                                    </Col>     
                                    <Col md={6} sm={6} xs={12}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                        />    
                                    </Col>      
                                </Row>
                            </Grid>
                            <hr />
                            <Col md={6} mdOffest={3} lg={6} lgOffset={3}>
                                <Button
                                    bsStyle = "success"
                                    style={{ width : '100%', display : 'block'}}
                                >
                                    Update Category
                                </Button>
                            </Col>
                        </Panel.Body>
                    </Panel>
                    
                </Col>
            </Row>
        </Grid>
    );
}

export default EditCategory;