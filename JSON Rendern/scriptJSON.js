document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
      .then(response => response.json())
      .then(data => {

        document.querySelector('#title').textContent = data.title;
        document.querySelector('#description').textContent = data.description;
  
        const sectionsContainer = document.querySelector('#sections');
        data.sections.forEach(section => {
          const sectionElement = document.createElement('div');
          const header = document.createElement('h2');
          header.textContent = section.header;
          const content = document.createElement('p');
          content.textContent = section.content;
  
          sectionElement.appendChild(header);
          sectionElement.appendChild(content);
          sectionsContainer.appendChild(sectionElement);
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });
  