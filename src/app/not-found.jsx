"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950" />

            
            <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

            
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl text-center"
            >

         
                <motion.h1
                    initial={{ scale: 0.5, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 10,
                    }}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-9xl font-black text-transparent"
                >
                    404
                </motion.h1>

               
                <h2 className="mt-6 text-4xl font-bold tracking-tight">
                    Page Not Found
                </h2>

               
                <p className="mx-auto mt-4 max-w-lg text-lg text-gray-400">
                    The page you are looking for doesn&apos;t exist or may have been moved.
                </p>

               
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Link
                        href="/"
                        className="rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                    >
                        Back Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="rounded-full border border-white/20 px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10"
                    >
                        Go Back
                    </button>
                </div>

               
                <p className="mt-12 text-sm text-gray-500">
                    Error Code: 404 | Route Not Found
                </p>
            </motion.div>
        </div>
    );
}