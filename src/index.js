import './init';
import React from 'react';
import {
    ChangePassword,
    Products,
    Withdraws,
    EditProfile,
    Header,
    Home,
    Orders,
    Categories,
    EditCategory
} from './containers';
import {
    ViewDetails,
    ContactCustomers,
    UpdateProduct,
    Login,
    ResetPassword
} from './components';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import './style.css';
import { 
    BrowserRouter as 
    Router, 
    Route, 
    Switch 
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    return(
    	<div style={{ height : '674px', background : '#282651'}}>
      		<Component {...props}/>
      	</div>
    )
}}/>
}      



const PublicRoute = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={props => {

    return  (
    	<div style={{marginLeft : '0px', marginRight : '0px'}}>
    		<Header {...props} />
    		<Component {...props}/>
    	</div>
    )
	}}/>
}

ReactDOM.render(
   
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Login} />
                <PrivateRoute exact path="/resetPassword" component={ResetPassword} />
                <PublicRoute exact path="/orders" component={Orders} />
                <PublicRoute exact path="/viewDetails" component={ViewDetails} />
                <PublicRoute exact path="/contactCustomer" component={ContactCustomers} />
                <PublicRoute exact path="/products" component={Products} />
                <PublicRoute exact path="/updateProducts" component={UpdateProduct} />
                <PublicRoute exact path="/editProfile" component={EditProfile} />
                <PublicRoute exact path="/changePassword" component={ChangePassword} />
                <PublicRoute exact path="/withdraws" component={Withdraws} />
                <PublicRoute exact path="/dashboard" component={Home} />
                <PublicRoute exact path="/categories" component={Categories} />
                <PublicRoute exact path="/editCategory" component={EditCategory} />
            </Switch>
        </Router>,
    document.getElementById('root')
);