import { Content } from './types';
import { GiBalaclava } from 'react-icons/gi';
import { GiCoffeeCup } from 'react-icons/gi';
import { PiBeanie } from 'react-icons/pi';
import { GiTrapMask } from 'react-icons/gi';
import { GiPalmTree } from 'react-icons/gi';
import { FaHeadphones } from 'react-icons/fa';
import { GiBrazilFlag } from 'react-icons/gi';

const content: Content = {
  drawer: {
    socialUrls: {
      spotify:
        'https://open.spotify.com/artist/4K9zGLF4CT5HYDNQ9pT3Y8?si=9LW-qf4LTFWW0gHruxKvEA',
      instagram: 'https://www.instagram.com/arkitekt_beats',
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
    subtitle: 'Designing the Sound of the Streets',
    featuredVideos: {
      title: 'Featured videos',
      linkText: 'Check all videos on my YouTube channel',
      linkHref: 'https://www.youtube.com/@theArkitektBeats',
      ids: ['ZOSYPqWgLWk', 'ZP9SDxaFlJc', '-oAWpeiwy7g', 'XrAr5932Bys'],
    },
  },
  videosPage: {
    title: 'Videos',
    videoIds: [
      'ZOSYPqWgLWk',
      'ZP9SDxaFlJc',
      '6yZq_1G6Zcg',
      '-oAWpeiwy7g',
      '_TOK9XxNlAg',
      'XrAr5932Bys',
      'HTualFAdKEU',
      '2IP97M6DpYU',
      'hwT4W4Un0uQ',
    ],
  },
  musicPage: {
    title: 'Music',
    subtitle: 'Stream my full collection on',
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
    albums: [
      {
        id: 'red_flags_and_roses',
        position: 1,
        image: '/musicPage/albums/red_flags_and_roses.jpg',
        url: 'https://open.spotify.com/track/597uOAM5qePqJaC1CLPGr1?si=52f597a204a64fae&nd=1&dlsi=bdd9aa1e824b4907',
        genre: 'drill',
      },
    ],
    singles: [
      {
        id: 'joker',
        position: 1,
        image: '/musicPage/singles/joker.jpg',
        url: 'https://open.spotify.com/track/597uOAM5qePqJaC1CLPGr1?si=52f597a204a64fae&nd=1&dlsi=bdd9aa1e824b4907',
        genre: 'drill',
      },
      {
        id: 'bitter_dreams',
        position: 2,
        image: '/musicPage/singles/bitter_dreams.jpg',
        url: 'https://open.spotify.com/track/0Ma4JQhCRMCBp8PGq0FLF1?si=50ba05a34dcc437f',
        genre: 'jersey_club',
      },
      {
        id: 'crying',
        position: 3,
        image: '/musicPage/singles/crying.jpg',
        url: 'https://open.spotify.com/track/4MJWqdGl8IvmKUXpo2yYsh?si=b26789811db04a88',
        genre: 'jersey_club',
      },
      {
        id: 'desert_tears',
        position: 4,
        image: '/musicPage/singles/desert_tears.jpg',
        url: 'https://open.spotify.com/track/0rzXHDjuWDCfMEdOOhv437?si=5325ecb864db4f78',
        genre: 'drill',
      },
      {
        id: 'home_king',
        position: 5,
        image: '/musicPage/singles/home_king.jpg',
        url: 'https://open.spotify.com/track/01viBtyKpQ88s4Agttoq1r?si=b5b255ef4d0f4977',
        genre: 'lofi',
      },
      {
        id: 'made_in_your_eyes',
        position: 7,
        image: '/musicPage/singles/made_in_your_eyes.jpg',
        url: 'https://open.spotify.com/track/4HmFluYHicVWFNJ78QpTTr?si=3d39388d438642b7',
        genre: 'drill',
      },
      {
        id: 'na_veia',
        position: 8,
        image: '/musicPage/singles/na_veia.jpg',
        url: 'https://open.spotify.com/track/3EBXvzaAeShqNDrByiESGx?si=af2d41e0632142b8',
        genre: 'baile_funk',
      },
      {
        id: 'tijuana',
        position: 9,
        image: '/musicPage/singles/tijuana.jpg',
        url: 'https://open.spotify.com/track/3WXgHJEc0sz0ueEkwiTH73?si=33878448e6f74d9b',
        genre: 'boombap',
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
        name: 'G-FUNK',
        id: 'g_funk',
        coverImagePath: '/genres/g-funk.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/7M6hUEuham9vDRh5Ekrb8W?utm_source=generator',
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
      // {
      //   name: 'REGGAETON',
      //   id: 'reggaeton',
      //   coverImagePath: '',
      //   playlistUrl: '',
      //   icon: <FaHotjar size={50} />,
      // },
    ],
  },
};
export default content;
