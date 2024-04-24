export default function FormQuestionPortal({ index, question }) {
    return (
        <div className="bg-white border rounded-lg p-4 mx-10">
            <label for="question1" className="block text-lg mb-2">{index}. {question.question} {question.required && (<span className="text-2xl">*</span>)}</label>

            {
                question.questionType === 'text' && (
                    <textarea id="question1" name="question1" rows="4"
                        className=" p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#ff4117] focus:ring-opacity-50 "></textarea>
                )
            }

            {
                question.questionType === 'yes-no' && (
                    <div className="flex flex-col justify-center items-start my-5">
                        <div className="w-[5%] flex justify-between">
                            <input name="answer" id="yes" type="radio" value={'yes'} />
                            <label htmlFor="yes">Yes</label>
                        </div>

                        <div className="w-[5%] flex justify-between">
                            <input name="answer" id="no" type="radio" value={'no'} />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                )
            }

            {
                question.allowAttachment && (
                    <>
                        <div className="w-full flex justify-start items-center">
                            <input type="file" id="file-upload" style={{display: 'none'}} />
                            <label htmlFor="file-upload">
                                <div className="w-24 rounded-xl text-white font-semibold select-none hover:text-gray-200 cursor-pointer px-5 py-2 flex justify-center items-center bg-gradient-to-tl from-[#ff8010] to-[#ff4117]">
                                    Upload
                                </div>
                            </label>
                        </div>
                    </>
                )
            }

        </div >
    )
}