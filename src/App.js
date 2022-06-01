import "./App.css";
import data from "./data";
import Section from "./components/section";
import Video from "./components/video";
import Footer from "./components/footer";
import Nav from "./components/nav";

import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 80vw;
  max-width: 1440px;
  .message {
    font-size: ${(props) => props.theme.fontSize.h1};
    color: ${(props) => props.theme.colors.grey};
    font-weight: 200;
    margin: 0;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    padding-top: 70px;
  }

  .logos {
    padding-top: 70px;
    width: 100%;
  }

  .logosLink {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.fontSize.p};
    display: block;
    font-style: normal;
    margin-top: 20px;
  }

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    width: 90vw;
    .message {
      font-size: ${(props) => props.theme.fontSize.mobile.h1};
    }
  }
`;

function App() {
  return (
    <>
      <Nav />
      <div className='App'>
        <Video />
        <StyledWrapper>
          <img
            className='logos'
            src={require("./assets/logos.png")}
            alt='Salesforce + Slack + Zanie'
          />
          <a className='logosLink' href='mailto:thegang@zanie.app'>
            Click here to learn how we can break the sound of silence{" "}
          </a>
          <h1 className='message'>Supporting Resources</h1>
          {data.map((section) => {
            return (
              <Section
                key={section.id}
                title={section.title}
                description={section.description}
                quotes={section.quotes}
                quotesType={section.quotesType}
                quotesSub={section.quotesSub}
                articles={section.articles}></Section>
            );
          })}
          <Footer />
        </StyledWrapper>
      </div>
    </>
  );
}

export default App;
