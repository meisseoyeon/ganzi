import "./manager.css";
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
                    <div style={{ width: 262, height: 42, left: 64, top: 531, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                    <div style={{ width: 84, height: 31, left: 153, top: 596, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 6 }} />
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}> </div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>관리자 로그인</div>
                    <div style={{ left: 83, top: 546, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>암호를 입력해주세요.</div>
                    <div style={{ left: 184, top: 605, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>확인</div>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>부스 관리자용 로그인 페이지입니다. 부여받은 암호를 입력해주세요.</div>
                </div>

            </div >
        </div >
    );
}

export default App;
