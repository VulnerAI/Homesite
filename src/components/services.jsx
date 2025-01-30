import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>
            Harness the power of AI to transform cybersecurity. Our suite of AI-driven solutions enhances threat detection, streamlines security operations, and empowers analysts with intelligent automation. From reducing alert fatigue to accelerating incident response and improving threat intelligence, we build innovative tools to make cybersecurity smarter, faster, and more effective.
          </p>
        </div>
        <div
          className={`row product-list ${
            props.data?.length === 1 ? "single-product" : ""
          }`}
        >
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 product-item">
                  {d.icon ? (
                    <img src={d.icon} alt={d.name} className="service-icon" />
                  ) : (
                    <p>No Image Available</p>
                  )}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </div>
  );
};
