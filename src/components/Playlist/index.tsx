import React from 'react';
import { searchByName } from '../../utils/searchByName';

import {
  Container,
  TitleCard,
  PlaylistTitle,
  PlaylistTitleMusic,
  PlaylistNum,
  PlayUl,
  PlaylistCard,
  PlaylistCardLink,
} from './styles';

export interface Playlists {
  id: string;
  name: string;
  external_urls: { spotify: string };
  images: [{ url: string }];
  tracks: { total: number };
}

interface Props {
  data: Playlists[];
  nameSearch: string;
}

const Playlist: React.FC<Props> = (props: Props) => {
  const { data } = props;

  const playlistByName = searchByName(props.nameSearch, data);

  return (
    <Container>
      <PlayUl>
        {playlistByName.map((item: Playlists) => (
          <>
            {item ? (
              <PlaylistCard>
                <PlaylistCardLink href={item.external_urls.spotify}>
                  <li key={item.id}>
                    <img src={item.images[0].url} alt={item.name} />
                    <TitleCard>
                      <PlaylistTitle>PLAYLIST</PlaylistTitle>
                      <PlaylistTitleMusic>{item.name}</PlaylistTitleMusic>
                      <PlaylistNum>
                        {item.tracks.total}
                        {'  '}
                        Músicas
                      </PlaylistNum>
                    </TitleCard>
                  </li>
                </PlaylistCardLink>
              </PlaylistCard>
            ) : (
              <PlaylistTitle>Oi</PlaylistTitle>
            )}
          </>
        ))}
      </PlayUl>
    </Container>
  );
};

export default Playlist;
