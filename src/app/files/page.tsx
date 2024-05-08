import { UpdateFiles } from "@/components/UpdateFiles";
import { UpdateSidebar } from "@/components/UpdateSidebar";

export default async function Files() {
  return (
    <>
      <div className="flex">
        <div><UpdateSidebar /></div>
        <div>
          <UpdateFiles />
        </div>
      </div>
    </>
  );
}
