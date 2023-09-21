import './booth_change.css';
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}
            <div className="App">

                <div style={{ width: '100%', height: '100%', position: 'relative', }}>


                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', lineHeight: 17.83, wordWrap: 'break-word' }}>오싹한 공포체험을 하고 싶다면 귀신의 집으로!</div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>홍디 귀신의 집</div>
                    <div style={{ width: 322, height: 597, left: 34, top: 491, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 28 }} />
                    <div style={{ width: 296, height: 28, left: 48, top: 1022, position: 'absolute', background: 'white', borderRadius: 15, border: '1px white solid' }} />
                    <div style={{ width: 296, height: 28, left: 45, top: 982, position: 'absolute', borderRadius: 15, border: '1px white solid' }} />
                    <div style={{ left: 163, top: 1030, position: 'absolute', color: '#FF9900', fontSize: 11, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 신청하기</div>
                    <div style={{ left: 160, top: 990, position: 'absolute', color: 'white', fontSize: 11, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 변경하기</div>
                    <div style={{ left: 67, top: 524, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>운영시간</div>
                    <div style={{ left: 67, top: 555, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>위치</div>
                    <div style={{ left: 67, top: 757, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>메뉴</div>
                    <div style={{ left: 82, top: 796, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>1인</div>
                    <div style={{ left: 82, top: 825, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>2인</div>
                    <div style={{ left: 82, top: 853, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>3인</div>
                    <div style={{ left: 82, top: 881, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>4인</div>
                    <div style={{ left: 82, top: 909, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>5인</div>
                    <div style={{ width: 255, height: 153, left: 67, top: 586, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)' }} />
                    <div style={{ left: 166, top: 655, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>지도 이미지</div>
                    <div style={{ width: 255, height: 0, left: 67, top: 780, position: 'absolute', border: '0.30px white solid' }}></div>
                    <div style={{ width: 255, height: 0, left: 67, top: 940, position: 'absolute', border: '0.30px white solid' }}></div>
                    <div style={{ width: 34, height: 34, left: 303, top: 409, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                    <img style={{ width: 15, height: 15, left: 312, top: 418, position: 'absolute' }} src="https://via.placeholder.com/15x15" />
                    <div style={{ width: 88, height: 22, left: 241, top: 520, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ width: 88, height: 22, left: 241, top: 551, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ width: 88, height: 22, left: 241, top: 792, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ width: 88, height: 22, left: 241, top: 821, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ width: 88, height: 22, left: 241, top: 849, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ width: 88, height: 22, left: 241, top: 877, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ width: 88, height: 22, left: 241, top: 905, position: 'absolute', background: 'rgba(255, 153, 0, 0.43)', borderRadius: 2 }} />
                    <div style={{ left: 247, top: 523, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>15:00 - 21:00</div>
                    <div style={{ left: 253, top: 554, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>박애관 526호</div>
                    <div style={{ left: 264, top: 795, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>3000원</div>
                    <div style={{ left: 264, top: 824, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>6000원</div>
                    <div style={{ left: 264, top: 852, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>9000원</div>
                    <div style={{ left: 259, top: 880, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>12000원</div>
                    <div style={{ left: 259, top: 908, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>15000원</div>
                    <div style={{ width: 37, height: 15, left: 271, top: 756, position: 'absolute' }}>
                        <div style={{ width: 15, height: 15, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                        <div style={{ width: 15, height: 15, left: 22, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                        <div style={{ width: 29, height: 7, left: 4, top: 4, position: 'absolute' }}>
                            <div style={{ width: 7, height: 0, left: 0, top: 3.89, position: 'absolute', border: '0.78px white solid' }}></div>
                            <div style={{ width: 7, height: 0, left: 22, top: 4, position: 'absolute', border: '0.78px white solid' }}></div>
                            <div style={{ width: 7, height: 0, left: 3.11, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '0.78px white solid' }}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;