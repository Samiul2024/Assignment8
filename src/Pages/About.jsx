import React from 'react';
import Button from '../Components/ui/Button';

const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {/* About Us */}
            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">What is useState and how does it work in React?</h6>
                    <p className="text-sm text-gray-900">
                        useState
                        s a React Hook that allows you to add state to functional components. It's one of the most fundamental hooks in React, enabling components to remember and update information.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">What is the purpose of useEffect in React?
                    </h6>
                    <p className="text-sm text-gray-900">
                        In React, the useEffect hook is used to handle side effects in a component. A side effect is something that happens outside the component's main job of displaying content like fetching data, changing the document title, setting a timer, or listening to events.
                        React components re-render every time their state or props change. If we want to run some code after these changes like loading data from an API or updating the browser title we use useEffect.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">What is a custom hook in React and when should you use one?
                    </h6>
                    <p className="text-sm text-gray-900">
                        A custom hook in React is a way to reuse logic between components.
                        React has built-in hooks like useState, useEffect, and useContext. But sometimes, we'll be using the same code in multiple components for example, handling form input, fetching data, or listening to window size. Instead of copying and pasting that code everywhere, we can create a custom hook to keep our code clean and reusable.
                    </p>
                    <p>
                        We Use a custom hook when:
                        we have some logic that we want to use in more than one component
                        we want to organize complex logic into smaller, readable pieces
                        we want to make your component code cleaner and easier to maintain
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Difference between controlled and uncontrolled components. Which one is better?
                    </h6>
                    <p className="text-sm text-gray-900">
                        Controlled component is a form element that is fully controlled by React state.The form value lives in the component's state and any change to the input goes through React using an onChange handler.
                        we have full control over what's typed and how it's processed.
                        React recommended way


                    </p>
                    <p>
                        Uncontrolled component stores the input value inside the actual DOM, not in React state. We use a ref to access the value only when needed.
                        React doesn't track every change.
                        More like traditional HTML forms work.
                        we usually access the value only on form submission.
                    </p>
                    <p>
                        In most cases, controlled components are preferred in React because they make our forms more predictable and easier to test and debug.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Tell us something about useFormStatus() in React.
                    </h6>
                    <p className="text-sm text-gray-900">
                        useFormStatus() is a React hook that tells us about the current status of a form submission. It helps us know things like:

                        Is the form being submitted?

                        Is it done submitting?

                        Was there an error?

                        We can use this to disable buttons while submitting, show loading spinners, or display error messages all without writing a lotta extra logic.
                    </p>
                </div>
                {/* <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5"></h6>
                    <p className="text-sm text-gray-900">
                    </p>
                </div> */}
            </div>
            <div className="text-center">
                <Button label='Learn More'
                />
            </div>
        </div>
    );
};

export default About;