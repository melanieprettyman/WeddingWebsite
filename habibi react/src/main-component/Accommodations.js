import React, { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";
import { AccommodationsConstants } from "../constants";
import PageTitle from "../components/pagetitle/PageTitle";
import Navbar from "../components/Navbar/Navbar";

const Accommodations = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} />

      <PageTitle
        pageTitle={AccommodationsConstants.pageTitle}
        content={AccommodationsConstants.content.intro}
      />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <section className="accommodations-content">
          <h3 style={{ color: "#333", marginBottom: "10px" }}>
            Staying at the Château
          </h3>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            Our venue includes overnight accommodations from{" "}
            <strong>
              Thursday, September 11th at 2:00 PM to Sunday, September 14th at
              2:00 PM
            </strong>
            . Rooms at the château are <strong>completely free</strong> for
            guests who wish to stay.
          </p>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            The château will primarily house our{" "}
            <strong>family and wedding party</strong>, but we do have a{" "}
            <strong>limited number of additional beds</strong> available for
            other guests. These will be offered on a{" "}
            <strong>first-come, first-served</strong> basis once RSVPs are
            finalized.
          </p>
          <p>
            <strong>Please note: </strong>
          </p>
          <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "15px",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              The château is an <strong>adults-only venue</strong>—no children
              are permitted.
            </li>
            <li style={{ marginBottom: "8px" }}>
              If you would like to stay at the château, we will provide a
              <strong> reservation spreadsheet</strong> where you can select an
              available bed and add your name. This will be available at the end
              of May once all RSVPs are confirmed.
            </li>
          </ul>

          <h3 style={{ color: "#333", marginBottom: "10px" }}>
            Alternative Accommodations
          </h3>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            {AccommodationsConstants.content.alternativeIntro}
          </p>
          <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "15px",
              listStyleType: "disc",
            }}
          >
            {AccommodationsConstants.alternativeAccommodations.map(
              (hotel, index) => (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <a
                    href={`${hotel.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#007bff",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                  >
                    {hotel.name}
                  </a>{" "}
                  ({hotel.distance})
                  <p
                    style={{
                      margin: "5px 0",
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    {hotel.description}
                  </p>
                </li>
              )
            )}
          </ul>

          <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
            If you are interested in a <strong>free stay at the château</strong>
            , we recommend waiting until the end of May before booking
            alternative accommodations. At that time, we will have a clearer
            idea of availability for additional guests.
          </p>
          <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
            We can&apos;t wait to celebrate with you! 💛
          </p>
        </section>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Accommodations;
