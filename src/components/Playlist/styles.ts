import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 10%;
  color: #343434;
`;

export const PlaylistTitle = styled.h1`
  font-size: 14px;
  font-weight: lighter;
  padding: 0 10px 7px 10px;
  color: #343434;
`;

export const PlaylistTitleMusic = styled.h1`
  font-size: 20px;
  padding: 0 10px 7px 10px;
  color: #000;
`;

export const PlaylistNum = styled.h1`
  font-size: 13px;
  font-weight: lighter;
  padding: 0 10px 25px 10px;
  color: #343434;
`;

export const PlaylistCard = styled.div`
  display: flex;

  flex-direction: row;
`;

export const PlayUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  li:hover {
    transition: 400ms ease all;
    background: #cc0000;
    h1 {
      color: #fff;
    }
  }

  li > img {
    width: 250px;
    padding: 20px;
  }
`;

export const PlaylistCardLink = styled.a`
  display: flex;
  align-content: space-between;
  position: relative;
  top: 0;
  transition: 300ms ease all;
  border: 1px solid #d2d2d2;
  overflow: hidden;
  text-decoration: none;
  border-radius: 10px;

  /* height: 300px; */
  margin: 0 2rem 2rem 0;
  &:hover {
    top: -10px;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.1);
  }
`;
