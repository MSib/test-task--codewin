export type Advantage = {
  id: number;
  name: string;
  value: string;
};

export type AdvantageValue = {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconError: boolean;
  isSaved: boolean;
};

export type AdvantageWithValue = Omit<Advantage, 'value'> & { value: AdvantageValue };

export type Slide = {
  id: number;
  name: string;
  value: string;
};

export type SlideValue = {
  id: number;
  sort: string;
  title: string;
  description: string;
  btnText: string;
  link: string;
  image: {
    id: number;
    catalog: string;
    name: string;
    isDeleted: boolean;
  }[];
  isSaved: boolean;
  deleted: boolean;
};

export type SlideWithValue = Omit<Slide, 'value'> & { value: SlideValue };

export type ProjectPhoto = {
  id: number;
  catalog: string;
  name: string;
  project_files: {
    id: number;
    fileId: number;
    projectId: number;
  };
};

export type Project = {
  id: number;
  title: string;
  description: any;
  slug: string;
  works: string;
  equipment: string;
  short_description: any;
  customer: string;
  date: string;
  published: boolean;
  photos?: ProjectPhoto[];
};