import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="funding-card">
      <div className="funding-content">
        <h3>Проект Бисмиллях</h3>
        <p>
          Реализован при финансовой поддержке{" "}
          <a
            href="https://foresat.tilda.ws/ "
            target="_blank"
            rel="noopener noreferrer"
            className="fund-link"
          >
            Фонда содействия инновациям
          </a>
          , грант по программе «Студенческий стартап».
        </p>
        <a
          href="https://foresat.tilda.ws/ "
          target="_blank"
          rel="noopener noreferrer"
          className="fund-button"
        >
          Перейти на сайт фонда
        </a>
      </div>
    </div>
  );
};

export default Bio;
