import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites.js";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
        <Fav ListFavorites={config["meus-favoritos"]}/>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  .photo-user {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-image: url(${({ bg }) => bg});
  width: 100%;
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img
          className="photo-user"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Fav(propriedades) {
  // console.log("Dentro do componente", propriedades.ListFavorites);
  const KeysFavorites = Object.keys(propriedades.ListFavorites);
  // console.log("Chaves", KeysFavorites);
  return (
    <StyledFavorites>
      {KeysFavorites.map((KeyFavorite) => {
        const usernames = propriedades.ListFavorites[KeyFavorite];
        // console.log(username);
        // console.log(KeyFavorite);
        return (
          <section>
            <h2>{KeyFavorite}</h2>
            <div>
              {usernames.map((username) => {
                return (
                  <a href={username.linkyoutube}>
                    <img src={username.photo} />
                    <span>{username.username}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledFavorites>
  );
}
