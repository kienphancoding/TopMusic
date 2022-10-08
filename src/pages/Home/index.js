import { Link } from "react-router-dom";

const Home = () => {
    const singers = [
        {path:"/AlanWalker",name:"Alan Walker",img:"https://i.pinimg.com/736x/dd/c0/51/ddc05143c5fedf0b3be6313fca05bc4c.jpg"}
    ]
  return (
    <div>
      <div>TOP MUSIC</div>
      <div>
        {singers.map((x,index)=>{
            return( 
                <Link to={x.path} key={index}>
                    <img src={x.img} alt={x.name}/>
                    <h1>{x.name}</h1>
                </Link>
            )
        })}
      </div>
    </div>
  );
};

export default Home;
