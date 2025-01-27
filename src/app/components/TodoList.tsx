"use client";
import React, { useState } from "react";

const TodoList = () => {
  const [formValue, setFormValue] = useState({
    address: "",
    suite: "",
    city: "",
    state: "",
    code: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [newTodo, setNewTodo] = useState<any[]>([]);
  const [editInput, setEditInput] = useState(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formValue.password !== formValue.confirmPassword) {
      alert("password does nor match!");
      return;
    }

    if (editInput !== null) {
      // Update operation
      const updatedData = [...newTodo];
      updatedData[editInput] = formValue;
      setNewTodo(updatedData);
      setEditInput(null);
    } else {
      // Create operation
      setNewTodo([...newTodo, formValue]);
    }

    setFormValue({
      address: "",
      suite: "",
      city: "",
      state: "",
      code: "",
      country: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleEdit = (index: number) => {
    setFormValue(newTodo[index]);
    handleDelete(index);
  };

  const handleDelete = (index: number) => {
    const updatedData = newTodo.filter((_, i) => i !== index); // Delete operation
    setNewTodo(updatedData);
  };

  // Check if all fields are filled
  const isFormComplete =
    formValue.address &&
    formValue.email &&
    formValue.password &&
    formValue.password === formValue.confirmPassword &&
    formValue.city &&
    formValue.code &&
    formValue.country &&
    formValue.state &&
    formValue.suite;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="px-10 pb-10 md:px-5 pt-6 flex flex-col"
      >
        <div className="items-end bg-white text-black p-8 rounded-xl flex flex-col gap-3">
          <div className="w-full">
            <h1 className="font-bold text-2xl">Address Information</h1>
            <p className="text-sm text-gray-600">
              Please enter your shipping address below.
            </p>
          </div>

          <div className="w-full">
            <label className="text-lg font-bold">Street Address</label>
            <input
              className="p-3 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="123 Main Str"
              required
              name="address"
              value={formValue.address}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold">Email</label>
            <input
              className="p-3 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              name="email"
              value={formValue.email}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold">
              Appartment/Suite (Optional)
            </label>
            <input
              className="p-3 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="Apt 4B"
              required
              name="suite"
              value={formValue.suite}
            />
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label className="text-lg font-bold">City</label>
              <input
                className="p-3 rounded w-full text-gray-500 border border-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="New York"
                required
                name="city"
                value={formValue.city}
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">State</label>
              <input
                className="p-3 rounded w-full text-gray-500 border border-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="NY"
                required
                name="state"
                value={formValue.state}
              />
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label className="text-lg font-bold">ZIP Code</label>
              <input
                className="p-3 rounded w-full text-gray-500 border border-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="10001"
                required
                name="code"
                value={formValue.code}
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">Country</label>
              <input
                className="p-3 rounded w-full text-gray-500 border border-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="United States"
                required
                name="country"
                value={formValue.country}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <label className="text-lg font-bold">Room Password</label>
              <input
                className="p-3 rounded w-full text-gray-500 border border-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="******"
                required
                name="password"
                value={formValue.password}
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">Confirm Password</label>
              <input
                className="p-3 rounded w-full text-gray-500 border border-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="******"
                required
                name="confirmpassword"
                value={formValue.confirmPassword}
              />
            </div>
          </div>
          <button
            className="bg-blue-500 border border-blue-500 rounded-md text-white cursor-pointer text-center w-full p-4"
            type="submit"
            disabled={!isFormComplete}
          >
            Save Address
          </button>
        </div>
      </form>
      <ul className="bg-white p-3 text-black"></ul>
    </div>
  );
};

export default TodoList;
