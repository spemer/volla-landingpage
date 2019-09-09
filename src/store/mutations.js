export const mutations = {
  UPDATE_FORM_LIST: (state, value) => {
    state.sellerForm_List.value = value;
  },

  UPDATE_FORM_CATEGORY: (state, value) => {
    state.sellerForm_CategoryValue.value = value;
  },

  UPDATE_FORM_DETAILS: (state, value) => {
    state.sellerForm_Details.value = value;
  },

  ADD_FORM_HELPTEXT: (state, [n, helpText]) => {
    state.sellerForm_List[n].helpText = helpText;
  },

  SET_TOKEN_BOOL: (state, bool) => {
    state.tokenState = bool;
  },

  SET_MARKETING_BOOL: (state, bool) => {
    state.marketing.val_1 = bool;
    state.marketing.val_2 = bool;
  },

  REMOVE_FORM_VAL: state => {
    [...state.sellerForm_List].forEach(list => {
      list.value = null;
    });
    state.sellerForm_CategoryValue.value = null;
    state.sellerForm_Details.value = null;
  }
};
