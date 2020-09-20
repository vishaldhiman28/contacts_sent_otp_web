import React   from "react";
import styled from "styled-components";
import axios from "axios";


const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .contact {
    &__wrapper {

      align-items: center;

      .btn {
        margin-top: 2rem;
      }
    }
  }

  .input {
    &__field {
      display: flex;
      flex-direction: column;


      input,
      textarea {
        border-radius: 4px;
        border: 2px solid #f05637;
        height: 60px;
        width: 400px;
        transition: 0.2s;
        font-size: 20px;
        
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        &:focus {
          border-color: white;
          transition: 0.2s;
        }
      }

      textarea {
        height: 200px;
        resize: none;
      }
    }

    &__textarea {
      margin-top: 1rem;
      width: 50%;
    }
  }
  }
`

export default function SendMessage(props) {
  const resetForm = () => {
    document.getElementById("contact-form").reset()
  }
  const mobileNumber = props.match.params.mobileNumber;
  const name = props.match.params.name;
  const handleSubmit = e => {
    e.preventDefault()
    const message = document.getElementById("message").value
    const success = document.getElementById("success")
    const failure = document.getElementById("failure")
    axios({
      method: "POST",
      url: "https://apiairl.herokuapp.com/sendMsg",
      data: {
        "text": message,
        "to": mobileNumber,
        "name": name,
      },
    }).then(response => {
      console.log(response);
      if (response.data.to=== mobileNumber) {
        success.style.display = "block"
        resetForm()
      } else {
        failure.style.display = "block"
      }
    })
  }
  return (
    <StyledContact id="contact">
        <div className="container container--primary">
          <h2 data-sal="slide-up" data-sal-easing="ease">
            Send Message
          </h2>
          <span id="success" className="colored" style={{ display: "none" }}>
            Message sent..!
          </span>
          <span id="failure" style={{ color: "#FF5252", display: "none" }}>
            Message failed to sent ..!
          </span>
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="contact__wrapper"
            id="contact-form"
          >
            <div className="input">
              <div
                className="input"
              
              >
                <label htmlFor="email">MobileNumber : {mobileNumber}, Name: {name}</label>

              </div>
            </div>
            <div
              className="input__field input__textarea"
            >
              <label htmlFor="message">Message</label>
              <textarea
                aria-label="Message"
                required
                className="input__field-input"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div
            >
              <input
                type="submit"
                value="Submit"
                className="btn"
              />
            </div>
          </form>
        </div>
    </StyledContact>
  )
}
