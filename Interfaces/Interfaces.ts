export interface SlugPageProps {
  params: { slug: string };
};

export interface MetadataServiceProps {
  params: { service: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export interface MetadataProjectProps {
  params: { project: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export interface CtaTeaserProps {
  headline: string;
  paragraph: string;
  ctaButtonText: string;
  ctaUrl?: string;
  grayBackground?: boolean;
}

export interface ActiveLinkInterface {
  href: string,
  children: string,
}

export interface ServiceItemProps {
  post: {
    image: string;
    alt: string;
    headline: string;
    paragraph: string;
  }
  toggleFormPop: Function;
}

export interface HeaderInterface {
  page?: string;
  headline?: string;
  headlineSmall?: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl?: string;
  paragraph: string;
  ctaButtonText?: string;
}

export interface ServiceProcessInterface {
  headline: string,
  paragraph: string,
  image: string,
  alt: string,
}

export interface ServicesInterface {
  processes: ServiceProcessInterface[],
};

export interface SurveyPopupFormProps {
  toggle: Function;
  visible: boolean;
}

export interface WorkInterface {
  title: string,
  shortTitle?: string,
  headDescription: string,
  url: string,
  services: string,
  img: String,
  width: number,
  height: number,
  alt: string,
  projectPageInfo: {
    date: string,
    longTitle: string,
    solvingQuestion: string,
    client: string,
    clientImage: string,
    clientTestimonial: string,
    projectUrl: string,
    projectBrief: string[],
    projectApproach: string[],
    projectIamgesUrls: string[],
  }
}

export interface TextSectionWithCtaInterface {
  grayBackground?: boolean,
  thin?: boolean,
  headline: string,
  paragraphs: string[],
  ctaButtonLocation: string,
  ctaButtonText: string,
}

export interface ImageWithOverlayInterface {
  thin?: boolean,
  serviceThin?: boolean,
  reverse: boolean,
  src: string,
  page?: string,
  alt: string,
  width?: number,
  height?: number,
  fill?: boolean,
}


export interface ProcessInterface {
  headline: string,
  paragraph: string,
  image: string,
  alt: string,
}

export interface ServiceInterface {
  title: string,
  headDescription: string,
  introText: string,
  introSurveyText: string,
  img: string,
  width: number,
  height: number,
  alt: string,
  headlineTwo: string,
  processes: ProcessInterface[],
  teaser: {
    span: string,
    paragraph: string,
    cta: string,
    ctaUrl: string,
  },
}

export interface ServiceTeaseInterface {
  data: ServiceInterface[],
  page?: string,
}
