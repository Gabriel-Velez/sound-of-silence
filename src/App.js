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
  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
    color: ${(props) => props.theme.colors.red};
    font-weight: bold;
    margin-top: 70px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;
    margin: 0;
  }

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    width: 90vw;
    h1 {
      font-size: ${(props) => props.theme.fontSize.mobile.h1};
    }
    h3 {
      font-size: ${(props) => props.theme.fontSize.mobile.h3};
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
          <h1>
            The antidote to the loneliness epidemic:
            <br /> Psychological safety at work
          </h1>
          <h3>Supporting Resources</h3>
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
