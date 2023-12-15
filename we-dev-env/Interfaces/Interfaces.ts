export interface SlugPageProps {
  params: { slug: string };
};

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
export interface WorkTeaserInterface {
  headline?: string;
  data: string[];
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
  width: number,
  height: number,
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
  process: ProcessInterface[],
  teaser: {
    span: string,
    paragraph: string,
    cta: string,
    ctaUrl: string,
  },

}

export interface ServiceTeaseInterface {
  data: string[],
  page?: string,
}
