// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import { SlackAPIResponse } from "../response.ts";
import { File } from "../generated-response/FilesCompleteUploadExternalResponse.ts";

export type FilesUploadV2ErrorResponse = SlackAPIResponse & {
  ok: false;
  error: string;
  uploadErrors?: string[];
  needed?: string;
  provided?: string;
};

export type FilesUploadV2Response = SlackAPIResponse & {
  ok: true;
  files: File[];
};
