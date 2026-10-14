export type Genre = {
  name: string;
  id: string;
  coverImagePath: string;
  playlistUrl: string;
  icon: JSX.Element;
};

export type Entity = {
  id: string;
  position: number;
  image: string;
  url: string;
  genre: string;
};

export type LinkType = {
  title: string;
  subtitle?: string;
  image: string;
  url: string;
};

export type SectionType = {
  title?: string;
  items: LinkType[];
};
export type Content = {
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
  footer: {
    madeWith: string;
    madeBy: string;
    copyright: string;
  };
  homePage: {
    subtitle: string;
    featuredVideos: {
      title: string;
      linkText: string;
      linkHref: string;
      ids: string[];
    };
  };
  videosPage: {
    title: string;
    videoIds: string[];
  };
  musicPage: {
    title: string;
    subtitle: string;
    albumsTitle: string;
    singlesTitle: string;
    platformsTitle: string;
    spotifyBadgeText: string;
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
    singles: Entity[];
    albums: Entity[];
  };
  contactPage: {
    title: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    formFields: {
      label: string;
      field: 'name' | 'email' | 'subject' | 'message';
      placeholder: string;
      type: string;
    }[];
  };
  aboutPage: {
    genresTitle: string;
    genresSubtitle: string;
    noPlaylistMessage: string;
    introText: string;
    genres: Genre[];
  };
  linkPage: {
    profileImage: string;
    logoImage: string;
    title: string;
    sections: {
      basicInfo?: SectionType;
      promotion?: SectionType;
      releases?: SectionType;
    };
  };
};
