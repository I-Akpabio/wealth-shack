"use client";
import { PureComponent, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { PieChart, Pie, Sector, Cell } from "recharts";

import { ResponsiveContainer } from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faNewspaper,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";

import {
  faAngleRight,
  faLocationArrow,
  faPenNib,
  faPhone,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#1134AE",
  "#FF0000",
  "#AAC293",
  "#98ACFF",
  "#0088FE",
  "#00C49F",
];

const portfolioDetails = [
  { name: "Nigerian Stocks", key: "nigerianStock", color: COLORS[0] },
  { name: "Foreign Stocks", key: "foreignStock", color: COLORS[1] },
  { name: "Tech Stocks", key: "techStock", color: COLORS[2] },
  { name: "Emerging Stocks", key: "emergingStock", color: COLORS[3] },
  { name: "Nigerian Bonds", key: "nigerianBonds", color: COLORS[4] },
  { name: "Foreign Bonds", key: "foreignBonds", color: COLORS[5] },
  { name: "Commodities", key: "commodities", color: COLORS[6] },
  { name: "Real Estate", key: "realEstate", color: COLORS[7] },
  { name: "T-Bills", key: "tBills", color: COLORS[8] },
  { name: "Alternatives", key: "alternative", color: COLORS[9] },
];

class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-of-straight-angle-oz0th";

  render() {
    const data = this.props.chartData;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={800} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            innerRadius={90}
            outerRadius={130}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default function Home() {
  const [risk, setRisk] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://wealth-shack.onrender.com/")
      .then((res) => res.json())
      .then((res) => {
        setPortfolio(res);

        const active = res[0];
        const updated = portfolioDetails.map((item) => ({
          name: item.name,
          value: active[item.key],
        }));
        setChartData(updated);
      });
  }, []);

  useEffect(() => {
    if (!portfolio.length) {
      return;
    }

    const active = portfolio[risk];
    const updated = portfolioDetails.map((item) => ({
      name: item.name,
      value: active[item.key],
    }));
    setChartData(updated);
  }, [risk]);

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  const activePortfolio = portfolio[risk] ? portfolio[risk] : null;

  return (
    <>
      <div className="container-xl">
        <nav
          className="navbar navbar-expand-lg navbar-dark pt-3"
          style={{ backgroundColor: "black" }}
        >
          <a className="navbar-brand" href="#">
            <img
              src="https://i.ibb.co/98D5dGq/wealth-Shacklogo.png"
              alt=""
              width={160}
              height={80}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-lime btn-lg">
                Get Started <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </form>
          </div>
        </nav>
      </div>

      <main className={styles.main}>
        <div className="container-xl">
          <div className="row section">
            <div className="col-lg-5 col-sm-12">
              <h1 className="text-white mb-3">
                Managed investing made to grow your wealths
              </h1>

              <p>
                We'll build you a smart, sophisticated investment portfolio
                designed to help you achieve your goals.
              </p>

              <button className="btn btn-lime btn-lg">
                Get Started <FontAwesomeIcon icon={faAngleRight} />
              </button>

              <button className="btn btn-dark btn-lg">
                Learn More <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
            <div className="col-lg-3">
              <img
                className="d-lg-block"
                style={{ width: "100%" }}
                src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/Half-Mobile-2-606x1024.png"
                alt=""
              />
            </div>
            <div className="col-4">
              <h1 className={styles.traderCount}>235,000 +</h1>

              <p>Trusted Clients</p>

              <img
                width={251}
                height={150}
                src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/Candlesticks.png"
                alt=""
              />

              <h5>Advanced AI Technology</h5>

              <p>
                We gives advanced results with technology that cannot be matched
              </p>
            </div>
          </div>
        </div>
        {/* <AnimatePresence>
         <motion.div initial={{opacity: 0, y: 15}}
           animate={{opacity: 1, y: 0}}
           exit={{opacity:0, y: 15}}
           transition={{delay: 0.15}}

         > */}

        <div className="container-xl section">
          <div>
            <img
              className="w-100"
              src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/Line-800x1.png"
              alt=""
            />
          </div>

          <div className="row stats">
            <div className="col-lg-3 col-sm-12">
              <h4>Stats That Matter</h4>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="col-lg-2 col-sm-12">
              <h4>690K</h4>
              <p>Trusted clients</p>
            </div>
            <div className="col-lg-2 col-sm-12">
              <h4>$43B+</h4>
              <p>In assets managed</p>
            </div>
            <div className="col-lg-2 col-sm-12">
              <h4>4.8</h4>
              <p>Apple App Store</p>
            </div>
            <div className="col-lg-2 col-sm-12">
              <h4>4.9</h4>
              <p>Google Play Store</p>
            </div>
          </div>

          <div>
            <img
              className="w-100"
              src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/Line-800x1.png"
              alt=""
            />
          </div>
        </div>

        {/* 
</motion.div>

</AnimatePresence> */}

        <div className="main-widget">
          <div className="row mt-4">
            <div className="col-lg-4 col-sm-6 chartRoot">
              {portfolio.length > 0 ? (
                <div className="widgetContainer">
                  <Example chartData={chartData} />
                </div>
              ) : null}

              <div className="row resultLabelContainer">
                {activePortfolio
                  ? portfolioDetails.map((item) => {
                      const key = item.key;
                      if (activePortfolio[key] > 0) return null;
                      return (
                        <div className="col-6" key={item.key}>
                          <div className="d-flex mb-2">
                            <h5
                              style={{ paddingLeft: "20px" }}
                              className="result-label text-white"
                            >
                              {" "}
                              {item.name}:{" "}
                            </h5>
                            <h5 className="ms-auto result-label">
                              {activePortfolio[item.key]}%
                            </h5>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            <div className="col-lg-3 col-sm-5 detailsRoot">
              <div className="detailsContent">
                {activePortfolio
                  ? portfolioDetails.map((item) => {
                      const key = item.key;
                      if (activePortfolio[key] == 0) return null;
                      return (
                        <div className="d-flex mb-2" key={item.key}>
                          <div
                            className="resultBadge"
                            style={{ background: item.color }}
                          ></div>
                          <h5 className="result-label"> {item.name}: </h5>
                          <h5 className="ms-auto result-label">
                            {activePortfolio[item.key]}%
                          </h5>
                        </div>
                      );
                    })
                  : null}

                <div className="slider-parent">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      setRisk(e.target.value);
                    }}
                  />
                  <div className="d-flex justify-content-between mt-4">
                    <p className="text-white">Risk Factor:</p>
                    <div className="buble">{value}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12" style={{ marginLeft: "22px" }}>
              <h1>Smarter investing, brilliantly personalized!</h1>
              <br />
              <p>
                Just answer a few questions, and we’ll build you a personalized
                portfolio of low-cost index funds from up to 17 global asset
                classes. Our software handles all the trading, rebalancing, and
                other busywork to help grow your wealth for the long term.
              </p>
            </div>
          </div>
        </div>

        <div className="lightBlackBG">
          <div className="container-xxl section">
            <div className="row big-padding big-margin">
              <div className="col-lg-5 col-sm-12">
                <h2 className="pl-3">
                  We do things differently at WealthShack Technology Services
                </h2>
              </div>

              <div className="col-lg-5 col-sm-12">
                <p>
                  We offer a wide range of portfolio management options to give
                  you the flexiblity to manage your assets
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4 col-sm-12">
                <div className={styles.analyticsCard}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h1>99%</h1>
                      <h6>Accuracy In Analytics</h6>
                    </div>
                    <img
                      width={161}
                      height={120}
                      src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/UI-Element.-01.png"
                      alt=""
                    />
                  </div>
                </div>

                <div style={{ paddingLeft: "2rem" }}>
                  <div className="d-flex align-items-start">
                    <span className={styles.newsPaperIcon}>
                      <FontAwesomeIcon
                        className={styles.pricingCheck}
                        icon={faNewspaper}
                      />
                    </span>
                    <div className="mb-4">
                      <h3>More interest on your cash.</h3>
                      <h6>Indice Training guide</h6>
                    </div>
                  </div>

                  <p>More interest on your cash.</p>
                </div>
              </div>

              <div className="col-8">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="d-flex align-items-start">
                      <span className={styles.newsPaperIcon}>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faNewspaper}
                        />
                      </span>
                      <div className="mb-4">
                        <h4>Automated Portfolio</h4>
                        <h6>Award-winning automation</h6>
                      </div>
                    </div>

                    <p>
                      Get the benefits of bonds (like earning dividends and tax
                      advantages) without the balancing act of managing
                      locked-in rates or maturity dates.
                    </p>

                    <div className={styles.cardLine} />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="d-flex align-items-start">
                      <span className={styles.newsPaperIcon}>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faNewspaper}
                        />
                      </span>
                      <div className="mb-4">
                        <h4>Diversified index investing</h4>
                        <h6>Access to wide range or diversified stock.</h6>
                      </div>
                    </div>

                    <p>
                      Come bears or bulls, our expert-built portfolios help you
                      stay diversified for your goals. Limit your risk, minimize
                      your taxes, and maximize your returns
                    </p>

                    <div className={styles.cardLine} />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="d-flex align-items-start">
                      <span className={styles.newsPaperIcon}>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faNewspaper}
                        />
                      </span>
                      <div className="mb-4">
                        <h4>Smart Stock Discovery</h4>
                        <h6>Discover and buy stocks</h6>
                      </div>
                    </div>

                    <p>
                      We make sense of the market so you can make more strategic
                      stock choices, faster. Browse dozens of themes and
                      opportunities, dive into data and perspectives.
                    </p>

                    <div className={styles.cardLine} />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="d-flex align-items-start">
                      <span className={styles.newsPaperIcon}>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faNewspaper}
                        />
                      </span>
                      <div className="mb-4">
                        <h4>Bond ETFs</h4>
                        <h6>Double your Earnings</h6>
                      </div>
                    </div>

                    <p>
                      Increase your earning potential on extra cash with low
                      volatility. Ideal when saving for purchases in the next
                      1–3 years.
                    </p>

                    <div className={styles.cardLine} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl">
          <div className={styles.paralledBanner}>
            <h1>We strive to offer an unparalleled experience</h1>
            <div className="d-flex mt-3 justify-content-between">
              <p>
                Join over 3 million Nigerians who choose Wealthsimple to invest,
                trade, save and more.
              </p>
              <button className="btn btn-lime btn-lg">Get Started</button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-5 col-sm-12">
              <div className="card">
                <h2>More than 500+ Instruments</h2>
                <p>Indice Training guide to help you better</p>{" "}
                <img
                  className={styles.welcomeBackCard}
                  src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/UI-Element.-04.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className="card">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>Accepting all master cards & currency</h3>

                    <p>
                      We give you a wide range of options for adding your cards
                      and payment options
                    </p>

                    <h1>$ 199 M</h1>

                    <p>Investment Volume</p>
                  </div>

                  <img
                    className={styles.currencyCard}
                    src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/Cards.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="card mt-4 py-5">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>We strive to offer an unparalleled experience</h3>

                    <p className="">
                      We offer a wide rande of cryptocurrency assets for your
                      investments needs
                    </p>
                  </div>

                  <img
                    className={styles.cryptoCards}
                    src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/UI-Element.-03.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lightBlackBG platformOffersSection">
          <div className="container-xxl section">
            <div>
              <h1 className="mt-5">
                Our Platform provides all kind of investment methods
              </h1>

              <p className="mt-3">
                Earn more on your short-term savings with a high APY delivered
                through our partner banks
              </p>

              <div className="row mt-5">
                <div className="col-lg-3 col-sm-12">
                  <div
                    className="card cardOnBlackBg"
                    style={{ paddingTop: "1.5rem" }}
                  >
                    <div className="card-body">
                      <div>
                        <span className={styles.investIcon}>
                          <FontAwesomeIcon
                            className={styles.pricingCheck}
                            icon={faNewspaper}
                          />
                        </span>
                      </div>
                      <h4 className="mt-4">High-yield savings</h4>
                      <p>
                        Best for your daily expenses and your emergency fund,
                        until you're ready to invest. Increase your earning
                        potential
                      </p>

                      <a className="get-started-link">
                        Get Started{" "}
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faAngleRight}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div
                    className="card cardOnBlackBg"
                    style={{ paddingTop: "1.5rem" }}
                  >
                    <div className="card-body">
                      <div>
                        <span className={styles.investIcon}>
                          <FontAwesomeIcon
                            className={styles.pricingCheck}
                            icon={faNewspaper}
                          />
                        </span>
                      </div>
                      <h4 className="mt-4">Made for modern investors</h4>
                      <p>
                        Get access to rare, innovative investing opportunities
                        without high fees. Enjoy intuitive tech.
                      </p>

                      <a className="get-started-link">
                        Get Started{" "}
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faAngleRight}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div
                    className="card cardOnBlackBg"
                    style={{ paddingTop: "1.5rem" }}
                  >
                    <div className="card-body">
                      <div>
                        <span className={styles.investIcon}>
                          <FontAwesomeIcon
                            className={styles.pricingCheck}
                            icon={faNewspaper}
                          />
                        </span>
                      </div>
                      <h4 className="mt-4">Reliable and diversified</h4>
                      <p>
                        Your money is invested in a wide range of asset classes
                        across the market.
                      </p>

                      <a className="get-started-link">
                        Get Started{" "}
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faAngleRight}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div
                    className="card cardOnBlackBg"
                    style={{ paddingTop: "1.5rem" }}
                  >
                    <div className="card-body">
                      <div>
                        <span className={styles.investIcon}>
                          <FontAwesomeIcon
                            className={styles.pricingCheck}
                            icon={faNewspaper}
                          />
                        </span>
                      </div>
                      <h4 className="mt-4">Supported by experts</h4>
                      <p>
                        Our in-house investment team will customize a portfolio
                        to suit your risk tolerance and goals.
                      </p>

                      <a className="get-started-link">
                        Get Started{" "}
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faAngleRight}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl section">
          <div>
            <h3 className="mt-5">Get more as your wealth grows</h3>

            <div className="row mt-5">
              {[1, 2, 3].map((e) => (
                <div className="col-lg-4 col-sm-12" key={e}>
                  <div className="card cardOnBlackBg">
                    <div className="card-body">
                      <h4>Core</h4>
                      <p>$1 in assets</p>

                      <hr />

                      <h5>As low as</h5>

                      <div className="d-flex align-items-start">
                        <span>$</span>
                        <span className={styles.pricingValue}>24</span>
                        <span>Monthly</span>
                      </div>

                      <p>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faCheckCircle}
                        />{" "}
                        Automatic portfolio rebalancing
                      </p>
                      <p>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faCheckCircle}
                        />{" "}
                        Help from a real, friendly, human
                      </p>
                      <p>
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faCheckCircle}
                        />{" "}
                        Fast & highly qualified support
                      </p>
                      <p>
                        {" "}
                        <FontAwesomeIcon
                          className={styles.pricingCheck}
                          icon={faCheckCircle}
                        />{" "}
                        Comprehensive teach on Trading
                      </p>

                      <button className="btn mt-3 mb-4 btn-lime-block">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="downloadMobileCard">
            <div className="row">
              <div className="col-lg-7 col-sm-12">
                <h1>WealthShack is partnered with world class brands</h1>

                <div>
                  <button className="btn btn-lime btn-large">
                    Create Account
                  </button>
                  <button className="btn btn-dark ml-3">
                    Download now{" "}
                    <FontAwesomeIcon
                      className={styles.pricingCheck}
                      icon={faAngleRight}
                    />
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12">
                <h6 className="text-white">Get it on</h6>
                <h2>Playstore Now</h2>
                <img
                  width={250}
                  height={96}
                  src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2022/12/google-play-badge.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row big-margin">
            <div className="col-lg-6 col-sm-12">
              <h2 style={{ fontSize: "46px" }}>Read what they say about us!</h2>
              <h6>Client's Words & Rating</h6>

              <p>
                The single best resource for investing, managing retirement and
                seeing my entire financial picture.
              </p>

              <div className="row review-card-container">
                <div className="col-lg-6 col-sm-12">
                  <div className="card cardOnBlackBg">
                    <div className="mb-3">
                      {[1, 2, 3, 4, 5].map((e) => (
                        <img
                          key={e}
                          className="review-star"
                          width={18}
                          height={18}
                          src="https://www.svgrepo.com/show/13695/star.svg"
                          alt=""
                        />
                      ))}
                    </div>
                    <p className="text-white">
                      Lorem ipsum dolor, hsit amet fconsectetur adipisicing
                      elit. Corrupti provident ipsum nihil id cupiditate
                      distinctio?
                    </p>

                    <div className="d-flex align-items-start">
                      <img
                        className="img-avatar"
                        src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2022/12/happy-businessman-in-glasses-holding-clipboard-in-2022-11-02-02-39-05-utc-174.jpg"
                        alt=""
                      />

                      <div className="mb-4">
                        <h4>John Doe</h4>
                        <h6>Deigner</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="card">
                    <div className="mb-3">
                      {[1, 2, 3, 4, 5].map((e) => (
                        <img
                          key={e}
                          className="review-star"
                          width={18}
                          height={18}
                          src="https://www.svgrepo.com/show/13695/star.svg"
                          alt=""
                        />
                      ))}
                    </div>
                    <p className="text-white">
                      I LOVE Wealthshack and have moved almost all of my
                      finances there. There are so many options for managing my
                      financez
                    </p>

                    <div className="d-flex align-items-start">
                      <img
                        className="img-avatar"
                        src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2022/12/beautiful-businesswoman-writing-while-holding-clip-2022-11-02-03-54-10-utc-174.jpg
                        "
                        alt=""
                      />

                      <div className="mb-4">
                        <h4>Alicia Key</h4>
                        <h6>Entrepreneur</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <img
                className=""
                style={{ width: "100%", height: "100%" }}
                src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2022/12/blogImage05-800x600.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="h-100 d-flex justify-content-center big-margin subscribeCard">
            <div className="w-50 subscribeCenterCard">
              <div className="d-flex justify-content-center">
                <img
                  width={100}
                  height={100}
                  src="https://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/tradex-Cta-logo.png"
                  alt=""
                />
              </div>

              <h1>Subscribe to get the best trading news</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>

              <input
                type="text"
                className="form-control subscribe-input"
                placeholder="Your Email"
              />
              <button className="btn btn-lime-block">Submit.</button>
            </div>
          </div>
        </div>
      </main>

      <div className="container-xxl section">
        <footer className="footer big-margin ">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h6>Location to HQ</h6>
              <p>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faLocationArrow}
                />
                23 Valley Lane, Austin
              </p>
              <p>
                <FontAwesomeIcon className={styles.footerIcon} icon={faClock} />
                02:00am - 03:00pm
              </p>
              <h6>Follow on social media</h6>
            </div>

            <div className="col-lg-2 col-sm-6">
              <h6>Customer support</h6>
              <p>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faQuestionCircle}
                />
                F.A.Q
              </p>
              <p>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faNewspaper}
                />
                Knowledge Base
              </p>
              <p>
                <FontAwesomeIcon className={styles.footerIcon} icon={faPhone} />
                Customer Support
              </p>
              <p>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faPenNib}
                />
                Privacy Policy
              </p>
              <p>
                <FontAwesomeIcon
                  className={styles.footerIcon}
                  icon={faRecordVinyl}
                />
                Terms Policy
              </p>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h6>Quick Links</h6>
              <p>F.A.Q</p>
              <p>Knowledge Base</p>
              <p>Customer Support</p>
              <p>Privacy Policy</p>
              <p>Terms Policy</p>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h6>Investing guides</h6>
              <p>Managed Investing</p>
              <p>Self Direct Investing</p>
              <p>Cash</p>
              <p>Tax</p>
              <p>Crypto</p>
            </div>
            <div className="col-2">
              <h6>Markets</h6>
              <p>F.A.Q</p>
              <p>Knowledge Base.</p>
              <p>Customer Support</p>
              <p>Privacy Policy</p>
              <p>Terms Policy</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
