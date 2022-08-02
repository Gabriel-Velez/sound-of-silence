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
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.colors.black};
    font-weight: 200;
    margin: 0;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    padding-top: 70px;
    font-weight: 700;
  }

  .logos {
    padding-top: 70px;
    width: 100%;
  }

  .header {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.article};
    text-transform: uppercase;
    text-align: center;
  }

  .logosLink {
    text-align: center;
    color: ${(props) => props.theme.colors.grey};
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.article};
    margin-bottom: 20px;
    a {
      margin: 0 20px;
    }
  }

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    width: 90vw;
    .message {
      font-size: ${(props) => props.theme.fontSize.mobile.h2};
    }
    .logosLink {
      font-size: ${(props) => props.theme.fontSize.mobile.h3};
    }
  }
`;

function App() {
  return (
    <>
      <Nav />
      <div className='App'>
        <div id='top'></div>
        <Video />
        <StyledWrapper>
          <img
            className='logos'
            src={require("./assets/logos.png")}
            alt='Salesforce + Slack + Zanie'
          />
          <div className='header'>To break the sound of silence</div>
          <div className='logosLink'>
            <a target='_blank' href='https://calendly.com/jumana-zanieapp/zanie_app?month=2022-08'>
              Schedule a meeting
            </a>
            <a href='mailto:jumana@zanie.app'>Email us</a>
          </div>
          <h1 id='supporting' className='message'>
            Supporting Resources
          </h1>
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
        </StyledWrapper>
        <Footer />
      </div>
    </>
  );
}

export default App;
