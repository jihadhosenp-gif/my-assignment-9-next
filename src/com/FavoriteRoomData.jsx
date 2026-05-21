

const FavoriteRoomData = ({Room }) => {

    const { roomName, image, price } = Room;

    return (

        <div>

           


            <div className="card bg-base-300 w-96 shadow-sm hover:shadow-lg transition-shadow duration-300 sm:w-full">

                <figure>
                    <img
                        src={image}
                        alt={roomName}
                        className="w-40 h-40 object-cover"
                    />
                </figure>

                <div className="card-body">

                    <h2 className="card-title text-blue-950">
                        {roomName}
                    </h2>

                    <p className="text-blue-950">
                        ${price}
                    </p>

                </div>
            </div>

        </div>
    );
};

export default FavoriteRoomData;