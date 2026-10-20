import { getEntry, type CollectionEntry } from 'astro:content';

type Service = CollectionEntry<'services'>['data'];

export async function getShared() {
  const shared = (await getEntry('shared', 'shared'))?.data;
  if (!shared) throw new Error('content/shared.md frontmatter is missing');
  return shared;
}

export const fromPrice = (from: number) => `From $${from.toLocaleString('en-US')}`;

// Resolves `shared: <key>` FAQ entries; {project} becomes the page's rushName.
export async function resolveFaq(s: Service) {
  const shared = await getShared();
  return (s.faq ?? []).map((item) => {
    if (!('shared' in item)) return item;
    const entry = shared.faq[item.shared];
    return { q: entry.q, a: entry.a.replace('{project}', s.rushName ?? '') };
  });
}
