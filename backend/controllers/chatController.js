exports.handleChat = async (req, res) => {
  const { message } = req.body;
  const text = message.toLowerCase();

  let reply = "Thanks for reaching out! 😊 Our counselor will contact you shortly.";

  if (text.includes("course") || text.includes("courses")) {
    reply = "We offer MERN Stack, Python Full Stack, Java, Data Science, AI/ML & DevOps. Which one interests you?";
  }
  else if (text.includes("mern")) {
    reply = "Our MERN Stack course is 6 months long with live projects & placement support. Want free counseling?";
  }
  else if (text.includes("python")) {
    reply = "Python Full Stack is beginner-friendly and job-oriented. Would you like to book a free demo?";
  }
  else if (text.includes("fees") || text.includes("price")) {
    reply = "Fees depend on the course. Please book free counseling for detailed fee structure.";
  }
  else if (text.includes("placement")) {
    reply = "Yes! We provide placement assistance with 150+ hiring partners.";
  }
  else if (text.includes("demo")) {
    reply = "Sure! Please click on 'Book Free Counseling' and our team will schedule your demo.";
  }

  else if (text.includes("counseling") || text.includes("call")) {
  reply = `
Sure 😊
Click below to talk to our counselor on WhatsApp 👇
https://wa.me/916261437008?text=I%20want%20free%20counseling
`;
}

  res.json({ reply });
};
