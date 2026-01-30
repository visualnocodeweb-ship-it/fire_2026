"use client";

import { useState } from 'react';

import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Asegúrate de que la ruta sea correcta según tu instalación de heroicons



export default function ImageGalleryModal() {

  const [showModal, setShowModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);



  const openModal = (imageUrl: string) => {

    setSelectedImage(imageUrl);

    setShowModal(true);

  };



  const closeModal = () => {

    setSelectedImage(null);

    setShowModal(false);

  };



  return (

    <>

      <div className="flex justify-center gap-8">

                    <div onClick={() => openModal("/images/WhatsApp Image 2026-01-29 at 11.46.18 AM.jpeg")} className="cursor-pointer">

                      <img

                        src="/images/WhatsApp Image 2026-01-29 at 11.46.18 AM.jpeg"

                        alt="Incendio Forestal Patagonia 1"

                        className="w-96 h-64 object-cover rounded-lg shadow-lg"

                      />

                      <div className="text-slate-400 text-sm mt-2">10 de enero 2026</div>

                    </div>

                    <div onClick={() => openModal("/images/Captura de pantalla 2026-01-29 114633.png")} className="cursor-pointer">

                      <img

                        src="/images/Captura de pantalla 2026-01-29 114633.png"

                        alt="Incendio Forestal Patagonia 2"

                        className="w-96 h-64 object-cover rounded-lg shadow-lg"

                      />

                      <div className="text-slate-400 text-sm mt-2">29 de enero 2026</div>

                    </div>

      </div>



      {showModal && selectedImage && (

        <div

          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"

          onClick={closeModal}

        >

          <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>

            <img src={selectedImage} alt="Imagen ampliada" className="max-w-full max-h-full object-contain" />

                        <button

                          className="absolute top-4 left-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 flex items-center space-x-2"

                          onClick={closeModal}

                        >

                          <ArrowLeftIcon className="h-6 w-6" />

                          <span>Volver atrás</span>

                        </button>

          </div>

        </div>

      )}

    </>

  );

}