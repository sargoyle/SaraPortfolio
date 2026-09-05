import { labProjects } from '../data/labProjects.js';

export const LAB_ROUTE_PREFIX = '/lab';
export const SITE_ORIGIN = 'https://saragillard.com';

export function getOrderedLabProjects() {
  return [...labProjects].sort((first, second) => first.order - second.order);
}

export function getLabProjectSlug(project) {
  return project.slug || project.id;
}

export function getLabProjectPath(project) {
  return `${LAB_ROUTE_PREFIX}/${getLabProjectSlug(project)}`;
}

export function getLabProjectUrl(project) {
  return `${SITE_ORIGIN}${getLabProjectPath(project)}`;
}

export function getLabProjectBySlug(slug) {
  return labProjects.find((project) => getLabProjectSlug(project) === slug) || null;
}

export function getLabProjectSlugFromPath(pathname) {
  const match = pathname.match(/^\/lab\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

export function getLabProjectDescription(project) {
  return project.cardDescription || project.subtitle || project.blurb.split('\n\n')[0];
}

export function getLabProjectTitle(project) {
  return `${project.title} | Sara's Lab | Sara's Portfolio`;
}
