export function convert(str: string, options?: Options): string;

export function reverse(str: string, options?: Options): string;

declare function slugify(str: string): string;

export type Options = {
  slugify?: boolean;
  lowerCase?: boolean
}
