import {category} from './category.interface'
export interface Product{
  id?:number;
  descripcion: string;
  stock: number;
  codigo: string;
  userId?: number;
  categoriaId: number;
  createdAt?:string;
  categoria?:category;
}

export interface ProductUpdate{
  id?:number;
  descripcion?: string;
  stock?: number;
  codigo?: string;
  userId?: number;
  categoriaId?: number;
  createdAt?:string;
  categoria?:category;
}

export interface productResponseCreate{
  producto:Product;
}

export interface productResponseDelete{
  producto:Product;
}
export interface productResponseUpdate{
  producto:Product;
}

export interface productResponse{
  producto:Product[];
  meta: Meta;
}

export interface Meta {
  total:    number;
  page:     number;
  lastPage: number;
}
