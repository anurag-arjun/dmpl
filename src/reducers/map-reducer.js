const initialState = {
  map: [
    {
      name: 'Plaza',
      months: 'kommo rani',
      num: '1',
    },
    {
      name: 'kammo',
      des: 'kommo rani',
      num: '1',
    },
    {
      name: 'shubham',
      des: 'kommo rani',
      num: '1',
    },
    {
      name: 'kammo',
      des: 'kommo rani',
      num: '1',
    },
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
