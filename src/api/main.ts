import { requestInstance } from './core';

const getAccessToken = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const getLoginToken = async () => {
    const resData = await requestInstance({
      method: 'post',
      url: '/login',
      data: {
        email,
        password,
      },
    });

    if (resData.status === 200) {
      sessionStorage.setItem('accessToken', resData.data.accessToken);
    }
  };
  const getSignInToken = async () => {
    const resData = await requestInstance({
      method: 'post',
      url: '/login/google',
      data: {
        email,
        name: username,
        password,
      },
    });

    if (resData.status === 200) {
      sessionStorage.setItem('accessToken', resData.data.accessToken);
    }
  };

  if (sessionStorage.getItem('accessToken') && true) {
    getLoginToken();
  }
  getSignInToken();
};

export default getAccessToken;
