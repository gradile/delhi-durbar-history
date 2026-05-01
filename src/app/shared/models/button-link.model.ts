export interface ButtonLink {
  rla: string;
  label: string;
  routerLink: string;
  className?: string;
}

export interface MenuData {
  "home-page": ButtonLink[];
  "history-pages": ButtonLink[];
  "beau-geste-sets": ButtonLink[];
  "beau-geste-pages": ButtonLink[];
  "chapter-btn": ButtonLink[];
}
