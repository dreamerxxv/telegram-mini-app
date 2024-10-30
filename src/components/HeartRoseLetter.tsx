
import { useState } from "react";
import Menu from "./Menu";

type Choice = 'Heart' | 'Rose' | 'Letter' // type property of game
type Result = 'Win' | 'Lose' | 'Tie' // the result of the game

const choises: Choice[] = ['Heart', 'Rose', 'Letter']

const getComputerChoice = (): Choice => choises[Math.floor(Math.random() * choises.length)];
const determineWiner = (playerChoice: Choice, computerChoice: Choice): Result => {
    if (playerChoice === computerChoice) return 'Tie'
    if (
        (playerChoice === 'Heart' && computerChoice === 'Letter') ||
        (playerChoice === 'Letter' && computerChoice === 'Rose') ||
        (playerChoice === 'Rose' && computerChoice === 'Heart')
    ) {
        return 'Win'
    }

    return 'Lose'
}

interface GameResult {
    playerChoice: Choice
    computerChoice: Choice
    gameResult: Result
}

export default function HeartRoseLetter() {
    

    const [result, setResult] = useState<GameResult | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showPrize, setShowPrize] = useState<boolean>(false)
    const [prizeClaimed, setPrizeClaimed] = useState<boolean>(false)

    const handleChoice = (playerChoice: Choice) => {
        const computerChoice = getComputerChoice()
        const gameResult = determineWiner(playerChoice, computerChoice)
        setResult({ playerChoice, computerChoice, gameResult })
        setShowPrize(gameResult === 'Win')
    }

    const resetGame = () => {
        setResult(null)
        setShowPrize(false)
        setPrizeClaimed(false)
    }

    const claimPrize = () => {
        setShowModal(true)
    }

    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#f0f0f0', color: '#333' }}>

            <div className="w-full max-w-sm h-full p-4 bg-white border border-gray-200 shadow sm:p-4 dark:bg-black dark:border-black">

                {/* <div className="flex items-center justify-center mb-3">

                    <a href="#" className="flex items-center p-1.5 mr-2 text-xs font-normal text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-500 dark:text-white">
                        <img className="w-7 h-7 rounded" src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
                            alt="Rounded avatar" />

                        <div className="font-sm dark:text-white ml-1">
                            <div>Jese Leos</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Join August 2014</div>
                        </div>
                    </a>

                    <a href="#" className="flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-500 dark:text-white">
                        <svg className="w-6 h-6 text-blue-500 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clip-rule="evenodd" />
                        </svg>

                        <ConnectButton client={client} connectButton={{ label: 'Connect Your Wallet', style: { backgroundColor: 'transparent', height: '5px', color: 'white', fontWeight: '500', fontSize: '14px', justifyContent: 'left', width: '20px' } }} />

                    </a>
                </div> */}

                {/* <div className="grid grid-cols-3 items-center">

                    <div className="text-center items-center border mr-2 border-gray-600 py-2 px-3 rounded-lg mb-3">
                        <div className="flex flex-col items-center">
                            <img src={dailyReward} className="w-9 h-9 object-center" alt="daily-reward" />
                            <span className="text-xs font-normal text-gray-900 dark:text-gray-300">Daily Reward </span>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">20:9:21</span>
                        </div>
                    </div>

                    <div className="text-center items-center border mr-2 border-gray-600 py-2 px-3 rounded-lg mb-3">
                        <div className="flex flex-col items-center">
                            <img src={dailyCombo} className="w-10 h-10 object-center" alt="daily-reward" />
                            <span className="text-xs font-normal text-gray-900 dark:text-gray-300">Daily Combo </span>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">20:9:21</span>
                        </div>
                    </div>

                    <div className="text-center items-center border border-gray-600 py-2 px-3 rounded-lg mb-3">
                        <div className="flex flex-col items-center">
                            <img src={luckySpin} className="w-9 h-9 object-center" alt="daily-reward" />
                            <span className="text-xs font-normal text-gray-900 dark:text-gray-300">Lucky Spin </span>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">20:9:21</span>
                        </div>
                    </div>
                </div> */}
                        <h1 className='text-white font-bold text-lg mb-5'>Rose Letter Heart Game</h1>

                {!result ? (
                    <div className="p-4 bg-gray-900 rounded-xl">
                        <h1 className="text-white mt-3 font-mono">Choose Your Option</h1>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '2rem' }}>
                            {choises.map((choice) => (
                                <button key={choice} onClick={() => handleChoice(choice)}
                                    type="button" className="text-pink-500 border border-pink-500 hover:bg-blue-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-pink-700 dark:text-pink-500 dark:hover:text-white dark:focus:ring-pink-600 dark:hover:bg-gray-700">

                                    {
                                        choice === 'Heart' ?
                                            <svg className="w-7 h-7 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                            </svg>

                                            :

                                            choice === 'Rose' ?
                                                <svg height="28px" width="28px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ff9494" stroke="#ff9494"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g>
                                                    <path className="st0" d="M401.388,111.028c0,0,39.384-33.33,0-78.779C372.815-0.726,263.133-31.38,211.724,64.076 c-13.953-14.534-36.087-29.507-64.853-22.737c-51.509,12.12-51.509,75.749-57.569,93.929c-39.39,3.03-51.509,45.449-51.509,45.449 c78.779,48.479,73.73,124.702,73.73,173.726C111.523,441.459,182.065,512,269.08,512c11.635,0,22.944-1.349,33.857-3.74 c-19.399-107.492-74.761-198.664-127.223-266.174c-44.904-57.782-106.61-123.992,36.809-174.483 c-87.892,55.143-66.315,93.194-37.472,131.366c-3.414-50.066,33.128-92.356,100.089-92.994 c105.038-1.006,108.068,77.773,103.018,102.782c-1.414,6.994-1,13.457-2.669,19.209c35.004-21.21,65.47-37.318,71.341-53.308 c1.42,30.56-55.444,56.492-89.106,80.187c-2.094,1.74-4.296,3.397-6.651,4.912c-45.219,35.152-66.564,83.146-75.116,107.824 c23.4,54.018,35.928,102.876,35.987,138.36c66.156-18.689,114.694-79.359,114.694-151.498c0-55.557,29.283-167.666,44.432-185.846 C486.22,150.417,443.801,95.878,401.388,111.028z"></path> <path className="st0" d="M262.767,132.995c-70.446,3.788-79.234,81.573-51.965,115.66c20.138,30.263,37.614,60.776,52.041,90.306 c11.286-29.316,40.034-60.445,64.31-80.222c-2.982-0.236-70.446,21.21-88.626,0.758 C404.418,255.708,353.494,128.119,262.767,132.995z M307.95,214.272c-14.392,13.126-39.106,18.014-40.638,13.41 c-0.757-2.272,13.635-21.21-12.12-21.21c-15.582,0-31.815,0.462-31.815-9.09c-2.272-13.635,19.831-25.944,35.98-26.512 C302.157,169.354,324.124,200.412,307.95,214.272z"></path> </g> </g>
                                                </svg>

                                                :

                                                <svg className="w-7 h-7 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                                                </svg>

                                    }
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="p-4 bg-gray-900 rounded-xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className=" grid grid-cols-3 lg:grid-cols-3 mt-5 gap-14">
                            {/* Player  */}
                            <div>
                                <p className="text-md font-mono font-normal text-white">Player</p>
                                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    { result.playerChoice === 'Heart' ? (
                                        <svg className="w-7 h-7 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                        </svg>
                                    ) : result.playerChoice === 'Rose' ? (
                                        <svg height="28px" width="28px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ff9494" stroke="#ff9494"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g>
                                            <path className="st0" d="M401.388,111.028c0,0,39.384-33.33,0-78.779C372.815-0.726,263.133-31.38,211.724,64.076 c-13.953-14.534-36.087-29.507-64.853-22.737c-51.509,12.12-51.509,75.749-57.569,93.929c-39.39,3.03-51.509,45.449-51.509,45.449 c78.779,48.479,73.73,124.702,73.73,173.726C111.523,441.459,182.065,512,269.08,512c11.635,0,22.944-1.349,33.857-3.74 c-19.399-107.492-74.761-198.664-127.223-266.174c-44.904-57.782-106.61-123.992,36.809-174.483 c-87.892,55.143-66.315,93.194-37.472,131.366c-3.414-50.066,33.128-92.356,100.089-92.994 c105.038-1.006,108.068,77.773,103.018,102.782c-1.414,6.994-1,13.457-2.669,19.209c35.004-21.21,65.47-37.318,71.341-53.308 c1.42,30.56-55.444,56.492-89.106,80.187c-2.094,1.74-4.296,3.397-6.651,4.912c-45.219,35.152-66.564,83.146-75.116,107.824 c23.4,54.018,35.928,102.876,35.987,138.36c66.156-18.689,114.694-79.359,114.694-151.498c0-55.557,29.283-167.666,44.432-185.846 C486.22,150.417,443.801,95.878,401.388,111.028z"></path> <path className="st0" d="M262.767,132.995c-70.446,3.788-79.234,81.573-51.965,115.66c20.138,30.263,37.614,60.776,52.041,90.306 c11.286-29.316,40.034-60.445,64.31-80.222c-2.982-0.236-70.446,21.21-88.626,0.758 C404.418,255.708,353.494,128.119,262.767,132.995z M307.95,214.272c-14.392,13.126-39.106,18.014-40.638,13.41 c-0.757-2.272,13.635-21.21-12.12-21.21c-15.582,0-31.815,0.462-31.815-9.09c-2.272-13.635,19.831-25.944,35.98-26.512 C302.157,169.354,324.124,200.412,307.95,214.272z"></path> </g> </g>
                                        </svg>
                                    ) : result.playerChoice === 'Letter' ? (
                                        <svg className="w-7 h-7 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                                        </svg>
                                    ) : null }
                                    
                                </div>
                                <p className="text-md font-normal font-mono text-white">{result.playerChoice}</p>
                            </div>
                            {/* Result */}
                            <div>
                                <p className="text-md font-normal font-mono mt-10 text-white">You {result.gameResult}</p>
                            </div>
                            {/* Computer */}
                            <div>
                                <p className="text-md font-normal font-mono text-white">Computer</p>
                                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                { result.computerChoice === 'Heart' ? (
                                        <svg className="w-7 h-7 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                        </svg>
                                    ) : result.computerChoice === 'Rose' ? (
                                        <svg height="28px" width="28px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ff9494" stroke="#ff9494"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g>
                                            <path className="st0" d="M401.388,111.028c0,0,39.384-33.33,0-78.779C372.815-0.726,263.133-31.38,211.724,64.076 c-13.953-14.534-36.087-29.507-64.853-22.737c-51.509,12.12-51.509,75.749-57.569,93.929c-39.39,3.03-51.509,45.449-51.509,45.449 c78.779,48.479,73.73,124.702,73.73,173.726C111.523,441.459,182.065,512,269.08,512c11.635,0,22.944-1.349,33.857-3.74 c-19.399-107.492-74.761-198.664-127.223-266.174c-44.904-57.782-106.61-123.992,36.809-174.483 c-87.892,55.143-66.315,93.194-37.472,131.366c-3.414-50.066,33.128-92.356,100.089-92.994 c105.038-1.006,108.068,77.773,103.018,102.782c-1.414,6.994-1,13.457-2.669,19.209c35.004-21.21,65.47-37.318,71.341-53.308 c1.42,30.56-55.444,56.492-89.106,80.187c-2.094,1.74-4.296,3.397-6.651,4.912c-45.219,35.152-66.564,83.146-75.116,107.824 c23.4,54.018,35.928,102.876,35.987,138.36c66.156-18.689,114.694-79.359,114.694-151.498c0-55.557,29.283-167.666,44.432-185.846 C486.22,150.417,443.801,95.878,401.388,111.028z"></path> <path className="st0" d="M262.767,132.995c-70.446,3.788-79.234,81.573-51.965,115.66c20.138,30.263,37.614,60.776,52.041,90.306 c11.286-29.316,40.034-60.445,64.31-80.222c-2.982-0.236-70.446,21.21-88.626,0.758 C404.418,255.708,353.494,128.119,262.767,132.995z M307.95,214.272c-14.392,13.126-39.106,18.014-40.638,13.41 c-0.757-2.272,13.635-21.21-12.12-21.21c-15.582,0-31.815,0.462-31.815-9.09c-2.272-13.635,19.831-25.944,35.98-26.512 C302.157,169.354,324.124,200.412,307.95,214.272z"></path> </g> </g>
                                        </svg>
                                    ) : result.computerChoice === 'Letter' ? (
                                        <svg className="w-7 h-7 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                                        </svg>
                                    ) : null }
                                </div>
                                <p className="text-md font-normal font-mono text-white">{result.computerChoice}</p>
                            </div>
                        </div>

                        <div className="flex mt-5">
                            <button onClick={resetGame} className="flex text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs px-4 py-1.5 text-center me-2 mb-2">
                                <svg className="w-5 h-5 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clip-rule="evenodd" />
                                </svg>

                                Play Again
                            </button>

                            {showPrize && !prizeClaimed && (
                                <button onClick={claimPrize} className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-4 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z" />
                                    </svg>

                                    Claim Prize
                                </button>
                            )}
                        </div>
                    </div>
                )}

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

                                    <span className="text-sm font-semibold text-gray-900 dark:text-white ml-2">You earned 10 Points!</span>
                                </div>
                                <div className="flex items-center mt-6 space-x-4 rtl:space-x-reverse">
                                    <button data-modal-hide="progress-modal" type="button" className="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                                        Claim Points
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {/* <div>
                    <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                        <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        How to Connect to wallet?</a>
                </div> */}

                {/* Menu Bottom */}
                <Menu />

            </div>
        </div>
    )
}