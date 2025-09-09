import React, { useState } from 'react'
import Image from "../assets/undraw_authentication_tbfc.svg"
import OtpInput from 'react-otp-input'
const Otp = () => {
    const [otp, setOtp] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setOtp(otp)
        console.log(otp)
    }

    return (
        <div className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
                <img src={Image} alt="OTP" className='w-full mx-auto max-h-[200px]' />
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center justify-center'>
                    <h4>Verify Otp</h4>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<div className='mx-2 inline-block'>-</div>}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{ width: '50px', height: '50px', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                    <button type='submit' className='bg-indigo-800 px-4 py-2 text-white rounded cursor-pointer'>Verify Otp</button>
                </form>
        </div>
    )
}

export default Otp
