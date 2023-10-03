import { useLoaderData } from "react-router-dom";
import Banner from "./Banner"
import ShowProducts from "../../Components/ShowProducts";
import About from "../About/About";
import { useEffect, useState } from "react";

const Home = () => {
    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses')
            .then(res => res.json())
            .then(data => setSunglasses(data));
    }, [])
    return (
        <>
            <Banner />
            <div className="px-[5%] sm:px[10%]">
                <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(5, 9)} />
                <ShowProducts name={'Best sellers'} sunglasses={sunglasses.slice(0, 4)} />
            </div>
        </>
    );
};

export default Home;