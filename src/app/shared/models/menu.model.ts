export interface MenuItem {
  label: string;
  routerLink: string;
  className?: string | string[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  sections: MenuSection[];
}
