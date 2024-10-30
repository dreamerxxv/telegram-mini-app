import React from 'react'
import Menu from '../components/Menu'
import { ConnectButton } from 'thirdweb/react'
import { client } from '../client'

const Games = () => {
  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#f0f0f0', color: '#333' }}>

    <div className="w-full max-w-sm h-full p-4 bg-white border border-gray-200 rounded-2xl shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">

        <div className="flex items-center justify-center mb-3">

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
        </div>

        {/* Menu Bottom */}
        <Menu />

    </div>
</div>
  )
}

export default Games