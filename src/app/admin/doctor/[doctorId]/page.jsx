'use client';

// pages/admin/doctor/[id].jsx
// import React from "react";
// import { useRouter } from "next/router";

// function DoctorDetail({ doctor }) {
//   if (!doctor) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h2>{doctor.name}</h2>
//       <p>Trình độ: {doctor.degree}</p>
//       <p>Năm kinh nghiệm: {doctor.experience}</p>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   try {
//     const doctor = await getDoctor(id);

//     return {
//       props: { doctor },
//     };
//   } catch (error) {
//     console.error("Error fetching doctor details:", error);

//     return {
//       props: { doctor: null },
//     };
//   }

//   return <>Trang chi tiết</>
// }
function DoctorDetail() {
  return <>OK</>;
}

export default DoctorDetail;
