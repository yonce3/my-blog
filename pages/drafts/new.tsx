import type { NextPage } from "next";
import AddItem from "@/components/AddItem";

const New: NextPage = () => {
  return (
    <>
      <div className="grid-cols-2 max-w-5xl mx-auto">
        <AddItem></AddItem>
      </div>
    </>
  );
};

export default New;
