import React from "react";
import PageBanner from "../components/PageBanner";
import ServiceCategory from "../components/service/ServiceCategory";
import ServiceProcess from "../components/service/ServiceProcess";
import RequestQuote from "../components/service/RequestQuote";
import "../service.css";

const Services = () => {
  return (
    <div>
      <PageBanner
        title="Our Services"
        breadcrumb="Home / Services"
        image="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=80"
      />
      <ServiceCategory />
      <ServiceProcess />
      <RequestQuote />
    </div>
  );
};

export default Services;