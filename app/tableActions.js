export const addRow = () => ({
    type: "ADD_ROW",
    payload: {
        id: Math.ceil(Math.random()*1000),
        name: "hz",
        hash: "1122",
        uploaded: false,
        document: "pew pew pew",
        link: "somewhere.net",
        sent: true,
        recipients: "dududu Wtf?"
    }
});
