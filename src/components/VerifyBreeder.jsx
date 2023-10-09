import  { useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-modal';

const VerifyBreeder = () => {
  // Dummy data for breeders
  let breeders = [
    { id: 1, name: 'Breeder 1', contact: '123-456-7890' },
    { id: 2, name: 'Breeder 2', contact: '987-654-3210' },
    // Add more dummy data here
  ];

  // State to manage the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store new breeder details
  const [newBreeder, setNewBreeder] = useState({
    id: '',
    name: '',
    contact: '',
  });

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBreeder({
      ...newBreeder,
      [name]: value,
    });
  };

  // Function to add a new breeder to the list
  const handleAddBreeder = () => {
    if (newBreeder.id && newBreeder.name && newBreeder.contact) {
      breeders.push(newBreeder);
      closeModal();
      setNewBreeder({
        id: '',
        name: '',
        contact: '',
      });
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="flex flex-col items-center w-full bg-yellow-100">
        <h1 className="text-center text-amber-900 font-medium text-5xl mt-10">
          Verify Breeder
        </h1>

        {/* Add Breeder Button */}
        <button
          className="bg-amber-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full my-10 w-40"
          onClick={openModal}
        >
          Add Breeder
        </button>

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-amber-300 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-amber-300 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-amber-300 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 bg-amber-300"></th>
            </tr>
          </thead>
          <tbody>
            {breeders.map((breeder) => (
              <tr key={breeder.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {breeder.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {breeder.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {breeder.contact}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200">
                  <button className="text-red-500 hover:text-red-700">
                    {/* Add your delete icon here */}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Add Breeder Modal"
          ariaHideApp={false}
          style={{
            overlay: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              width: '500px',
              height: '350px',
              margin: 'auto',
              padding: '20px',
            },
          }}
        >
          <div className='flex flex-col items-center'>
            <h2 className='text-amber-700 text-4xl my-4'>Add Breeder</h2>
          </div>
          <div className='flex flex-col items-center'>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="id"
                  value={newBreeder.id}
                  onChange={handleInputChange}
                  className="border rounded-md py-2 px-3 w-"
                />
              </div>
              
              <button
                type="button"
                onClick={handleAddBreeder}
                className="bg-amber-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Add Breeder
              </button>
            </form>
            <div className='flex flex-col items-center justify-center'>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-48"
            >
              Close Modal
            </button>
            </div>
          </div>
          </Modal>
      </div>
    </div>
  );
};

export default VerifyBreeder;
