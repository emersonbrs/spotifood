import { Playlists } from '../components/Playlist';

export function searchByName(
  name: string,
  playlists: Playlists[],
): Playlists[] {
  const playlistByName: Playlists[] = [];
  playlists.map((playlist: Playlists): void => {
    if (playlist.name.toLowerCase().includes(name)) {
      playlistByName.push(playlist);
    }
  });

  return playlistByName;
}
