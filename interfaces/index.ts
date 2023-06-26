// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { type } from 'os';

export type User = {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
};

export type Enclosure = {
    enclosureName: string;
    currentCapacity: number;
    maxCapacity: number;
};

export type Animal = {
    id: string;
    animalName: number;
    age: number;
    gender: number;
    healthStatus: number;
};

export type species = {
    id: string;
    speciesName: string;
    numberAlive: number;
};
