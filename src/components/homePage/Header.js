const Header = () => {
  const headerBtn = [
    { btnName: "TWITTER", className: "headerBtn1" },
    { btnName: "LINKEDIN", className: "headerBtn2" },
    { btnName: "MEDIUM", className: "headerBtn3" },
  ];
  const handleClick = (ner) => {
    alert("HELLO" + " " + ner);
  };

  const HeaderBtns = (props) => {
    return (
      <button
        className={props.classNer}
        onClick={() => handleClick(props.name)}
      >
        {props.name}
      </button>
    );
  };
  return (
    <div className="header">
      <div className="headerTexts">
        <h1>Blog Posts</h1>
        <h2>I think so, this is it. </h2>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="headerBtns">
          {headerBtn.map((headerBtn, index) => (
            <HeaderBtns
              key={index}
              name={headerBtn.btnName}
              classNer={headerBtn.className}
            />
          ))}
        </div>
      </div>
      <div>
        <img src="./images/Group 296.png" alt="" className="headerImg" />
      </div>
    </div>
  );
};

export default Header;
