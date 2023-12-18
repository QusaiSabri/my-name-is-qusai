import { Doc } from '.contentlayer/generated/types';
import { compareDesc } from 'date-fns';

export const getSortedPosts = (allDocs: Doc[], limit?: number): Doc[] => {
  return allDocs
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, limit);
};

export const getTotalPublishedPosts = (allDocs: Doc[]): number => {
  return allDocs.filter((post) => post.published).length;
};