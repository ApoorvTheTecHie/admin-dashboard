import React from 'react';
import {
    Row,
    Col,
    Grid,
    Button,
    Panel,
    FormGroup,
    ControlLabel,
    FormControl
 } from 'react-bootstrap';
 import { Link } from 'react-router-dom';

const UpdateProduct = () => {
    return(
        <Grid>
            <Row>
                <Col lg={12} xs={12} sm={12} md={12}>
                    <div className="container modifyOrders">
                        <div className="pullRight">
                            <Link to="/products"><Button bsStyle="default" style={{ marginTop: '0.9em' }}><i className="fas fa-long-arrow-alt-left"></i> Back </Button></Link>
                        </div>
                        <h3> Update Product </h3>
                        <hr />
                        <Panel>
                            <Panel.Body>
                                <Grid>
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label> Product Name 
                                                <span className="required">*</span>
                                                <p className="small-label">(In Any Language)</p>
                                            </label> 
                                        </Col>     
                                        <Col md={6} sm={6} xs={12}>
                                            <input 
                                                id="name" 
                                                className="form-control col-md-7 col-xs-12" 
                                                name="title" 
                                                placeholder="Example Product"
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
                                                Main Category
                                                <span className="required">*</span>
                                            </label>
                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <select 
                                                className="form-control" 
                                                name="main-id"
                                                required
                                            >
                                                <option value> Select Main Category </option>
                                                <option value="17"> Sandals </option>
                                                <option value="25"> Jeans </option>
                                            </select>
                                        </Col>
                                    </Row> 
                                </Grid>
                                <Grid> 
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label>
                                                Sub Category
                                                <span className="required">*</span>
                                            </label>
                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <select 
                                                className="form-control" 
                                                name="main-id"
                                                required
                                            >
                                                <option value> Select Sub-Category </option>
                                                <option value="17"> T-Shirt </option>
                                                <option value="25"> BeachWear </option>
                                            </select>
                                        </Col>
                                    </Row> 
                                </Grid>
                                <Grid> 
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label>
                                                Child Category
                                                <span className="required">*</span>
                                            </label>
                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <select 
                                                className="form-control" 
                                                name="main-id"
                                                required
                                            >
                                                <option value> Select Child Category </option>
                                                <option value="17"> T-Shirt </option>
                                                <option value="25"> BeachWear </option>
                                            </select>
                                        </Col>
                                    </Row> 
                                </Grid>
                                <Grid> 
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label>
                                                Current Featured Image
                                                <span className="required">*</span>
                                            </label>
                                        </Col>    
                                        <Col md={3} sm={6} xs={12}>
                                            <img 
                                                style={{maxWidth : '250px'}} 
                                                src="https://media.gq.com/photos/597a3d6c0dfbaf62dc47e0ca/master/pass/Milo%20Ventimiglia-0717-GQ-FAMV08-01-alt.jpg" 
                                            />
                                        </Col>
                                        <Col md={3} sm={6} xs={12}>
                                            <input
                                                type="file"
                                                name="photo"
                                                id="uploadFile" 
                                            />
                                        </Col>
                                    </Row> 
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col className="item form-group" md={3} sm={3} xs={12}>
                                            <label className="control-label" htmlFor="number"></label>
                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="galdel"
                                                    value="1" 
                                                />
                                                &nbsp; Delete Old Gallery Images
                                            </label>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col className="item form-group control-label" md={3} sm={3} xs={12}>
                                            <label>
                                                Product Gallery Images
                                                <span className="required">*</span>
                                            </label>
                                        </Col>
                                        <Col md={6} sm={6} xs={12}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="gallery[]"
                                                multiple 
                                            />
                                            <br />
                                            <p className="small-label">Multiple Images Allowed </p>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label> Product Description
                                                <span className="required">*</span>
                                            </label> 
                                        </Col>     
                                        <Col md={6} sm={6} xs={12}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <FormControl 
                                                    componentClass="textarea" 
                                                    placeholder="Description" 
                                                />
                                            </FormGroup>
                                        </Col>      
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label> Product Current Price
                                                <span className="required">*</span>
                                                <p className="small-label">(In USD)</p>
                                            </label> 
                                        </Col>     
                                        <Col md={6} sm={6} xs={12}>
                                            <input 
                                                id="name" 
                                                className="form-control col-md-7 col-xs-12" 
                                                name="title" 
                                                placeholder="Example Product"
                                                required="required" 
                                                type="text"
                                            />
                                        </Col>      
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label> Product Previous Price 
                                                <span className="required">*</span>
                                                <p className="small-label">(Leave Blank if not Required)</p>
                                            </label> 
                                        </Col>     
                                        <Col md={6} sm={6} xs={12}>
                                            <input 
                                                id="name" 
                                                className="form-control col-md-7 col-xs-12" 
                                                name="title" 
                                                placeholder="Example Product"
                                                required="required" 
                                                type="text"
                                            />
                                        </Col>      
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label> Product Stock
                                                <span className="required">*</span>
                                                <p className="small-label">(Leave Empty will Show always Available)</p>
                                            </label> 
                                        </Col>     
                                        <Col md={6} sm={6} xs={12}>
                                            <input 
                                                id="name" 
                                                className="form-control col-md-7 col-xs-12" 
                                                name="title" 
                                                placeholder="Example Product"
                                                required="required" 
                                                type="text"
                                            />
                                        </Col>      
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col md={3} sm={3} xs={12} className="textDecorate">
                                            <label> Product Buy/ Return Policy
                                                <span className="required">*</span>
                                            </label> 
                                        </Col>     
                                        <Col md={6} sm={6} xs={12}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <FormControl 
                                                    componentClass="textarea" 
                                                    placeholder="Description" 
                                                />
                                            </FormGroup>
                                        </Col>      
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col className="item form-group" md={3} sm={3} xs={12}>
                                            <label htmlFor="number"></label>
                                        </Col>
                                        <Col md={9} xs={12} sm={6}>
                                            <Button bsStyle="default">
                                                <input 
                                                    type="checkBox"
                                                /> Add Featured Product
                                            </Button>
                                        </Col>
                                    </Row>
                                </Grid>
                                <hr />
                                <Grid>
                                    <Row>
                                        <Col md={6} mdOffset={3}>
                                            <Button 
                                                bsStyle="success"
                                                type="submit"
                                                className="styleBtn"
                                            >
                                                Update Product
                                            </Button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Panel.Body>
                        </Panel>
                    </div>
                </Col>
            </Row>
        </Grid>            
    );
}

export default UpdateProduct;