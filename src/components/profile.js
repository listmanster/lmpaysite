import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity-widget';
import {authName} from '../utils/auth';

const Profile = ({ showModal }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;
  const name = authName(identity);

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/profile" activeClassName="active">
            Secret Stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            See Your Base
          </Link>
        </nav>
        <span>
          Logged in as {name}. <button onClick={showModal}>log out</button>
        </span>
      </div>
    )
  );
};

export default Profile;
