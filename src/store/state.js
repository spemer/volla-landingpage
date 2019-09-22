export const state = {
  sellerForm_List: [
    {
      value: "",
      text: "이메일 주소",
      type: "email",
      name: "email",
      helpText: "",
      placeholder: "회신받을 이메일 주소를 입력해주세요.",
      required: true
    },
    {
      value: "",
      text: "담당자 이름",
      type: "text",
      name: "name",
      helpText: "",
      placeholder: "담당자 이름을 입력해주세요.",
      required: true
    },
    {
      value: "",
      text: "전화번호",
      type: "tel",
      name: "contact",
      minlength: "8",
      maxlength: "12",
      placeholder: "숫자만 입력해주세요."
    },
    {
      value: "",
      text: "웹사이트 주소",
      type: "url",
      name: "site",
      helpText: "",
      pattern: "(https://.*)|(http://.*)",
      placeholder: "웹사이트 URL을 입력해주세요."
    }
  ],

  // sellerForm_Category: [
  //   {
  //     text: "호스트 지원 희망여부",
  //     buttonText: "직접 방송",
  //     id: "hostTrue",
  //     type: "radio",
  //     name: "apply_category",
  //     required: true,
  //     class: "first"
  //   },
  //   {
  //     buttonText: "호스트 지원 필요",
  //     id: "hostFalse",
  //     type: "radio",
  //     name: "apply_category",
  //     required: true
  //   }
  // ],

  // sellerForm_CategoryValue: {
  //   value: ""
  // },

  sellerForm_Details: {
    value: "",
    text: "기타 문의사항",
    type: "text",
    name: "details",
    placeholder: "기타 문의사항을 적어주세요."
  },

  marketing: {
    val_1: false,
    val_2: false
  },

  tokenState: false
};
