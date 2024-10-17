export interface DatabaseResponse {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  codigo:         number;
  embalse:        string;
  x:              number;
  y:              number;
  demarc:         string;
  cauce:          string;
  google:         null | string;
  openstreetmap:  null;
  wikidata:       null | string;
  provincia:      string;
  ccaa:           string;
  tipo:           string;
  cota_coron:     null | string;
  alt_cimien:     null | string;
  informe:        string;
  id:             number;
  ambito_nombre:  string;
  embalse_nombre: string;
  agua_total:     number;
  electrico_flag: number;
  links:          Link[];
}

export interface Link {
  rel:  Rel;
  href: string;
}

export enum Rel {
  Describedby = "describedby",
  Edit = "edit",
  First = "first",
  Next = "next",
  Self = "self",
}