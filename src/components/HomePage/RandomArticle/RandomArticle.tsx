import logo from '../../../assets/logo.svg';

function RandomArticle() {
  return (
    <div>
      <h3>Article du jour</h3>
      <h2>La colombe</h2>
      <img src={logo} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio facere
        doloremque soluta quasi dolorem ipsum perspiciatis adipisci
        exercitationem consectetur numquam velit, impedit deleniti maiores
        similique tempore, iure ipsa ut provident.
      </p>
    </div>
  );
}

export default RandomArticle;
