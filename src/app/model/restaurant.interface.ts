interface IObject {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}
interface IHours {
  monday: IObject;
  tuesday: IObject;
  wednesday: IObject;
  thursday: IObject;
  friday: IObject;
  saturday: IObject;
  sunday: IObject;
}
export interface IRestaurant {
  id: number;
  uid: string;
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: IHours;
}
