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
  homePage: {
    subtitle: string;
  };
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
  aboutPage: {
    genres: { name: string; icon: JSX.Element }[];
  };
}
