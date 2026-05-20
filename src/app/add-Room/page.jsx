"use client"

import { Button, Checkbox, CheckboxGroup, FieldError, Input, Label, TextArea, TextField } from "@heroui/react";


import React from 'react';

const AddRoom = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);

        const res = await fetch("http://localhost:5000/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log("Success:", result);
       
    }
    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-10 space-y-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl min-h-[600px]">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Create a New Study Room
                </h2>
                <p className="text-gray-600 mb-10 text-center">
                    Fill out the form below to list your study room and start sharing it with others.
                </p>
            </div>
            <form  onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">


                    <div className="md:col-span-2">
                        <TextField name="roomName" isRequired>
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


                    <TextField name="floor" isRequired>
                        <Label className="text-sm font-semibold text-gray-700 mb-2">
                            Floor
                        </Label>

                        <Input
                            placeholder="3rd Floor"
                            className="rounded-2xl"
                        />

                        <FieldError />
                    </TextField>


                    <TextField name="capacity" type="number" isRequired>
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

                    <TextField name="hourlyRate" type="number" isRequired>
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
                        <TextField name="image" isRequired>
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

                        <div className="md:col-span-2">
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 md:p-6">

                                <h3 className="text-lg font-bold text-gray-800 mb-5">
                                    Select Amenities
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" name="amenities" value="Whiteboard" className="accent-cyan-500 w-4 h-4" />
                                        <span className="text-sm text-gray-700">Whiteboard</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" name="amenities" value="Projector" className="accent-cyan-500 w-4 h-4" />
                                        <span className="text-sm text-gray-700">Projector</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" name="amenities" value="Wi-Fi" className="accent-cyan-500 w-4 h-4" />
                                        <span className="text-sm text-gray-700">Wi-Fi</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" name="amenities" value="Power Outlets" className="accent-cyan-500 w-4 h-4" />
                                        <span className="text-sm text-gray-700">Power Outlets</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" name="amenities" value="Quiet Zone" className="accent-cyan-500 w-4 h-4" />
                                        <span className="text-sm text-gray-700">Quiet Zone</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" name="amenities" value="Air Conditioning" className="accent-cyan-500 w-4 h-4" />
                                        <span className="text-sm text-gray-700">Air Conditioning</span>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
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
                    Create Room
                </Button>
            </form>
        </div>
    )
};

export default AddRoom;