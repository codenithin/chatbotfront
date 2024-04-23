export default function FormQuestion({ index, question }) {
    return (
        <div className="bg-white border rounded-lg p-4 mx-10">
            <label for="question1" className="block text-lg mb-2">{index}. {question}</label>
            <textarea disabled id="question1" name="question1" rows="4"
                className="resize-none p-2 text-lg focus:outline-none border w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "></textarea>

            <div className="flex justify-start items-center px-5 py-5">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 ">
                    <option selected>Choose a respone</option>
                    <option value="text">Text</option>
                    <option value="yes-no">Yes/No</option>
                </select>
            </div>

            <div className="flex justify-between items-center px-5 w-[50%] pl-6">
                <label className="select-none text-lg" htmlFor="allow">Required</label>
                <input id="allow" type="checkbox" className="ml-1" />
            </div>

            <div className="flex justify-between items-center px-5 w-[50%] pl-6">
                <label className="select-none text-lg" htmlFor="required">Allow Attachments</label>
                <input id="required" type="checkbox" className="ml-3" />
            </div>

        </div >
    )
}