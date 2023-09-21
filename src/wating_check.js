import './wating_check.css';
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}
            <div className="App">

                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}> </div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 신청하기</div>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>웨이팅 신청에 필요한 정보를 기입해주세요.</div>
                    <div style={{ width: 262, height: 35, left: 64, top: 494, position: 'absolute' }}>
                        <div style={{ width: 262, height: 35, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                        <div style={{ left: 19, top: 12, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>이름을 입력해주세요.</div>
                    </div>
                    <div style={{ width: 262, height: 35, left: 64, top: 551, position: 'absolute' }}>
                        <div style={{ width: 262, height: 35, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                        <div style={{ left: 19, top: 12, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>전화번호를 입력해주세요. ex) 010-0000-0000</div>
                    </div>
                    <div style={{ width: 262, height: 35, left: 64, top: 608, position: 'absolute' }}>
                        <div style={{ width: 262, height: 35, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                        <div style={{ left: 19, top: 12, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>인원수를 입력해주세요.</div>
                        <div style={{ width: 37, height: 15, left: 207, top: 10, position: 'absolute' }}>
                            <div style={{ width: 15, height: 15, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                            <div style={{ width: 15, height: 15, left: 22, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                            <div style={{ width: 29, height: 7, left: 4, top: 4, position: 'absolute' }}>
                                <div style={{ width: 7, height: 0, left: 0, top: 3.89, position: 'absolute', border: '0.78px white solid' }}></div>
                                <div style={{ width: 7, height: 0, left: 22, top: 4, position: 'absolute', border: '0.78px white solid' }}></div>
                                <div style={{ width: 7, height: 0, left: 3.11, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '0.78px white solid' }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 84, height: 31, left: 153, top: 687, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                    <div style={{ left: 175, top: 696, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>신청하기</div>
                </div>

            </div>
        </div >
    );
}

export default App;
