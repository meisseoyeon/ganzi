import './wating_app.css';
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}
            <div className="App">

                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}> </div>
                    <div style={{ width: 84, height: 31, left: 153, top: 662, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                    <div style={{ left: 175, top: 671, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>신청하기</div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 신청하기</div>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}>신청하신 정보가 맞는지 확인해주세요.</div>
                    <div style={{ left: 142, top: 635, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}>위 정보로 신청하시겠습니까?</div>
                    <div style={{ width: 269, height: 0, left: 61, top: 496, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 531, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 566, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ width: 269, height: 0, left: 61, top: 601, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                    <div style={{ left: 72, top: 507, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>이름</div>
                    <div style={{ left: 288, top: 503, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>이주은</div>
                    <div style={{ left: 231, top: 542, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>010-0000-0000</div>
                    <div style={{ left: 301, top: 577, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>2명</div>
                    <div style={{ left: 72, top: 542, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>전화번호</div>
                    <div style={{ left: 72, top: 577, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>인원수</div>
                </div>

            </div>
        </div >
    );
}

export default App;
