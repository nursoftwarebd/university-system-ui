import InstructorImage from "@/components/Screen/Instructor/InstructorDetails/InstructorImage";
import React from "react";

const InstructorDetailsPage = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="">
            <InstructorImage/>
        </div>
        <div className="border p-3 col-span-2">2</div>
      </div>
    </section>
  );
};

export default InstructorDetailsPage;