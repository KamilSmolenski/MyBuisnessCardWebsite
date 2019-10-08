import React from "react";
import axios from "axios";
import "../styles/Form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", surname: "", email: "", message: "" };
  }

  handleForm = e => {
    axios
      .post("https://formcarry.com/s/q930R29vXQP", this.state, {
        headers: { Accept: "application/json" },
      })
      .then(function(response) {})
      .catch(function(error) {
        console.log(error);
      });
    alert(`Dear ${this.state.name}
    Thanks for message, I'll reply as soon as possible`);
    // e.preventDefault();
  };

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} />

        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          onChange={this.handleFields}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={this.handleFields}
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          onChange={this.handleFields}
        ></textarea>

        <button type="submit">
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      </form>
    );
  }
}

export default Form;
