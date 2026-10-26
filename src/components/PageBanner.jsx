import React from "react";

const PageBanner = ({ title, breadcrumb, image }) => {
  return (
    <div
      className="page-banner"
      style={{
        backgroundImage: `linear-gradient( to left, rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.77)), url(${image})`,
      }}
    >
      <section>
        <h1>{title}</h1>
        <p>{breadcrumb}</p>
      </section>
    </div>
  );
};

export default PageBanner;
