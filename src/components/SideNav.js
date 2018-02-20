import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SideNav = () => {
    return(
        <div>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <ul id="drawer" style={{backgroundColor : '#282651', marginTop : '51px'}}>
                <Link to="/"><li className="styleImageElement">
                                <h3> Admin </h3>
                                <img 
                                    style={{height : '90px', width : '90px' }} 
                                    src="http://amppob.com/wp-content/uploads/2015/10/jobs.jpg" 
                                    className="img-circle" 
                                />
                                <h5> Tester One </h5>
                            </li></Link>
                <Link to="/dashboard"><li className="styleElement">Dashboard</li></Link>
                <Link to="/orders"><li className="styleElement">Orders</li></Link>
                <Link to="/categories"><li className="styleElement">Categories</li></Link>
                <Link to="/products"><li className="styleElement">Products</li></Link>
                <Link to="/withdraws"><li className="styleElement">Withdraws</li></Link>
                <Link to="/users"><li className="styleElement">Users</li></Link>
                <Link to="/currencies"><li className="styleElement">Currencies</li></Link>
                <Link to="/settings"><li className="styleElement">Settings</li></Link>
            </ul>
        </div>    
    );
}

export default SideNav;