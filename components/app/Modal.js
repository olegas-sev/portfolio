import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CodeIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

function Modal({ isOpen, close, setOpen, project }) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-6xl sm:w-full">
                <div className="bg-white">
                  <div className="sm:grid sm:grid-cols-10 sm:items-start">
                    {/* CONTENT STARTS */}
                    <div className="col-span-6 max-h-full border-r border-gray-400 border-opacity-75">
                      <img src={project.imgs[0]} alt={project.title} />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:text-left  pt-5 px-4 col-span-4">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        {project.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        {project.description.split('\n').map((p, i) => (
                          <p key={i} className="text-sm text-gray-500 mb-2">
                            {p}
                          </p>
                        ))}
                      </div>
                      <div className="mt-2">
                        <a
                          className="mr-2 mb-2 w-full inline-flex justify-center rounded-md border border-indigo-300 shadow-sm px-4 py-2 bg-indigo-400 text-base font-medium text-gray-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm items-center"
                          href={project.github}
                          target="_blank"
                        >
                          <CodeIcon className="h-5 w-5 mr-2" />
                          Code
                        </a>
                        {/* Demo is optional, therefore needs fallback */}
                        {project.demo ? (
                          <a
                            className="w-full inline-flex justify-center rounded-md border border-indigo-300 shadow-sm px-4 py-2 bg-indigo-400 text-base font-medium text-gray-200 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            href={project.demo}
                            target="_blank"
                          >
                            <EyeIcon className="h-5 w-5 mr-2" />
                            Demo
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm disabled:bg-gray-300 disabled:text-gray-800 disabled:opacity-90 disabled:cursor-not-allowed items-center"
                            disabled
                          >
                            <EyeOffIcon className="h-5 w-5 mr-2" />
                            Demo
                          </button>
                        )}
                      </div>
                      <div className="px-4 py-3 sm:px-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                          onClick={close}
                          ref={cancelButtonRef}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default Modal;
