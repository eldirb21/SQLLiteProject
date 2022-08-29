import Account from '../screen/account';
import Accountdetails from '../screen/account/details';
import Article from '../screen/article';
import AddArticle from '../screen/article/add-article';
import DetailArticle from '../screen/article/detail-article';
import EditArticle from '../screen/article/edit-article';
import Signin from '../screen/auth/signin';
import Signup from '../screen/auth/signup';
import Splash from '../screen/auth/splash';
import Home from '../screen/home';
import Portofolio from '../screen/portofolio';
import AddPortofolio from '../screen/portofolio/add-portofolio';
import TabNav from './tab-nav';

const tabNav = [
  {
    name: 'Home',
    path: Home,
  },
  {
    name: 'Article',
    path: Article,
  },
  {
    name: 'Portofolio',
    path: Portofolio,
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
  {
    name: 'AddArticle',
    path: AddArticle,
  },
  {
    name: 'EditArticle',
    path: EditArticle,
  },
  {
    name: 'DetailArticle',
    path: DetailArticle,
  },
  {
    name: 'AddPortofolio',
    path: AddPortofolio,
  },
];
export {tabNav, stackNav};
