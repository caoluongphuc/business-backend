// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DeviceType, Device, Brand, Booking, Room, Solution, House, Service } = initSchema(schema);

export {
  DeviceType,
  Device,
  Brand,
  Booking,
  Room,
  Solution,
  House,
  Service
};