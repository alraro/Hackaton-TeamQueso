export interface DatabaseResponse {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  codigo:        number;
  nombre:        string;
  embalse:       string;
  x:             number;
  y:             number;
  demarc:        Demarc;
  cauce:         string;
  google:        null | string;
  openstreetmap: null | string;
  wikidata:      null | string;
  provincia:     string;
  ccaa:          Ccaa;
  tipo:          string;
  cota_coron:    null | string;
  alt_cimien:    null | string;
  informe:       string;
}

export enum Ccaa {
  CastillaLaMancha = "Castilla - La Mancha",
  CastillaYLeón = "Castilla y León",
  ComunidadDeMadrid = "Comunidad de Madrid",
  Extremadura = "Extremadura",
}

export enum Demarc {
  Duero = "DUERO",
  Guadiana = "GUADIANA",
  Tajo = "TAJO",
}

export interface Link {
  rel:  string;
  href: string;
}