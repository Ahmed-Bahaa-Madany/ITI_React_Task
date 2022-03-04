import React from "react";
import "./header.css";

class ClassHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ahmed Bahaa",
      title: "Web Developer",
    };
  }

  render() {
    const { name, title } = this.state;
    return (
        <section className="header bg-image py-5">
            <div className="container">
            <div className="content w-50 text-center text-white">
                <h1 className="fw-bold pt-5 mb-3">{name}</h1>
                <p className="mb-5">{title}</p>
                <a
                href="../../public/index.html"
                className="border border-white d-inline-block py-2 px-3 text-white"
                >
                Contact Me
                </a>
            </div>
            </div>
        </section>
    );
  }
}

export default ClassHeader;
