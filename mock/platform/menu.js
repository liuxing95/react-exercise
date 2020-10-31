import { delay } from 'roadhog-api-doc';
import loginErrorInfo from './util/loginErrorInfo';

const jsonData = {
  'result': [
    {
      'name': '首页',
      'path': '/',
      'icon': 'home',
      'children': null,
    },
    {
      'name': 'react-spring',
      'path': '/react-spring',
      'icon': 'home',
      'children': [
        {
          'name': '3d card',
          'path': '/react-spring/3d-card',
        },
        {
          'name': 'clip-card',
          'path': '/react-spring/clip-card',
        },
        {
          'name': 'click-scale',
          'path': '/react-spring/click-scale',
        },
        {
          'name': 'view-pager',
          'path': '/react-spring/view-pager',
        },
        {
          'name': 'interpolate',
          'path': '/react-spring/interpolate',
        },
        {
          'name': 'goo-trails',
          'path': '/react-spring/goo-trails',
        },
        {
          'name': 'trails',
          'path': '/react-spring/trails',
        }
      ],
    },
  ],
  'error_info': null,
  'is_success': true,
};

const Api = {
  'POST /platform/menu/list': (req, res) => {
    const { platform_token } = req.headers;

    if (platform_token && platform_token !== 'null') {
      res.send(JSON.stringify(jsonData));
    } else {
      const loginErrorInfoValue = loginErrorInfo();
      res.send(JSON.stringify(loginErrorInfoValue));
    }

  },
};

export default delay(Api, 200);
