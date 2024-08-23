
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
