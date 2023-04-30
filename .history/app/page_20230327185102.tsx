import React from 'react'
import { SunIcon , BoltIcon ,ExclamationTriangleIcon}from '@heroicons/react/24/outline'

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
            <h1 className="text-5xl font-bold mb-20">Mind Chat</h1>
            <div className="flex space-x-2 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* {sun icon} */}
                        <SunIcon className="h-8 w-8"/>
                        <h2>Examples</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText"> "Explain what dementia is"</p>
                        <p className="infoText">
                            "What's the difference between Dementia and Alzheimer's"
                        </p>
                        <p className="infoText">
                            "Does the disease run in my family?"
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* {sun icon} */}
                        <BoltIcon className="h-8 w-8"/>
                        <h2>Capabilities</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText"> "Change the ChatGPT Model to use"</p>
                        <p className="infoText">
                            "Messages are stored in Firebase's Firestore"
                        </p>
                        <p className="infoText">
                            "Hot Toast notifications when ChatGPT is thinking!"
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/* {sun icon} */}
                        <ExclamationTriangleIcon className="h-8 w-8"/>
                        <h2>Limitations</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText"> "May occasionally generate incorrect information"</p>
                        <p className="infoText">
                            "May occasionally produce harmful instructions or blased"
                        </p>
                        <p className="infoText">
                            "Limited knowledge of world and events after 2021"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage