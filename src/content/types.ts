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
      name: string;
      image: string;
      url: string;
      height: number;
      width: number;
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
    introText: string;
    genres: { name: string; id: string; icon: JSX.Element }[];
    playlists: Record<string, string>;
  };
}
