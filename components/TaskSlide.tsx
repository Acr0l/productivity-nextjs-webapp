"use client";
import { Task } from "@prisma/client";
import { useEffect, useState } from "react";

const TaskSlide = ({ task }: { task: Task }) => {
  const [checked, setChecked] = useState(task.status === "COMPLETED");

  useEffect(() => {
    setChecked(task.status === "COMPLETED");
  }, [task]);
  return (
    <div className="py-2 flex">
      <div className="row-span-2 justify-items-start items-start flex-none p-3">
        {/* Create violet with white checkmark input */}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="rounded-md border-gray-300 accent-violet-500 h-6 w-6"
        />
      </div>
      <div className="flex-1">
        <div>
          <span className="text-gray-800">{task.name}</span>
        </div>
        <div>
          <span className="text-gray-400 text-sm">{task.description}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskSlide;
