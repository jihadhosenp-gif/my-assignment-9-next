"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiUserGroup } from "react-icons/hi";

export default function FavoriteRoom() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await fetch("http://localhost:5000/room");
                const data = await res.json();

                setRooms(Array.isArray(data) ? data.slice(0, 4) : []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    if (loading) {
        return <p className="text-center py-6 text-gray-500">Loading...</p>;
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">   
            <h2 className=" flex justify-center p-3 text-2xl font-bold text-white mb-6">
                Favorite Rooms
            </h2>


          
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                {rooms.map((room) => (
                    <Link key={room._id} href={`/all-Room/${room._id}`}>
                        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">

                            {/* IMAGE (SMALL HEIGHT) */}
                            <img
                                src={room.image}
                                alt={room.roomName}
                                className="w-full h-20 object-cover"
                            />

                            {/* CONTENT (VERY SMALL) */}
                            <div className="p-2 space-y-1">

                                <h2 className="text-xs font-bold truncate">
                                    {room.roomName}
                                </h2>

                                <p className="text-[10px] text-gray-500">
                                    Floor {room.floor}
                                </p>

                                {/* FOOTER */}
                                <div className="flex items-center justify-between border-t pt-1 mt-1">

                                    <span className="text-[10px] text-indigo-600 font-bold">
                                        ${room.hourlyRate}
                                    </span>

                                    <span className="flex items-center gap-1 text-[10px] text-gray-600">
                                        <HiUserGroup className="text-[10px]" />
                                        {room.capacity}
                                    </span>

                                </div>

                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
}