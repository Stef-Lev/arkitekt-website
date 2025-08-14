export type Genre = {
  name: string;
  id: string;
  coverImagePath: string;
  playlistUrl: string;
  icon: JSX.Element;
};

export type VideoGroup = {
  title: string;
  ids: string[];
};

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
    featuredVideosIds: string[];
  };
  videosPage: {
    title: string;
    videoGroups: VideoGroup[];
  };
  musicPage: {
    title: string;
    subtitle: string;
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
    entities: {
      id: string;
      position: number;
      image: string;
      url: string;
      genre: string;
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
    genres: Genre[];
  };
}
