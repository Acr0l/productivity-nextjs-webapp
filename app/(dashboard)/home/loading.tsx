// Make loading page with tailwindcss

import Card from "@/components/Card";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Card className="">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-900"></div>
      </Card>
    </div>
  );
};

export default Loading;
