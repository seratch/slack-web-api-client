export interface MessageMetadata<T extends string = string> {
  event_type: T;
  event_payload: {
    [key: string]: null | string | number | boolean | MessageMetadataEventPayload | MessageMetadataEventPayload[];
  };
}
export interface MessageMetadataEventPayload {
  [key: string]: null | string | number | boolean;
}
