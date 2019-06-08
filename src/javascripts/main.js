import firebase from 'firebase/app';
import '../styles/main.scss';
import 'bootstrap';

import authData from './helpers/data/authData';
import eventsSection from './components/Events/events';
import MyNavbar from './components/MyNavbar/myNavbar';
import Messages from './components/Messages/messages';
import Auth from './components/Auth/auth';
import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  Auth.authPrint();
  authData.checkLoginStatus();
  Messages.messagesStringBuilder(); // should call in authData checkLoginStatus
  eventsSection.initEventsForPageLoad();
};

init();
