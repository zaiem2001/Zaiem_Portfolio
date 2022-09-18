import moment from "moment";

export const handleDate = (date) => {
  const formatedDate = new Date(date);
  const format = "MMMM Do, YYYY";

  return moment(formatedDate).format(format);
};
