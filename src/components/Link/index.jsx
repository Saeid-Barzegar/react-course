import './style.css';

const Link = (props) => {

  const {
    label,
    address,
    newTab = true,
  } = props;
  
  return (
    <a
      className="App-link"
      href={address}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

export default Link;