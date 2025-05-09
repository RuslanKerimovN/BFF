import { format } from 'date-fns';

export const getFormattedDate = (formatDate: string, date = '') => {
  try {
    return format(date, formatDate);
  } catch {
    return '-';
  }
};
