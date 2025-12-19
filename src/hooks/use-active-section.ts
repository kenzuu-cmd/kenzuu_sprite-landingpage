"use client"

import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-50% 0px -50% 0px',
      ...options,
    });

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => el && observer.current?.observe(el));

    return () => {
      elements.forEach((el) => el && observer.current?.unobserve(el));
    };
  }, [sectionIds, options]);

  return activeSection;
}
