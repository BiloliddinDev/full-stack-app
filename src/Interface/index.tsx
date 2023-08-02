// Backent interface type

export interface dataprops {
  data: datapropsdetel[];
  total?: number;
  method?: string;
  products?: any;
}

export interface datapropsdetel {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Data {
  product?: datapropsdetel;
  method?: string;
}
