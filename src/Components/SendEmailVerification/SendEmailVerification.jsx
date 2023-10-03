import { sendEmailVerification } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast';
const SendUserEmailVerification = () => {
    const {user} = useAuth()
    const handleSendVerification = () => {
        sendEmailVerification(user)
            .then(()=>{
                toast.success('Check email and verified it');
            })
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-[75vh]">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Please verified your email</p>
            <button className="btn" onClick={handleSendVerification}>Send Verification</button>
        </div>
    );
};

export default SendUserEmailVerification;