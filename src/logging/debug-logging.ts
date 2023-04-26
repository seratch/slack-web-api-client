export function isDebugLogEnabled(logLevel: string | undefined): boolean {
  return (
    logLevel !== undefined &&
    logLevel !== null &&
    logLevel.toUpperCase() === "DEBUG"
  );
}

export function prettyPrint(obj: any) {
  return JSON.stringify(obj, null, 2);
}
