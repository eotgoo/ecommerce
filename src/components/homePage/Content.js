import Btn from "../btn";
import Card from "../card";
import { useState } from "react";
import React from "react";
// const Content = () => {
const menu = [
  { title: "All", category: "" },
  { title: "UI Design", category: "UI" },
  { title: "UX Design", category: "UX" },
  { title: "Product Design", category: "DEV" },
  { title: "Articles", category: "" },
  { title: "Tutorials", category: "" },
  { title: "News", category: "" },
];

const contentData = [
  {
    imageUrl: "./images/Rectangle 124 (2).png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    button: "READ MORE",
    category: "UI",
  },
  {
    imageUrl: "./images/joshua-unsplash.jpg",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    button: "READ MORE",
    category: "UX",
  },
  {
    imageUrl: "./images/Rectangle 124 (2).png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    button: "READ MORE",
    category: "UX",
  },
  {
    imageUrl: "./images/joshua-unsplash.jpg",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    button: "READ MORE",
    category: "UI",
  },
  {
    imageUrl: "./images/Rectangle 124 (2).png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    button: "READ MORE",
    category: "DEV",
  },
  {
    imageUrl: "./images/joshua-unsplash.jpg",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    p: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    button: "READ MORE",
    category: "DEV",
  },
];

// const Products = (props) => {
//   return (
//     <div className="product">
//       <img src={props.image} alt="" className="productImg"></img>
//       <h3>{props.date}</h3>
//       <h1>{props.title}</h1>
//       <p>{props.p}</p>
//       <a href="#">{props.btn}</a>
//     </div>
//   );
// };

// return (
//   <div className="contentSection">
//     <div>
//       <ul className="contentPr">
//         {menu.map((x, index) => (
//           <li className="contentMenu" key={index}>
//             <a href="#">{x.title}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div className="products">
//       {contentData.map((contentData, index) => (
//         <Products
//           key={index}
//           image={contentData.imageUrl}
//           date={contentData.date}
//           title={contentData.title}
//           p={contentData.p}
//           btn={contentData.button}
//         />
//       ))}
//     </div>
//   </div>
// );
const Content = () => {
  const [news, setNews] = useState(contentData);

  const handleChange = (category) => {
    console.log("cat", category);
    const filtered = contentData.filter((item) => item.category === category);
    console.log("FIL", filtered);
    setNews(filtered);
  };

  return (
    <div className="container">
      <div className="content-menu">
        {menu.map((menu, index) => {
          return <Btn key={index} menu={menu} handleChange={handleChange} />;
        })}
      </div>
      <div className="grid">
        {news.map((blog, index) => {
          return <Card card={blog} key={index} />;
        })}
      </div>
    </div>
  );
};
// };

export default Content;
