import React from "react";
import SendMessage from "../components/contact/SendMessage";
import FindUs from "../components/contact/FindUs.jsx";
import PageBanner from "../components/PageBanner";

const Contact = () => {
  return <div><PageBanner title="About us" breadcrumb="Home /About us"
    image="/image/contact-banner.jpeg"/>
    <SendMessage/>
    <FindUs/>
    </div>;
};

export default Contact;
