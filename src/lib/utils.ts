import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}
