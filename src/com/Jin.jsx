"use client";

import { FaUserFriends } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";

export default function FeatureSection() {
    return (
        <section className="bg-[#f5efe6] py-16 flex flex-col items-center gap-12">

            
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white">
                    Welcome to StudyNook
                </h1>

                <p className="text-gray-100 mt-2">
                    A premium study room booking experience
                </p>
            </div>

          
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

              
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <FaUserFriends className="text-3xl text-indigo-500 mb-4" />

                    <h2 className="text-xl font-bold mb-3 text-gray-800">
                        Unique & Personal
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Find your perfect study environment designed for focus and comfort.
                        We ensure a personalized experience for every user.
                    </p>

                    <p className="text-indigo-500 mt-4 text-sm font-medium cursor-pointer">
                        Read more →
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <MdOutlineStars className="text-3xl text-yellow-500 mb-4" />

                    <h2 className="text-xl font-bold mb-3 text-gray-800">
                        Premium Experience
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Enjoy quiet, clean and modern study rooms with all essential facilities
                        for maximum productivity.
                    </p>

                    <p className="text-indigo-500 mt-4 text-sm font-medium cursor-pointer">
                        Explore more →
                    </p>
                </div>

          
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
                    <IoCarSportOutline className="text-3xl text-green-500 mb-4" />

                    <h2 className="text-xl font-bold mb-3 text-gray-800">
                        Easy Access & Support
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        Simple booking system with fast support. Get your room in just a few clicks anytime.
                    </p>

                    <p className="text-indigo-500 mt-4 text-sm font-medium cursor-pointer">
                        Learn more →
                    </p>
                </div>

            </div>
        </section>
    );
}