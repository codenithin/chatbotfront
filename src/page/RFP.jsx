import React from 'react'

export default function RFP() {
    return (
        <div className='w-screem h-screen overflow-y-scroll'>

            <div className='w-full flex justify-center items-center mt-16'>

                <div className="w-[50%] px-4 mx-auto select-none">
                    <div className="text-7xl font-bold font-sans pl-[25%] text-gray-800 dark:[#1E1E1E]">
                        Welcome <br /> to <span className='text-9xl font-semibold bg-gradient-to-br from-[#2563EB] from-35% via-[#5E4FF4] to-blue-700 inline-block text-transparent bg-clip-text'>Triniti</span>
                    </div>
                </div>

                <div className='w-[50%] px-9 bg-gradient-to-tr from-[#5E4FF4] to-blue-700 text-white rounded-l-3xl py-8'>
                    <div className='text-3xl font-semibold'>Dear Prospective Vendors</div>
                    <div className='text-xl mt-1 text-wrap'>
                        We are a leading Company in Banking and Financial services and are seeking proposals for the development and implementation of a comprehensive Talent Acquisition System.
                        We are committed to enhancing our recruitment processes and optimizing our talent acquisition strategies to
                        support our growing business needs.
                    </div>
                </div>
            </div>

            <div className='w-full mt-10 flex justify-start items-center'>

                <div className='bg-gradient-to-tr to-[#5E4FF4] from-blue-700 w-[70%] py-8 rounded-r-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[20%]'>About Us</div>
                    <div className='mt-1 text-xl pl-[20%] text-pretty pr-8'>
                        We are a global company operating in 15 Countries with a headcount of 18,000 people.
                        With a dedicated focus on Sustainability, Governance, Value for Life and sustainable development
                        we aim to simplify the lives of our customers.
                    </div>
                </div>

                <div className='w-[40%] flex justify-center items-center'>
                    <img className='w-96' src='./about-us.jpg' />
                </div>
            </div>

            <div className='w-full mt-10 flex flex-row-reverse justify-center items-center'>

                <div className='bg-gradient-to-bl from-[#5E4FF4] to-blue-700 w-[70%] py-8 rounded-l-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[10%]'>Project Overview</div>
                    <div className='mt-1 text-xl pl-[10%] text-balance'>
                        The objective of this project is to procure and implement a state-of-the-art Talent Acquisition
                        System that will streamline our recruitment processes, improve candidate experiences, and enable us to
                        attract and retain top talent effectively. The system should integrate seamlessly with our existing HR
                        management systems and comply with all relevant data security and compliance standards.
                    </div>
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <img className='w-72' src='./overview.png' />
                </div>
            </div>

            <div className='w-full mt-10 flex justify-center items-center'>

                <div className='bg-gradient-to-tr pr-32 from-[#5E4FF4] to-blue-700 w-[70%] py-8 rounded-r-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[10%]'>Scope of Work</div>
                    <div className='mt-1 text-xl w-full font-bold pl-[10%]'>
                        The selected vendor will be responsible for the following
                    </div>
                    <ul className='w-full mt-1 text-lg pl-[10%] text-pretty space-y-2'>
                        <li>
                            <strong>1.</strong> Designing and developing a custom Talent Acquisition System tailored to our specific needs and requirements.
                        </li>
                        <li>
                            <strong>2.</strong> Providing comprehensive training and support to our internal teams during the implementation phase and post-implementation support.
                        </li>
                        <li>
                            <strong>3.</strong> Ensuring seamless integration with our existing HR management systems, including HRM, Employee Self Service systems.
                        </li>
                        <li>
                            <strong>4.</strong> Implementing robust data security measures to safeguard candidate information and ensure compliance with relevant regulations.
                        </li>
                        <li>
                            <strong>5.</strong> Delivering regular progress reports and updates throughout the project lifecycle.
                        </li>
                    </ul>
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <img className='w-72' src='./scope.jpg' />
                </div>
            </div>


            <div className='w-full mt-10 flex flex-row-reverse justify-center items-center'>

                <div className='bg-gradient-to-bl from-[#5E4FF4] to-blue-700 w-[70%] py-8 rounded-l-3xl text-white'>
                    <div className='text-3xl font-semibold pl-[10%]'>Submission Guidelines</div>
                    <div className='mt-1 text-xl pl-[10%] text-balance'>
                        Interested vendors are invited to submit their proposals no later than Aug 2024. Proposals 
                        should be comprehensive and include detailed information on the vendor's experience, proposed solution,
                         implementation timeline, pricing, and any additional services offered.
                    </div>
                </div>

                <div className='w-[30%] flex justify-center items-center'>
                    <img className='w-72' src='./guidelines.png' />
                </div>
            </div>



            <div class="container mb-20 w-[80%] mx-auto px-4 py-8 mt-20 bg-gradient-to-tl from-[#5E4FF4] to-blue-700  rounded-2xl border shadow-md">
                <h1 class="text-3xl py-10 text-center font-bold mb-4 text-white">Request for Proposal (RFP) Questions</h1>
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question1" class="block text-lg mb-2">1. Please provide details about your company's
                            experience in developing talent acquisition systems:</label>
                        <textarea id="question1" name="question1" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question2" class="block text-lg mb-2">2. How will your solution ensure seamless
                            integration with our existing HR management systems?</label>
                        <textarea id="question2" name="question2" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question3" class="block text-lg mb-2">3. Can you provide examples of similar projects you
                            have successfully delivered in the past?</label>
                        <textarea id="question3" name="question3" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question4" class="block text-lg mb-2">4. How does your solution address data security and
                            compliance requirements?</label>
                        <textarea id="question4" name="question4" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question5" class="block text-lg mb-2">5. What level of ongoing support and maintenance can
                            we expect after implementation?</label>
                        <textarea id="question5" name="question5" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question6" class="block text-lg mb-2">6. How does your solution handle candidate data
                            privacy?</label>
                        <textarea id="question6" name="question6" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question7" class="block text-lg mb-2">7. What measures do you have in place for system
                            scalability?</label>
                        <textarea id="question7" name="question7" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question8" class="block text-lg mb-2">8. How do you ensure the reliability and performance
                            of your system?</label>
                        <textarea id="question8" name="question8" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question9" class="block text-lg mb-2">9. Can you describe your approach to user training
                            and onboarding?</label>
                        <textarea id="question9" name="question9" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question10" class="block text-lg mb-2">10. How does your solution handle multilingual
                            support?</label>
                        <textarea id="question10" name="question10" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question11" class="block text-lg mb-2">11. What customization options are available in
                            your solution?</label>
                        <textarea id="question11" name="question11" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question12" class="block text-lg mb-2">12. How do you handle system updates and
                            upgrades?</label>
                        <textarea id="question12" name="question12" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <div class="bg-white border rounded-lg p-4 mx-10">
                        <label for="question13" class="block text-lg mb-2">13. Can you provide details on your disaster
                            recovery and backup strategies?</label>
                        <textarea id="question13" name="question13" rows="4"
                            class="p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
