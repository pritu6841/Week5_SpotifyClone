export const mockSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    albumId: 1,
    genre: "Pop",
    genreId: 1,
    duration: 200, // seconds
    audioUrl: "/audio/song1.mp3",
    coverUrl: "/default-cover1.png",
    year: 2020,
    playCount: 2500000,
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷",
    albumId: 2,
    genre: "Pop",
    genreId: 1,
    duration: 233,
    audioUrl: "/audio/song2.mp3",
    coverUrl: "/default-cover2.png",
    year: 2017,
    playCount: 1800000,
  },
  {
    id: 3,
    title: "Dance Monkey",
    artist: "Tones and I",
    album: "The Kids Are Coming",
    albumId: 3,
    genre: "Pop",
    genreId: 1,
    duration: 209,
    audioUrl: "/audio/song3.mp3",
    coverUrl: "/default-cover3.png",
    year: 2019,
    playCount: 1200000,
  },
  {
    id: 4,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    albumId: 4,
    genre: "Funk",
    genreId: 2,
    duration: 236,
    audioUrl: "/audio/song4.mp3",
    coverUrl: "/default-cover4.png",
    year: 2014,
    playCount: 2100000,
  },
  {
    id: 5,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    album: "Vida",
    albumId: 5,
    genre: "Latin",
    genreId: 3,
    duration: 281,
    audioUrl: "/audio/song5.mp3",
    coverUrl: "/default-cover5.png",
    year: 2017,
    playCount: 1900000,
  },
  {
    id: 6,
    title: "Alone Again",
    artist: "The Weeknd",
    album: "After Hours",
    albumId: 1,
    genre: "Pop",
    genreId: 1,
    duration: 250,
    audioUrl: "/audio/song1.mp3",
    coverUrl: "/default-cover1.png",
    year: 2020,
    playCount: 800000,
  },
  {
    id: 7,
    title: "Too Late",
    artist: "The Weeknd",
    album: "After Hours",
    albumId: 1,
    genre: "Pop",
    genreId: 1,
    duration: 239,
    audioUrl: "/audio/song2.mp3",
    coverUrl: "/default-cover2.png",
    year: 2020,
    playCount: 600000,
  },
  {
    id: 8,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    albumId: 6,
    genre: "Rock",
    genreId: 4,
    duration: 354,
    audioUrl: "/audio/song3.mp3",
    coverUrl: "/default-cover3.png",
    year: 1975,
    playCount: 1500000,
  },
  {
    id: 9,
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    albumId: 7,
    genre: "Rock",
    genreId: 4,
    duration: 391,
    audioUrl: "/audio/song4.mp3",
    coverUrl: "/default-cover4.png",
    year: 1976,
    playCount: 1200000,
  },
  {
    id: 10,
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    albumId: 8,
    genre: "Rock",
    genreId: 4,
    duration: 183,
    audioUrl: "/audio/song5.mp3",
    coverUrl: "/default-cover5.png",
    year: 1971,
    playCount: 900000,
  },
];

export const mockAlbums = [
  {
    id: 1,
    name: "After Hours",
    artist: "The Weeknd",
    year: 2020,
    genre: "Pop",
    genreId: 1,
    coverUrl: "/default-cover1.png",
    songs: [1, 6, 7],
    totalDuration: 689,
  },
  {
    id: 2,
    name: "÷",
    artist: "Ed Sheeran",
    year: 2017,
    genre: "Pop",
    genreId: 1,
    coverUrl: "/default-cover2.png",
    songs: [2],
    totalDuration: 233,
  },
  {
    id: 3,
    name: "The Kids Are Coming",
    artist: "Tones and I",
    year: 2019,
    genre: "Pop",
    genreId: 1,
    coverUrl: "/default-cover3.png",
    songs: [3],
    totalDuration: 209,
  },
  {
    id: 4,
    name: "Uptown Special",
    artist: "Mark Ronson",
    year: 2014,
    genre: "Funk",
    genreId: 2,
    coverUrl: "/default-cover4.png",
    songs: [4],
    totalDuration: 236,
  },
  {
    id: 5,
    name: "Vida",
    artist: "Luis Fonsi",
    year: 2017,
    genre: "Latin",
    genreId: 3,
    coverUrl: "/default-cover5.png",
    songs: [5],
    totalDuration: 281,
  },
  {
    id: 6,
    name: "A Night at the Opera",
    artist: "Queen",
    year: 1975,
    genre: "Rock",
    genreId: 4,
    coverUrl: "/default-cover1.png",
    songs: [8],
    totalDuration: 354,
  },
  {
    id: 7,
    name: "Hotel California",
    artist: "Eagles",
    year: 1976,
    genre: "Rock",
    genreId: 4,
    coverUrl: "/default-cover2.png",
    songs: [9],
    totalDuration: 391,
  },
  {
    id: 8,
    name: "Imagine",
    artist: "John Lennon",
    year: 1971,
    genre: "Rock",
    genreId: 4,
    coverUrl: "/default-cover3.png",
    songs: [10],
    totalDuration: 183,
  },
];

export const mockPlaylists = [
  {
    id: 1,
    name: "Today's Top Hits",
    description: "The hottest tracks right now.",
    createdBy: 1,
    songs: [1, 2, 3, 4, 5],
    coverUrl: "/default-cover4.png",
    isPublic: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20",
  },
  {
    id: 2,
    name: "RapCaviar",
    description: "The best in hip-hop and rap.",
    createdBy: 1,
    songs: [1, 2, 3],
    coverUrl: "/default-cover5.png",
    isPublic: true,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18",
  },
  {
    id: 3,
    name: "All Out 2010s",
    description: "The biggest hits from the 2010s.",
    createdBy: 2,
    songs: [2, 3, 4, 5],
    coverUrl: "/default-cover1.png",
    isPublic: true,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-15",
  },
  {
    id: 4,
    name: "Rock Classics",
    description: "Timeless rock anthems.",
    createdBy: 2,
    songs: [8, 9, 10],
    coverUrl: "/default-cover2.png",
    isPublic: true,
    createdAt: "2024-01-12",
    updatedAt: "2024-01-19",
  },
  {
    id: 5,
    name: "Chill Hits",
    description: "Relaxing vibes for your day.",
    createdBy: 1,
    songs: [1, 6, 7],
    coverUrl: "/default-cover3.png",
    isPublic: true,
    createdAt: "2024-01-08",
    updatedAt: "2024-01-16",
  },
  {
    id: 6,
    name: "Jazz Vibes",
    description: "Smooth jazz and soul.",
    createdBy: 2,
    songs: [1, 2, 3],
    coverUrl: "/default-cover4.png",
    isPublic: true,
    createdAt: "2024-01-20",
    updatedAt: "2024-01-20",
  },
];

export const mockGenres = [
  {
    id: 1,
    name: "Pop",
    description: "Popular music with catchy melodies",
    color: "#E13300",
    songs: [1, 2, 3, 6, 7],
    albums: [1, 2, 3],
  },
  {
    id: 2,
    name: "Funk",
    description: "Rhythmic and danceable music",
    color: "#1E3264",
    songs: [4],
    albums: [4],
  },
  {
    id: 3,
    name: "Latin",
    description: "Latin American music styles",
    color: "#7358FF",
    songs: [5],
    albums: [5],
  },
  {
    id: 4,
    name: "Rock",
    description: "Classic and modern rock music",
    color: "#E8115B",
    songs: [8, 9, 10],
    albums: [6, 7, 8],
  },
  {
    id: 5,
    name: "Hip-Hop",
    description: "Urban music with beats and rhymes",
    color: "#056952",
    songs: [],
    albums: [],
  },
  {
    id: 6,
    name: "Electronic",
    description: "Electronic and dance music",
    color: "#8D67AB",
    songs: [],
    albums: [],
  },
];

export const mockUsers = [
  {
    id: 1,
    username: "musiclover",
    email: "musiclover@example.com",
    avatar: "https://via.placeholder.com/100x100/1DB954/FFFFFF?text=ML",
    playlists: [1, 2, 5],
    favoriteSongs: [1, 2, 3],
    favoriteAlbums: [1, 2],
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    username: "rockfan",
    email: "rockfan@example.com",
    avatar: "https://via.placeholder.com/100x100/E8115B/FFFFFF?text=RF",
    playlists: [3, 4, 6],
    favoriteSongs: [8, 9, 10],
    favoriteAlbums: [6, 7, 8],
    createdAt: "2024-01-05",
  },
];

// Helper functions
export const getSongsByPlaylist = (playlistId) => {
  const playlist = mockPlaylists.find((p) => p.id === playlistId);
  if (!playlist) return [];
  return mockSongs.filter((song) => playlist.songs.includes(song.id));
};

export const getSongsByAlbum = (albumId) => {
  const album = mockAlbums.find((a) => a.id === albumId);
  if (!album) return [];
  return mockSongs.filter((song) => album.songs.includes(song.id));
};

export const getSongsByGenre = (genreId) => {
  const genre = mockGenres.find((g) => g.id === genreId);
  if (!genre) return [];
  return mockSongs.filter((song) => genre.songs.includes(song.id));
};

export const searchSongs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return mockSongs.filter(
    (song) =>
      song.title.toLowerCase().includes(lowercaseQuery) ||
      song.artist.toLowerCase().includes(lowercaseQuery) ||
      song.album.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchAlbums = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return mockAlbums.filter(
    (album) =>
      album.name.toLowerCase().includes(lowercaseQuery) ||
      album.artist.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchPlaylists = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return mockPlaylists.filter(
    (playlist) =>
      playlist.name.toLowerCase().includes(lowercaseQuery) ||
      playlist.description.toLowerCase().includes(lowercaseQuery)
  );
};
