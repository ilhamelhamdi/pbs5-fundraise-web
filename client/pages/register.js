import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie"
import axios from 'axios';
import Wrapper from '../components/wrapper.js'
import Layout from '../layouts/primary-layout.js'
import Modal from '../components/modal.js';
import { useVisible } from '../lib/global'


export default function Register(props) {
    const inputStyle = "w-full px-4 py-2 border-2 border-mypurple-darkest mb-4 rounded-xl focus:outline-none"
    const router = useRouter()
    const [cookie, setCookie] = useCookies(["user_token"])
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [refModal, isModalVisible, setIsModalVisible] = useVisible(false) // for modal

    const handleRegister = () => {
        axios
            .post(`${process.env.API_BASE_URL}/auth/local/register`, {
                fullname,
                email,
                phoneNumber,
                password,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                setError(error.response.data.message[0].messages[0])
                setIsModalVisible(true)
            });

    }

    const handleRegisterGoogle = () => {
        console.log('Register Google handled');
    }
    const handleRegisterFacebook = () => {
        console.log('Register Facebook handled');
    }

    const inputFieldList = [
        { name: "fullname", value: fullname, placeholder: "Nama Lengkap", type: "text", autoComplete: "name", onChange: (e) => setFullname(e.target.value) },
        { name: "email", value: email, placeholder: "Email", type: "email", autoComplete: "email", onChange: (e) => setEmail(e.target.value) },
        { name: "phone number", value: phoneNumber, placeholder: "Nomor Ponsel", type: "text", autoComplete: "tel", onChange: (e) => setPhoneNumber(e.target.value) },
        { name: "password", value: password, placeholder: "Password", type: "password", autoComplete: "new-password", onChange: (e) => setPassword(e.target.value) },
    ]

    return (
        <Layout title="Daftar">
            <div className="container w-screen max-w-md h-max mx-auto px-2 my-12">
                <Wrapper className="w-full h-full p-6 flex flex-col items-center text-center">
                    <h1 className="text-mypurple-darkest text-2xl font-semibold mb-4">Daftar Akun Baru</h1>
                    <form>
                        {inputFieldList.map(input => <input {...input} className={inputStyle} key={input.name} />)}

                        <button
                            type="button"
                            onClick={() => handleRegister()}
                            className="w-full px-4 py-2 text-lg bg-mypurple-darkest text-white rounded-full transition-all duration-300 mb-8"
                        >Daftar</button>

                        <div className="relative w-full text-sm">
                            <hr />
                            <div className="block mx-auto absolute w-full -top-3 text-gray-600">
                                <span className="bg-white inline-block px-2">atau daftar dengan</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => handleRegisterGoogle()}
                            className="w-full px-4 py-2 text-lg bg-red-700 text-white rounded-full transition-all duration-300 mt-8 mb-4"
                        >Google</button>
                        <button
                            type="button"
                            onClick={() => handleRegisterFacebook()}
                            className="w-full px-4 py-2 text-lg bg-blue-900 text-white rounded-full transition-all duration-300 mb-4"
                        >Facebook</button>
                        <div>
                            Sudah punya akun? <Link href="/login">
                                <a className="text-blue-500 hover:text-blue-700 transition-all duration-300">Masuk</a>
                            </Link>
                        </div>
                    </form>
                </Wrapper>
            </div>
            {(isModalVisible) && (
                <Modal ref={refModal}>
                    <h1>Error</h1>
                    <p>{error.message}</p>
                </Modal>
            )}
        </Layout>
    )
}