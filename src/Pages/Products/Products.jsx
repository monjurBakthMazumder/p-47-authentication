import ShowProducts from "../../Components/ShowProducts";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SendUserEmailVerification from "../../Components/SendEmailVerification/SendEmailVerification";

const Products = () => {
    const {user} = useAuth()

    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses')
            .then(res => res.json())
            .then(data => setSunglasses(data));
    }, [])

    return (
        <>
        {
            !user?.emailVerified
            ?
            <SendUserEmailVerification/>
            :
            <>
                <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />
                <ShowProducts name={'Featured Products'} sunglasses={sunglasses} />
            </>
        }
        </>
    );
};

export default Products;