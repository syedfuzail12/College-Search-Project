const colleges = [
    { name: "Harvard University", stream: "Engineering", course: "B.Tech", location: "USA", description: "A prestigious institution excelling in technology and innovation.", phone:"123456789" ,email:"abc@gmail.com" },
    { name: "Oxford University", stream: "Arts", course: "BA", location: "UK", description: "Renowned for its exceptional arts and humanities programs.", phone:"123456789", email:"abc@gmail.com"},
    { name: "Stanford University", stream: "Engineering", course: "M.Tech", location: "USA", description: "Known for research and advancements in engineering." , phone:"123456789", email:"abc@gmail.com"},
    { name: "Cambridge University", stream: "Science", course: "PhD", location: "UK", description: "Top-ranked university for scientific research and PhD programs." , phone:"123456789", email:"abc@gmail.com"},
    { name: "BITS Pilani", stream: "Engineering", course: "B.Tech", location: "India", description: "Premier Indian institution for engineering education.", phone:"123456789", email:"abc@gmail.com" },
    { name: "SJCC", stream: "Arts", course: "BA", location: "India", description: "St. Joseph's College of Commerce is a top choice for arts." , phone:"123456789", email:"abc@gmail.com"},
    { name: "MS Ramaiah", stream: "Engineering", course: "M.Tech", location: "India", description: "Known for its advanced engineering courses." , phone:"123456789", email:"abc@gmail.com"},
    { name: "IIT Bombay", stream: "Engineering", course: "B.Tech", location: "India", description: "Premier Indian institution for engineering education.", phone:"123456789", email:"abc@gmail.com" },
    { name: "SJU", stream: "Arts", course: "BA", location: "India", description: "St. Joseph's University is a top choice for arts." , phone:"123456789", email:"abc@gmail.com"},
    { name: "RV College", stream: "Engineering", course: "M.Tech", location: "India", description: "Known for its advanced engineering courses." , phone:"123456789", email:"abc@gmail.com"},
    { name: "Christ University", stream: "Science", course: "PhD", location: "India", description: "Focuses on interdisciplinary scientific research." , phone:"123456789", email:"abc@gmail.com"},
    { name: "IIM", stream: "Arts", course: "BA", location: "India", description: "Focuses on interdisciplinary scientific research." , phone:"123456789", email:"abc@gmail.com"},
    { name: "NIT", stream: "Science", course: "PhD", location: "India", description: "Focuses on interdisciplinary scientific research." , phone:"123456789", email:"abc@gmail.com"},
    { name: "Dayanand Sagar", stream: "Engineering", course: "BTech", location: "India", description: "Focuses on interdisciplinary scientific research." , phone:"123456789", email:"abc@gmail.com"},
    { name: "Amity University", stream: "Science", course: "PhD", location: "India", description: "Focuses on interdisciplinary scientific research." , phone:"123456789", email:"abc@gmail.com"},
  ];

  
  const searchInput = document.getElementById("searchInput");
  const streamFilter = document.getElementById("streamFilter");
  const courseFilter = document.getElementById("courseFilter");
  const collegeList = document.getElementById("collegeList");
  const collegeDetails = document.getElementById("collegeDetails");
  const detailsContent = document.getElementById("detailsContent");
  const closeDetails = document.getElementById("closeDetails");
  
  // Function to render colleges
  function renderColleges(data) {
    collegeList.innerHTML = "";
    if (data.length === 0) {
      collegeList.innerHTML = "<p>No colleges found.</p>";
      return;
    }
    data.forEach((college) => {
      const card = document.createElement("div");
      card.className = "college-card";
      card.innerHTML = `
        <h2>${college.name}</h2>
        <p>Stream: ${college.stream}</p>
        <p>Course: ${college.course}</p>
        <p>Location: ${college.location}</p>
      `;
      card.addEventListener("click", () => showDetails(college));
      collegeList.appendChild(card);
    });
  }
  
  // Show college details
  function showDetails(college) {
    detailsContent.innerHTML = `
      <h2>${college.name}</h2>
      <p><strong>Stream:</strong> ${college.stream}</p>
      <p><strong>Course:</strong> ${college.course}</p>
      <p><strong>Location:</strong> ${college.location}</p>
      <p><strong>Description:</strong> ${college.description}</p>
      <p><strong>Phone:</strong> ${college.phone}</p>
      <p><strong>Email:</strong> ${college.email}</p>
    `;
    collegeDetails.classList.remove("hidden");
  }
  
  // Close details modal
  closeDetails.addEventListener("click", () => {
    collegeDetails.classList.add("hidden");
  });
  
  // Filter colleges
  function filterColleges() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedStream = streamFilter.value;
    const selectedCourse = courseFilter.value;
  
    const filtered = colleges.filter((college) => {
      return (
        college.name.toLowerCase().includes(searchQuery) &&
        (selectedStream === "" || college.stream === selectedStream) &&
        (selectedCourse === "" || college.course === selectedCourse)
      );
    });
  
    renderColleges(filtered);
  }
  
  // Event listeners
  searchInput.addEventListener("input", filterColleges);
  streamFilter.addEventListener("change", filterColleges);
  courseFilter.addEventListener("change", filterColleges);
  
  // Initial render
  renderColleges(colleges);
  