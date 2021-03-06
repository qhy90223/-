// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import CateList from './pages/CateList';
import CreateCate from './pages/CreateCate';
import TagList from './pages/TagList';
import CreateTag from './pages/CreateTag';
import UserList from './pages/UserList';
import CreateUser from './pages/CreateUser';
import EditPassword from './pages/EditPassword';
import BasicSetting from './pages/BasicSetting';
import Welcome from './pages/Welcome';
import NavigationSetting from './pages/NavigationSetting';

window.routerPrefix='/cms'
const routerConfig = [
  {
    path: '/users/pwd',
    component: EditPassword,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/setting/basic',
    component: BasicSetting,
  },
  {
    path: '/setting/navigation',
    component: NavigationSetting,
  },
  {
    path: '/users/list',
    component: UserList,
  },
  {
    path: '/users/create',
    component: CreateUser,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/tag/list',
    component: TagList,
  },
  {
    path: '/tag/create',
    component: CreateTag,
  },
  {
    path: '/cate/list',
    component: CateList,
  },
  {
    path: '/cate/create',
    component: CreateCate,
  },
  {
    path: '/blog/list',
    component: PostList,
  },
  {
    path: '/blog/create',
    component: CreatePost,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
];
routerConfig.forEach(e => {
  e.path=routerPrefix+e.path;
})
export default routerConfig;
