import './show.css';
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}
            <div className="App">
                <div style={{ width: "100%", height: "100%", position: "relative" }}>

                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>원하는 아티스트의 공연 시간을 확인하고 즐겨보세요.</div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>공연 시간표</div>
                    <div style={{ width: 34, height: 34, left: 303, top: 409, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                    <div style={{ width: 13, height: 0, left: 313, top: 426, position: 'absolute', border: '1px white solid' }}></div>
                    <div style={{ left: 62, top: 513, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>10.5</div>
                    <div style={{ width: 12, height: 12, left: 100, top: 516, position: 'absolute' }}>
                        <div style={{ width: 12, height: 12, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                    </div>
                    <div style={{ width: 269, height: 0, left: 61, top: 543, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 578, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 613, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 648, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 683, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ left: 72, top: 554, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>10:00 - 18:00</div>
                    <div style={{ left: 174, top: 554, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>룰루랄라 즐거운 멋쟁이사자처럼</div>
                    <div style={{ left: 173, top: 589, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>아 근데 UI 짜기 넘 힘들당 우헤헤</div>
                    <div style={{ left: 191, top: 624, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>하지만 이왕 한거 잘해보겠음</div>
                    <div style={{ left: 256, top: 659, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>울팀 홧팅이얌</div>
                    <div style={{ left: 72, top: 589, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>18:00 - 21:00</div>
                    <div style={{ left: 72, top: 624, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>18:00 - 22:00</div>
                    <div style={{ left: 72, top: 659, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>22:00 - 24:00</div>
                    <div style={{ left: 50, top: 850, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>공연을 빛내줄 아티스트와 셋리스트 정보를 확인해보세요.</div>
                    <div style={{ left: 50, top: 815, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>아티스트</div>
                    <div style={{ width: 34, height: 34, left: 303, top: 815, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                    <div style={{ width: 13, height: 0, left: 313, top: 832, position: 'absolute', border: '1px white solid' }}></div>
                    <div style={{ left: 50, top: 932.16, position: 'absolute', transform: 'rotate(-20.93deg)', transformOrigin: '0 0', color: 'rgba(255, 255, 255, 0.10)', fontSize: 70, fontFamily: 'Shopping Script Demo', fontWeight: '400', wordWrap: 'break-word' }}>Sangyeon</div>
                    <img src="img/artist.png" style={{ width: 168, height: 250, left: 81, top: 893, position: 'absolute' }} />
                    <div style={{ left: 102, top: 1077, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>Sangyeon</div>
                </div>
            </div>

        </div>
    );
}

export default App;
