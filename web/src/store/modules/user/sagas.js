import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {})
    };

    const response = yield call(api.put, 'users', profile);

    toast('Perfil atualizado com sucesso', {
      className: 'toast-success',
      progressClassName: 'toast-success-progress-bar'
    });

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast('Erro ao atualizar perfil. Confira seus dados', {
      className: 'toast-error',
      progressClassName: 'toast-error-progress-bar'
    });
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
