
import React from 'react';

const ContactPage = () => {
    return (
        <div id='contact' className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Me</h1>
                <form>
                    <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            required
                        ></textarea>
                    </div>
                    <div className='flex justify-center '>


                    <button
                        type="submit"
                        className="m-2 py-2 px-4 focus:outline-none focus:ring-2 border border-black border-opacity-60 rounded h-11 w-50 text-black hover:bg-gray-800 hover:text-white"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
