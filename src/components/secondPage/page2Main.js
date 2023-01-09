const Details = () => {
  const detailData = [
    {
      title: "BLOG DETAILS H1",
      p1: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills. ",
      p2: "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      p3: "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      className: "detailsH1",
    },
    {
      title: "BLOG DETAILS H2",
      p1: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
      p2: "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      p3: "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      className: "detailsH2",
    },
    {
      title: "BLOG DETAILS H3",
      p1: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.",
      p2: "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      p3: "Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
      className: "detailsH3",
    },
  ];

  const DetailsMain = (props) => {
    return (
      <div className="details">
        <h1 className={props.classNer}>{props.title}</h1>
        <p className="detailText">{props.text1}</p>
        <p className="detailText">{props.text2}</p>
        <p className="detailText">{props.text3}</p>
      </div>
    );
  };

  return (
    <div className="detailSection">
      <div>
        <img
          src="./images/Rectangle 124 (2).png"
          alt=""
          className="detailImg"
        />
      </div>
      <div>
        {detailData.map((detailData, index) => (
          <DetailsMain
            key={index}
            classNer={detailData.className}
            title={detailData.title}
            text1={detailData.p1}
            text2={detailData.p2}
            text3={detailData.p3}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
