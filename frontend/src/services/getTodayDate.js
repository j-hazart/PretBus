const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const today = `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(-2)}`;

export default today;
