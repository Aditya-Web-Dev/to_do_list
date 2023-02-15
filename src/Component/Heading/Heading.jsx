import "./Heading.css"; // importing styles

const Heading = () => {
  const NewDate = new Date();
  const NewLocalDate = NewDate.toLocaleDateString();

  return (
    <div className="Heading">
      <h1 className="HeadingTime">{NewLocalDate}</h1>
    </div>
  );
};

export default Heading;
