// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";
import type { File } from "../generated-response/FilesCompleteUploadExternalResponse.ts";

export type FilesUploadV2Response = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  uploadErrors?: string[];
  needed?: string;
  provided?: string;

  files?: File[];
};
