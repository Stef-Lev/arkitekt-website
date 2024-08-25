import { Content } from './types';
const content: Content = {
  drawer: {
    socialUrls: {
      spotify:
        'https://open.spotify.com/artist/4K9zGLF4CT5HYDNQ9pT3Y8?si=9LW-qf4LTFWW0gHruxKvEA',
      instagram: 'https://www.instagram.com/stefanos_levendis',
      youtube: 'https://www.youtube.com/@theArkitektBeats',
      facebook: 'https://www.facebook.com/share/E5n8kQHE5aGn9nGp',
    },
  },
  navbar: {
    items: [
      { value: 'Home', href: '/' },
      { value: 'Music', href: '/music' },
      { value: 'Videos', href: '/videos' },
      { value: 'Contact', href: '/contact' },
    ],
  },
  homePage: {},
  videosPage: {
    title: 'Videos',
    videoIds: [
      '-oAWpeiwy7g',
      'HTualFAdKEU',
      'kjZxn1bg-zI',
      'LYBIE7ipVj0',
      'nNOMUKs-ptM',
      'qpsJCFcK0CA',
      'sIu1hAUibNc',
      'VH-F3YbUJ4g',
      'mhjiBJ0JrZA',
      'AcKgrA1Y3KM',
      '0pLgUGSCx7c',
      'GQ9HHQMPrxc',
      'ZOSYPqWgLWk',
      '_TOK9XxNlAg',
      'pIdj9AaBJB0',
      'U1EYTP--INE',
      'mXDugfZGu2M',
      '6ts_xFzQY0U',
      '6yZq_1G6Zcg',
      'HIH9Z7__CXs',
      'JtWfN9KcHqE',
      'XrAr5932Bys',
      'unmKskAgymg',
      '1aq8HzTQKMs',
      'E2yiTO0hh2M',
      'OXB1KmigQTo',
      'hwT4W4Un0uQ',
      'vObom3HPldk',
      'yVAmurZHhUk',
    ],
  },
  musicPage: {
    title: 'Music',
    albums: 'Albums',
    singles: 'Singles',
    spotify: {
      image: '/Spotify_logo_with_text.svg.png',
      url: 'https://open.spotify.com/artist/4K9zGLF4CT5HYDNQ9pT3Y8?si=C0o3rTbITEqNGAjHAbxqXQ&nd=1&dlsi=3c61c56a858347f5',
    },
    platforms: [
      {
        image: '/apple-logo.svg',
        url: 'https://music.apple.com/us/browse',
      },
      {
        image: '/amazon-logo.svg',
        url: 'https://music.amazon.com/',
      },
      {
        image: '/tidal-logo.svg',
        url: 'https://www.tidal.com/',
      },
      {
        image: '/deezer-logo.svg',
        url: 'https://www.deezer.com/',
      },
    ],
  },
  contactPage: {
    formFields: [
      { label: 'Name', field: 'name', placeholder: 'Full Name', type: 'text' },
      {
        label: 'Email Address',
        field: 'email',
        placeholder: 'example@domain.com',
        type: 'email',
      },
      {
        label: 'Subject',
        field: 'subject',
        placeholder: 'Subject',
        type: 'text',
      },
      {
        label: 'Message',
        field: 'message',
        placeholder: 'Type your message',
        type: 'text',
      },
    ],
  },
};
export default content;
