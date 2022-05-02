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

  @media only screen and (${(props) => props.theme.breakPoints.mobile}) {
    width: 90vw;
  }
`;

function App() {
  return (
    <>
      <Nav />
      <div className='App'>
        <Video />
        <StyledWrapper>
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
