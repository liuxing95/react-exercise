import { allAuthority } from '../services/index';

export default {
  namespace: 'rightManage',
  state: {
    allAuthority: {},
  },
  subscriptions: {},
  effects: {
    * getAllAuthority(_, { call, put }) {
      const response = yield call(allAuthority);
      if(response.is_success) yield put({ type: 'putAllAuthority', payload: response });
    },
  },
  reducers: {
    putAllAuthority(state,action) {
      return {
        ...state,
        allAuthority: action.payload,
      };
    },
  },
};
