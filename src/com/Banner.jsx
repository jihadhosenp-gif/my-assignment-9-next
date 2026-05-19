"use client"

const banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://res.cloudinary.com/ddchinidv/image/upload/q_auto/f_auto/v1779224894/ChatGPT_Image_May_20_2026_02_56_48_AM_tgm6wn.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find Your Perfect Study Room</h1>
                    <p className="mb-5">
                        Description: “Browse and book quiet, private study rooms in your library. List your own room and earn.”

                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="btn btn-soft btn-primary" onClick={() => window.location.href = '/all-Room'}>
                        Explore rooms
                    </button>
                    <button className="btn btn-dash btn-primary" onClick={() => window.location.href = '/add-Room'}>
                        Create a room
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default banner;