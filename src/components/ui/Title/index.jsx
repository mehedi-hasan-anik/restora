import "./Title.style.scss";
const Title = ({ text }) => {
  return (
    <div>
      <h2 className="title">{text}</h2>
    </div>
  );
};

export default Title;
