import React from 'react';
import { 
    Grid,
    Row,
    Col
} from 'react-bootstrap';

const Settings = () => {
    return(
        <Grid>
            <Row>
                <Col>
                    <div className="container modifyOrders">
                        <h3> Settings </h3>
                    </div>               
                </Col>
            </Row>
        </Grid>
    );
}

export default Settings;