import React, { useEffect, useState } from "react";

//style
import "./App.css";

//components
import { Header, Banner, Search, Gallery, Ready, Footer } from "./components";

//images
import one from "./assets/imgs/1.jpg";
import two from "./assets/imgs/2.jpg";
import three from "./assets/imgs/3.jpg";
import happy1 from "./assets/imgs/happy1.jpg";
import happy2 from "./assets/imgs/happy2.jpg";
import mexic1 from "./assets/imgs/mexic.jpg";
import japanese1 from "./assets/imgs/japanese1.jpg";
import japanese2 from "./assets/imgs/japanese2.jpg";
import japanese3 from "./assets/imgs/japanese3.jpg";
import japanese4 from "./assets/imgs/japanese4.jpg";
import pizza1 from "./assets/imgs/pizza1.jpg";
import pizza2 from "./assets/imgs/pizza2.jpg";
import pizza3 from "./assets/imgs/pizza3.jpg";
import pizza4 from "./assets/imgs/pizza4.jpg";
import pizza5 from "./assets/imgs/pizza5.jpg";
import sandwich1 from "./assets/imgs/sandwich.jpg";
import b1 from "./assets/imgs/b1.jpg";
import b2 from "./assets/imgs/b2.jpg";
import b3 from "./assets/imgs/b3.jpg";
import b4 from "./assets/imgs/b4.jpg";
import s1 from "./assets/imgs/s1.jpg";
import s2 from "./assets/imgs/s2.jpg";
import s3 from "./assets/imgs/s3.jpg";
import s4 from "./assets/imgs/s4.jpg";
import s5 from "./assets/imgs/s5.jpg";
import s6 from "./assets/imgs/s6.jpg";
import so1 from "./assets/imgs/so1.jpg";
import so2 from "./assets/imgs/so2.jpg";

const happy = [
  {
    id: "lunch1",
    image: happy1,
    title: "Pad Thai",
    cat: "Seafood",
    desc1: "Japanese . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "20-25 Mins",
    price: "$9.99",
    delivery: "Free Pickup",
    date: Date.now() + 10500000,
    happy: true,
  },
  {
    id: "lunch2",
    image: happy2,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "40-60 Mins",
    price: "$16.67",
    delivery: "Free Pickup",
    date: Date.now() + 6500000,
    happy: true,
  },
];
const lunch = [
  {
    id: "lunch1",
    image: one,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "lunch2",
    image: two,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    happy: true,
  },
  {
    id: "lunch3",
    image: three,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
];
const mexican = [
  {
    id: "mexic",
    image: mexic1,
    title: "Gordita Taco Combo",
    cat: "Taco",
    desc1: "Mexican . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "15-22 Mins",
    price: "$9.69",
    delivery: "Free Pickup",
    date: Date.now() + 8200000,
  },
];
const japanese = [
  {
    id: "japanese1",
    image: japanese1,
    title: "Albacore Sashimi",
    cat: "Fastfood",
    desc1: "Japanese . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    happy: true,
  },
  {
    id: "japanese2",
    image: japanese2,
    title: "Salmon Red Caviar Sushi",
    cat: "Fastfood",
    desc1: "Japanese . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "japanese3",
    image: japanese3,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "Japanese . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "japanese4",
    image: japanese4,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "Japanese . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    happy: true,
  },
];
const pizza = [
  {
    id: "pizza1",
    image: pizza1,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "pizza2",
    image: pizza2,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    date: Date.now() + 6900000,
  },
  {
    id: "pizza3",
    image: pizza3,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "pizza4",
    image: pizza4,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    date: Date.now() + 3500000,
  },
  {
    id: "pizza5",
    image: pizza5,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
];
const sandwich = [
  {
    id: "sandwich1",
    image: sandwich1,
    title: "Quarter Dark and Leg",
    cat: "Sandwich",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
];
const breakfast = [
  {
    id: "breakfast1",
    image: b1,
    title: "Quarter Dark and Leg",
    cat: "Pancake",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "breakfast2",
    image: b2,
    title: "Quarter Dark and Leg",
    cat: "Omelete",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "breakfast3",
    image: b3,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "breakfast4",
    image: b4,
    title: "Quarter Dark and Leg",
    cat: "Fastfood",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
];
const salad = [
  {
    id: "salad1",
    image: s1,
    title: "Quarter Dark and Leg",
    cat: "Salad",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    happy: true,
    date: Date.now() + 6300000,
  },
  {
    id: "salad2",
    image: s2,
    title: "Quarter Dark and Leg",
    cat: "Salad",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "salad3",
    image: s3,
    title: "Quarter Dark and Leg",
    cat: "Salad",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
    date: Date.now() + 2900000,
  },
  {
    id: "salad4",
    image: s4,
    title: "Quarter Dark and Leg",
    cat: "Salad",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "salad5",
    image: s5,
    title: "Quarter Dark and Leg",
    cat: "Salad",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "salad6",
    image: s6,
    title: "Quarter Dark and Leg",
    cat: "Salad",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
];
const soup = [
  {
    id: "so1",
    image: so1,
    title: "Quarter Dark and Leg",
    cat: "Soup",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
  {
    id: "so2",
    image: so2,
    title: "Quarter Dark and Leg",
    cat: "Soup",
    desc1: "American . ",
    desc2: "Main Course . ",
    desc3: "Lunch & Dinner . ",
    time: "10-15 Mins",
    price: "$7.69",
    delivery: "Free Pickup",
  },
];

function App() {
  const [headerbox, setHeaderbox] = useState("header-box");
  const [menulogin, setMenulogin] = useState("menu-login");
  const [menusignup, setMenusignup] = useState("menu-signup");
  const [menuicon, setmenuicon] = useState("menu-icon");

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
  });

  const infiniteScroll = () => {
    if (window.pageYOffset > 40) {
      setHeaderbox("header-box header-box-change");
      setMenulogin("menu-login menu-login-change");
      setMenusignup("menu-signup menu-signup-change");
      setmenuicon("menu-icon menu-icon-change");
    } else {
      setHeaderbox("header-box");
      setMenulogin("menu-login");
      setMenusignup("menu-signup");
      setmenuicon("menu-icon");
    }
  };

  return (
    <div className="App">
      <Header
        headerbox={headerbox}
        menulogin={menulogin}
        menusignup={menusignup}
        menuicon={menuicon}
      />
      <Banner />
      <div className="body">
        <Search />
        <div className="container">
          <Gallery title="Happy Hour" data={happy} />
          <Gallery title="Lunch & Dinner " data={lunch} />
          <Gallery title="Mexican" data={mexican} />
          <Gallery title="Japanese" data={japanese} />
          <Gallery title="Pizza" data={pizza} />
          <Gallery title="Sandwich" data={sandwich} />
          <Gallery title="Breakfast" data={breakfast} />
          <Gallery title="Salad" data={salad} />
          <Gallery title="Soup" data={soup} />
        </div>
        <Ready />
      </div>
      <Footer />
    </div>
  );
}

export default App;
