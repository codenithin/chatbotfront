export default function CompareHeader({ title, text }) {
    return (
      <div className="col-span-1">
        <span className="font-semibold text-lg text-gray-800 ">
          {title}
        </span>
        <p className="mt-2 text-sm text-gray-500">
          {text}
        </p>
      </div>
    )
  }
  