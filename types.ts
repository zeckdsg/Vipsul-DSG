export interface TripForm {
  name: string;
  phone: string;
  destination: string;
  date: string;
}

export enum DestinationType {
  Brazil = 'Brasil',
  NewZealand = 'New Zealand',
  Europe = 'Europa',
  Custom = 'Sob Medida'
}