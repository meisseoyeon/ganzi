import './App.css';
// import backgroundimg from "./x-84414.png";

function App() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
      {/* <div className="image-bg"></div> */}
      <div className="App">

        <div style={{ width: 216, height: 33, left: 87, top: 664, position: 'relative' }}>
          <button style={{ width: 216, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.05)' }} />
          <div style={{ left: 80, top: 7, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Noto Serif CJK KR', fontWeight: '400', wordWrap: 'break-word' }}>부스 정보</div>

          <button style={{ width: 216, height: 33, left: 0, top: 49, position: 'absolute', background: 'rgba(255, 255, 255, 0.10)' }} />
          <div style={{ left: 80, top: 56, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Noto Serif CJK KR', fontWeight: '400', wordWrap: 'break-word' }}>공연 정보</div>

          <button style={{ width: 216, height: 33, left: 0, top: 98, position: 'absolute', background: 'rgba(255, 255, 255, 0.15)' }} />
          <div style={{ left: 67, top: 105, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Noto Serif CJK KR', fontWeight: '400', wordWrap: 'break-word' }}>웨이팅 서비스</div>

          <button style={{ width: 216, height: 33, left: 0, top: 147, position: 'absolute', background: 'rgba(255, 255, 255, 0.20)' }} />
          <div style={{ left: 74, top: 154, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Noto Serif CJK KR', fontWeight: '400', wordWrap: 'break-word' }}>만든 사람들</div>
        </div>

      </div>
    </div>
  );
}

export default App;
