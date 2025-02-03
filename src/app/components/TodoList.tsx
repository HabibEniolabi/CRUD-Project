"use client";
import React, { useState } from "react";

const TodoList = () => {
  const initialTodos = [
    {
      address: "123 Main St",
      suite: "Apt 1",
      city: "New York",
      state: "NY",
      code: "10001",
      country: "USA",
      email: "example1@example.com",
    },
    {
      address: "456 Oak Rd",
      suite: "Suite B",
      city: "Los Angeles",
      state: "CA",
      code: "90001",
      country: "USA",
      email: "example2@example.com",
    },
  ];

  const [formValue, setFormValue] = useState({
    address: "",
    suite: "",
    city: "",
    state: "",
    code: "",
    country: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [newTodo, setNewTodo] = useState(initialTodos);
  const [editInput, setEditInput] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formValue.password !== formValue.confirmpassword) {
      alert("password does nor match!");
      return;
    }

    if (editInput !== null) {
      // Update operation
      const updatedData = [...newTodo];
      updatedData[editInput] = {
        address: formValue.address,
        suite: formValue.suite,
        city: formValue.city,
        state: formValue.state,
        code: formValue.code,
        country: formValue.country,
        email: formValue.email,
      };
      setNewTodo(updatedData);
      setEditInput(null);
    } else {
      // Create operation
      setNewTodo([
        ...newTodo,
        {
          address: formValue.address,
          suite: formValue.suite,
          city: formValue.city,
          state: formValue.state,
          code: formValue.code,
          country: formValue.country,
          email: formValue.email,
        },
      ]);
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
      confirmpassword: "",
    });
  };

  const handleEdit = (index: number) => {
    setEditInput(index);
    const todoToEdit = newTodo[index];
    setFormValue({
      ...todoToEdit,
      password: "",
      confirmpassword: "",
    });
  };

  const handleDelete = (index: number) => {
    const updatedData = newTodo.filter((_, i) => i !== index); // Delete operation
    setNewTodo(updatedData);
  };

  // Check if all fields are filled
  const isFormComplete = () => {
    return (
      formValue.address &&
      formValue.email &&
      formValue.password &&
      formValue.password === formValue.confirmpassword &&
      formValue.city &&
      formValue.code &&
      formValue.country &&
      formValue.state &&
      formValue.suite
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Address Information
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-sm"
      >
        <p className="text-xl font-semibold text-gray-700">
          Please enter your shipping address below.
        </p>
        <div className="w-full">
          <div className="w-full">
            <label className="text-lg font-bold">Street Address</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md "
              type="text"
              onChange={(e) =>
                setFormValue({ ...formValue, address: e.target.value })
              }
              placeholder="123 Main Str"
              required
              name="address"
              value={formValue.address}
            />
          </div>
          <div className="w-full">
            <label className="text-lg font-bold">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              type="text"
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
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
              className="w-full p-3 border border-gray-300 rounded-md "
              type="text"
              onChange={(e) =>
                setFormValue({ ...formValue, suite: e.target.value })
              }
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
                className="w-full p-3 border border-gray-300 rounded-md"
                type="text"
                onChange={(e) =>
                  setFormValue({ ...formValue, city: e.target.value })
                }
                placeholder="New York"
                required
                name="city"
                value={formValue.city}
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">State</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md "
                type="text"
                onChange={(e) =>
                  setFormValue({ ...formValue, state: e.target.value })
                }
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
                className="w-full p-3 border border-gray-300 rounded-m"
                type="text"
                onChange={(e) =>
                  setFormValue({ ...formValue, code: e.target.value })
                }
                placeholder="10001"
                required
                name="code"
                value={formValue.code}
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">Country</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="text"
                onChange={(e) =>
                  setFormValue({ ...formValue, country: e.target.value })
                }
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
                className="w-full p-3 border border-gray-300 rounded-md"
                type="password"
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
                placeholder="******"
                required
                name="password"
                value={formValue.password}
              />
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">Confirm Password</label>
              <input
                className="w-full p-3 border border-gray-300 rounded-md"
                type="password"
                onChange={(e) =>
                  setFormValue({ ...formValue, confirmpassword: e.target.value })
                }
                placeholder="******"
                required
                name="password"
                value={formValue.confirmpassword}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!isFormComplete()}
            className={`w-full p-3 rounded-md mt-3 text-white ${
              isFormComplete()
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {editInput !== null ? "Update Address" : "Submit Address"}
          </button>
        </div>
      </form>
      {/* Todo List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Address Input Fields
        </h3>
        <ul className="space-y-4">
          {newTodo.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-800">
                {todo.address}, {todo.suite}, {todo.city}, {todo.state},{" "}
                {todo.code}, {todo.country}, {todo.email}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
