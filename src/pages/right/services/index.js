import request from '../../../request/request';

export async function allAuthority() {
  return request.get(request.api.allAuthority);
}
