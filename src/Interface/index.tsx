// Backent interface type

export interface dataprops {
  data: datapropsdetel[];
  total?: number;
  method?: string;
  products?: any;
}

export interface datapropsdetel {
  key?: number;
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: any;
}

export interface Data {
  product?: datapropsdetel;
  method?: string;
}

// Quary Hook interface

export interface gettypeprops {
  keys: string[];
  url: string;
  options?: any;
}

// Form data type interface

export interface IFormInput {
  name?: string;
  price?: number;
  image?: string;
  category?: string;
}
