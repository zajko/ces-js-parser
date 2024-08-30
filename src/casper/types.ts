import { CLType } from 'casper-js-sdk';

export interface WithRemainder<T> {
  data: T;
  remainder: Uint8Array;
}

export interface RawCLValue {
  clType: CLType;
  bytes: Uint8Array;
}

export const EVENTS_SCHEMA_NAMED_KEY = '__events_schema';

export const EVENTS_NAMED_KEY = '__events';

export const DICTIONARY_PREFIX = 'dictionary-';
