import './reserv_info.css';

// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}

            <div className="App">

                <div style={{ width: '100%', height: '100%', position: 'relative' }}>


                    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)' }}>
                        <div style={{ left: 50, top: 850, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>각 부스별 웨이팅 현황을 실시간으로 확인해보세요.</div>
                        <div style={{ left: 50, top: 815, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>부스별 웨이팅 현황</div>
                        <div style={{ left: 61, top: 899, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>A동</div>
                        <div style={{ width: 34, height: 34, left: 303, top: 815, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                        <div style={{ width: 13, height: 0, left: 313, top: 832, position: 'absolute', border: '1px white solid' }}></div>
                        <div style={{ width: 324, height: 226, left: 33, top: 491, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 28 }} />
                        <div style={{ width: 113, height: 113, left: 50, top: 507, position: 'absolute', borderRadius: 28, border: '1px white solid' }} />
                        <div style={{ width: 296, height: 28, left: 47, top: 673, position: 'absolute', background: 'white', borderRadius: 15, border: '1px white solid' }} />
                        <div style={{ width: 296, height: 28, left: 47, top: 633, position: 'absolute', borderRadius: 15, border: '1px white solid' }} />
                        <div style={{ left: 176, top: 527, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>캡틴쭈와 얼라들의 떡볶이집</div>
                        <div style={{ left: 162, top: 681, position: 'absolute', color: '#FF9900', fontSize: 11, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 취소하기</div>
                        <div style={{ left: 162, top: 641, position: 'absolute', color: 'white', fontSize: 11, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>웨이팅 변경하기</div>
                        <div style={{ left: 188, top: 553, position: 'absolute', color: 'white', fontSize: 9, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>예상 대기시간 : 15분</div>
                        <div style={{ left: 188, top: 570, position: 'absolute', color: 'white', fontSize: 9, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>대기순번 : 10번</div>
                        <div style={{ width: 25, height: 25, left: 316, top: 591, position: 'absolute' }}>
                            <div style={{ width: 25, height: 25, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                            <img style={{ width: 15, height: 15, left: 5, top: 5, position: 'absolute' }} src="https://via.placeholder.com/15x15" />
                        </div>
                        <div style={{ width: 11, height: 0, left: 184, top: 553, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid' }}></div>
                        <div style={{ width: 11, height: 0, left: 184, top: 570, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid' }}></div>
                        <div style={{ width: 269, height: 0, left: 61, top: 927, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                        <div style={{ width: 269, height: 0, left: 61, top: 962, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                        <div style={{ width: 269, height: 0, left: 61, top: 997, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                        <div style={{ width: 269, height: 0, left: 61, top: 1032, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                        <div style={{ width: 269, height: 0, left: 61, top: 1067, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                        <div style={{ width: 269, height: 0, left: 61, top: 1101, position: 'absolute', border: '0.30px rgba(255, 255, 255, 0.50) solid' }}></div>
                        <div style={{ left: 72, top: 938, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>홍디 귀신의 집</div>
                        <div style={{ left: 208, top: 938, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>예약 대기인원 : 12명(팀)</div>
                        <div style={{ left: 213, top: 973, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>예약 대기인원 : 2명(팀)</div>
                        <div style={{ left: 213, top: 1008, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>예약 대기인원 : 5명(팀)</div>
                        <div style={{ left: 215, top: 1043, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>예약 대기인원 : 1명(팀)</div>
                        <div style={{ left: 214, top: 1077, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>예약 대기인원 : 7명(팀)</div>
                        <div style={{ left: 72, top: 973, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>장지 무당집</div>
                        <div style={{ left: 72, top: 1008, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>식영 푸딩만들기 체험</div>
                        <div style={{ left: 72, top: 1043, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>응급 뿅뿅오락실</div>
                        <div style={{ left: 72, top: 1077, position: 'absolute', color: 'rgba(255, 255, 255, 0.80)', fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}>안광 렌즈 나눔 부스</div>
                        <div style={{ width: 12, height: 12, left: 91, top: 902, position: 'absolute' }}>
                            <div style={{ width: 12, height: 12, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)', borderRadius: 9999 }} />
                        </div>
                        <div style={{ left: 50, top: 453, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>나의 예약 정보를 한눈에 확인하세요.</div>
                        <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>나의 예약 정보</div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default App;
