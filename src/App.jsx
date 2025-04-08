import { Route, Routes } from "react-router"
import AddFeedback from "./screens/add-feedback/AddFeedback.jsx"
import Admin from "./screens/Admin/admin.jsx"
import GetFeedback from "./screens/Feedbacks/getFeedback.jsx"

export default function FeedbackCard() {
  return (
    <Routes>
      <Route path="/" element={<AddFeedback/>} />
      <Route path="/admin-signup" element={<Admin/>} />
      <Route path="/get-feedbacks" element={<GetFeedback/>} />
    </Routes>
  );
}

