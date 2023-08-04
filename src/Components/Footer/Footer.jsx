import "./Footer.scss"
import { useState } from "react"

function Footer() {
  const [isAboutClick, setIsAboutClick] = useState(false)
  const [isCareerClick, setIsCareerClick] = useState(false)
  const [isSocialClick, setIsSocialClick] = useState(false)
  const [isBusinessClick, setIsBusinessClick] = useState(false)
  const [isOrderClick, setIsOrderClick] = useState(false)


  const handleClick = (event) => {
    const about = document.querySelector(".about")
    const career = document.querySelector(".career")
    const social = document.querySelector(".social")
    const business = document.querySelector(".business")
    const order = document.querySelector(".order")

    if (about.contains(event.target))  {
      setIsAboutClick(!isAboutClick)
    }
    else if (career.contains(event.target)) {
      setIsCareerClick(!isCareerClick)
    }
    else if (social.contains(event.target))  {
      setIsSocialClick(!isSocialClick)
    }
    else if (business.contains(event.target)){
      setIsBusinessClick(!isBusinessClick)
    }
    else if (order.contains(event.target))  {
      setIsOrderClick(!isOrderClick)
    }
  }

  return (
<>
<div className="footer">
  <div className="first-part">
    <section>
      <div onClick={handleClick} className="select about">
        <h2 className="selected">About Us</h2>
        <div className={isAboutClick ? "caret active" : "caret"} />
      </div>
      <ul className={isAboutClick ? "my-list expanded" : "my-list"}>
        <li>
          <a href="#">Our Company</a>
        </li>
        <li>
          <a href="#">Our Coffee</a>
        </li>
        <li>
          <a href="#">Stories and News</a>
        </li>
        <li>
          <a href="#">Starbucks Archive</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
      </ul>
    </section>
    <section>
      <div onClick={handleClick} className="select career">
        <h2 className="selected">Careers</h2>
        <div className={isCareerClick ? "caret active" : "caret"} />
      </div>
      <ul className={isCareerClick ? "my-list expanded" : "my-list"}>
        <li>
          <a href="#">Culture and Values</a>
        </li>
        <li>
          <a href="#">Inclusion, Diversity, and Equity</a>
        </li>
        <li>
          <a href="#">College Achievement</a>
        </li>
        <li>
          <a href="#">Alumni Community</a>
        </li>
        <li>
          <a href="#">U.S.Careers</a>
        </li>
        <li>
          <a href="#">International Careers</a>
        </li>
      </ul>
    </section>
    <section>
      <div onClick={handleClick} className="select social">
        <h2 className="selected">Social Impact</h2>
        <div className={isSocialClick ? "caret active" : "caret"} />
      </div>
      <ul className={isSocialClick ? "my-list expanded" : "my-list"}>
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planet</a>
        </li>
        <li>
          <a href="#">Enviromental and Social Impact Rreporting</a>
        </li>
      </ul>
    </section>
    <section>
      <div onClick={handleClick} className="select business">
        <h2 className="selected">For Business Partners</h2>
        <div className={isBusinessClick ? "caret active" : "caret"} />
      </div>
      <ul className={isBusinessClick ? "my-list expanded" : "my-list"}>
        <li>
          <a href="#">Landlord Support Center</a>
        </li>
        <li>
          <a href="#">Suppliers</a>
        </li>
        <li>
          <a href="#">Corporate Gift Card Sales</a>
        </li>
        <li>
          <a href="#">Office adn Foodservice Coffee</a>
        </li>
      </ul>
    </section>
    <section>
      <div onClick={handleClick} className="select order">
        <h2 className="selected">Order and Pick Up</h2>
        <div className={isOrderClick ? "caret active" : "caret"} />
      </div>
      <ul className={isOrderClick ? "my-list expanded" : "my-list"}>
        <li>
          <a href="#">Order on the App</a>
        </li>
        <li>
          <a href="#">Order on the Web</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="#">Order and Pick Up Options</a>
        </li>
        <li>
          <a href="#">Explore and Find Coffee for Home</a>
        </li>
      </ul>
    </section>
  </div>
  <div className="second-part">
    <div className="second-part-logo">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}
        >
          <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}
        >
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}
        >
          <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
          <circle cx="11.994" cy="11.979" r="3.003" />
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}
        >
          <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}
        >
          <path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"></path>
        </svg>
      </a>
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}
        >
          <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"></path>
        </svg>
      </a>
    </div>
    <div className="footer-privacy">
      <ul>
        <li>
          <a href="#">Privacy Notice</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Do Not Share My Personal Information</a>
        </li>
        <li>
          <a href="#">CA Supply Chain Act</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
      </ul>
    </div>
    <div>
      <h6>@2023 Starbucks Coffee Company. All rights reserved.</h6>
    </div>
  </div>
</div>
</>
  )
}

export default Footer