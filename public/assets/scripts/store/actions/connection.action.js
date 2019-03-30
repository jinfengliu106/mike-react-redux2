export const CREATE_EMAIL_CONNECTION = '[CONNECTION] CREATE BY EMAIL';
export const CREATE_FACEBOOK_CONNECTION = '[CONNECTION] CREATE BY FACEBOOK';
export const DELETE_EMAIL_CONNECTION = '[CONNECTION] DELETE BY EMAIL';
export const DELETE_FACEBOOK_CONNECTION = '[CONNECTION] DELETE BY FACEBOOK';

export function createEmailConnection(data)
{
  return (dispatch) => {
    dispatch({
      type:     CREATE_EMAIL_CONNECTION,
      payload:  data
    })
  }
}

export function createFacebookConnection(data)
{
  return (dispatch) => {
    dispatch({
      type:     CREATE_FACEBOOK_CONNECTION,
      payload:  data
    })
  }
}

export function deleteEmailConnection(data)
{
  return (dispatch) => {
    dispatch({
      type:     DELETE_EMAIL_CONNECTION,
      payload:  data
    })
  }
}

export function deleteFacebookConnection(data)
{
  return (dispatch) => {
    dispatch({
      type:     DELETE_FACEBOOK_CONNECTION,
      payload:  data
    })
  }
}
