import './location.css';
// import backgroundimg from "./x-84414.png";

function App() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(180deg, #000429 0%, #000E83 59%, rgba(56.81, 69.70, 177.37, 0.63) 100%, rgba(151.94, 162.95, 255, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            {/* <div className="image-bg"></div> */}
            <div className="App">

                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ left: 50, top: 444, position: 'absolute', color: 'white', fontSize: 10, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word' }}>부스위 위치를 확인하고, 부스를 즐겨보세요.</div>
                    <div style={{ left: 50, top: 409, position: 'absolute', color: 'white', fontSize: 28, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>부스 위치</div>
                    <div style={{ width: 251, height: 184.76, left: 70, top: 537, position: 'absolute' }}>
                        <div style={{ width: 131.60, height: 52.29, left: 119.40, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 49.68, height: 20.92, left: 144.67, top: 60.14, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 49.68, height: 20.92, left: 201.32, top: 60.14, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 121.14, height: 38.35, left: 129.86, top: 87.15, position: 'absolute', background: '#00FFF0' }} />
                        <div style={{ width: 106.33, height: 41.83, left: 144.67, top: 129.86, position: 'absolute', background: '#FF00A8' }} />
                        <div style={{ width: 20.05, height: 41.83, left: 115.04, top: 129.86, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 20.05, height: 8.72, left: 115.04, top: 176.05, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 113.30, height: 52.29, left: 0, top: 0, position: 'absolute', background: '#00FF1A' }} />
                        <div style={{ width: 51.42, height: 20.92, left: 0, top: 60.14, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 51.42, height: 20.92, left: 61.88, top: 60.14, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 113.30, height: 39.22, left: 0, top: 87.15, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <div style={{ width: 71.47, height: 37.48, left: 0, top: 134.22, position: 'absolute', background: 'rgba(255, 255, 255, 0.46)' }} />
                        <img style={{ width: 131.60, height: 52.29, left: 119.40, top: 0, position: 'absolute' }} src="https://via.placeholder.com/132x52" />
                    </div>
                    <div style={{ width: 180, height: 16, left: 110, top: 497, position: 'absolute' }}>
                        <div style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>부스 A</div>
                        <div style={{ left: 46, top: 0, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '300', wordWrap: 'break-word' }}>부스 B</div>
                        <div style={{ left: 91, top: 0, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '300', wordWrap: 'break-word' }}>부스 C</div>
                        <div style={{ left: 137, top: 0, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Pretendard', fontWeight: '300', wordWrap: 'break-word' }}>부스 D</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;