const skills = [
  { id: 'html', label: 'HTML', category: 'web' },
  { id: 'css', label: 'CSS', category: 'web' },
  { id: 'js', label: 'JavaScript', category: 'web' },
  { id: 'jquery', label: 'jQuery', category: 'web' },
  { id: 'typescript', label: 'TypeScript', category: 'web' },
  { id: 'react', label: 'React', category: 'web' },
  { id: 'unity', label: 'Unity', category: 'app' },
  { id: 'csharp', label: 'C#', category: 'app' },
  { id: 'blender', label: 'Blender', category: 'app' },
  { id: 'cri', label: 'CRIWARE', category: 'app' }
];

const activeCategories = new Set();

function render() {
  const list = document.getElementById('skill-list');
  list.innerHTML = '';

  const visibleSkills = skills.filter(skill =>
    activeCategories.has(skill.category)
  );

  visibleSkills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.label;
    list.appendChild(li);
  });
}

export default function initSkillFilter() {
  document.querySelectorAll('input[type="checkbox"]').forEach((e) => {
    e.addEventListener('change', () => {
      const category = e.dataset.skill;

      e.checked
        ? activeCategories.add(category)
        : activeCategories.delete(category);

      render();
    });
  });
}
