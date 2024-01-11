/**
 * Check if `value` is empty
 * @param value to check
 * @returns Returns `true` if `value` is empty, else `false`.
 */
export function isEmpty(value: any | null | undefined): boolean {
  return !value || value.length === 0;
}
