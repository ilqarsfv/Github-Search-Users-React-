function Result({ item }) {
  const { avatar_url, html_url, id, login } = item;

  return (
    <a className="result" href={html_url} id={id} target="_blank">
      <img src={avatar_url} alt={login} />
      <p>{login}</p>
    </a>
  );
}

export default Result;
