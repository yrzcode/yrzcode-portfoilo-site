import { Content } from "next/font/google";
import { Background } from "./Background";
import { Contents } from "./Contents";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <Background />
      <Contents />
      <Copyright />
    </footer>
  );
};
