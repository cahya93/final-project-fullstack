const defaultState = {
  statusLogin: false,
  dataLogin: [],
  listUser: [
    {
      id: 1,
      email: 'user1@mail.com',
      password: '12345',
      name: 'user1',
    },
    {
      id: 2,
      email: 'user2@mail.com',
      password: '12345',
      name: 'user2',
    },
  ],
};

const auth = (state = defaultState, action) => {
  const {type, payload} = action;
  console.log('state reducer:', state);
  console.log('type reducer:', type);
  console.log('payload reducer:', payload);
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        statusLogin: true,
        dataLogin: payload.dataLogin,
      };
    default:
      return state;
  }
};
export default auth;
