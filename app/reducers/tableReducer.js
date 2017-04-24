const initState = {
  rows: [
      {
          id: 1,
          name: "Masha",
          hash: "fac3",
          uploaded: true,
          document: "blablabla",
          link: "google.com",
          sent: false,
          recipients: "Wtf?"
      },
      {
          id: 2,
          name: "Zemfira",
          hash: "ffbb",
          uploaded: false,
          document: "nanana",
          link: "rambler.ru",
          sent: true,
          recipients: "lalal Wtf?"
      }
  ]
};

export const tableReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_ROW":
            return Object.assign({}, state, {
                rows: [...state.rows, action.payload]
            });

        default:
            return state;
    }
};
