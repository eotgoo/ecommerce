const Content = () => {
  const menu = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Articles",
    "Tutorials",
    "News",
  ];

  const contentData = [
    {
      imageUrl: "./images/Rectangle 124 (2).png",
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      button: "READ MORE",
    },
    {
      imageUrl: "./images/joshua-unsplash.jpg",
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      button: "READ MORE",
    },
    {
      imageUrl: "./images/Rectangle 124 (2).png",
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      button: "READ MORE",
    },
    {
      imageUrl: "./images/joshua-unsplash.jpg",
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      button: "READ MORE",
    },
    {
      imageUrl: "./images/Rectangle 124 (2).png",
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      button: "READ MORE",
    },
    {
      imageUrl: "./images/joshua-unsplash.jpg",
      date: "NOV 23 2020",
      title: "This way is wrong about UI Design.",
      p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      button: "READ MORE",
    },
  ];

  const Products = (props) => {
    return (
      <div className="product">
        <img src={props.image} alt="" className="productImg"></img>
        <h3>{props.date}</h3>
        <h1>{props.title}</h1>
        <p>{props.p}</p>
        <a href="#">{props.btn}</a>
      </div>
    );
  };

  return (
    <div className="contentSection">
      <div>
        <ul className="contentPr">
          {menu.map((x, index) => (
            <li className="contentMenu" key={index}>
              <a href="#">{x}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="products">
        {contentData.map((contentData, index) => (
          <Products
            key={index}
            image={contentData.imageUrl}
            date={contentData.date}
            title={contentData.title}
            p={contentData.p}
            btn={contentData.button}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
