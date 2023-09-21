import "./booth_manage.css";
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                background:
                    "linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
            }}
        >
            {/* <div className="image-bg"></div> */}
            <div className="App">

                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}> </div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>부스 관리</div>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>자신의 부스 정보를 관리/수정할 수 있습니다.</div>
                    <div style={{ width: 324, height: 226, left: 33, top: 491, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 28 }} />
                    <div style={{ width: 113, height: 113, left: 50, top: 507, position: 'absolute', borderRadius: 28, border: '1px white solid' }} />
                    <div style={{ width: 297, height: 28, left: 47, top: 673, position: 'absolute', background: 'white', borderRadius: 15, border: '1px white solid' }} />
                    <div style={{ width: 297, height: 28, left: 47, top: 633, position: 'absolute', borderRadius: 15, border: '1px white solid' }} />
                    <div style={{ left: 176, top: 527, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>캡틴쭈와 얼라들의 떡볶이집</div>
                    <div style={{ left: 152, top: 681, position: 'absolute', color: '#FF9900', fontSize: 11, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 현황 확인하기</div>
                    <div style={{ left: 157, top: 641, position: 'absolute', color: 'white', fontSize: 11, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>부스 정보 변경하기</div>
                    <div style={{ left: 188, top: 553, position: 'absolute', color: 'white', fontSize: 9, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>예상 대기시간 : 15분</div>
                    <div style={{ left: 188, top: 570, position: 'absolute', color: 'white', fontSize: 9, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>대기순번 : 10번</div>
                    <div style={{ width: 25, height: 25, left: 316, top: 591, position: 'absolute' }}>
                        <div style={{ width: 25, height: 25, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                        <img style={{ width: 15, height: 15, left: 5, top: 5, position: 'absolute' }} src="https://via.placeholder.com/15x15" />
                    </div>
                    <div style={{ width: 11, height: 0, left: 184, top: 553, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid' }}></div>
                    <div style={{ width: 11, height: 0, left: 184, top: 570, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid' }}></div>
                </div>

            </div >
        </div >
    );
}

export default App;
