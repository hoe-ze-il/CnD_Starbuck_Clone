
function GiftCards () {

    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="//db.onlinewebfonts.com/c/d7e8a95865396cddca89b00080d2cba6?family=SoDo+Sans+SemiBold"
    rel="stylesheet"
    type="text/css"
  />
  <link rel="stylesheet" href="./css/gift_cards.css" />
  <link rel="shortcut icon" href="" type="image/" />
  <title>Starbuck Gift Cards: Starbuck Coffee Company</title>
  {/* HEADER */}
  <header>
    <nav>Navigation</nav>
  </header>
  {/* MAIN */}
  <main className="main-content">
    {/* FEATURED CARDS */}
    <section className="cards ft-cards">
      <div className="cards-text">
        <p className="cards-text-type">Feartured</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="ft-btn-left cards-btn-style hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items ft-slider">
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-1.jpg"
            alt="Feature cards 1"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-2.jpg"
            alt="Feature cards 2"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-3.jpg"
            alt="Feature cards 3"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-4.jpg"
            alt="Feature cards 4"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-5.jpg"
            alt="Feature cards 5"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-6.jpg"
            alt="Feature cards 6"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-7.jpg"
            alt="Feature cards 7"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-8.jpg"
            alt="Feature cards 8"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-9.jpg"
            alt="Feature cards 9"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-10.jpg"
            alt="Feature cards 10"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-11.jpg"
            alt="Feature cards 11"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-12.jpg"
            alt="Feature cards 12"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-13.jpg"
            alt="Feature cards 13"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-14.jpg"
            alt="Feature cards 14"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-15.jpg"
            alt="Feature cards 15"
            className="cards-img"
          />
        </div>
        <div className="item ft-slide">
          <img
            src="images/gift-cards-img/feature-img-16.jpg"
            alt="Feature cards 16"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style ft-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* GET GIFT CARDS SECTION */}
    <section className="gift-cards">
      <div className="gift-cards-left">
        <p className="gift-cards-left-p1">Got a gift card?</p>
        <div className="flex-part-1">
          <p className="gift-cards-left-p2">Earns 2★ per $1</p>
          <div className="flex-part-2">
            <button className="gift-cards-left-btn-left">Add or Reload</button>
            <button className="gift-cards-left-btn-right">Check balance</button>
          </div>
        </div>
      </div>
      <div className="gift-cards-right">
        <p className="gift-cards-right-p1">Cards Terms &amp; Conditions</p>
        <svg
          aria-hidden="true"
          className="gift-cards-right-icon"
          focusable="false"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          style={{
            width: 30,
            height: 30,
            overflow: "visible",
            fill: "currentcolor"
          }}
        >
          <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z" />
        </svg>
      </div>
    </section>
    {/* SUMMER CARDS */}
    <section className="cards sm-cards">
      <div className="cards-text">
        <p className="cards-text-type">Summer</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style sm-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items sm-slider">
        <div className="item sm-slide">
          <img
            src="images/gift-cards-img/summer-img-1.jpg"
            alt="Summer cards 1"
            className="cards-img"
          />
        </div>
        <div className="item sm-slide">
          <img
            src="images/gift-cards-img/summer-img-2.jpg"
            alt="Summer cards 2"
            className="cards-img"
          />
        </div>
        <div className="item sm-slide">
          <img
            src="images/gift-cards-img/summer-img-3.jpg"
            alt="Summer cards 3"
            className="cards-img"
          />
        </div>
        <div className="item sm-slide">
          <img
            src="images/gift-cards-img/summer-img-4.jpg"
            alt="Summer cards 4"
            className="cards-img"
          />
        </div>
        <div className="item sm-slide">
          <img
            src="images/gift-cards-img/summer-img-5.jpg"
            alt="Summer cards 5"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style sm-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* BIRTHDAY CARDS */}
    <section className="cards bd-cards">
      <div className="cards-text">
        <p className="cards-text-type">Birthday</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style bd-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items bd-slider">
        <div className="item bd-slide">
          <img
            src="images/gift-cards-img/birthday-img-1.jpg"
            alt="Birthday cards 1"
            className="cards-img"
          />
        </div>
        <div className="item bd-slide">
          <img
            src="images/gift-cards-img/birthday-img-2.jpg"
            alt="Birthday cards 2"
            className="cards-img"
          />
        </div>
        <div className="item bd-slide">
          <img
            src="images/gift-cards-img/birthday-img-3.jpg"
            alt="Birthday cards 3"
            className="cards-img"
          />
        </div>
        <div className="item bd-slide">
          <img
            src="images/gift-cards-img/birthday-img-4.jpg"
            alt="Birthday cards 4"
            className="cards-img"
          />
        </div>
        <div className="item bd-slide">
          <img
            src="images/gift-cards-img/birthday-img-5.jpg"
            alt="Birthday cards 5"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style bd-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* THANK YOU CARDS */}
    <section className="cards tq-cards">
      <div className="cards-text">
        <p className="cards-text-type">Thank You</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style tq-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items tq-slider">
        <div className="item tq-slide">
          <img
            src="images/gift-cards-img/thank-you-img-1.jpg"
            alt="Thank You cards 1"
            className="cards-img"
          />
        </div>
        <div className="item tq-slide">
          <img
            src="images/gift-cards-img/thank-you-img-2.jpg"
            alt="Thank You cards 2"
            className="cards-img"
          />
        </div>
        <div className="item tq-slide">
          <img
            src="images/gift-cards-img/thank-you-img-3.jpg"
            alt="Thank You cards 3"
            className="cards-img"
          />
        </div>
        <div className="item tq-slide">
          <img
            src="images/gift-cards-img/thank-you-img-4.jpg"
            alt="Thank You cards 4"
            className="cards-img"
          />
        </div>
        <div className="item tq-slide">
          <img
            src="images/gift-cards-img/thank-you-img-5.jpg"
            alt="Thank You cards 5"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style tq-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* CELEBRATION CARDS */}
    <section className="cards cb-cards">
      <div className="cards-text">
        <p className="cards-text-type">Celebration</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style cb-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items cb-slider">
        <div className="item cb-slide">
          <img
            src="images/gift-cards-img/celebration-img-1.jpg"
            alt="Celebration cards 1"
            className="cards-img"
          />
        </div>
        <div className="item cb-slide">
          <img
            src="images/gift-cards-img/celebration-img-2.jpg"
            alt="Celebration cards 2"
            className="cards-img"
          />
        </div>
        <div className="item cb-slide">
          <img
            src="images/gift-cards-img/celebration-img-3.jpg"
            alt="Celebration cards 3"
            className="cards-img"
          />
        </div>
        <div className="item cb-slide">
          <img
            src="images/gift-cards-img/celebration-img-4.jpg"
            alt="Celebration cards 4"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style cb-btn-right hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* APPRECIATION CARDS */}
    <section className="cards ac-cards">
      <div className="cards-text">
        <p className="cards-text-type">Appreciation</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style ac-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items ac-slider">
        <div className="item ac-slide">
          <img
            src="images/gift-cards-img/appreciation-img-1.jpg"
            alt="Appreciation cards 1"
            className="cards-img"
          />
        </div>
        <div className="item ac-slide">
          <img
            src="images/gift-cards-img/appreciation-img-2.jpg"
            alt="Appreciation cards 2"
            className="cards-img"
          />
        </div>
        <div className="item ac-slide">
          <img
            src="images/gift-cards-img/appreciation-img-3.jpg"
            alt="Appreciation cards 3"
            className="cards-img"
          />
        </div>
        <div className="item ac-slide">
          <img
            src="images/gift-cards-img/appreciation-img-4.jpg"
            alt="Appreciation cards 4"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style ac-btn-right hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* PARENTS DAY CARDS */}
    <section className="cards pd-cards">
      <div className="cards-text">
        <p className="cards-text-type">Parents day</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-items">
        <div className="item pd-slide">
          <img
            src="images/gift-cards-img/parents-day-img-1.jpg"
            alt="Parents day cards 1"
            className="cards-img"
          />
        </div>
        <div className="item pd-slide">
          <img
            src="images/gift-cards-img/parents-day-img-2.jpg"
            alt="Parents day cards 2"
            className="cards-img"
          />
        </div>
        <div className="item pd-slide">
          <img
            src="images/gift-cards-img/parents-day-img-3.jpg"
            alt="Parents day cards 3"
            className="cards-img"
          />
        </div>
      </div>
    </section>
    {/* FRIENDSHIP DAY CARDS */}
    <section className="cards fd-cards">
      <div className="cards-text">
        <p className="cards-text-type">Friendship day</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-items">
        <div className="item fd-slide">
          <img
            src="images/gift-cards-img/friendship-day-img-1.jpg"
            alt="friendship day cards 1"
            className="cards-img"
          />
        </div>
        <div className="item fd-slide">
          <img
            src="images/gift-cards-img/friendship-day-img-2.jpg"
            alt="friendship day cards 2"
            className="cards-img"
          />
        </div>
        <div className="item fd-slide">
          <img
            src="images/gift-cards-img/friendship-day-img-3.jpg"
            alt="friendship day cards 3"
            className="cards-img"
          />
        </div>
      </div>
    </section>
    {/* WORKPLACE CARDS */}
    <section className="cards wp-cards">
      <div className="cards-text">
        <p className="cards-text-type">Workplace</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style wp-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items wp-slider">
        <div className="item wp-slide">
          <img
            src="images/gift-cards-img/workplace-img-1.jpg"
            alt="Workplace cards 1"
            className="cards-img"
          />
        </div>
        <div className="item wp-slide">
          <img
            src="images/gift-cards-img/workplace-img-2.jpg"
            alt="Workplace cards 2"
            className="cards-img"
          />
        </div>
        <div className="item wp-slide">
          <img
            src="images/gift-cards-img/workplace-img-3.jpg"
            alt="Workplace cards 3"
            className="cards-img"
          />
        </div>
        <div className="item wp-slide">
          <img
            src="images/gift-cards-img/workplace-img-4.jpg"
            alt="Workplace cards 4"
            className="cards-img"
          />
        </div>
        <div className="item wp-slide">
          <img
            src="images/gift-cards-img/workplace-img-5.jpg"
            alt="Workplace cards 5"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style wp-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* ENCOURAGEMENT CARDS */}
    <section className="cards ec-cards">
      <div className="cards-text">
        <p className="cards-text-type">Encouragement</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-items">
        <div className="item ec-slide">
          <img
            src="images/gift-cards-img/encouragement-img-1.jpg"
            alt="encouragement cards 1"
            className="cards-img"
          />
        </div>
        <div className="item ec-slide">
          <img
            src="images/gift-cards-img/encouragement-img-2.jpg"
            alt="encouragement cards 2"
            className="cards-img"
          />
        </div>
        <div className="item ec-slide">
          <img
            src="images/gift-cards-img/encouragement-img-3.jpg"
            alt="encouragement cards 3"
            className="cards-img"
          />
        </div>
      </div>
    </section>
    {/* AFFECTION CARDS */}
    <section className="cards af-cards">
      <div className="cards-text">
        <p className="cards-text-type">Affection</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style af-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items af-slider">
        <div className="item af-slide">
          <img
            src="images/gift-cards-img/affection-img-1.jpg"
            alt="Affection cards 1"
            className="cards-img"
          />
        </div>
        <div className="item af-slide">
          <img
            src="images/gift-cards-img/affection-img-2.jpg"
            alt="Affection cards 2"
            className="cards-img"
          />
        </div>
        <div className="item af-slide">
          <img
            src="images/gift-cards-img/affection-img-3.jpg"
            alt="Affection cards 3"
            className="cards-img"
          />
        </div>
        <div className="item af-slide">
          <img
            src="images/gift-cards-img/affection-img-4.jpg"
            alt="Affection cards 4"
            className="cards-img"
          />
        </div>
        <div className="item af-slide">
          <img
            src="images/gift-cards-img/affection-img-5.jpg"
            alt="Affection cards 5"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style af-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* ANYTIME CARDS */}
    <section className="cards at-cards">
      <div className="cards-text">
        <p className="cards-text-type">Affection</p>
        <p className="cards-text-see-all">See all</p>
      </div>
      <div className="cards-btn cards-btn-left">
        <button className="cards-btn-style at-btn-left hidden">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z" />
          </svg>
        </button>
      </div>
      <div className="cards-items at-slider">
        <div className="item at-slide">
          <img
            src="images/gift-cards-img/anytime-img-1.jpg"
            alt="Anytime cards 1"
            className="cards-img"
          />
        </div>
        <div className="item at-slide">
          <img
            src="images/gift-cards-img/anytime-img-2.jpg"
            alt="Anytime cards 2"
            className="cards-img"
          />
        </div>
        <div className="item at-slide">
          <img
            src="images/gift-cards-img/anytime-img-3.jpg"
            alt="Anytime cards 3"
            className="cards-img"
          />
        </div>
        <div className="item at-slide">
          <img
            src="images/gift-cards-img/anytime-img-4.jpg"
            alt="Anytime cards 4"
            className="cards-img"
          />
        </div>
        <div className="item at-slide">
          <img
            src="images/gift-cards-img/anytime-img-5.jpg"
            alt="Anytime cards 5"
            className="cards-img"
          />
        </div>
      </div>
      <div className="cards-btn cards-btn-right">
        <button className="cards-btn-style at-btn-right">
          <svg
            aria-hidden="true"
            className="cards-btn-style-icon"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style={{ overflow: "visible", fill: "currentcolor" }}
          >
            <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z" />
          </svg>
        </button>
      </div>
    </section>
    {/* BULK GIFT CARDS */}
    <section className="bulk-gift-cards">
      <div className="bulk-gift-cards-item">
        <img
          src="./images/gift-cards-img/bulk-gift-cards.jpg"
          alt="Bulk gift card"
          className="bulk-gift-cards-item-img"
        />
      </div>
      <div className="bulk-gift-cards-text">
        <h3 className="bulk-gift-cards-text-h3">Gift Cards in Bulk</h3>
        <p className="bulk-gift-cards-text-p">
          There's an easier way to buy Starbucks Cards in bulk! Give a Starbucks
          Card to gift, reward, incentivize, or show appreciation towards your
          customers, clients and team members.
        </p>
        <button className="bulk-gift-cards-text-btn">Shop now</button>
      </div>
    </section>
    {/* GIFT CARDS SUPPORT */}
    <section className="cards-support">
      <h3 className="cards-support-h3">Gift Card Support</h3>
      <p className="cards-support-p">
        Use the links below to manage eGifts you have sent or received, or view
        our full Card Terms &amp; Conditions.
      </p>
      <div className="cards-support-btn">
        <button className="cards-support-btn-1">eGift Support</button>
        <button className="cards-support-btn-2">
          See Terms &amp; Conditions
        </button>
        <button className="cards-support-btn-3">eGift FAQs</button>
      </div>
    </section>
  </main>
  <footer className="footer-content">Footer</footer>
</>
    )
}

export default GiftCards
