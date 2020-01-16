import React from "react";

function Home(props) {
  return (
    <div>
      <h1>
        Prepare for <br />
        Adventure
      </h1>
      <div className="wheel">⎈</div>
      <h2>Official Union of BranMor</h2>
      <h3>
        We Happily Invite You to the Wedding <br /> of <br /> Brandy Caitlin &
        Morgan Tatum <br /> <span className="date">10.10.20</span>
      </h3>

      <p>
        {" "}
        Seattle, WA <br />
        Stay tuned for more information!
      </p>
    </div>
  );
}

export default Home;
