import data from "../../Data/starbucks_data.json";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Customize.scss";
import NavigationBar from "../../Components/Navigation/NavigationBar";
import Footer from "../../Components/Footer/Footer";

function Customize() {
  const [noScroll, setNoScroll] = useState(false);

  const handleNoScroll = (isNavOpen) => {
    setNoScroll(isNavOpen);
  };
  console.log(noScroll);

  useEffect(() => {
    if (noScroll) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [noScroll]);

  const drinks = [];
  const food = [];
  const atHomeCoffee = [];
  const merchandise = [];
  for (const item of data) {
    if (item.categories === "Drinks") {
      drinks.push(item);
    } else if (item.categories === "Food") {
      food.push(item);
    } else if (item.categories === "At Home Coffee") {
      atHomeCoffee.push(item);
    } else {
      merchandise.push(item);
    }
  }

  const { item_id } = useParams();
  const itemId = parseInt(item_id);
  const [sweetener, setSweetener] = useState(0);
  const [shots, setShots] = useState(0);

  const handleSweetIncr = () => {
    setSweetener(sweetener + 1);
  };
  const handleSweetDecr = () => {
    if (sweetener > 0) setSweetener(sweetener - 1);
  };
  const handleShotsIncr = () => {
    setShots(shots + 1);
  };
  const handleShotsDecr = () => {
    if (shots > 0) setShots(shots - 1);
  };

  let item_name = "";
  let item_image = "";
  let item_sub_cat = "";
  for (const item of data) {
    if (item.item_id === itemId) {
      item_name = item.item_name;
      item_image = "." + item.item_img_path;
      item_sub_cat = item.sub_category_name;
    }
  }

  const handleClick = (event) => {
    const circle = document.querySelector(".circle");
    const tall = document.querySelector(".tall");
    const grande = document.querySelector(".grande");
    const venti = document.querySelector(".venti");
    const trenta = document.querySelector(".trenta");

    if (tall.contains(event.target)) {
      circle.style.marginLeft = `${23}px`;
    }
    if (grande.contains(event.target)) {
      circle.style.marginLeft = `${119}px`;
    }
    if (venti.contains(event.target)) {
      console.log(event.target);
      circle.style.marginLeft = `${215}px`;
    }
    if (trenta.contains(event.target)) {
      circle.style.marginLeft = `${311}px`;
    }
  };

  return (
    <>
      <nav className="customize-navigation">
        <NavigationBar handleNoScroll={handleNoScroll} />
      </nav>
      <nav className="sub-menu-navigation">
        <p>
          <Link to="/menu">Menu</Link>/{" "}
          <Link to={`/${item_sub_cat}`}>{item_sub_cat}</Link>/{" "}
          <Link>{item_name}</Link>
        </p>
      </nav>
      <div>
        <section className="wrapper">
          <main className="content-wrapper">
            <article className="main-content product-content">
              <div className="product-picture">
                <img src={item_image} alt={item_name} />
              </div>
              <div className="product-context">
                <h1>{item_name}</h1>
                <p>
                  <span>100 Calories</span>
                </p>
              </div>
            </article>
            {/* Structure for Section that Cover User Option */}
            <article className="product-customize">
              <div className="size-option">
                <h2>Size options</h2>
                <form action="get">
                  <ul className="size-types">
                    <li className="circle"></li>
                    <li>
                      <div onClick={handleClick} className="size tall">
                        <img
                          src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                          alt="Coffee Cup Size"
                        />
                        <h4>Tall</h4>
                        <small>12 fl oz</small>
                      </div>
                    </li>
                    <li>
                      <div onClick={handleClick} className="size grande">
                        <img
                          src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                          alt="Coffee Cup Size"
                        />
                        <h4>Grande</h4>
                        <small>16 fl oz</small>
                      </div>
                    </li>
                    <li>
                      <div onClick={handleClick} className="size venti">
                        <img
                          src="https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg"
                          alt="Coffee Cup Size"
                        />
                        <h4>Venti</h4>
                        <small>24 fl oz</small>
                      </div>
                    </li>
                    <li>
                      <div onClick={handleClick} className="size trenta">
                        <img
                          src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg"
                          alt="Coffee Cup Size"
                        />
                        <h4>Trenta</h4>
                        <small>30 fl oz</small>
                      </div>
                    </li>
                  </ul>
                </form>
                <a href="https://www.google.com/maps" target="_blank">
                  Available at your nearest shop
                </a>
              </div>
              <div className="additional-option">
                <h2>What's included</h2>
                {/* Form for selected Milk */}
                <div className="info-option">
                  <div className="milk-option">
                    <fieldset>
                      <legend htmlFor="">
                        <small>Milk</small>
                      </legend>
                      <select name="Milk" id="milk-option">
                        <option value="">Heavy Milk</option>
                        <option value="">Vanilla Sweet Cream</option>
                        <option value="">Nonfat Milk</option>
                        <option value="" selected="">
                          2% Milk
                        </option>
                        <option value="">Whole Milk</option>
                        <option value="">Breve (Half &amp; Half)</option>
                        <option value="">Almond</option>
                        <option value="">Coconut</option>
                        <option value="">Oatmilk</option>
                        <option value="">Soy</option>
                      </select>
                    </fieldset>
                  </div>
                  {/* Form For Add/Decrease Sweetness */}
                  <div className="flex-selection">
                    <fieldset>
                      <legend htmlFor="">
                        <small>Sweeteners</small>
                      </legend>
                      <p>Classic Syrup pumps</p>
                      <div>
                        <button
                          onClick={handleSweetDecr}
                          className="flex-sub btn-custom"
                        >
                          -
                        </button>
                        <span>{sweetener}</span>
                        <button
                          onClick={handleSweetIncr}
                          className="flex-add btn-custom"
                        >
                          +
                        </button>
                      </div>
                    </fieldset>
                  </div>
                  {/* Form For Espresson & Shot Option */}
                  <div className="milk-option">
                    <fieldset>
                      <legend htmlFor="">
                        <small>Espresso &amp; Shot Options</small>
                      </legend>
                      <select name="Espresso&Shots" id="espresso-option">
                        <option value="">Signature Espresso Roast</option>
                        <option value="">Blond Espresso Roast</option>
                        <option value="">1/3 Decaf Espresso</option>
                        <option value="">1/2 Decaf Espresso</option>
                        <option value="">2/3 Decaf Espresso</option>
                      </select>
                    </fieldset>
                  </div>
                  {/* Form For Add/Decrease Shots */}
                  <div className="flex-selection">
                    <fieldset>
                      <legend htmlFor="">
                        <small>Espresso &amp; Shot Options</small>
                      </legend>
                      <p>Shots</p>
                      <div>
                        <button
                          onClick={handleShotsDecr}
                          className="flex-sub btn-custom"
                        >
                          -
                        </button>
                        <span>{shots}</span>
                        <button
                          onClick={handleShotsIncr}
                          className="flex-add btn-custom"
                        >
                          +
                        </button>
                      </div>
                    </fieldset>
                  </div>
                  <div className="btn-section">
                    <button className="btn-customize">
                      <svg>
                        <path d="M9.818 3.166a.55.55 0 0 0-.271.572l.914 5.377-4.908 2.895a.55.55 0 0 0 .174 1.013l5.587 1.112.913 5.377a.55.55 0 0 0 1.02.183l2.806-4.867 5.59.524a.55.55 0 0 0 .449-.928l-3.856-4.049 2.301-5.094a.55.55 0 0 0-.73-.726l-5.102 2.34-4.258-3.666a.55.55 0 0 0-.629-.063zm1.069 1.893 3.367 2.9a.55.55 0 0 0 .588.082l4.088-1.875-1.848 4.094a.55.55 0 0 0 .102.607l3.097 3.252-4.476-.42a.55.55 0 0 0-.53.274l-2.218 3.847-.723-4.244a.55.55 0 0 0-.434-.447l-4.545-.904 3.99-2.354a.55.55 0 0 0 .264-.566ZM17.375.848a.25.25 0 0 0-.25.148c-.247.566-.334.828-.395.893a.25.25 0 0 0-.005.006c-.03.034-.072.062-.186.113-.114.05-.288.117-.521.23a.25.25 0 0 0-.036.428c.21.151.368.247.471.316.103.07.139.102.162.141a.25.25 0 0 0 .004.008c.047.073.087.345.23.943a.25.25 0 0 0 .473.043c.248-.565.335-.827.395-.892a.25.25 0 0 0 .004-.006c.03-.035.073-.063.187-.114.114-.05.286-.118.52-.232a.25.25 0 0 0 .037-.428c-.21-.15-.368-.245-.47-.314-.104-.07-.142-.104-.165-.143a.25.25 0 0 0-.004-.006c-.047-.073-.087-.346-.23-.945a.25.25 0 0 0-.221-.19Zm-.086.972c.03.122.052.328.117.43.08.13.19.215.309.295.023.016.062.044.088.06a8.775 8.775 0 0 0-.098.043.988.988 0 0 0-.357.239c-.082.09-.138.29-.19.406-.03-.123-.051-.33-.117-.432a.974.974 0 0 0-.31-.295l-.088-.058.1-.045a.971.971 0 0 0 .357-.238c.081-.09.137-.29.19-.405zm.805 16.998a.25.25 0 0 0-.235.143c-.373.782-.477 1.131-.615 1.26a.25.25 0 0 0-.006.004c-.134.132-.479.212-1.265.54a.25.25 0 0 0-.016.456c.763.384 1.099.488 1.225.63a.25.25 0 0 0 .005.006c.13.139.21.494.53 1.301a.25.25 0 0 0 .457.016c.373-.782.477-1.132.615-1.26a.25.25 0 0 0 .006-.006c.134-.133.477-.213 1.264-.54a.25.25 0 0 0 .017-.454c-.762-.384-1.099-.488-1.224-.63a.25.25 0 0 0-.006-.007c-.13-.138-.21-.493-.53-1.3a.25.25 0 0 0-.222-.159Zm-.03.836c.121.358.227.76.415.961.186.21.573.348.925.502-.361.129-.757.237-.957.434-.2.187-.334.58-.478.928-.121-.36-.227-.762-.416-.963-.186-.209-.572-.345-.922-.498.36-.129.755-.24.955-.436.2-.187.334-.58.478-.928zM22.5 8.75a.754.754 0 0 0-.75.75c0 .411.339.75.75.75s.75-.339.75-.75a.754.754 0 0 0-.75-.75zm0 .5c.141 0 .25.109.25.25 0 .141-.109.25-.25.25a.246.246 0 0 1-.25-.25c0-.141.109-.25.25-.25zm-19 6.5a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75Zm1.5-10c-.687 0-1.25.563-1.25 1.25S4.313 8.25 5 8.25 6.25 7.687 6.25 7 5.687 5.75 5 5.75Zm0 .5c.417 0 .75.333.75.75s-.333.75-.75.75A.746.746 0 0 1 4.25 7c0-.417.333-.75.75-.75Zm5.746 7.771-8.41 8.41a.55.55 0 0 0 .777.78l8.328-8.328-.127-.748z"></path>
                      </svg>
                      <span>customize</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            {/* Start Nutritional Page */}
            <article className="main-content nutrition-container">
              <div>200Item</div>
              <div>
                <small>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis, earum cupiditate in atque fuga qui ipsum libero
                  laboriosam voluptatum. Voluptatibus a quos beatae ab expedita
                  eaque maiores facere quis, facilis quisquam nihil, dolores
                  ipsa enim inventore error impedit, autem placeat nostrum rem?
                  Dolorum placeat sint quaerat, qui tenetur autem blanditiis
                  temporibus, in totam iste molestias suscipit maiores sit id
                  molestiae at fugiat quas obcaecati dicta similique ad soluta!
                  Odio magni error accusantium expedita vitae, vero maxime, rem
                  officiis explicabo molestias omnis, reprehenderit aperiam
                  quibusdam officia ipsum ullam illo unde quam cumque quidem?
                  Nobis veniam sapiente deserunt molestiae, dolor aspernatur
                  debitis.
                </small>
                <p>
                  <strong>160 calories, 22g Sugar, 3g fat</strong>
                </p>
              </div>
              <button className="btn-nutri">
                Full nutition &amp; ingrdients list
              </button>
            </article>
            {/* End of Nutitional Section */}
          </main>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Customize;
