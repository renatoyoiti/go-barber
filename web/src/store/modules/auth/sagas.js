import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast('Usuário não é prestador', {
        className: 'toast-error',
        progressClassName: 'toast-error-progress-bar'
      });
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('dashboard');
  } catch (error) {
    toast('Falha na autenticação, verifique seus dados', {
      className: 'toast-error',
      progressClassName: 'toast-error-progress-bar'
    });
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true
    });

    history.push('/');
  } catch (error) {
    toast('Falha no cadastro, verifique seus dados', {
      className: 'toast-error',
      progressClassName: 'toast-error-progress-bar'
    });

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
