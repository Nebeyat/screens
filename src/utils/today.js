
const today = new Date();
const day = today.toLocaleString('en-us', { weekday: 'short' });
const month = today.toLocaleString('en-us', { month: 'short' });
const dateNo = today.getDate();

export { day, month, dateNo };
