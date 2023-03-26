import React from 'react'
import { Detector } from 'react-detect-offline'
import Navbar from './Navbar'
const CheckNet = (props) => {

    return (
        <>

            <Detector
                render={({ online }) => (
                    online ? props.children :
                        <>
                            <Navbar />
                            <div style={{ padding: "10px", textAlign: "center", color: "white" }} className="mt-16">
                                <h1 style={{ marginBottom: "5px" }}>No Connection</h1>
                                <h1 style={{ margin: "0" }}>
                                    Please check your internet connection
                                </h1>
                            </div>
                        </>

                )}
            />
        </>
    )
}

export default CheckNet