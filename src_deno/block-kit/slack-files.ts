export interface IDSlackFile {
  id: string;
}

export interface URLSlackFile {
  url: string;
}

export type AnySlackFile = IDSlackFile | URLSlackFile;
