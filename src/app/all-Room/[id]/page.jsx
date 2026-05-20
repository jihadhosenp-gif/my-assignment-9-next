// app/rooms/[id]/page.jsx

import Link from "next/link";
import { HiUserGroup } from "react-icons/hi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";
import DeleteRoomButton from "@/com/DeleteRoomButton";

const getRoomDetails = async (id) => {
    try {

        const res = await fetch(
            `http://localhost:5000/room/${id}`,
            {
                cache: "no-store",
            }
        );

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

    // DEMO USER
    // Replace with real auth user
    const user = true;

    // OWNER CHECK
    // Replace with real owner logic
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
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">

            <div className="max-w-7xl mx-auto">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-10
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    border
                    border-gray-200
                ">

                    {/* IMAGE */}
                    <div className="relative group overflow-hidden">

                        <img
                            src={room.image}
                            alt={room.roomName}
                            className="
                                w-full
                                h-full
                                min-h-[400px]
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-105
                            "
                        />

                        <div className="absolute inset-0 bg-black/10"></div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">

                        {/* TOP */}
                        <div className="space-y-4">

                            <div className="
                                inline-flex
                                items-center
                                px-4
                                py-2
                                rounded-full
                                bg-indigo-100
                                text-indigo-700
                                text-sm
                                font-semibold
                                w-fit
                            ">
                                Floor {room.floor}
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                {room.roomName}
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                {room.description}
                            </p>

                        </div>

                        {/* INFO CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {/* PRICE */}
                            <div className="
                                bg-gray-50
                                rounded-2xl
                                p-5
                                border
                                border-gray-200
                            ">

                                <p className="text-sm text-gray-500 mb-2">
                                    Hourly Rate
                                </p>

                                <div className="flex items-center gap-2">

                                    <HiMiniCurrencyDollar className="text-2xl text-indigo-600" />

                                    <h2 className="text-3xl font-black text-gray-900">
                                        {room.hourlyRate}
                                    </h2>

                                </div>

                            </div>

                            {/* CAPACITY */}
                            <div className="
                                bg-gray-50
                                rounded-2xl
                                p-5
                                border
                                border-gray-200
                            ">

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

                        {/* BOOKING COUNT */}
                        <div className="
                            bg-indigo-50
                            border
                            border-indigo-200
                            rounded-2xl
                            p-5
                        ">

                            <p className="text-sm text-indigo-500 mb-2">
                                Total Booking Count
                            </p>

                            <h2 className="text-5xl font-black text-indigo-700">
                                {room.bookingCount || 0}
                            </h2>

                        </div>

                        {/* FEATURES */}
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

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-wrap gap-4 pt-4">

                            {/* BOOK BUTTON */}
                            {
                                user ? (
                                    <button
                                        className="
                                            px-8
                                            py-4
                                            rounded-2xl
                                            bg-indigo-600
                                            hover:bg-indigo-700
                                            text-white
                                            font-semibold
                                            text-lg
                                            transition-all
                                            duration-300
                                            shadow-lg
                                            hover:shadow-indigo-300
                                        "
                                    >
                                        Book Now
                                    </button>
                                ) : (
                                    <Link href="/login">

                                        <button
                                            className="
                                                px-8
                                                py-4
                                                rounded-2xl
                                                bg-black
                                                hover:bg-gray-900
                                                text-white
                                                font-semibold
                                                text-lg
                                                transition-all
                                            "
                                        >
                                            Login to Book
                                        </button>

                                    </Link>
                                )
                            }

                            {/* OWNER CONTROLS */}
                            {
                                isOwner && (
                                    <>

                                        {/* EDIT */}
                                        <Link href={`/update-room/${room._id}`}>

                                            <button
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    px-6
                                                    py-4
                                                    rounded-2xl
                                                    bg-yellow-400
                                                    hover:bg-yellow-500
                                                    text-black
                                                    font-semibold
                                                    transition-all
                                                "
                                            >
                                                <MdEdit className="text-xl" />
                                                Edit
                                            </button>

                                        </Link>

                                        {/* DELETE */}
                                        <DeleteRoomButton id={room._id} />

                                    </>
                                )
                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default RoomDetails;