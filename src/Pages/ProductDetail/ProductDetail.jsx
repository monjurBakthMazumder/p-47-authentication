import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SendUserEmailVerification from "../../Components/SendEmailVerification/SendEmailVerification";

const ProductDetail = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }

    const [sunglass, setSunglass] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses/${id}`)
            .then(res => res.json())
            .then(data => setSunglass(data));
    }, [id])

    return (
        <>
        {
            !user?.emailVerified
            ?
            <SendUserEmailVerification/>
            :
            <>
                <img src="https://capricathemes.com/opencart/OPC09/OPC090220/image/cache/catalog/main-banner-1-1903x680.jpg" alt="" />
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 px-[5%] sm:px-[10%] min-h-[75vh]">
                    <div className="md:w-1/3">
                        <img src={sunglass.image} alt="" className="w-full"/>
                    </div>
                    <div className="md:w-2/3">
                        <div className="p-4">
                            <h1 className="text-5xl font-bold mb-8">{sunglass.name}</h1>
                            <p>{sunglass.description}</p>
                            <p>GKB Optical online store brings in the best assortment of sunglasses. You can get a sunglass based on your lifestyle, fashion and requirements. </p>

                            <h1 className="text-4xl font-bold my-4">${sunglass.price}</h1>
                            <br />
                            <button className="btn" onClick={handleGoBack}>Go back</button>

                        </div>
                    </div>
                </div>
            </>
        }
        </>
    );
};

export default ProductDetail;