type Hair = {
  color: string;
  type: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Address = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

type Bank = {
  cardExpire: string; // MM/YY
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type CompanyAddress = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

type Company = {
  department: string;
  name: string;
  title: string;
  address: CompanyAddress;
};

type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // YYYY-MM-DD
  image: string; // URL string
  bloodGroup: string;
  height: number; // in cm
  weight: number; // in kg
  eyeColor: string;
  hair: Hair;
  ip: string; // IPv4 string
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string; // Employer Identification Number
  ssn: string; // Social Security Number
  userAgent: string;
  crypto: Crypto;
  role: string;
};
