// en la carpeta src vamos a crear un .js llamado index.js
//this is how we wrtie React from scractchs
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import "./index.html";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", testTransform: "uppercase" };
  const style = {};
  return (
    <div>
      <header className="header">
        <h1 style={style} className="header">
          Yayo Pizza Factory
        </h1>
      </header>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Descripción sjper larga acerca de nuestro mmenos
            grggtgtgwetgqetgehgehgehethethethwetwhthtehththtehethteh
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Seguimostrabajando en nuestro menu, por favor vuelva luego</p>
      )}

      {/*
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomate, Mozarella, spinach and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza cebolla"
        ingredient="Cebolla, queso"
        price={8}
        photoName="pizzas/funghi.jpg"
      />
      */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (!isOpen) return <p>Cerrado</p>; aquí hay otra forma de usar if para varios return

  return (
    //esto se usa para usar if formal para JSX
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Estamos felices de atenderte entre {openHour} y {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  //({closeHour})
  //podemos quitar los props para nada más dejar los objetos: quitando los props y colocando las llaves y la propiedad sin el "prop.""
  return (
    <div className="order">
      <p>Estamos abiertos hasta las {props.closeHour}</p>
      <button className="btn">Pide tu domicilio</button>
    </div>
  );
}

/*aquí deberían salir los ingredientes de forma automatica*/

//React v18
/*Siempre tratar de activar el StrictMode cuando se escibre en React
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Before v18
//React.render(<App />)

//Components are important to react, biulding blocks, cada UI tiene su propia data,m logic and appearance; buidling multiple components // How to break a desing and learn about Components Trees
