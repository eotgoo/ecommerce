import "./data.css";

function App() {
  const users = [
    {
      name: "Tom",
      age: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1671040605774-f06cd4a8ba38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "lili",
      age: 18,
      imageUrl:
        "https://images.unsplash.com/photo-1671040798103-809aafeae245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Ruby",
      age: 20,
      imageUrl:
        "https://images.unsplash.com/photo-1671040570322-4fd572741609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "August",
      age: 40,
      imageUrl:
        "https://images.unsplash.com/photo-1670525975578-4051a7803c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Idiot",
      age: 50,
      imageUrl:
        "https://images.unsplash.com/photo-1669846483257-a2f9d3808ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  let sum = 0;
  let average = 0;
  for (let i = 0; i < users.length; i++) {
    sum = sum + users[i].age;
  }
  average = sum / users.length;

  const UserCard = (props) => {
    return (
      <div className="user">
        <div className="userText">
          <h3>Name : {props.name}</h3>
          <p>Age : {props.age}</p>
        </div>
        <img src={props.image} alt=""></img>
      </div>
    );
  };

  return (
    <div className="App">
      <h2>My Web Apllication</h2>
      <p>Average age: {average}</p>
      <div className="users">
        {users.map((users) => (
          <UserCard name={users.name} age={users.age} image={users.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;
