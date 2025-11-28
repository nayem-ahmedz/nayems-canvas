'use client';
import { motion } from "motion/react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // Call NextAuth Credentials Provider
        const res = await signIn("credentials", {
            redirect: false, // handle redirect manually
            email,
            password,
        });

        if (res?.error) {
            setError(res.error);
            toast.error(res.error);
        } else {
            toast.success("Login successful!");
            setTimeout(() => router.push('/'), 1500); // redirect after 1.5s
        }
    }

    const googleAuth = () => {
        console.log('google')
    }

    return (
        <motion.section
            className="flex justify-center w-full px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <title>User Login</title>
            <ToastContainer position="top-right" autoClose={3000} />
            <motion.div
                className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-20"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="card-body">
                    <h2 className="text-2xl md:text-3xl font-bold text-center">Welcome Back!</h2>

                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label htmlFor="email" className="label mt-1">Email</label>
                            <input type="email" id="email" name="email" className="input w-full" placeholder="Email" required />
                            <label htmlFor="password" className="label mt-1">Password</label>
                            <input type="password" id="password" name="password" className="input w-full" placeholder="Password" required />

                            {error && (
                                <motion.p
                                    className="text-red-500 mt-2 text-base text-center font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {error}
                                </motion.p>
                            )}
                            <motion.button type="submit" className="btn btn-neutral mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Login
                            </motion.button>
                        </fieldset>
                    </form>

                    <p className="text-center text-base mt-2">OR</p>

                    {/* Google Button */}
                    <motion.button
                        onClick={googleAuth}
                        className="btn bg-white text-black border-[#e5e5e5]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Continue with Google
                    </motion.button>

                    <p className="mt-1 text-center">
                        Don't have an account? <Link href='/register' className="underline">Register</Link>
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
}