

import Image from "next/image";


import { HiUserGroup } from "react-icons/hi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { MdOutlineMeetingRoom } from "react-icons/md";

import DeleteRoomButton from "@/com/DeleteRoomButton";
import { EditData } from "@/com/EditData";
import  { Booking } from "@/com/Booking";



const getRoomDetails = async (id) => {

    try {

        const res = await fetch(
            `http://localhost:5000/room/${id}`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return null;
        }

        const data = await res.json();

        return data;

    } catch (error) {

        console.log("Single Room Error:", error);

        return null;
    }
};



const RoomDetails = async ({ params }) => {

    const { id } = await params;

    const room = await getRoomDetails(id);

 
    const user = true;

   
    const isOwner = true;

 
    if (!room) {

        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">

                <h1 className="text-3xl font-bold text-red-500">

                    Room Not Found

                </h1>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 py-12 px-4">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

                   
                    <div className="relative overflow-hidden group">

                        <Image
                            src={room.image}
                            alt={room.roomName}
                            width={1200}
                            height={800}
                            priority
                            className="w-full h-full min-h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/10" />

                    </div>

                   
                    <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">

                       
                        <div className="space-y-5">

                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold w-fit">

                                Floor {room.floor}

                            </div>

                          
                            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">

                                {room.roomName}

                            </h1>

                            
                            <p className="text-gray-600 text-lg leading-relaxed">

                                {room.description}

                            </p>

                        </div>

                       
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                         
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition-all duration-300">

                                <p className="text-sm text-gray-500 mb-2">

                                    Hourly Rate

                                </p>

                                <div className="flex items-center gap-2">

                                    <HiMiniCurrencyDollar className="text-2xl text-indigo-600" />

                                    <h2 className="text-3xl font-black text-gray-900">

                                        ${room.hourlyRate}

                                    </h2>

                                </div>

                            </div>

                          
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition-all duration-300">

                                <p className="text-sm text-gray-500 mb-2">

                                    Seating Capacity

                                </p>

                                <div className="flex items-center gap-3">

                                    <HiUserGroup className="text-3xl text-indigo-600" />

                                    <h2 className="text-2xl font-bold text-gray-900">

                                        {room.capacity} Seats

                                    </h2>

                                </div>

                            </div>

                        </div>

                       
                        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">

                            <p className="text-sm text-indigo-500 mb-2">

                                Total Booking Count

                            </p>

                            <h2 className="text-5xl font-black text-indigo-700">

                                {room.bookingCount || 0}

                            </h2>

                        </div>

                      
                        <div className="space-y-4">

                            <h3 className="text-2xl font-bold text-gray-900">

                                Room Features

                            </h3>

                            <div className="flex flex-wrap gap-3">

                                <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">

                                    High Speed WiFi

                                </span>

                                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                                    Air Conditioned

                                </span>

                                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">

                                    Quiet Environment

                                </span>

                                <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">

                                    Smart Lighting

                                </span>

                            </div>

                        </div>

                        
                        <div className="flex flex-wrap gap-4 pt-4">

                          
                          

                                   <Booking room={room}/>

                              

                          
                                        <EditData room={room} />

                                        
                                        <DeleteRoomButton id={id} />
                                    
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default RoomDetails;