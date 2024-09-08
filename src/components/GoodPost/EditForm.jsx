"use client";

import { BASE_API_URL } from "@/lib/constansts";
import { validateMessage, validateName } from "@/lib/validation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditGoodForm = ({ goodPost }) => {
  const [name, setName] = useState(goodPost.name || "");
  const [message, setMessage] = useState(goodPost.message || "");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const updatedAlert = () => {
    toast.success("Post updated successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValidationError = validateName(name);
    const messageValidationError = validateMessage(message);

    if (nameValidationError) setNameError(nameValidationError);
    if (messageValidationError) setMessageError(messageValidationError);
    if (nameValidationError || messageValidationError) return;

    setIsSubmitting(true);

    try {
      await axios.put(
        `${BASE_API_URL}/api/goodpost/${goodPost.id}`,
        { name, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      updatedAlert();
      router.push("/good-posts");
      router.refresh();
    } catch (error) {
      console.error("Error creating Post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Nama Lengkap
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameError(validateName(name))}
            type="text"
            id="name"
            name="id"
            value={name}
            placeholder="Nama Lengkap"
            className={`outline-none shadow-md text-sm text-gray-700 py-3 px-4 w-full focus:ring-2 focus:ring-offset-1 focus:ring-blue-700 focus:border-blue-700 transition-all duration-300 ease-in-out rounded ${
              nameError ? "border-red-500" : ""
            }`}
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Pesan
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setMessageError(validateMessage(message))}
            id="message"
            value={message}
            name="message"
            placeholder="Tuliskan pesan"
            className={`outline-none shadow-md text-sm text-gray-700 py-2 h-[120px] px-4 w-full focus:ring-2 focus:ring-offset-1 focus:ring-blue-700 focus:border-blue-700 transition-all duration-300 ease-in-out rounded ${
              messageError ? "border-red-500" : ""
            }`}
          />
          {messageError && (
            <p className="text-red-500 text-sm">{messageError}</p>
          )}
        </div>
        <div className="mb-4 flex">
          <button
            disabled={isSubmitting}
            type="submit"
            className={`flex-1 bg-blue-600 text-white font-semibold py-2 px-5 rounded-full hover:bg-blue-800 transition-all ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditGoodForm;
