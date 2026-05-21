"use client";

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

export function EditData({ room }) {

    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const amenities = formData.getAll("amenities");

        const updatedRoom = {
            roomName: formData.get("roomName"),
            floor: formData.get("floor"),
            capacity: formData.get("capacity"),
            hourlyRate: formData.get("hourlyRate"),
            image: formData.get("image") || room.image,
            description: formData.get("description"),
            amenities,
        };

        try {

            const res = await fetch(
                `http://localhost:5000/room/${room._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatedRoom),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {

                Swal.fire({
                    icon: "success",
                    title: "Room updated successfully",
                    timer: 1500,
                    showConfirmButton: false,
                });

                router.refresh();
            }

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Update Failed",
            });
        }
    };

    return (
        <Modal>

            
            <Modal.Trigger>

                <button className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all">

                    <MdEdit className="text-xl" />

                    Edit

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
                                Update Room
                            </Modal.Heading>

                            <p className="mt-1.5 text-sm text-muted">
                                Modify your study room information.
                            </p>

                        </Modal.Header>

                       
                        <Modal.Body className="p-6">

                            <Surface variant="default">

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                                       
                                        <div className="md:col-span-2">

                                            <TextField
                                                name="roomName"
                                                defaultValue={room.roomName}
                                                isRequired
                                            >

                                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                                    Room Name
                                                </Label>

                                                <Input
                                                    placeholder="Silent Focus Hub"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />

                                            </TextField>

                                        </div>

                                       
                                        <TextField
                                            name="floor"
                                            defaultValue={room.floor}
                                            isRequired
                                        >

                                            <Label className="text-sm font-semibold text-gray-700 mb-2">
                                                Floor
                                            </Label>

                                            <Input
                                                placeholder="3rd Floor"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>

                                        
                                        <TextField
                                            name="capacity"
                                            defaultValue={room.capacity}
                                            type="number"
                                            isRequired
                                        >

                                            <Label className="text-sm font-semibold text-gray-700 mb-2">
                                                Capacity
                                            </Label>

                                            <Input
                                                type="number"
                                                placeholder="4"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>

                                        <TextField
                                            name="hourlyRate"
                                            defaultValue={room.hourlyRate}
                                            type="number"
                                            isRequired
                                        >

                                            <Label className="text-sm font-semibold text-gray-700 mb-2">
                                                Hourly Rate ($)
                                            </Label>

                                            <Input
                                                type="number"
                                                placeholder="5"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>

                                       
                                        <div className="md:col-span-2">

                                            <TextField
                                                name="image"
                                                defaultValue={room.image}
                                                isRequired
                                            >

                                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                                    Image URL
                                                </Label>

                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/room.jpg"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />

                                            </TextField>

                                        </div>

                                       
                                        <div className="md:col-span-2">

                                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 md:p-6">

                                                <h3 className="text-lg font-bold text-gray-800 mb-5">
                                                    Select Amenities
                                                </h3>

                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                                                    {
                                                        [
                                                            "Whiteboard",
                                                            "Projector",
                                                            "Wi-Fi",
                                                            "Power Outlets",
                                                            "Quiet Zone",
                                                            "Air Conditioning"
                                                        ].map((item) => (

                                                            <label
                                                                key={item}
                                                                className="flex items-center gap-2 cursor-pointer"
                                                            >

                                                                <input
                                                                    type="checkbox"
                                                                    name="amenities"
                                                                    value={item}
                                                                    defaultChecked={
                                                                        room?.amenities?.includes(item)
                                                                    }
                                                                    className="accent-cyan-500 w-4 h-4"
                                                                />

                                                                <span className="text-sm text-gray-700">
                                                                    {item}
                                                                </span>

                                                            </label>
                                                        ))
                                                    }

                                                </div>

                                            </div>

                                        </div>

                                      
                                        <div className="md:col-span-2">

                                            <TextField
                                                name="description"
                                                defaultValue={room.description}
                                                isRequired
                                            >

                                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                                    Description
                                                </Label>

                                                <TextArea
                                                    placeholder="Describe the study room experience..."
                                                    className="rounded-3xl min-h-[160px]"
                                                />

                                                <FieldError />

                                            </TextField>

                                        </div>

                                    </div>

                                   
                                    <Button
                                        type="submit"
                                        variant="solid"
                                        className="h-14 rounded-2xl w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition-all duration-300"
                                    >
                                        Update Room
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