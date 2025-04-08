import { Link } from "react-router-dom";
import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-upper">
          <div>
            <h2 className="resourses">Resources</h2>
            <ul className="home-ul">
              <li className="home-list">
                <Link
                  to="/"
                  className={({ isActive }) => {
                    ``;
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="github-list">
                <a
                  href="https://github.com/abhishek0709k"
                  className=""
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      <hr className="hr-line" />
      <div className="footer-lower">
        <span className="footer-site-data">© 2025 By Vivek singh. All right reserved.</span>
        <div className="footer-lower-links">
          <a href="https://github.com/abhishek0709k" target="_blank" className="github-link">Github account</a>
          <a href="https://www.linkedin.com/in/vivek-singh-b3221a329/" target="_blank" className="linkedin-link">Linked In account</a>
        </div>
        <p className="credit">Credit: Built by Vivek Singh</p>
      </div>
    </footer>
  );
}
