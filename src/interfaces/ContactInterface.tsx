export interface ContactDetails {
  name?: string;
  street?: string;
  email?: string;
  phone?: string;
  age?: number;
}

export interface EditableDetails {
  childRef?: any;
  text?: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
}
