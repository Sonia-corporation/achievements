import _ from 'lodash';

export function toBoolean(isTrue: Readonly<true | 'true'>, asFallback?: Readonly<boolean>): true;
export function toBoolean(isTrue: Readonly<false | 'false'>, asFallback?: Readonly<boolean>): false;
export function toBoolean(isTrue: Readonly<null>, asFallback: Readonly<true>): true;
export function toBoolean(isTrue: Readonly<null | undefined>, asFallback: Readonly<false>): false;
export function toBoolean(isTrue: Readonly<undefined>, asFallback?: Readonly<true>): true;
export function toBoolean(
  isTrue: Readonly<boolean | string | null | undefined>,
  asFallback?: Readonly<boolean>
): boolean;
/**
 * @param isTrue
 * @param asFallback
 */
export function toBoolean(
  isTrue: Readonly<boolean | string | null | undefined>,
  asFallback: Readonly<boolean> = true
): boolean {
  if (_.isString(isTrue)) {
    if (_.isEqual(_.toLower(isTrue), `true`)) {
      return true;
    } else if (_.isEqual(_.toLower(isTrue), `false`)) {
      return false;
    }
  }

  if (_.isBoolean(isTrue)) {
    return isTrue;
  }

  return asFallback;
}
