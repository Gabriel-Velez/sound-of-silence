import "./App.css";
import data from "./data";
import Section from "./components/section";
import Video from "./components/video";
import Footer from "./components/footer";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <div className='App'>
        <Video />
        <div className='App-Wrapper'>
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
        </div>
      </div>
    </>
  );
}

export default App;
