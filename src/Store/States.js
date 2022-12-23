const exampleSignUp = {
  fullName: '',
  jobTitle: '',
  phone: '',
  email: '',
};
/// ////////////////////////////////////////////////////////////////////////
function SET_FORM_STATES(INIT_STATE) {
  return {
    data: { ...INIT_STATE },
    validation: { ...INIT_STATE },
    disabled: true,
    formFeedback: { status: '', message: '' },
  };
}
/// ////////////////////////////////////////////////////////////////////////
export default {
  SIGN_UP: SET_FORM_STATES(exampleSignUp),
};
