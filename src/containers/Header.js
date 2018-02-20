import React from 'react';
import { 
    Navbar, 
    Nav, 
    NavItem, 
    NavDropdown, 
    MenuItem,
    Col,
    Row,
    Grid,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SideNav } from '../components';
import '../style.css';
import { 
    getUser, 
    logOut 
} from '../utils';

const logout = () => {
    logOut();
}

const Header = (props) => {
    let user = getUser();

    console.log(user, 'user')
    const loginCheck = user && user.accessToken ? true : false;
    console.log(loginCheck, 'login')



    return(
    <Grid>
        <Grid>
            <Row>
                <Col>
                    <Navbar collapseOnSelect fixedTop>
                        <Navbar.Header>
                            <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Tester One" id="basic-nav-dropdown" style={{marginRight : '34px'}}>
                                <MenuItem><Link to="/editProfile" style={{color : 'black'}}><i className="fas fa-cog"></i> Edit</Link></MenuItem>
                                <MenuItem eventKey={3.2}><Link to="/changePassword" style={{color : 'black'}}><i className="fas fa-user"></i> Change Password</Link></MenuItem>
                                <MenuItem divider />
                                {user.accessToken?<MenuItem eventKey={3.3}><Link to="/" onClick={logout} style={{color : 'black'}}><i className="fas fa-power-off"></i> Logout</Link></MenuItem>:
                                    this.props.history.push('/')
                                }
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>              
                </Col>
            </Row>    
        </Grid> 
        <Grid>       
            <Row>
                <Col>
                    <SideNav />
                </Col>    
            </Row>        
        </Grid> 
    </Grid>     
    );
}

export default Header;