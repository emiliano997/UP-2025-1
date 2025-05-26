import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import "./Hero.css";

export function Hero() {
  // JSX
  return (
    <header>
      <div className="hero-info">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <p>Lorem ipsum dolor</p>
        <Button />
      </div>
      <div className="hero-banner">
        <img className="banner" src="/product.jpg" alt="" />
      </div>
    </header>
  );
}
