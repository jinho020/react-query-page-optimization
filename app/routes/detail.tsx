import { useQuery } from '@tanstack/react-query';
import { getProductById } from '~/apis/products';
import { useBoolean } from '~/hooks/use-boolean';

function Modal({ onClose }: { onClose: () => void }) {
  const { data, isLoading } = useQuery(getProductById(2));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-700 mb-4">{data.description}</p>
          <p className="text-lg font-semibold mb-4">Price: ${data.price}</p>
          <img src={data.images[0]} alt={data.title} className="w-full max-w-md mx-auto" />
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DetailPage() {
  const { data, isLoading } = useQuery(getProductById(1));

  const { value: isModalOpen, setTrue: openModal, setFalse: closeModal } = useBoolean();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <p className="text-lg font-semibold mb-4">Price: ${data.price}</p>
      <img src={data.images[0]} alt={data.title} className="w-full max-w-md mx-auto" />
      <button onClick={openModal} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Show Product 2
      </button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
