import { HiUserGroup } from "react-icons/hi";

const allRoom = async () => {
    const res = await fetch("http://localhost:5000/room");
    const rooms = await res.json();

    console.log("Rooms:", rooms);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
            
            
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-gray-800">
                    All Study Rooms
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                    Discover premium spaces for focused learning
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {rooms.map((room) => (
                    <div
                        key={room._id}
                        className="
                        group
                        overflow-hidden
                        rounded-3xl
                        bg-white/80
                        backdrop-blur-xl
                        border border-gray-200
                        shadow-lg
                        hover:shadow-2xl
                        transition-all duration-500
                        hover:-translate-y-2
                        "
                    >
                        
                        {/* Image */}
                        <figure className="overflow-hidden relative">
                            <img
                                src={room.image}
                                alt="room"
                                width={400}
                                height={250}
                                className="
                                w-full
                                h-60
                                object-cover
                                transition-transform duration-700
                                group-hover:scale-110
                                "
                            />

                           
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                        </figure>

                        <div className="p-6 space-y-4">

                          
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {room.roomName}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Premium Study Environment
                                    </p>
                                </div>

                                <div className=" px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold ">
                                   {room.floor}
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-sm">
                                {room.description}
                            </p>

                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">

                              
                                <div>
                                    <p className="text-xs text-gray-400">
                                        Hourly Rate
                                    </p>

                                    <h3 className="text-xl font-black text-gray-800">
                                        ${room.hourlyRate}
                                    </h3>
                                </div>

                             
                                <div className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium text-sm">
                                    <HiUserGroup /> {room.capacity} Seats
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default allRoom;