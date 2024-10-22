// "use client";

// import { useEffect, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import Form from "@components/Form";

// const UpdatePrompt = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const promptId = searchParams.get("id");

//   const [post, setPost] = useState({ prompt: "", tag: "" });
//   const [submitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();

//       setPost({
//         prompt: data.prompt,
//         tag: data.tag,
//       });
//     };

//     if (promptId) getPromptDetails();
//   }, [promptId]);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!promptId) return alert("Missing PromptId!");

//     try {
//       const response = await fetch(`/api/prompt/${promptId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Suspense fallback={<div>Loading prompt details...</div>}>
//       <Form
//         type="Edit"
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={updatePrompt}
//       />
//     </Suspense>
//   );
// };

// export default UpdatePrompt;


import UpdatePrompt from '@components/UpdatePrompt';
import { Suspense } from 'react';

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<div>Loading prompt details...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
}
