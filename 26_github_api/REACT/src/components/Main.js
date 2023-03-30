import logo from "../img/nouser.png";

function Main({ avatar_url, login, name, location, followers, following, public_repos }) {
  return (
    <main>
      <div className="card">
        <section className="image">
          <div className="frame">
            <img src={avatar_url || logo} alt={login} />
          </div>
        </section>
        <section className="person">
          <h1>{name || login || "No profile with this username"}</h1>
        </section>
        <h3>{location || "Unknown"}</h3>
        <section className="statistics">
          <div>
            <h4>{followers || "--"}</h4>
            <h5>Followers</h5>
          </div>
          <div>
            <h4>{public_repos || "--"}</h4>
            <h5>Repos</h5>
          </div>
          <div>
            <h4>{following || "--"}</h4>
            <h5>Following</h5>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
