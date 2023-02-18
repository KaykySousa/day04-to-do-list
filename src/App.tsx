import { useState } from "react"
import Task from "./components/Task"

interface TaskListType {
	title: string
	checked?: boolean
}

export default function App() {
	const [taskList, setTaskList] = useState<TaskListType[]>([
		{
			title: "Programar",
			checked: false,
		},
		{
			title: "Estudar",
			checked: false,
		},
		{
			title: "Dormir",
			checked: true,
		},
	])

	const [newTask, setNewTask] = useState("")

	return (
		<div className="min-h-screen w-full flex justify-center items-center bg-neutral-900 font-hand p-4">
			<div className="flex flex-col max-w-xs w-full h-96 bg-amber-300 shadow p-4 relative after:content-[''] after:absolute after:h-7 after:w-32 after:bg-neutral-100 after:bg-opacity-50 after:top-1.5 after:-right-11 after:rotate-45 after:shadow-sm before:content-[''] before:absolute before:h-7 before:w-32 before:bg-neutral-100 before:bg-opacity-50 before:bottom-1.5 before:-left-11 before:rotate-45 before:shadow-sm">
				<p className="text-3xl -rotate-12">TO DO LIST</p>
				<div className="flex-1 mt-10 flex flex-col items-start gap-y-1">
					{taskList.map((task, index) => (
						<Task
							key={index}
							title={task.title}
							checked={task.checked ?? false}
							onRemove={() => {
								setTaskList(
									taskList.filter((task, removeIndex) => {
										return index !== removeIndex
									})
								)
							}}
							onChange={() => {
								setTaskList(
									taskList.map((task, checkedIndex) => {
										if (index === checkedIndex) {
											return {
												...task,
												checked: !task.checked,
											}
										}

										return task
									})
								)
							}}
						/>
					))}
					<div className="flex mt-2 items-center max-w-[15rem]">
						<button
							className="-ml-1"
							onClick={() => {
								if (newTask) {
									setTaskList([
										...taskList,
										{
											title: newTask,
											checked: false,
										},
									])

									setNewTask("")
								}
							}}
						>
							<img src="/add.svg" alt="" className="h-6 w-6" />
						</button>

						<input
							type="text"
							className="border-b border-black bg-transparent ml-2 h-6 w-full focus:border-b-2 outline-0"
							value={newTask}
							onChange={(e) => {
								setNewTask(e.target.value)
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
