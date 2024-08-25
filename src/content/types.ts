export interface Content {
  drawer: {
    socialUrls: {
      spotify: string;
      instagram: string;
      youtube: string;
      facebook: string;
    };
  };
  navbar: {
    items: {
      value: string;
      href: string;
    }[];
  };
  homePage: {};
  videosPage: {
    title: string;
    videoIds: string[];
  };
  musicPage: {
    title: string;
    albums: string;
    singles: string;
    spotify: {
      image: string;
      url: string;
    };
    platforms: {
      image: string;
      url: string;
    }[];
  };
  contactPage: {
    formFields: {
      label: string;
      field: 'name' | 'email' | 'subject' | 'message';
      placeholder: string;
      type: string;
    }[];
  };
}
