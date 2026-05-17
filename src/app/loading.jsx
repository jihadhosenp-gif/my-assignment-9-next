"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

          
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

          
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />

        
            <div className="relative z-10 flex flex-col items-center">

               
                <motion.div
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    className="relative h-28 w-28"
                >

                  
                    <div className="absolute h-28 w-28 border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-md"
                        style={{
                            transform: "translateZ(56px)",
                        }}
                    />

                   
                    <div className="absolute h-28 w-28 border border-purple-400/50 bg-purple-500/10 backdrop-blur-md"
                        style={{
                            transform: "rotateY(180deg) translateZ(56px)",
                        }}
                    />

                   
                    <div className="absolute h-28 w-28 border border-pink-400/50 bg-pink-500/10 backdrop-blur-md"
                        style={{
                            transform: "rotateY(-90deg) translateZ(56px)",
                        }}
                    />

                   
                    <div className="absolute h-28 w-28 border border-blue-400/50 bg-blue-500/10 backdrop-blur-md"
                        style={{
                            transform: "rotateY(90deg) translateZ(56px)",
                        }}
                    />

                  
                    <div className="absolute h-28 w-28 border border-green-400/50 bg-green-500/10 backdrop-blur-md"
                        style={{
                            transform: "rotateX(90deg) translateZ(56px)",
                        }}
                    />

                    <div className="absolute h-28 w-28 border border-yellow-400/50 bg-yellow-500/10 backdrop-blur-md"
                        style={{
                            transform: "rotateX(-90deg) translateZ(56px)",
                        }}
                    />
                </motion.div>

              
                <motion.h2
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="mt-14 text-3xl font-bold tracking-[0.4em] text-white"
                >
                    LOADING
                </motion.h2>

             
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Preparing Experience
                </p>
            </div>
        </div>
    );
}