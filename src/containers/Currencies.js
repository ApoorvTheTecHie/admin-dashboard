import React from 'react';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Currencies = () => {
    return(
        <Grid>
            <Row>
                <Col>
                    <div className="container modifyOrders">
                        <h3> Currencies </h3>
                    </div>                    
                </Col>
            </Row>
        </Grid>
    );
}

export default Currencies;