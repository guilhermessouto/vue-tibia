export interface Information {
  api:       API;
  status:    Status;
  timestamp: string;
}

export interface API {
  commit:  string;
  release: string;
  version: number;
}

export interface Status {
  error:     number;
  http_code: number;
  message:   string;
}
