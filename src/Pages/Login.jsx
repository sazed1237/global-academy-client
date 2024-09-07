import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const Login = () => {


    const { googleSingIn, facebookSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const { user } = useContext(AuthContext)

    if (user) {
        return navigate('/')
    }

    const handleGoogleSingIn = () => {
        setLoading(true)
        googleSingIn()
            .then(result => {
                const loggedUser = result.user;
                console.log("user in social", loggedUser)

                // user entry in the database
                const userInfo = {
                    name: loggedUser?.displayName,
                    email: loggedUser?.email,
                    photoURL: loggedUser?.photoURL,
                    role: "GENERAL"
                }

                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res?.data)
                        toast.success('Login Successful')
                        navigate('/')
                    })
            })
            .catch((error) => {
                toast.error(error.message || "An error occurred during sign-in");
                console.error('Error during sign-in:', error);
            });
    }


    const handleFacebookSignIn = async () => {
        facebookSignIn()
            .then((result) => {
                const user = result.user;
                console.log('User info:', user);

                // The access token can be used to call the Graph API
                const accessToken = result._tokenResponse.oauthAccessToken;
                console.log(accessToken)

                // Facebook Graph API URL to get the profile picture
                const pictureURL = `https://graph.facebook.com/${user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`;

                // console.log(pictureURL)

                // user entry in the database
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: pictureURL,
                    role: "GENERAL"
                }

                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data)
                        toast.success('Login Successful')
                        navigate('/')
                    })

            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            });
    }


    return (
        <div className=' w-full h-screen mx-auto flex items-center justify-center lg:mt-32 mt-20 text-white'>
            <div className='max-w-xl relative w-full bg-BgSecondaryColor p-5 py-7 md:py-16 rounded-md mx-2'>
                <h2 className='text-center lg:text-4xl text-3xl font-bold text-primaryColor'>Login!</h2>

                <div className='text-center pt-10 space-y-5 md:w-8/12 mx-auto'>
                    <div className=' flex border rounded-full pl-1 py-1 '>
                        <BsFacebook className='text-2xl text-blue-600 bg-white rounded-full'></BsFacebook>
                        <button onClick={handleFacebookSignIn} className=' flex-1 justify-center text-center hover:text-primaryColor duration-200 hover:scale-105 text-white items-center'> Continue with Facebook </button>
                    </div>
                    <div className='flex border rounded-full pl-1 py-1'>
                        <FcGoogle className='text-2xl'></FcGoogle>
                        <button onClick={handleGoogleSingIn} className=' flex-1 justify-center hover:text-primaryColor duration-200 hover:scale-105 text-white text-center items-center'> Continue with Gmail </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;