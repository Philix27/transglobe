import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillPhone,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div>
          <ul>
            <li className="list_headers">Navigators</li>
            <li>
              <a className="Linka" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="Linka" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="Linka" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="Linka" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="list_headers">Contacts</li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="mailto:philixbob@gmail.com"
              >
                <MdEmail size={15} />
                <span className="contact_list">Email</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website."
              >
                <IoLogoWhatsapp size={15} />
                <span className="contact_list">Whatsapp</span>
              </a>
            </li>
            <li>
              <a className="Linka" href="tel:+2348108850572">
                <AiFillPhone size={15} />
                <span className="contact_list">Phone </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="list_headers">Socials</li>

            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://linkedin.com/in/eligbue-felix-362372124"
              >
                <AiFillLinkedin size={15} />
                <span className="contact_list">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://facebook.com/eligbue.felix.7"
              >
                <AiFillFacebook size={15} />
                <span className="contact_list">Facebook</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://twitter.com/eligbue_felix"
              >
                <AiFillTwitterSquare />
                <span className="contact_list">Twitter</span>
              </a>
            </li>
            <li>
              <a
                className="Linka"
                target="_blank"
                href="https://github.com/Philix27"
              >
                <AiFillGithub size={15} />
                <span className="contact_list">Github</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="list_headers">Conditions</li>

            <li>
              <a className="Linka" target="_blank" href="">
                Privacy Policy
              </a>
            </li>

            <li>
              <a className="Linka" target="_blank" href="">
                Terms of use
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        {/* <p>Copyright &copy;.</p> */}
        <p>2022 Copyright &copy; All Rights Reserved</p>
      </div>
    </div>
  );
}
