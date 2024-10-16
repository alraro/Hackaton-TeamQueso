export interface DatabaseResponse {
    items:   Item[];
    hasMore: boolean;
    limit:   number;
    offset:  number;
    count:   number;
    links:   Link[];
  }
  
  export interface Item {
    date_rw:           number;
    year:              number;
    lat:               string;
    long_rw:           string;
    "transect_#":      number;
    start_time:        number;
    end_time:          number;
    time_of_detection: number;
    species:           Species;
    "waypoint_id#":    string;
    links:             Link[];
  }
  
  export interface Link {
    rel:  Rel;
    href: string;
  }
  
  export enum Rel {
    Describedby = "describedby",
    Edit = "edit",
    First = "first",
    Self = "self",
  }
  
  export enum Species {
    C = "c",
  }