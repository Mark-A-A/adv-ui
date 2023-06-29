import moment from 'moment';

export const parseDateTime = (time) => {
  return moment(time).format('MMM Do, YYYY, h:mm:ss A');
}