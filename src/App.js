import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import Section from "./components/section";

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
