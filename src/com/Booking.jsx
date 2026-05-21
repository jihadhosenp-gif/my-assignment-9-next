"use client";

import { useMemo, useState } from "react";

import { Envelope } from "@gravity-ui/icons";

import {
    Button,
    FieldError,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField
} from "@heroui/react";

import { MdEdit } from "react-icons/md";

import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

export function Booking({ room }) {

    const router = useRouter();

    const [startTime, setStartTime] = useState("");

    const [endTime, setEndTime] = useState("");


    const timeSlots = [];

    for (let i = 8; i <= 20; i++) {

        timeSlots.push(`${String(i).padStart(2, "0")}:00`);
    }


    const endTimeOptions = useMemo(() => {

        if (!startTime) return [];

        const startHour = Number(startTime.split(":")[0]);

        return timeSlots.filter((slot) => {

            const hour = Number(slot.split(":")[0]);

            return hour > startHour;
        });

    }, [startTime]);

    const totalCost = useMemo(() => {

        if (!startTime || !endTime) return 0;

        const startHour = Number(startTime.split(":")[0]);

        const endHour = Number(endTime.split(":")[0]);

        return (endHour - startHour) * room?.hourlyRate;

    }, [startTime, endTime, room]);

    const handleBooking = async (e) => {

        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const bookingInfo = {

            roomId: room?._id,

            roomName: room?.roomName,

            roomImage: room?.image,

            bookingDate: formData.get("bookingDate"),

            startTime: formData.get("startTime"),

            endTime: formData.get("endTime"),

            totalCost,

            specialNote: formData.get("specialNote"),

            status: "confirmed",

            createdAt: new Date(),
        };

        console.log(bookingInfo);

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/booking`, {

                method: "POST",

                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify(bookingInfo),
            });

            const data = await res.json();

           
            if (!res.ok) {

                Swal.fire({

                    icon: "error",

                    title: "Booking Failed",

                    text: data?.message || "Time slot already booked",
                });

                return;
            }

            
            Swal.fire({

                icon: "success",

                title: "Success",

                text: "Room booked successfully!",

                confirmButtonColor: "#06b6d4",
            });

            form.reset();

            setStartTime("");

            setEndTime("");

            router.refresh();

        } catch (error) {

            console.log(error);

            Swal.fire({

                icon: "error",

                title: "Error",

                text: "Something went wrong",
            });
        }
    };
    
return (

    <Modal>

        <Modal.Trigger>

            <button className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all">

                <MdEdit className="text-xl" />

                Booking room

            </button>

        </Modal.Trigger>

        <Modal.Backdrop>

            <Modal.Container placement="auto">

                <Modal.Dialog className="sm:max-w-3xl rounded-3xl">

                    <Modal.CloseTrigger />

                    <Modal.Header>

                        <Modal.Icon className="bg-cyan-100 text-cyan-600">

                            <Envelope className="size-5" />

                        </Modal.Icon>

                        <Modal.Heading>
                            Book Room
                        </Modal.Heading>

                        <p className="mt-1.5 text-sm text-muted">
                            Fill in the details to book this room.
                        </p>

                    </Modal.Header>

                    <Modal.Body className="p-6">

                        <Surface variant="default">

                            <form
                                onSubmit={handleBooking}
                                className="space-y-8"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Room Name */}

                                    <TextField
                                        isDisabled
                                        defaultValue={room?.roomName}
                                    >

                                        <Label>
                                            Room Name
                                        </Label>

                                        <Input />

                                    </TextField>

                                    

                                    <TextField
                                        isDisabled
                                        defaultValue={`$${room?.hourlyRate}/hr`}
                                    >

                                        <Label>
                                            Hourly Rate
                                        </Label>

                                        <Input />

                                    </TextField>

                                   

                                    <TextField
                                        name="bookingDate"
                                        isRequired
                                    >

                                        <Label>
                                            Booking Date
                                        </Label>

                                        <Input
                                            type="date"
                                            min={new Date().toISOString().split("T")[0]}
                                            className="rounded-2xl"
                                        />

                                        <FieldError />

                                    </TextField>

                                    

                                    <div className="space-y-2">

                                        <Label>
                                            Start Time
                                        </Label>

                                        <select
                                            name="startTime"
                                            required
                                            value={startTime}
                                            onChange={(e) => {

                                                setStartTime(e.target.value);

                                                setEndTime("");
                                            }}
                                            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none"
                                        >

                                            <option value="">
                                                Select Start Time
                                            </option>

                                            {
                                                timeSlots.map((slot) => (

                                                    <option
                                                        key={slot}
                                                        value={slot}
                                                    >
                                                        {slot}
                                                    </option>
                                                ))
                                            }

                                        </select>

                                    </div>

                                    

                                    <div className="space-y-2">

                                        <Label>
                                            End Time
                                        </Label>

                                        <select
                                            name="endTime"
                                            required
                                            value={endTime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none"
                                        >

                                            <option value="">
                                                Select End Time
                                            </option>

                                            {
                                                endTimeOptions.map((slot) => (

                                                    <option
                                                        key={slot}
                                                        value={slot}
                                                    >
                                                        {slot}
                                                    </option>
                                                ))
                                            }

                                        </select>

                                    </div>

                                   

                                    <TextField
                                        isDisabled
                                        value={`$${totalCost}`}
                                    >

                                        <Label>
                                            Total Cost
                                        </Label>

                                        <Input />

                                    </TextField>

                                   

                                    <div className="md:col-span-2">

                                        <TextField
                                            name="specialNote"
                                        >

                                            <Label>
                                                Special Note
                                            </Label>

                                            <TextArea
                                                placeholder="Optional note..."
                                                className="rounded-3xl min-h-[120px]"
                                            />

                                        </TextField>

                                    </div>

                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg"
                                >

                                    Confirm Booking

                                </Button>

                            </form>

                        </Surface>

                    </Modal.Body>

                    <Modal.Footer>

                        <Button slot="close" variant="secondary">

                            Cancel

                        </Button>

                    </Modal.Footer>

                </Modal.Dialog>

            </Modal.Container>

        </Modal.Backdrop>

    </Modal>
    );
}