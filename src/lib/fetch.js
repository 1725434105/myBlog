import 'whatwg-fetch';
import assign from 'object-assign';
import { push } from 'react-router';
import { message } from 'antd';

export default (uri, options = {}) => {
  fetch(uri, assign({}, {
    credentials: 'include',
  }, options)).then(res => {
    const { status} = res;
    if (status === 200) message.error(res.msg || '发生未知错误!')
    return res;
  })
}