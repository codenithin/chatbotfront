import FormQuestionPortal from "./FormQuestionPortal";

export function FormPortal({ questions, title }) {
    return (

        <div className="container mb-20 w-[80%] mx-auto px-4 py-8 mt-20 bg-gradient-to-tl from-[#ff8010] to-[#ff4117] rounded-2xl border shadow-md">
            <h1 className="text-3xl py-10 text-center font-bold mb-4 text-white">{title}</h1>
            
            <div className="grid grid-cols-1 gap-4">
                {
                    questions.map((x, i) => (
                        <FormQuestionPortal index={i + 1} question={x} />
                    ))
                }
            </div>

            <div className="w-full mt-5 flex justify-center items-center">
                <button onClick={(e) => {e.preventDefault(); window.location.reload();}} className="w-64 py-3 rounded-xl text-black font-semibold select-none bg-gray-200 cursor-pointer px-5 flex justify-center items-center ">
                    Submit
                </button>
            </div>
        </div>
    )
}


