import React, {Suspense} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
  } from 'react-router-dom';

const LazyLogin = React.lazy(() => import('../pages/Login/Login'));

const LazySignUp = React.lazy(() => import('../pages/SignUp/Signup'));

const LazyForgot = React.lazy(() => import('../pages/Forgot/Forgot'));

const lazyLanding = React.lazy(() => import('../pages/Landing/Landing'));

const LazyProduct = React.lazy(() => import('../pages/Product/Product'));

const LazyProductDetails = React.lazy(() => import('../pages/ProductDetails/ProductDetails'));

const LazyCart = React.lazy(() => import('../pages/Cart/Cart'));

const LazyCheckout = React.lazy(() => import('../pages//Checkout/Checkout'));


function AuthRoutes() {
    return(
        // <Switch>
          <Routes>
            <Route path='/' exact Component={LazyLogin}/>
            <Route path='/signup' exact Component={LazySignUp}/>
            <Route path='/forgot' exact Component={LazyForgot}/>
            <Route path='/dash' exact Component={lazyLanding}/>
            <Route path='/product' exact Component={LazyProduct}/>
            <Route path='/productdetails' exact Component={LazyProductDetails}/>
            <Route path='/cart' exact Component={LazyCart}/>
            <Route path='/checkout' exact Component={LazyCheckout}/>
          </Routes>
        // </Switch>
    );
}
const RootRouter = () => {
  return (
    <div>
        <Suspense>
        <Router>
        <AuthRoutes/>
        </Router>
        </Suspense>
    </div>
  )
}

export default RootRouter
