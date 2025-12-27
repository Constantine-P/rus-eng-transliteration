export function convert(str: string, options?: Options): string;

export function reverse(str: string, options?: Options): string;

declare function slugify(str: string): string;

export type Options = {
  /**
   * @property {boolean} slugify - slugifying / unslugifying.
   * */
  slugify?: boolean;
  /**
   * @property {boolean} lowerCase - format string to lowercase.
   * */
  lowerCase?: boolean
}
