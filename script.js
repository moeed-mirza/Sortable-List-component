// DON'T remove the below import
import "./styles.css";

let selectedSkills = [];

  function updateSelectedSkills() {
    const selectedSkillsContainer = document.getElementById('selected-skills');
    selectedSkillsContainer.innerHTML = ''; // Clear existing items

    selectedSkills.forEach((skill, index) => {
      const skillItem = document.createElement('div'); // Create skill-item div
      skillItem.classList.add('skill-item'); // Add skill-item class
      skillItem.innerHTML = `${index + 1}. ${skill} <span class="remove" onclick="removeSkill('${skill}')">x</span>`;
      selectedSkillsContainer.appendChild(skillItem); // Add to selected-skills container
    });

    // Disable dropdown if 5 skills are selected
    document.getElementById('add-skill').disabled = selectedSkills.length >= 5;
  }

  function addSkill() {
    const skillSelect = document.getElementById('add-skill');
    const selectedSkill = skillSelect.value;

    // Check if skill is already selected or if we have 5 skills
    if (selectedSkill && !selectedSkills.includes(selectedSkill) && selectedSkills.length < 5) {
      selectedSkills.push(selectedSkill); // Add skill to selectedSkills array
      updateSelectedSkills();
    }

    skillSelect.value = 'Add Skill'; // Reset the dropdown
  }

  function removeSkill(skill) {
    selectedSkills = selectedSkills.filter(s => s !== skill); // Remove skill from array
    updateSelectedSkills();
    

  // Event listener for the dropdown
  document.getElementById('add-skill').addEventListener('change', addSkill);}
  
