import { InputHTMLAttributes } from "react"

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string
	onRemove: () => void
}

export default function Task({ title, onRemove, ...props }: TaskProps) {
	return (
		<label className="text-xl flex items-center cursor-pointer">
			<input type="checkbox" className="hidden peer" {...props} />
			<div className="h-4 w-4 border-2 border-black mr-2 relative flex justify-center items-center peer-checked:after:block after:hidden after:w-6 after:h-6 after:content-[''] after:absolute after:bg-checkmark after:translate-x-1 after:-translate-y-0.5"></div>
			<p className="peer-checked:line-through">{title}</p>
			<button className="peer-hover:block hidden ml-2" onClick={onRemove}>
				<img src="/trash.svg" alt="" className="h-5 w-5" />
			</button>
		</label>
	)
}
