export default {
  UPDATE_FORM_LIST: (state, value) => {
    state.sellerForm_List.value = value
  },

  UPDATE_FORM_CATEGORY: (state, value) => {
    state.sellerForm_CategoryValue.value = value
  },

  UPDATE_FORM_DETAILS: (state, value) => {
    state.sellerForm_Details.value = value
  },

  SET_TOKEN_BOOL: (state, bool) => {
    state.tokenState = bool
  },

  REMOVE_FORM_VAL: (state) => {
    [...state.sellerForm_List].forEach(list => {
      list.value = null
    })
    state.sellerForm_CategoryValue.value = null,
      state.sellerForm_Details.value = null
  },
}
