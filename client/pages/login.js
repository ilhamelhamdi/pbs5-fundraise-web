import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from "react-cookie"
import axios from 'axios';
import Wrapper from '../components/wrapper.js'
import Layout from '../layouts/primary-layout.js'


export default function Login(props) {
    const inputStyle = "w-full px-4 py-2 border-2 border-mypurple-darkest rounded-xl focus:outline-none"
    const [cookie, setCookie] = useCookies(["user_token"])
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [identifierEmpty, setIdentifierEmpty] = useState(false)
    const [passwordEmpty, setPasswordEmpty] = useState(false)
    const router = useRouter()
    const handleLogin = () => {
        if (identifier == '' || password == '') {
            setIdentifierEmpty(identifier == '')
            setPasswordEmpty(password == '')
        }
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: identifier,
                password: password,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                setCookie("user_token", JSON.stringify(response.data.jwt), {
                    path: "/",
                    maxAge: 3600 * 24, // Expires after 1 day
                    sameSite: true,
                })
                router.push('/')
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }

    const handleLoginGoogle = () => {
        console.log('login Google handled');
    }
    const handleLoginFacebook = () => {
        console.log('login Facebook handled');
    }

    const handleInputChange = (e, field) => {
        if (field == 'identifier') {
            setIdentifier(e.target.value)
        }
        if (field == 'password') {
            setPassword(e.target.value)
        }
    }

    return (
        <Layout title="Login">
            <div className="container w-screen max-w-md h-max mx-auto px-2 my-12">
                <Wrapper className="w-full h-full p-6 flex flex-col items-center text-center">
                    <h1 className="text-mypurple-darkest text-2xl font-semibold mb-4">Masuk ke Akun Anda</h1>
                    <form className="w-full">
                        <div className="w-full mb-4">
                            <input
                                type="text"
                                onChange={(e) => handleInputChange(e, 'identifier')}
                                name="identifier"
                                value={identifier}
                                placeholder="Nomor Ponsel atau Email"
                                autoComplete="email"
                                className={inputStyle}
                                required={true}
                            />
                            {identifierEmpty && <span
                                className="text-sm text-red-600">
                                Nomor ponsel atau email tidak boleh kosong
                                </span>
                            }
                        </div>
                        <div className="w-full mb-4">
                            <input
                                type="password"
                                onChange={(e) => handleInputChange(e, 'password')}
                                name="password"
                                value={password}
                                placeholder="Password"
                                autoComplete="current-password"
                                className={inputStyle}
                                required={true}
                            />
                            {passwordEmpty && <span
                                className="text-sm text-red-600">
                                Password tidak boleh kosong
                                </span>
                            }
                        </div>
                        <button
                            type="button"
                            onClick={() => handleLogin()}
                            className="w-full px-4 py-2 text-lg bg-mypurple-darkest text-white rounded-full transition-all duration-300 mb-4"
                        >Masuk</button>
                        <Link href="/forgot-password">
                            <a className="block text-blue-500 hover:text-blue-700 transition-all duration-300 mb-8">Lupa password?</a>
                        </Link>
                        <div className="relative w-full text-sm">
                            <hr />
                            <div className="block mx-auto absolute w-full -top-3 text-gray-600">
                                <span className="bg-white inline-block px-2">atau masuk dengan</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleLoginGoogle()}
                            className="w-full px-4 py-2 text-lg bg-red-700 text-white rounded-full transition-all duration-300 mt-8 mb-4"
                        >Google</button>
                        <button
                            type="button"
                            onClick={() => handleLoginFacebook()}
                            className="w-full px-4 py-2 text-lg bg-blue-900 text-white rounded-full transition-all duration-300 mb-4"
                        >Facebook</button>
                        <div>
                            Belum punya akun? <Link href="/register">
                                <a className="text-blue-500 hover:text-blue-700 transition-all duration-300">Daftar</a>
                            </Link>
                        </div>
                    </form>
                </Wrapper>
            </div>
        </Layout>
    )
}