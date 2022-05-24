import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DeviceTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeviceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BrandMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SolutionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DeviceType {
  readonly id: string;
  readonly deviceType?: string | null;
  readonly Devices?: (Device | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DeviceType, DeviceTypeMetaData>);
  static copyOf(source: DeviceType, mutator: (draft: MutableModel<DeviceType, DeviceTypeMetaData>) => MutableModel<DeviceType, DeviceTypeMetaData> | void): DeviceType;
}

export declare class Device {
  readonly id: string;
  readonly deviceNameVi?: string | null;
  readonly deviceNameEn?: string | null;
  readonly devicetypeID: string;
  readonly brandID: string;
  readonly roomID: string;
  readonly solutionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Device, DeviceMetaData>);
  static copyOf(source: Device, mutator: (draft: MutableModel<Device, DeviceMetaData>) => MutableModel<Device, DeviceMetaData> | void): Device;
}

export declare class Brand {
  readonly id: string;
  readonly brandNameVi?: string | null;
  readonly brandNameEn?: string | null;
  readonly Devices?: (Device | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Brand, BrandMetaData>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand, BrandMetaData>) => MutableModel<Brand, BrandMetaData> | void): Brand;
}

export declare class Booking {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Booking, BookingMetaData>);
  static copyOf(source: Booking, mutator: (draft: MutableModel<Booking, BookingMetaData>) => MutableModel<Booking, BookingMetaData> | void): Booking;
}

export declare class Room {
  readonly id: string;
  readonly roomNameVi?: string | null;
  readonly Devices?: (Device | null)[] | null;
  readonly roomNameEn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Room, RoomMetaData>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room, RoomMetaData>) => MutableModel<Room, RoomMetaData> | void): Room;
}

export declare class Solution {
  readonly id: string;
  readonly solutionNameVi?: string | null;
  readonly solutionNameEn?: string | null;
  readonly Devices?: (Device | null)[] | null;
  readonly houseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Solution, SolutionMetaData>);
  static copyOf(source: Solution, mutator: (draft: MutableModel<Solution, SolutionMetaData>) => MutableModel<Solution, SolutionMetaData> | void): Solution;
}

export declare class House {
  readonly id: string;
  readonly houseNameVi?: string | null;
  readonly houseNameEn?: string | null;
  readonly serviceID: string;
  readonly Solutions?: (Solution | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<House, HouseMetaData>);
  static copyOf(source: House, mutator: (draft: MutableModel<House, HouseMetaData>) => MutableModel<House, HouseMetaData> | void): House;
}

export declare class Service {
  readonly id: string;
  readonly serviceNameVi?: string | null;
  readonly Houses?: (House | null)[] | null;
  readonly serviceNameEn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}