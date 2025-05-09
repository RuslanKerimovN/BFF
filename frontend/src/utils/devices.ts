import { type Devices } from '../types';

const getTypeOfDevice = (): Devices => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile|android|iphone|ipad|ipod|windows phone/i.test(userAgent)) {
    return 'Device';
  }

  return 'Desktop';
};

export const typeOfDevice = getTypeOfDevice();
