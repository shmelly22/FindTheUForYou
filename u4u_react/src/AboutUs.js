import React from "react";
import "./AboutUs.css";
import StartHeader from "./StartHeader";
import "./Startpage.css";

function AboutUs() {
  return (
    <div className="cc-container">
      <StartHeader />
      <link
        href="https://fonts.googleapis.com/css?family=Yellowtail:400"
        rel="stylesheet"
        type="text/css"
      ></link>
      <div className="blocks top">
        <div className="grid">
          <p className="toptxt">
            Welcome to The U for You, your one stop destination for all things
            college search!
          </p>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.1designshop.com%2Fwp-content%2Fuploads%2F2016%2F01%2F1dsp-20160104-edu-007.png&f=1&nofb=1&ipt=2336b6827fa75629a86a4f64473c1f738f98150af47526848aef9acca1b0cabf&ipo=images"
            alt="Happy Collage Students"
            className="image"
          ></img>
        </div>
      </div>
      <div className="blocks middle">
        <p className="middletxt">
          Our website was created with the aim of helping high school students
          and their families navigate the often-overwhelming college search
          process. We understand that finding the right college can be a
          challenging and confusing task, and that's why we've made it our
          mission to simplify the process for you.
          <p>
            Our website provides you with all the information you need to make
            an informed decision about your college education, including
            in-depth profiles of colleges and universities, information about
            admission requirements, and much more. Our team of experienced
            education professionals has worked hard to curate a vast database of
            information about colleges and universities from all over the world.
          </p>
          <p>
            We strive to provide you with accurate and up-to-date information so
            that you can make the best decision for your future. We also
            understand that every student is unique and has different needs and
            goals when it comes to choosing a college. That's why we've made our
            website highly customizable and easy to use, so you can find the
            information that is most relevant to you. Whether you're looking for
            a large, public university or a small, private liberal arts college,
            we've got you covered. So if you're ready to start your college
            search, look no further than The U for You.
            <p>
              We're here to help you find the college that's perfect for you and
              set you on the path to success!
            </p>
          </p>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
