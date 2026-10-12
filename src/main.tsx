import './styles.css';

const SOURCE_SITE = 'https://lunarossa.framer.website/';

function App() {
  return (
    <main className="mirror-shell" aria-label="Creme Russian Bakery mirror">
      <iframe
        className="mirror-frame"
        src={SOURCE_SITE}
        title="Luna Rossa"
        allow="fullscreen"
      />
    </main>
  );
}

export default App;
