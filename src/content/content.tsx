import { Content } from './types';

const content: Content = {
  drawer: {
    socialUrls: {
      spotify:
        'https://open.spotify.com/artist/4K9zGLF4CT5HYDNQ9pT3Y8?si=9LW-qf4LTFWW0gHruxKvEA',
      instagram: 'https://www.instagram.com/arkitekt_beats',
      youtube: 'https://m.youtube.com/@theArkitektBeats',
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
  footer: {
    madeWith: 'Made with',
    madeBy: 'by Arkitekt',
    copyright: '© 2026 Arkitekt. All rights reserved.',
  },
  homePage: {
    subtitle: 'Building beats for the underground.',
    releaseAnnouncement: {
      enabled: true,
      label: 'Latest release',
      title: 'The Great Drift',
      description: 'Out now on all platforms.',
      image: '/musicPage/albums/great_drift.jpg',
      href: 'https://open.spotify.com/album/6z7KuJR3n5KVaTuyeaDUl3?si=Jj_5lflUS7mlXSeNHGHUug',
    },
    featuredVideos: {
      title: 'Featured videos',
      linkText: 'Check all videos on my YouTube channel',
      linkHref: 'https://m.youtube.com/@theArkitektBeats',
      ids: ['q0ymU1nkOwA', 'yXK5Qdf0Jns', 'ZP9SDxaFlJc', 'ZOSYPqWgLWk'],
    },
  },
  videosPage: {
    title: 'Videos',
    videoIds: [
      'q0ymU1nkOwA',
      'ZOSYPqWgLWk',
      'yXK5Qdf0Jns',
      'ZP9SDxaFlJc',
      '-oAWpeiwy7g',
      '_TOK9XxNlAg',
      'XrAr5932Bys',
      'HTualFAdKEU',
      '2IP97M6DpYU',
      'tO2vgSD0bMg',
      'LYBIE7ipVj0',
      'sIu1hAUibNc',
    ],
  },
  musicPage: {
    title: 'Music',
    subtitle: 'Stream my full collection on',
    albumsTitle: 'Albums and EPs',
    singlesTitle: 'Singles',
    platformsTitle: 'Also available on',
    spotifyBadgeText: 'Listen',
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
        id: 'great_drift',
        position: 1,
        image: '/musicPage/albums/great_drift.jpg',
        url: 'https://open.spotify.com/album/6z7KuJR3n5KVaTuyeaDUl3?si=Jj_5lflUS7mlXSeNHGHUug',
      },
      {
        id: 'dual_nature',
        position: 2,
        image: '/musicPage/albums/dual_nature.jpg',
        url: 'https://open.spotify.com/album/1GPMhsTMK21MdaezSfcxDu?si=kKpXDld4TcGUMX6v_3OcVA',
      },
      {
        id: 'high_stakes',
        position: 3,
        image: '/musicPage/albums/high_stakes.jpg',
        url: 'https://open.spotify.com/album/18MRAa3zMRXfibwlPVLZSR?si=--2M_Q6-TXSZeWTTRCM4eA',
      },
      {
        id: 'shadows_on_concrete',
        position: 4,
        image: '/musicPage/albums/shadows_on_concrete.jpg',
        url: 'https://open.spotify.com/album/3jQOVqAHecNi3kQpatBWCt?si=M7rteXqOSfKWEnBZY5eBcg',
      },
      {
        id: 'red_flags_and_roses',
        position: 5,
        image: '/musicPage/albums/red_flags_and_roses.jpg',
        url: 'https://open.spotify.com/album/6S1EALi04j7neizrJ6AjXU?si=kWnw4MJzSSWbH0L4M8tH-w&nd=1&dlsi=4431be80ae6e4212',
      },
    ],
    singles: [
      {
        id: 'joker',
        position: 1,
        image: '/musicPage/singles/joker.jpg',
        url: 'https://open.spotify.com/track/597uOAM5qePqJaC1CLPGr1?si=52f597a204a64fae&nd=1&dlsi=bdd9aa1e824b4907',
      },
      {
        id: 'winter',
        position: 2,
        image: '/musicPage/singles/winter.jpg',
        url: 'https://open.spotify.com/track/1t81b2OLzB2QzA515W4Q3S?si=2e34455fbfc74631',
      },
      {
        id: 'bitter_dreams',
        position: 3,
        image: '/musicPage/singles/bitter_dreams.jpg',
        url: 'https://open.spotify.com/track/0Ma4JQhCRMCBp8PGq0FLF1?si=50ba05a34dcc437f',
      },
      {
        id: 'crying',
        position: 4,
        image: '/musicPage/singles/crying.jpg',
        url: 'https://open.spotify.com/track/4MJWqdGl8IvmKUXpo2yYsh?si=b26789811db04a88',
      },
      {
        id: 'desert_tears',
        position: 5,
        image: '/musicPage/singles/desert_tears.jpg',
        url: 'https://open.spotify.com/track/0rzXHDjuWDCfMEdOOhv437?si=5325ecb864db4f78',
      },
      {
        id: 'golaco',
        position: 6,
        image: '/musicPage/singles/golaco.jpg',
        url: 'https://open.spotify.com/track/5LxO4jZCwN56C7gKsImNST?si=4b287a5639934575',
      },
      {
        id: 'made_in_your_eyes',
        position: 7,
        image: '/musicPage/singles/made_in_your_eyes.jpg',
        url: 'https://open.spotify.com/track/4HmFluYHicVWFNJ78QpTTr?si=3d39388d438642b7',
      },
      {
        id: 'na_veia',
        position: 8,
        image: '/musicPage/singles/na_veia.jpg',
        url: 'https://open.spotify.com/track/3EBXvzaAeShqNDrByiESGx?si=af2d41e0632142b8',
      },
      {
        id: 'tijuana',
        position: 9,
        image: '/musicPage/singles/tijuana.jpg',
        url: 'https://open.spotify.com/track/3WXgHJEc0sz0ueEkwiTH73?si=33878448e6f74d9b',
      },
      {
        id: 'home_king',
        position: 10,
        image: '/musicPage/singles/home_king.jpg',
        url: 'https://open.spotify.com/track/01viBtyKpQ88s4Agttoq1r?si=b5b255ef4d0f4977',
      },
    ],
  },
  contactPage: {
    title: 'Contact',
    submitLabel: 'Submit',
    sendingLabel: 'Sending...',
    requiredMessage: 'This field is required',
    invalidEmailMessage: 'Enter a valid email address',
    messageTooShortMessage: 'Message must be at least 10 characters',
    successMessage: 'Message was sent to Arkitekt!',
    errorMessage: 'Something went wrong. Message was not sent',
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
    genresTitle: 'GENRES',
    genresSubtitle: 'Select a genre and listen to the beats playlist',
    noPlaylistMessage:
      'No beats available for this genre at the moment, but there will be in the future. Stay tuned!',
    introText:
      'Straight out of Athens, Arkitekt produces heavy, dark beats rooted in Drill, Trap, and Boom Bap. His sound is driven by pounding drums, 808s, haunting choirs, and orchestral elements, paired with his own live guitar playing. While underground street rap is his main lane, he also loves experimenting—whether that means mixing genres, flipping traditional Greek melodies into modern beats, or dipping into Lo-Fi, Baile Funk, and Afrobeats. From the streets to your speakers, Arkitekt keeps building beats for the underground.',
    genres: [
      {
        name: 'UK DRILL',
        id: 'drill',
        coverImagePath: '/genres/drill.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/5ONOkUyLm80BElBvs59mJQ?utm_source=generator',
      },
      {
        name: 'BOOM BAP',
        id: 'boom_bap',
        coverImagePath: '/genres/boombap.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/0BeX6oVL9sIDC7TqcAn4GY?utm_source=generator',
      },
      {
        name: 'TRAP',
        id: 'trap',
        coverImagePath: '/genres/trap.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/79ngt7HgmP1eMQb5atguj5?utm_source=generator',
      },
      {
        name: 'LOFI',
        id: 'lofi',
        coverImagePath: '/genres/lofi.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/0KkXkYDAaG3igYExyRsbLj?utm_source=generator',
      },
      {
        name: 'BRAZILIAN FUNK',
        id: 'brazilian_funk',
        coverImagePath: '/genres/brazilian.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/66avrRnDlHnNl1Pkh0IIe8?utm_source=generator',
      },
      {
        name: 'G-FUNK',
        id: 'g_funk',
        coverImagePath: '/genres/g-funk.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/7M6hUEuham9vDRh5Ekrb8W?utm_source=generator',
      },
      {
        name: 'JERSEY CLUB',
        id: 'jersey_club',
        coverImagePath: '/genres/jersey.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/6csCUBpWHenqmygd91hYxL?utm_source=generator',
      },
      {
        name: 'AFROBEATS',
        id: 'afrobeats',
        coverImagePath: '/genres/afrobeats.png',
        playlistUrl:
          'https://open.spotify.com/embed/playlist/4evQ1ji11pfSK3oFbBSYm5?utm_source=generator',
      },
      // {
      //   name: 'REGGAETON',
      //   id: 'reggaeton',
      //   coverImagePath: '/genres/reggaeton.png',
      //   playlistUrl: '',
      // },
    ],
  },
  linkPage: {
    profileImage: '/about.jpg',
    logoImage: '/website-logo.png',
    title: 'Producer | Trap • Hip Hop • Drill',
    sections: {
      releases: {
        title: 'New Album out now!',
        items: [
          {
            title: 'The Great Drift',
            subtitle: 'Spotify',
            image: '/links/great_drift.jpg',
            url: 'https://open.spotify.com/album/6z7KuJR3n5KVaTuyeaDUl3?si=zk075u1CRLeDFMDYfIeLFA',
          },
        ],
      },
      promotion: {
        title: 'Videos',
        items: [
          {
            title: 'Imiskoubria - Meth sto volan [Remix]',
            image: '/links/meth_sto_volan.jpg',
            url: 'https://youtu.be/q0ymU1nkOwA',
          },
          {
            title: 'Marinella - Ma esy pote [Remix]',
            image: '/links/ma_esy_pote.jpg',
            url: 'https://youtu.be/yXK5Qdf0Jns',
          },
          {
            title: 'Star Wars Imperial March [Remix]',
            image: '/links/imperial_march.jpg',
            url: 'https://youtu.be/ZP9SDxaFlJc',
          },
        ],
      },

      basicInfo: {
        title: 'Check all my beats here',
        items: [
          {
            title: 'Arkitekt - Official Website',
            image: '/links/arkitekt.jpg',
            url: 'https://www.arkitektbeats.com',
          },
          {
            title: 'Spotify',
            image: '/links/spotify_music_logo.png',
            url: 'https://open.spotify.com/artist/4K9zGLF4CT5HYDNQ9pT3Y8?si=NmShVNXhQ-6GdIbGAuyfJA',
          },
          {
            title: 'Youtube',
            image: '/links/youtube_logo.jpg',
            url: 'https://m.youtube.com/@theArkitektBeats',
          },
          {
            title: 'Apple Music',
            image: '/links/apple_music.png',
            url: 'https://music.apple.com/us/artist/arkitekt/196143288',
          },
        ],
      },
    },
  },
};
export default content;
