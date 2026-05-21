"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

               
                <div>
                    <h2 className="text-2xl font-bold mb-3">
                        StudyNook
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        Book your perfect study room easily. Focus, learn and grow in a premium environment.
                    </p>

                    <div className="flex gap-3 mt-4 text-xl">
                        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                        <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
                    </div>
                </div>

                
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-Room">All Rooms</Link></li>
                        <li><Link href="/my-Booking">My Booking</Link></li>
                        <li><Link href="/favorites">Favorites</Link></li>
                    </ul>
                </div>

             
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>

                    <div className="space-y-3 text-gray-400 text-sm">

                        <p className="flex items-center gap-2">
                            <MdLocationOn /> Dhaka, Bangladesh
                        </p>

                        <p className="flex items-center gap-2">
                            <MdEmail /> support@studynook.com
                        </p>

                        <p className="flex items-center gap-2">
                            <MdPhone /> +880 1234 567 890
                        </p>

                    </div>
                </div>

          
                <div>
                    <h3 className="text-lg font-semibold mb-3">Newsletter</h3>

                    <p className="text-gray-400 text-sm mb-3">
                        Get latest updates about new rooms & offers.
                    </p>

                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full p-2 rounded bg-gray-800 text-white outline-none mb-2"
                    />

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-2 rounded">
                        Subscribe
                    </button>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} StudyNook. All rights reserved.
            </div>

        </footer>
    );
}