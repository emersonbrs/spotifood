import React, { useEffect, useState } from 'react';
import { useFilter } from '../../hooks/filter';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import Playlist from '../../components/Playlist';
import { api } from '../../services/api';

const Dashboard: React.FC = () => {
  const [playlistsItems, setPlaylistsItems] = useState([]);
  const [dadosSearch, setDadosSearch] = useState('');

  const filters = [];

  const { locale, country, timestamp, limit, offset } = useFilter();

  if (country.value) {
    filters.push(`country=${country.value}`);
  }

  if (locale.value) {
    filters.push(`locale=${locale.value}`);
  }

  if (limit.value) {
    filters.push(`limit=${limit.value}`);
  }

  if (offset.value) {
    filters.push(`offset=${offset.value}`);
  }

  if (timestamp.value) {
    const dateISO = new Date(timestamp.value).toISOString();
    const timestampISO = dateISO.substr(0, 19);
    filters.push(`timestamp=${timestampISO}`);
  }

  const params = filters.length > 0 ? `?${filters.join('&')}` : '';

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`browse/featured-playlists${params}`);
      const { data } = response;
      setPlaylistsItems(data.playlists.items);
    };

    getData();

    setInterval(() => {
      getData();
    }, 30000);
  }, [params]);
  return (
    <>
      <Header />
      <Search nameSearch={setDadosSearch} />
      <Filter />
      <Playlist nameSearch={dadosSearch} data={playlistsItems} />
    </>
  );
};
export default Dashboard;
