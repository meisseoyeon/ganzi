import './artist_d.css';
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}
            <div className="App">

                <div style={{ width: 216, height: 33, left: 87, top: 664, position: 'relative' }}>

                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}>공연을 빛내줄 아티스트와 셋리스트 정보를 확인해보세요.</div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>아티스트</div>
                    <div style={{ left: 50, top: 526.16, position: 'absolute', transform: 'rotate(-20.93deg)', transformOrigin: '0 0', color: 'rgba(255, 255, 255, 0.10)', fontSize: 70, fontFamily: 'Shopping Script Demo', fontWeight: '400', wordWrap: 'break-word' }}>Sangyeon</div>
                    <img style={{ width: 168, height: 250, left: 81, top: 487, position: 'absolute' }} src="img/artist.png" />
                    <div style={{ left: 102, top: 671, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>Sangyeon</div>
                </div>

            </div>
        </div>
    );
}

export default App;
