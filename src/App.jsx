import { Route, Routes } from "react-router"
import AddFeedback from "./screens/add-feedback/AddFeedback"
import Admin from "./screens/Admin/admin"
import GetFeedback from "./screens/Feedbacks/getFeedback"

export default function FeedbackCard() {
  return (
    <Routes>
      <Route path="/" element={<AddFeedback/>} />
      <Route path="/admin-signup" element={<Admin/>} />
      <Route path="/get-feedbacks" element={<GetFeedback/>} />
    </Routes>
  );
}

