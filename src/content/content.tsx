import { Content } from './types';
import { GiBalaclava } from 'react-icons/gi';
import { GiCoffeeCup } from 'react-icons/gi';
import { PiBeanie } from 'react-icons/pi';
import { GiTrapMask } from 'react-icons/gi';
import { GiPalmTree } from 'react-icons/gi';
import { FaHeadphones } from 'react-icons/fa';
import { GiBrazilFlag } from 'react-icons/gi';
import { FaHotjar } from 'react-icons/fa';

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
      { value: 'About', href: '/about' },
      { value: 'Music', href: '/music' },
      { value: 'Videos', href: '/videos' },
      { value: 'Contact', href: '/contact' },
    ],
  },
  homePage: {
    subtitle: 'BUILDING URBAN BEATS',
    featuredVideosIds: [
      'ZOSYPqWgLWk',
      '6yZq_1G6Zcg',
      'XrAr5932Bys',
      '1aq8HzTQKMs',
    ],
  },
  videosPage: {
    title: 'Videos',
    videoIds: [
      '-oAWpeiwy7g',
      'HTualFAdKEU',
      'kjZxn1bg-zI',
      'sIu1hAUibNc',
      'hgj4ntGpbnA',
      'l4PdqY4qFCw',
      'cEHDZAPg75E',
      '2IP97M6DpYU',
      'VH-F3YbUJ4g',
      'mhjiBJ0JrZA',
      'HvY4BOdMydI',
      'AcKgrA1Y3KM',
      '0pLgUGSCx7c',
      'GQ9HHQMPrxc',
      'qpsJCFcK0CA',
      'ZOSYPqWgLWk',
      '_TOK9XxNlAg',
      '6WeXYEAQuEo',
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
      'LYBIE7ipVj0',
      'nNOMUKs-ptM',
      'JnwT3crRHqk',
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
        name: 'apple',
        image: '/apple-logo.svg',
        url: 'https://music.apple.com/us/browse',
        height: 24,
        width: 100,
      },
      {
        name: 'amazon',
        image: '/amazon-logo.svg',
        url: 'https://music.amazon.com/',
        height: 19,
        width: 100,
      },
      {
        name: 'tidal',
        image: '/tidal-logo.svg',
        url: 'https://www.tidal.com/',
        height: 14,
        width: 100,
      },
      {
        name: 'deezer',
        image: '/deezer-logo.svg',
        url: 'https://www.deezer.com/',
        height: 68,
        width: 100,
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
        type: 'textarea',
      },
    ],
  },
  aboutPage: {
    introText:
      'Arkitekt is a beatmaker and producer hailing from the vibrant streets of Athens, Greece. His sound palette is as diverse as the city itself, blending Hip Hop, Boom Bap, UK Drill, LoFi, Afrobeats, Brazilian Funk, and Trap. He even throws in Greek folk remixes for that extra flavor. Arkitekt’s beats aren’t just sounds; they’re crafted to hit hard and leave a lasting impact. Whether you’re looking for a track to vibe to or a beat to rap over, he’s got you covered. From the streets to your speakers, Arkitekt keeps Building Urban Beats for you.',
    genres: [
      {
        name: 'UK DRILL',
        id: 'drill',
        coverImagePath: '/genres/drill.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/5ONOkUyLm80BElBvs59mJQ?utm_source=generator',
        icon: <GiBalaclava size={50} />,
      },
      {
        name: 'BOOM BAP',
        id: 'boom_bap',
        coverImagePath: '/genres/boombap.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/0BeX6oVL9sIDC7TqcAn4GY?utm_source=generator',
        icon: <PiBeanie size={50} />,
      },
      {
        name: 'TRAP',
        id: 'trap',
        coverImagePath: '/genres/trap.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/79ngt7HgmP1eMQb5atguj5?utm_source=generator',
        icon: <GiTrapMask size={50} />,
      },
      {
        name: 'LOFI',
        id: 'lofi',
        coverImagePath: '/genres/lofi.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/0KkXkYDAaG3igYExyRsbLj?utm_source=generator',
        icon: <GiCoffeeCup size={50} />,
      },
      {
        name: 'BRAZILIAN FUNK',
        id: 'brazilian_funk',
        coverImagePath: '/genres/brazilian.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/66avrRnDlHnNl1Pkh0IIe8?utm_source=generator',
        icon: <GiBrazilFlag size={50} />,
      },
      {
        name: 'JERSEY CLUB',
        id: 'jersey_club',
        coverImagePath: '/genres/jersey.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/6csCUBpWHenqmygd91hYxL?utm_source=generator',
        icon: <FaHeadphones size={50} />,
      },
      {
        name: 'AFROBEATS',
        id: 'afrobeats',
        coverImagePath: '/genres/afrobeats.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/4evQ1ji11pfSK3oFbBSYm5?utm_source=generator',
        icon: <GiPalmTree size={50} />,
      },
      {
        name: 'REGGAETON',
        id: 'reggaeton',
        coverImagePath: '',
        playlistUrl: '',
        icon: <FaHotjar size={50} />,
      },
    ],
  },
};
export default content;
