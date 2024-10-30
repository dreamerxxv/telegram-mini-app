
import { client } from "../client";
import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import Trophy from "../assets/images/Trophy.png";
import Energy from "../assets/images/Energy.png";
import Point from "../assets/images/Point.png";
import bgHome from "../assets/images/bgHome.jpg";
import rlhGame from "../assets/images/rlhGame.jpg";
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

const Home = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#f0f0f0', color: '#333' }}>

            <div className="w-full max-w-md h-full bg-white border border-gray-200 shadow dark:bg-black dark:border-gray-700">

                <div className="relative w-full h-[200px]">
                    {/* Gambar Latar Belakang */}
                    <img src={bgHome} className="w-full h-full object-cover" alt="" />

                    <div className="pl-4">
                        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center w-5/6 px-4 py-1 rounded-full dark:bg-black dark:bg-opacity-50 dark:text-white border border-white">

                            <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" />
                                <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                            </svg>

                            Level 1
                        </span>
                    </div>

                    {/* Overlay Gradasi Gelap */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                </div>


                <div className="sm:p-4 p-4">
                    <div className="flex items-center justify-center mb-3">

                        {/* <a href="#" className="flex items-center p-1.5 mr-2 text-xs font-normal text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-500 dark:text-white">
                            <img className="w-7 h-7 rounded" src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
                                alt="Rounded avatar" />

                            <div className="font-sm dark:text-white ml-1">
                                <div>Jese Leos</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Join August 2014</div>
                            </div>
                        </a> */}

                        <a href="#" className="flex w-full items-center mt-4 justify-center rounded-lg bg-gray-900 px-5 py-1 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            <svg className="w-6 h-6 text-blue-500 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clip-rule="evenodd" />
                            </svg>

                            <ConnectButton client={client} connectButton={{ label: 'Connect Your Wallet', style: { backgroundColor: 'transparent', height: '5px', color: 'white', fontWeight: '500', fontSize: '14px', justifyContent: 'left', width: '20px' } }} />

                        </a>
                    </div>

                    <div className="grid grid-cols-3 items-center">

                        <div className="text-center items-center border mr-2 border-gray-600 py-1 px-3 rounded-xl mb-3">
                            <div className="flex items-center">
                                <img src={Point} className="w-7 h-7 object-center" alt="daily-reward" />
                                <span className='text-white text-sm font-semibold'>Point</span>
                            </div>
                        </div>

                        <div className="text-center items-center border mr-2 border-gray-600 py-1 px-3 rounded-xl mb-3">
                            <div className="flex items-center">
                                <img src={Energy} className="w-7 h-7 object-center" alt="daily-reward" />
                                <span className='text-white text-sm font-semibold'>Energy</span>
                            </div>
                        </div>

                        <div className="text-center items-center border mr-2 border-gray-600 py-1 px-3 rounded-xl mb-3">
                            <div className="flex items-center">
                                <img src={Trophy} className="w-7 h-7 object-center" alt="daily-reward" />
                                <span className='text-white text-sm font-semibold'>Trophy</span>
                            </div>
                        </div>

                    </div>

                    <div className="items-center justify-center ">
                        <h2 className='text-white font-bold text-lg mb-2'>Rose Letter Heart Game</h2>
                        <div className="relative inline-block">
                            <Link to="/rlhGame" className="block">
                                <img src={rlhGame} className="object-center rounded-lg" alt="rlh-game" />
                                <Link to="/rlhGame" className='flex absolute bottom-2 right-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center'>
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd" />
                                    </svg>
                                    Play Game
                                </Link>
                            </Link>
                        </div>
                        {/* <img src={puzzleGame} className="object-center rounded-lg" alt="rlh-game" /> */}

                    </div>

                    {showModal && (
                        <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <div style={{ background: 'white', padding: '1rem', maxWidth: '300px', textAlign: 'center' }}>
        <h2>Claim 10 Tokens!</h2>
        <p>You Won and can claim 10 tokens to your points</p>
    </div> */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button onClick={() => setShowModal(false)} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="progress-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-4 md:p-5 mt-5">

                                    <div className="flex items-center justify-between mb-1 text-gray-500 dark:text-gray-400">
                                        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--twemoji size-9" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle fill="#F4900C" cx="18" cy="19" r="17"></circle><circle fill="#FFCC4D" cx="18" cy="17" r="17"></circle><circle fill="#FFE8B6" cx="18" cy="18" r="14"></circle><circle fill="#FFAC33" cx="18" cy="17" r="14"></circle><path fill="#FFE8B6" d="M9.543 10.856c0-.545.535-.763.535-.763l7.878-3.7l7.953 3.7s.548.122.548.767v.641H9.543v-.645z"></path><path fill="#F4900C" d="M25.929 12.836c0-.584-.505-1.057-1.127-1.057H11.129c-.623 0-1.057.473-1.057 1.057c0 .397.204.739.529.92v.666h2.114v-.529h2.114v.529h2.114v-.529h2.114v.529h2.114v-.529h2.114v.529H25.4v-.693c.317-.188.529-.517.529-.893zM27.514 24a.793.793 0 0 1-.793.793H9.279a.793.793 0 1 1 0-1.586h17.443c.437 0 .792.355.792.793z"></path><path fill="#F4900C" d="M26.457 12.2a.529.529 0 0 1-.529.529H10.071a.53.53 0 0 1 0-1.058l15.857.003a.527.527 0 0 1 .529.526zm-14.271.614h11.629V14H12.186z"></path><path fill="#FFD983" d="M12.714 20.829c0 .584-.316 1.057-.705 1.057h-.705c-.389 0-.705-.473-.705-1.057v-8.014c0-.584.316-1.057.705-1.057h.705c.389 0 .705.473.705 1.057v8.014zm12.686 0c0 .584-.315 1.057-.705 1.057h-.705c-.389 0-.705-.473-.705-1.057v-8.014c0-.584.315-1.057.705-1.057h.705c.389 0 .705.473.705 1.057v8.014zm-8.457 0c0 .584-.316 1.057-.705 1.057h-.705c-.389 0-.705-.473-.705-1.057v-8.014c0-.584.316-1.057.705-1.057h.705c.389 0 .705.473.705 1.057v8.014zm4.228 0c0 .584-.316 1.057-.705 1.057h-.704c-.389 0-.705-.473-.705-1.057v-8.014c0-.584.316-1.057.705-1.057h.704c.389 0 .705.473.705 1.057v8.014z"></path><path fill="#FFCC4D" d="M25.929 21.357c0 .584-.473 1.057-1.057 1.057H11.129a1.057 1.057 0 1 1 0-2.114h13.743c.583 0 1.057.473 1.057 1.057z"></path><path fill="#FFD983" d="M26.986 22.414c0 .584-.473 1.057-1.057 1.057H10.071a1.057 1.057 0 1 1 0-2.114h15.857c.584 0 1.058.473 1.058 1.057z"></path><path fill="#FFD983" d="M27.514 23.207a.793.793 0 0 1-.793.793H9.279a.793.793 0 1 1 0-1.586h17.443c.437 0 .792.355.792.793z"></path><path fill="#FFCC4D" d="M25.929 12.286c0-.584-.505-1.057-1.127-1.057H11.129c-.623 0-1.057.473-1.057 1.057c0 .397.204.739.529.92v.666h2.114v-.529h2.114v.529h2.114v-.529h2.114v.529h2.114v-.529h2.114v.529H25.4v-.693c.317-.188.529-.517.529-.893z"></path><path fill="#FFD983" d="M9.543 11.463c0-.545.535-.763.535-.763L17.956 7l7.953 3.7s.548.122.548.767v.291H9.543v-.295z"></path><path fill="#FFAC33" d="M18 8.343s-5.455 2.571-5.999 2.803c-.545.231-.363.611.001.611h11.97c.562 0 .429-.429-.017-.661C23.509 10.865 18 8.343 18 8.343z"></path><path fill="#FFD983" d="M26.457 11.757a.529.529 0 0 1-.529.529H10.071a.53.53 0 0 1 0-1.058l15.857.003a.527.527 0 0 1 .529.526z"></path></g>
                                        </svg>

                                        <span className="text-sm font-semibold text-gray-900 dark:text-white ml-2">You earned 10 Tokens!</span>
                                    </div>
                                    <div className="flex items-center mt-6 space-x-4 rtl:space-x-reverse">
                                        <button data-modal-hide="progress-modal" type="button" className="w-full text-white bg-yellow-700 hover:bg-yeblackocus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                                            Claim Tokens
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Menu Bottom */}
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Home