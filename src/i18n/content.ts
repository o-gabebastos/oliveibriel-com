// Locale-aware content resolvers. EN is the source of truth for structure
// (paths, layout, flags); the *.pt.ts files are lean overlays that carry only
// translated text, merged by index so no path or structural field can drift.

import type { Locale } from "./config";
import { projects as projectsEn, type Project } from "../data/projects";
import { projectsPt } from "../data/projects.pt";
import { cases as casesEn, type CaseStudy } from "../data/cases";
import { casesPt } from "../data/cases.pt";
import { testimonials as testimonialsEn, type Testimonial } from "../data/testimonials";
import { testimonialsPt } from "../data/testimonials.pt";
import { careerTimeline } from "./career";

// ---- Projects (index/listing) ----

export type ProjectPtOverlay = {
  client?: string;
  type?: string;
  summary?: string;
  metricLabel?: string;
};

function mergeProject(p: Project, o: ProjectPtOverlay | undefined): Project {
  if (!o) return p;
  return {
    ...p,
    client: o.client ?? p.client,
    type: o.type ?? p.type,
    summary: o.summary ?? p.summary,
    metric: p.metric
      ? { ...p.metric, label: o.metricLabel ?? p.metric.label }
      : p.metric,
  };
}

export function getProjects(locale: Locale): Project[] {
  if (locale === "en") return projectsEn;
  return projectsEn.map((p) => mergeProject(p, projectsPt[p.slug]));
}

export function getFeatured(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

export function getPersonal(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.personal);
}

// ---- Case studies ----

export type CasePtOverlay = {
  role?: string;
  team?: string;
  duration?: string;
  contextOneLiner?: string;
  highlights?: string[]; // labels only, parallel to EN highlights
  challenge?: string;
  approach?: string;
  outcome?: string;
  reflection?: string;
  // Parallel to EN sections[]: translate heading/body and the section image's caption/alt.
  sections?: Array<{ heading?: string; body?: string; caption?: string; alt?: string }>;
  // Parallel to EN gallery[].
  gallery?: Array<{ caption?: string; alt?: string }>;
  // Parallel to EN videos[].
  videos?: Array<{ label?: string; caption?: string }>;
  // Parallel to EN links[]: labels only, href preserved.
  links?: string[];
  typewriter?: { prefix?: string; words?: string[] };
};

function mergeCase(base: CaseStudy, o: CasePtOverlay | undefined): CaseStudy {
  if (!o) return base;
  const merged: CaseStudy = {
    ...base,
    role: o.role ?? base.role,
    team: o.team ?? base.team,
    duration: o.duration ?? base.duration,
    contextOneLiner: o.contextOneLiner ?? base.contextOneLiner,
    challenge: o.challenge ?? base.challenge,
    approach: o.approach ?? base.approach,
    outcome: o.outcome ?? base.outcome,
    reflection: o.reflection ?? base.reflection,
  };

  if (base.highlights && o.highlights) {
    merged.highlights = base.highlights.map((h, i) => ({
      ...h,
      label: o.highlights![i] ?? h.label,
    }));
  }

  if (base.sections) {
    merged.sections = base.sections.map((sec, i) => {
      const so = o.sections?.[i];
      if (!so) return sec;
      return {
        ...sec,
        heading: so.heading ?? sec.heading,
        body: so.body ?? sec.body,
        image: sec.image
          ? {
              ...sec.image,
              caption: so.caption ?? sec.image.caption,
              alt: so.alt ?? sec.image.alt,
            }
          : sec.image,
      };
    });
  }

  if (base.gallery) {
    merged.gallery = base.gallery.map((g, i) => {
      const go = o.gallery?.[i];
      if (!go) return g;
      return { ...g, caption: go.caption ?? g.caption, alt: go.alt ?? g.alt };
    });
  }

  if (base.videos) {
    merged.videos = base.videos.map((v, i) => {
      const vo = o.videos?.[i];
      if (!vo) return v;
      return { ...v, label: vo.label ?? v.label, caption: vo.caption ?? v.caption };
    });
  }

  if (base.links && o.links) {
    merged.links = base.links.map((l, i) => ({ ...l, label: o.links![i] ?? l.label }));
  }

  if (base.typewriter && o.typewriter) {
    merged.typewriter = {
      prefix: o.typewriter.prefix ?? base.typewriter.prefix,
      words: o.typewriter.words ?? base.typewriter.words,
    };
  }

  return merged;
}

export function getCase(locale: Locale, slug: string): CaseStudy | undefined {
  const base = casesEn[slug];
  if (!base) return undefined;
  if (locale === "en") return base;
  return mergeCase(base, casesPt[slug]);
}

// ---- Testimonials ----

export function getTestimonials(locale: Locale): Testimonial[] {
  return locale === "pt" ? testimonialsPt : testimonialsEn;
}

// ---- Career timeline (about page) ----

export function getCareer(locale: Locale) {
  return careerTimeline[locale];
}
