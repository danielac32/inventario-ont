import {category} from './category.interface'



export interface addProduct{
  stock: number;
  tipo?:string;
  valor?:number;
  entregado?:string;
}

export interface subProduct{
  stock: number;
  tipo:string;
  valor:number;
  entregado:string;
  observacion:string;
  cedula:number;
}


export interface Product{
  id?:number;
  descripcion: string;
  stock: number;
  codigo: string;
  userId?: number;
  categoriaId: number;
  createdAt?:string;
  categoria?:category;
  tipo?:string;
  valor?:number;
  entregado?:string;
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
