import TaskCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findUnique({
    where: {
      ownerId: user?.id,
      id: id,
    },
    include: {
      tasks: true,
    },
  });
  return project;
};

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <TaskCard title={project?.name || "Tasks"} tasks={project?.tasks || []} />
    </div>
  );
}
