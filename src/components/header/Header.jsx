import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import "./header.scss";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrolly, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  const controlNavbar = () => {
   
    if (window.scrollY > 200) {
      if (window.screenY > lastScrolly && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    
    
  }, []);

  const navigationHandler = (type) => {
    if (type == "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };
  const logoNavigationHandler = () => {
    navigate("/");
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setShowSearch(false);
  };

  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" onClick={logoNavigationHandler} />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TvShow
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        {/* for mobile menu  */}
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {!mobileMenu ? (
            <SlMenu onClick={openMobileMenu} />
          ) : (
            <VscChromeClose onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                name="search"
                placeholder="Search for a Movie or Tv show....."
                onChange={inputChangeHandler}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
