import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientList = ({
  data,
  onDelete,
  onEdit,
  onSearch,
  onPageChange,
  currentPage,
  totalPages,
}) => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="flex justify-center bg-gray-200 max-w-full mx-3">
      <div className="bg-white pl-6 pr-10 py-10 rounded-lg mt-10 shadow-xl w-full">
        {selectedPatient ? (
          <div className="">
            <button
              onClick={() => {
                setSelectedPatient(null);
              }}
              className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-700 mb-4 inline-block"
            >
              Back
            </button>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 pb-4">
              Patient Details
            </h1>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">Name:</h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.name}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Email:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Contact:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.contact}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Address:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Gender:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.gender}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Date Of Birth:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.dateofbirth}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">Age:</h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.age}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    BloodGroup:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{selectedPatient.bloodgroup}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1/3">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Medical History:
                  </h2>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">
                    {selectedPatient.medicalHistory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search patients..."
                className="w-96 bg-gray-100 p-2 border border-gray-300 rounded"
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  window.open(
                    "/signup/Patient",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700 transition"
              >
                + Create
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Patients
            </h1>
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="text-xl">
                  <th className="py-3 px-4 border-b text-left">Name</th>
                  <th className="py-3 px-4 border-b text-left">Email</th>
                  <th className="py-3 px-4 border-b text-left">Contact</th>
                  <th className="py-3 px-4 border-b text-left">Gender</th>
                  <th className="py-3 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{user.name}</td>
                      <td className="py-2 px-4 border-b">{user.email}</td>
                      <td className="py-2 px-4 border-b">{user.contact}</td>
                      <td className="py-2 px-4 border-b">{user.gender}</td>
                      <td className="py-2 px-4 border-b flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedPatient(user);
                          }}
                          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => {
                            onEdit(user._id);
                          }}
                          className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-700 transition"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete this patient?"
                              )
                            ) {
                              onDelete(user._id);
                            }
                          }}
                          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition"
                        >
                          <RiDeleteBinLine />
                        </button>
                        <ToastContainer />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      NO DATA FOUND
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                className={`px-3 py-1 mx-1 border rounded ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => onPageChange(index + 1)}
                  className={`px-3 py-1 mx-1 border rounded ${
                    index + 1 === currentPage ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => onPageChange(currentPage + 1)}
                className={`px-3 py-1 mx-1 border rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientList;