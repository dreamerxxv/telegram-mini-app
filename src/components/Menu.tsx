
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="fixed z-50 h-12 max-w-xs w-2/3 -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-transparent dark:border-gray-600">
                    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                        <Link to="/" data-tooltip-target="tooltip-home" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            <span className="sr-only">Home</span>
                        </Link>
                        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Home
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>

                        <button disabled data-tooltip-target="tooltip-mission" type="button" className="inline-flex flex-col items-center justify-center px-5 group">

                            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
                            </svg>


                            <span className="sr-only">Mission</span>
                        </button>
                        <div id="tooltip-mission" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Mission
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button disabled data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-gray-600 rounded-full group focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-800">
                                <svg className="w-7 h-7 mb-1 text-blue-500 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd" />
                                </svg>


                                <span className="sr-only">Coins</span>
                            </button>
                        </div>
                        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Create new item
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button disabled data-tooltip-target="tooltip-games" className="inline-flex flex-col items-center justify-center px-5  group">
                            <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                            </svg>

                            <span className="sr-only">Games</span>
                        </button>
                        <div id="tooltip-games" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Games
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>

                        <button disabled data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                                <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                            </svg>
                            <span className="sr-only">Wallet</span>
                        </button>
                        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Wallet
                        </div>

                    </div>
                </div>
  )
}

export default Menu