export interface Customer {
  uid: string; // auto generate
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
}
