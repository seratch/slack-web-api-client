export function isDebugLogEnabled(logLevel: string | undefined): boolean {
  return logLevel !== undefined && logLevel !== null && logLevel.toUpperCase() === "DEBUG";
}

// deno-lint-ignore no-explicit-any
export function prettyPrint(obj: any): string {
  return JSON.stringify(obj, null, 2);
}
