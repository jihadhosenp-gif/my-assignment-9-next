"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

const DeleteBooking = ({ id }) => {

    const router = useRouter();

    const handleDelete = async () => {

        const result = await Swal.fire({
            title: "Delete Booking?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, Delete"
        });

        if (!result.isConfirmed) return;

        try {

            const res = await fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (data.deletedCount > 0) {

                await Swal.fire({
                    icon: "success",
                    title: "Booking deleted successfully",
                    timer: 1500,
                    showConfirmButton: false
                });

               
                router.refresh();
            }

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Delete Failed"
            });
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-red-300"
        >
            <MdDelete className="text-xl" />
            cancel
        </button>
    );
};

export default DeleteBooking;