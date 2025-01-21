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
    confirmpassword: ""
  })

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
  }

  return (
    <form>
      <div className="items-end bg-white text-black p-8 rounded-xl">
        <h1 className="font-bold text-2xl">Address Information</h1>
        <p className="text-sm text-gray-600">
          Please enter your shipping address below.
        </p>

        <div className="w-full">
          <label className="text-lg">Street Address</label>
          <input
            className="p-4 rounded w-full text-gray-500 border border-gray-500"
            type="text"
            onChange={handleChange}
            placeholder="123 Main Str"
            name="address"
            value={formValue.address}
          />
        </div>
        <div className="w-full">
          <label className="text-lg">Email</label>
          <input
            className="p-4 rounded w-full text-gray-500 border border-gray-500"
            type="text"
            onChange={handleChange}
            placeholder="example@gmail.com"
            name="email"
            value={formValue.email}
          />
        </div>
        <div className="w-full">
          <label className="text-lg">Appartment/Suite (Optional)</label>
          <input
            className="p-4 rounded w-full text-gray-500 border border-gray-500"
            type="text"
            onChange={handleChange}
            placeholder="Apt 4B"
            name="suite"
            value={formValue.suite}
          />
        </div>
        <div className="flex gap-3">
          <div className="w-full">
            <label className="text-lg">City</label>
            <input
              className="p-4 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="New York"
              name="city"
              value={formValue.city}
            />
          </div>
          <div className="w-full">
            <label className="text-lg">State</label>
            <input
              className="p-4 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="NY"
              name="state"
              value={formValue.state}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-full">
            <label className="text-lg">ZIP Code</label>
            <input
              className="p-4 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="10001"
              name="code"
              value={formValue.code}
            />
          </div>
          <div className="w-full">
            <label className="text-lg">Country</label>
            <input
              className="p-4 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="United States"
              name="country"
              value={formValue.country}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-full">
            <label className="text-lg">Room Password</label>
            <input
              className="p-4 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="******"
              name="password"
              value={formValue.password}
            />
          </div>
          <div className="w-full">
            <label className="text-lg">Confirm Password</label>
            <input
              className="p-4 rounded w-full text-gray-500 border border-gray-500"
              type="text"
              onChange={handleChange}
              placeholder="******"
              name="confirmpassword"
              value={formValue.confirmpassword}
            />
          </div>
        </div>
        <div className="bg-blue-900 text-white cursor-pointer text-center w-full p-4">
          <h3>Save Address</h3>
        </div>
      </div>
    </form>
  );
};

export default TodoList;
