import React from "react";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 5,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Dianne Russell",
    rating: 4,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Devon Lane",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and just the right amount of sauce. Would definitely recommend!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

function Feedback() {
  return (
    <div className="scroll">
      <div className="customer-feedback">
        <h2>Customer Feedback</h2>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback">
            <div className="feedback-header">
              <img
                src={feedback.avatar}
                alt={feedback.name}
                className="avatar"
              />
              <div>
                <h3>{feedback.name}</h3>
                <div className="stars">
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <p>{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
