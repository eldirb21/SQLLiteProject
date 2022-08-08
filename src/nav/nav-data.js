import Account from '../screen/account';
import Accountdetails from '../screen/account/details';
import Signin from '../screen/auth/signin';
import Signup from '../screen/auth/signup';
import Splash from '../screen/auth/splash';
import Home from '../screen/home';
import TabNav from './tab-nav';

const tabNav = [
  {
    name: 'Home',
    path: Home,
  },
  {
    name: 'Account',
    path: Account,
  },
];
const stackNav = [
  {
    name: 'Splash',
    path: Splash,
  },
  {
    name: 'Signin',
    path: Signin,
  },
  {
    name: 'Signup',
    path: Signup,
  },
  {
    name: 'TabNav',
    path: TabNav,
  },
  {
    name: 'Accountdetails',
    path: Accountdetails,
  },
];
export {tabNav, stackNav};
