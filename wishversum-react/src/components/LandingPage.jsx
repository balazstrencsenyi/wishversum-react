 
 
 function LandingPage() {
  return (
    <div className="middle-container">

      {/* First page */}
      <div className="first-page" id="first-page">
        <div className="card">
          <div className="text">Welcome to Wishversum!</div>
          <div className="text2">Click on the button below and make a wish!</div>
          <div className="arrow">⬇Make your dream come true⬇</div>
          <button className="button" onClick={() => { document.getElementById("third-page").scrollIntoView({ behavior: "smooth" }); }}>
            Make a wish
          </button>
        </div>
      </div>

      {/* Second page */}
      <div className="second-page" id="second-page">
        <div className="text-container">
          <div className="second-text">
            Welcome to Wishversum, where dreams come true. We grant wishes for money, wealth, health, family, love, peace, grades, studies, fun, and more. Our mission is to bring hope and joy to individuals, making a positive impact on their lives. Submit your wish, and our dedicated team will work tirelessly to fulfill it. Join our community and lets make dreams possible together!
          </div>
        </div>
        <div className="image-container">
          <img className="pray-image" src="media/pray.png" alt="Pray" />
        </div>
      </div>

      {/* Third page */}
      <div className="third-page" id="third-page">
        <div className="wish-form-container">
          <form className="wish-form">
            <div className="label-container">
              <label className="label">First Name:</label>
              <input className="input" type="text" placeholder="Tim" name="firstInput" />
            </div>
            <div className="label-container">
              <label className="label">Last Name:</label>
              <input className="input" type="text" placeholder="Bennett" name="lastInput" id="last-name" />
            </div>
            <div className="label-container">
              <label className="label">Email:</label>
              <input className="input" type="email" placeholder="timbennett@gmail.com" name="emailInput" />
            </div>
            <div className="label-container">
              <label className="label">Date of Birth:</label>
              <input className="input" type="text" placeholder="YYYY-MM-DD" name="wishInput" />
            </div>
            <div className="label-container">
              <label className="label">Astrological-Sign:</label>
              <select name="selectInput">
                <option value="Capricorn">Capricorn</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Taurus">Taurus</option>
                <option value="Leo">Leo</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Gemini">Gemini</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Aries">Aries</option>
                <option value="Libra">Libra</option>
                <option value="Pisces">Pisces</option>
                <option value="Cancer">Cancer</option>
                <option value="Virgo">Virgo</option>
              </select>
            </div>
            <div className="form-button-container">
              <button className="submit-button" type="submit" onClick={() => { saveData(); }}>
                Submit
              </button>
              <button className="explore-button" type="submit" onClick={() => { root.innerHTML = ''; buildCards(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                Lets Explore!
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Fourth page */}
      <div className="fourth-page" id="fourth-page">
        <div className="faq-container">
          <div className="faq-text">Frequently Asked Questions</div>
          <div className="faq-question">How do I make a wish?</div>
          <div className="faq-answer">Click on the button Make a wish and fill out the form. We will contact you as soon as possible.</div>
          <div className="faq-question">How much does it cost to make a wish?</div>
          <div className="faq-answer">It is free to make a wish. However, if you want to support our work, you can donate any amount of money.</div>
          <div className="faq-question">How long does it take to fulfill a wish?</div>
          <div className="faq-answer">It depends on the wish. We will contact you as soon as possible.</div>
          <div className="faq-question">How can I support your work?</div>
          <div className="faq-answer">You can support our work by donating any amount of money.</div>
        </div>
      </div>

      {/* Fifth page */}
      <div className="fifth-page" id="fifth-page">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-text">Contact us</div>
            <div className="text-container2">
              <div className="contact-question">How can I contact you?</div>
              <div className="contact-answer">You can contact us by sending an email to wishversum@gmail.com.</div>
              <div className="contact-answer">You can also contact us by calling +49 123 456 789.</div>
              <div className="contact-question">Where are you located?</div>
              <div className="contact-answer">We are located in Budapest, Hungary.</div>
              <div className="contact-question">What are your opening hours?</div>
              <div className="contact-answer">We are open 24/7.</div>
            </div>
            <div className="logo-container">
              <img className="logo" src="media/iglogo.png" alt="Instagram" />
              <img className="logo" src="media/fblogo.png" alt="Facebook" />
            </div>
          </div>
        </div>
        <div className="image-container2">
          <img className="contact-image" src="media/contact.png" alt="Contact Us" />
        </div>
      </div>

    </div>
  );
}


export default LandingPage;
