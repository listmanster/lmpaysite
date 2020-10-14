import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import IdentityModal from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import Layout from '../components/layout';
import Profile from '../components/profile';
import PrivateRoute from '../components/private-route';
import { useIdentityContext } from 'react-netlify-identity';


const Login = ({ openLogin }) => {
  const identity = useIdentityContext();
   
  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/panel', { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={openLogin}>Log In</button>
    </>
  );
};


const PageA = () => <h1>Page A</h1>;
const PageB = () => <h1>Page B</h1>;

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(false);
  const showModal = () => setVisibility(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <Login path="/dashboard/login" openLogin={showModal} />
        <PrivateRoute path="/dashboard/page-a" component={PageA} />
        <PrivateRoute path="/dashboard/page-b" component={PageB} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};

export default Dashboard; 