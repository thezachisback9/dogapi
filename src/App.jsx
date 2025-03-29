import { useState, useEffect } from 'react';
import './App.css';

function App() {
const [num, setnum] = useState(Math.floor(Math.random() * 5) + 1);
const [num2, setnum2] = useState(Math.floor(Math.random() * 5) + 1);
const [dog, setdog] = useState([]);


const [bans, setBans] = useState([]);

function banss(banned) {
  if (!bans.includes(banned)) {
    setBans([...bans, banned]); 
  }
}

function unban(banned) {
  setBans(bans.filter((item) => item !== banned)); 
}

function newdog(){
  setnum(Math.floor(Math.random() * 5) + 1);
}
function check() {
  if (dog.length === 0 || num2 >= dog.length) return; 

  let attempts = 0; 
  let currentDog = dog[num2];

  
  while (
    (bans.includes(currentDog?.name) ||
      bans.includes(currentDog?.protectiveness) ||
      bans.includes(currentDog?.drooling)) &&
    attempts < dog.length
  ) {
    const newNum2 = Math.floor(Math.random() * dog.length);
    setnum2(newNum2); 
    currentDog = dog[newNum2]; 
    attempts++;
  }
}


const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const fetchd = async () => {
  let surl = `https://api.api-ninjas.com/v1/dogs?barking=` + num;
  const response = await fetch(surl, {
    method: "GET",
    headers: {
      "X-Api-Key": ACCESS_KEY,
    },
  });
  const data = await response.json();
  setdog(data);
  setnum2(Math.floor(Math.random() * data.length)); 
};

useEffect(() => {
  fetchd();
  }, [num]);

  useEffect(() => {
    check(); 
  }, [dog, num2]);

  return (
    
    <div className = "whole">



      <div className = "seen"></div>

      <div className = "cent">dogs
        <div>and more dogs</div>
        <button className="breedbutton" onClick={() =>banss(dog.length > num2 ? dog[num2]?.name : "Unknown") }>
          Breed: {dog.length > num2 ? dog[num2]?.name : "Loading..."}
        </button>

        <button className="breedbutton" onClick={() =>banss(dog.length > num2 ? dog[num2]?.protectiveness : "Unknown") }>
          Protectiveness: {dog.length > num2 ? dog[num2]?.protectiveness : "Loading..."}
        </button>

        <button className="breedbutton" onClick={() =>banss(dog.length > num2 ? dog[num2]?.drooling : "Unknown") }>
          Drooling: {dog.length > num2 ? dog[num2]?.drooling : "Loading..."}
        </button>
        {dog[num2] && (
          <img src={dog[num2]?.image_link} width="200" height="150" alt="Dog" />
        )}

        <button className = "newb" onClick = {() => newdog()}>New</button>
      </div>

      <div className = "banned"><h3>Banned list</h3>
      {bans.length > 0 ? (
        bans.map((bannedDog, index) => <button onClick = {() => unban(bannedDog)} key={index}>{bannedDog}</button>)
      ) : (
        <p>No banned dogs</p>
      )}</div>

    </div>
  )
}

export default App
