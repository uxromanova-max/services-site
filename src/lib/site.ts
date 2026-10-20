import { getEntry } from 'astro:content';

export async function getSite() {
  const entry = await getEntry('site', 'main');
  if (!entry) throw new Error('content/site.json is missing');
  return entry.data;
}

// A value still marked CHECK is not a usable URL; render it as text so the marker stays visible.
export const isUnresolved = (value: string) => /CHECK|TODO/.test(value);
