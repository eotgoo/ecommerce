const menu = [
  "PORTFOLIA",
  "BLOG",
  "CV",
  "STORE",
  "FREELANCE",
  "ABOUT ME",
  "CONTACT",
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navImg">
        <img src="./images/sad zeppelins.png" alt="" className="navlogo1" />
        <img src="./images/Hire Me.png" alt="" className="navlogo2" />
      </div>
      <div>
        <ul className="navLists">
          {menu.map((x, index) => (
            <li className="navList" key={index}>
              <a href="#">{x}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
