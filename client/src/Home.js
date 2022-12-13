import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from 'react';


const Home = () => {
    const containerRef = useRef(null);

    return (
        <>
            {/* <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    tablet: {
                        smooth: true,
                    },
                }}
                watch={[]}
                containerRef={containerRef}

            ></LocomotiveScrollProvider> */}
            <div className="text-white bg-black">
                <Header />
                <Main />
                <Footer />
            </div>

        </>
    )
}

export default Home