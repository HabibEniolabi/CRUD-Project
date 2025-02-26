"use client";
import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

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

  // const [formValue, setFormValue] = useState({
  //   address: "",
  //   suite: "",
  //   city: "",
  //   state: "",
  //   code: "",
  //   country: "",
  //   email: "",
  //   password: "",
  //   confirmpassword: "",
  // });
  const [newTodo, setNewTodo] = useState(initialTodos);
  const [editInput, setEditInput] = useState<number | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //Interface for Icons
  const icons = {
    visible: <FontAwesomeIcon icon={faEye} />,
    hidden: <FontAwesomeIcon icon={faEyeSlash} />,
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      suite: "",
      city: "",
      state: "",
      code: "",
      country: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, { resetForm }) => {
      if (editInput !== null) {
        // Update existing item
        const updatedData = [...newTodo];
        updatedData[editInput] = values;
        setNewTodo(updatedData);
        setEditInput(null);
      } else {
        // Add new item
        setNewTodo([...newTodo, values]);
      }
      resetForm();
    },
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (formValue.password !== formValue.confirmpassword) {
  //     alert("password does nor match!");
  //     return;
  //   }

  //   if (editInput !== null) {
  //     // Update operation
  //     const updatedData = [...newTodo];
  //     updatedData[editInput] = {
  //       address: formValue.address,
  //       suite: formValue.suite,
  //       city: formValue.city,
  //       state: formValue.state,
  //       code: formValue.code,
  //       country: formValue.country,
  //       email: formValue.email,
  //     };
  //     setNewTodo(updatedData);
  //     setEditInput(null);
  //   } else {
  //     // Create operation
  //     setNewTodo([
  //       ...newTodo,
  //       {
  //         address: formValue.address,
  //         suite: formValue.suite,
  //         city: formValue.city,
  //         state: formValue.state,
  //         code: formValue.code,
  //         country: formValue.country,
  //         email: formValue.email,
  //       },
  //     ]);
  //   }

  //   setFormValue({
  //     address: "",
  //     suite: "",
  //     city: "",
  //     state: "",
  //     code: "",
  //     country: "",
  //     email: "",
  //     password: "",
  //     confirmpassword: "",
  //   });
  // };

  const handleEdit = (index: number) => {
    // setEditInput(index);
    // const todoToEdit = newTodo[index];
    // setFormValue({
    //   ...todoToEdit,
    //   password: "",
    //   confirmpassword: "",
    // });
    formik.setValues(newTodo[index]);
    setEditInput(index);
  };

  const handleDelete = (index: number) => {
    // const updatedData = newTodo.filter((_, i) => i !== index); // Delete operation
    // setNewTodo(updatedData);
    setNewTodo(newTodo.filter((_, i) => i !== index));
  };

  // Check if all fields are filled
  // const isFormComplete = () => {
  //   return (
  //     formValue.address &&
  //     formValue.email &&
  //     formValue.password &&
  //     formValue.password === formValue.confirmpassword &&
  //     formValue.city &&
  //     formValue.code &&
  //     formValue.country &&
  //     formValue.state &&
  //     formValue.suite
  //   );
  // };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Address Information
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-sm"
      >
        <p className="text-xl font-semibold text-gray-700">
          Please enter your shipping address below.
        </p>
        <div className="w-full">
          <div className="w-full">
            <label className="text-lg font-bold">Street Address</label>
            <input
              className={
                formik.errors.address && formik.touched.address
                  ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                  : "w-full p-3 border border-gray-300 rounded-md "
              }
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="123 Main Str"
              required
              name="address"
              value={formik.values.address}
            />
          </div>
          {formik.errors.address && formik.touched.address && (
            <p className="text-xs text-[#fc8181]">{formik.errors.address}</p>
          )}
          <div className="w-full">
            <label className="text-lg font-bold">Email</label>
            <input
              className={
                formik.errors.email && formik.touched.email
                  ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                  : "w-full p-3 border border-gray-300 rounded-md "
              }
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="example@gmail.com"
              required
              name="email"
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="text-xs text-[#fc8181]">{formik.errors.email}</p>
          )}
          <div className="w-full">
            <label className="text-lg font-bold">
              Appartment/Suite (Optional)
            </label>
            <input
              className={
                formik.errors.suite && formik.touched.suite
                  ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                  : "w-full p-3 border border-gray-300 rounded-md "
              }
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Apt 4B"
              required
              name="suite"
              value={formik.values.suite}
            />
          </div>
          {formik.errors.suite && formik.touched.suite && (
            <p className="text-xs text-[#fc8181]">{formik.errors.suite}</p>
          )}
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label className="text-lg font-bold">City</label>
              <input
                className={
                  formik.errors.city && formik.touched.city
                    ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                    : "w-full p-3 border border-gray-300 rounded-md "
                }
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="New York"
                required
                name="city"
                value={formik.values.city}
              />
              {formik.errors.city && formik.touched.city && (
                <p className="text-xs text-[#fc8181]">{formik.errors.city}</p>
              )}
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">State</label>
              <input
                className={
                  formik.errors.state && formik.touched.state
                    ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                    : "w-full p-3 border border-gray-300 rounded-md "
                }
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="NY"
                required
                name="state"
                value={formik.values.state}
              />
              {formik.errors.state && formik.touched.state && (
                <p className="text-xs text-[#fc8181]">{formik.errors.state}</p>
              )}
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label className="text-lg font-bold">ZIP Code</label>
              <input
                className={
                  formik.errors.code && formik.touched.code
                    ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                    : "w-full p-3 border border-gray-300 rounded-md "
                }
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="10001"
                required
                name="code"
                value={formik.values.code}
              />
              {formik.errors.code && formik.touched.code && (
                <p className="text-xs text-[#fc8181]">{formik.errors.code}</p>
              )}
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">Country</label>
              <input
                className={
                  formik.errors.country && formik.touched.country
                    ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                    : "w-full p-3 border border-gray-300 rounded-md "
                }
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="United States"
                required
                name="country"
                value={formik.values.country}
              />
              {formik.errors.country && formik.touched.country && (
                <p className="text-xs text-[#fc8181]">
                  {formik.errors.country}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <label className="text-lg font-bold">Room Password</label>
              <div className="flex justify-between items-center relative">
                <input
                  className={
                    formik.errors.password && formik.touched.password
                      ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                      : "w-full p-3 border border-gray-300 rounded-md "
                  }
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="******"
                  required
                  name="password"
                  value={formik.values.password}
                />
                <div
                  className="p-2 cursor-pointer ml-[-37px]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? icons.visible : icons.hidden}
                </div>
              </div>
              {formik.errors.password && formik.touched.password && (
                <p className="text-xs text-[#fc8181]">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-lg font-bold">Confirm Password</label>
              <div className="flex justify-center items-center relative">
                <input
                  className={
                    formik.errors.confirmpassword &&
                    formik.touched.confirmpassword
                      ? " border-red-500 w-full p-3 border bg-red-100 rounded-md"
                      : "w-full p-3 border border-gray-300 rounded-md "
                  }
                  type={showConfirmPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="******"
                  required
                  name="password"
                  value={formik.values.confirmpassword}
                />
                <div
                  className="p-2 ml-[-37px] cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? icons.visible : icons.hidden}
                </div>
              </div>
              {formik.errors.confirmpassword &&
                formik.touched.confirmpassword && (
                  <p className="text-xs text-[#fc8181]">
                    {formik.errors.confirmpassword}
                  </p>
                )}
            </div>
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.dirty}
            className={`w-full p-3 rounded-md mt-3 text-white ${
              formik.isValid || formik.dirty
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
