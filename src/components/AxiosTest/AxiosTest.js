import React, { useContext } from 'react';
// import axios from 'axios';
import Button from '../Button/Button';
// import { v4 as uuidv4 } from 'uuid';
// import faker from 'faker';
import { AuthContext } from '../../globalState/index';
import './AxiosTest.scss';
import {
  signUpClient,
  signUpDoctor,
  signInClient,
  signInDoctor,
  signOut,
  signOutAll,
  viewProfile,
  deleteProfile,
  viewClient,
  viewClients,
  viewDoctors,
  viewDoctor,
  updateProfileTesting,
} from './userRoutes';

import {
  viewSessions,
  createSessions,
  deleteSession,
  bookSession,
  updateSession,
  cancelSession,
} from './sessionRoutes';

const AxiosTest = () => {
  const { setUser } = useContext(AuthContext);

  const clientID = null;
  const doctorID = '5f1ce5596be99c5a19d56452';
  const sessionID = null;
  const sessions = [];
  const updateSessionParams = {};

  // useEffect(() => {}, []);

  return (
    <div>
      <div>
        <div className="response">
          <h1>Route Tests</h1>
        </div>
        <div className="actions">
          <div className="route-wrapper">
            <Button
              action="sign up client"
              onClick={() => signUpClient(setUser)}
              color="dark blue"
              icon="check"
            />
          </div>
          <Button
            action="sign up doctor"
            onClick={() => signUpDoctor(setUser)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="sign in client"
            onClick={() => signInClient(setUser)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="sign in doctor"
            onClick={() => signInDoctor(setUser)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="sign out user"
            onClick={() => signOut(setUser)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="sign out all users"
            onClick={() => signOutAll(setUser)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="view profile"
            onClick={viewProfile}
            color="dark blue"
            icon="check"
          />
          <Button
            action="update profile"
            onClick={() => updateProfileTesting(setUser, { firstName: ' ' })}
            color="dark blue"
            icon="check"
          />
          <Button
            action="delete profile"
            onClick={() => deleteProfile(setUser)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="view clients"
            onClick={viewClients}
            color="dark blue"
            icon="check"
          />
          <Button
            action="view client"
            onClick={() => viewClient(clientID)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="view doctors"
            onClick={() => viewDoctor(doctorID)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="view doctors"
            onClick={viewDoctors}
            color="dark blue"
            icon="check"
          />
          <Button
            action="view sessions"
            onClick={viewSessions}
            color="dark blue"
            icon="check"
          />
          <Button
            action="create sessions"
            onClick={() => createSessions(sessions)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="delete session"
            onClick={() => deleteSession(sessionID)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="book sessions"
            onClick={() => bookSession(sessionID)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="update sessions"
            onClick={() => updateSession(sessionID, updateSessionParams)}
            color="dark blue"
            icon="check"
          />
          <Button
            action="cancel sessions"
            onClick={() => cancelSession(sessionID)}
            color="dark blue"
            icon="check"
          />
        </div>
      </div>
    </div>
  );
};

export default AxiosTest;
