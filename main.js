// Project data array
const projects = [
  // Company Projects
  {
    category: "Company Projects",
    icon: "🏢",
    projects: [
      {
        title: "IIoT Dashboard",
        link: "https://dashboard.machinedata.ai/",
        badge: "Company",
        badgeClass: "badge-company",
        description: "A scalable industrial IoT dashboard capable of monitoring and controlling 100+ devices with real-time data logging and centralized command system. Features include customizable dashboards and comprehensive device management.",
        tech: ["React.js", "MQTT", "WebSockets", "Node.js", "Express.js", "IoT", "Real-time", "Dashboard"]
      },
      {
        title: "PediaSense",
        link: "https://www.pediasense.com/",
        badge: "Company",
        badgeClass: "badge-company",
        description: "A smart baby care ecosystem with BLE-enabled devices and Flutter app supporting parallel multi-device connections for comprehensive health monitoring. Enables real-time tracking and alerts for infant care.",
        tech: ["Flutter", "BLE", "Dart", "Health Tech", "IoT", "Mobile App"]
      },
      {
        title: "Rapid Circuitry",
        link: "https://rapidcircuitry.com/",
        badge: "Company",
        badgeClass: "badge-company",
        description: "Modern corporate website built with Next.js architecture and integrated CMS dashboard for easy content updates and scalability. Features dynamic content management and optimized performance.",
        tech: ["Next.js", "CMS", "Shadcn UI", "SEO", "Admin Panel"]
      },
      {
        title: "ZainLab",
        link: "https://zainlab.report/",
        badge: "Company",
        badgeClass: "badge-company",
        description: "End-to-end lab report management system for an international healthcare client with secure patient data handling and efficient reporting workflows. Includes comprehensive data analytics and reporting features.",
        tech: ["React", "Node.js", "PostgreSQL", "AWS", "Healthcare", "RBAC"]
      }
    ]
  },
  // Freelance Projects
  {
    category: "Freelance Projects",
    icon: "💼",
    projects: [
      {
        title: "CircuitSprint",
        link: "https://www.circuitsprint.in/",
        badge: "Freelance",
        badgeClass: "badge-freelance",
        description: "E-commerce platform for electronics components with real-time stock updates, secure checkout, and custom admin controls. Features inventory management and order tracking system.",
        tech: ["Next.js", "Tanstack Query", "Node.js", "Express", "PostgreSQL", "E-commerce", "Payment Gateway"]
      },
      {
        title: "Electronics GigaByte",
        link: "https://electronicsgb.com/",
        badge: "Freelance",
        badgeClass: "badge-freelance",
        description: "Comprehensive electronics engineering platform featuring 50+ interactive calculators, tutorials, and resources. Helps students and professionals solve complex engineering problems efficiently.",
        tech: ["JavaScript", "HTML", "CSS", "WordPress", "Engineering", "Educational"]
      }
    ]
  },
  // Personal & College Projects
  {
    category: "Personal & College Projects",
    icon: "🎓",
    projects: [
      {
        title: "Student Collaboration Platform",
        link: "https://bitballarpur.co.in/",
        badge: "Student Developer",
        badgeClass: "badge-company",
        description: "Official student engagement platform for my college with features like real-time quizzes, push notifications, collaborative tools, and group interactions. Built as the lead student developer.",
        tech: ["Node.js", "PostgreSQL", "WebSocket", "Real-time", "AWS", "Education"]
      },
      {
        title: "College Website with Admin Dashboard",
        link: "https://www.bitedu.co.in/",
        badge: "Student Developer",
        badgeClass: "badge-company",
        description: "Official college website developed as lead student developer, featuring an admin panel for managing academic content, announcements, and events. Includes CMS and role-based access control.",
        tech: ["Next.js", "CMS", "Admin Panel", "Education", "RBAC"]
      },
      {
        title: "DigiPass: Smart QR Bus Passes",
        link: "https://digipass-system.vercel.app/",
        badge: "Personal",
        badgeClass: "badge-personal",
        description: "A smart QR bus pass system for hassle-free passengers to scan and pay for bus rides. With Admin and Condutor Dashboard, it provides a comprehensive solution for bus operators to manage their operations efficiently.",
        tech: ["React", "React Query", "Node.js", "Express", "PostgreSQL", "Prisma", "QR Code"]
      },
      {
        title: "Tiffinwala",
        link: "https://tiffin-wala-e82ce1576e23.herokuapp.com/",
        badge: "Personal",
        badgeClass: "badge-personal",
        description: "Food delivery system designed specifically for mess services with daily scheduling, subscription management, and user-friendly order handling. Includes meal planning and delivery tracking.",
        tech: ["Node.js", "Express", "PostgreSQL", "Food Tech", "Subscription"]
      },
      {
        title: "Ebook Portal",
        link: "https://bit-ebook-portal.vercel.app/",
        badge: "Personal",
        badgeClass: "badge-personal",
        description: "A centralized ebook library platform for students and faculty with dynamic access control and role-based permissions. Features include document management and search functionality.",
        tech: ["React", "Shadcn UI", "Tanstack Query", "Node.js", "PostgreSQL", "Education", "Library"]
      },
      {
        title: "CodeSync",
        link: "https://code-sync-chi.vercel.app/",
        badge: "Personal",
        badgeClass: "badge-personal",
        description: "A cloud-based collaborative code editor with real-time syncing and integrated chat—ideal for pair programming or online coding sessions. Supports multiple programming languages.",
        tech: ["React", "WebSocket", "Real-time", "Collaboration", "Code Editor"]
      },
      {
        title: "Tutorverse",
        link: "https://tutor-verse-bf8239c97f1d.herokuapp.com/",
        badge: "Personal",
        badgeClass: "badge-personal",
        description: "A student-centric platform for connecting with peers and tutors, facilitating collaborative study and academic resource sharing. Features include study groups and resource management.",
        tech: ["Node.js", "Express", "EJS", "PostgreSQL", "Education", "Collaboration"]
      },
    ]
  }
];

// Render projects dynamically
function renderProjects() {
  const main = document.querySelector('main.container');
  // Remove all existing .category sections
  document.querySelectorAll('.category').forEach(el => el.remove());

  projects.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category';
    const heading = document.createElement('div');
    heading.className = 'category-heading';
    const icon = document.createElement('span');
    icon.className = 'category-icon';
    icon.textContent = cat.icon;
    const h2 = document.createElement('h2');
    h2.textContent = cat.category;
    heading.appendChild(icon);
    heading.appendChild(h2);
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'project-grid';
    cat.projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      // Header
      const header = document.createElement('div');
      header.className = 'project-header';
      const titleRow = document.createElement('div');
      titleRow.className = 'project-title';
      const h3 = document.createElement('h3');
      h3.textContent = proj.title;
      const links = document.createElement('div');
      links.className = 'project-links';
      const a = document.createElement('a');
      a.href = proj.link;
      a.target = '_blank';
      a.className = 'project-link';
      a.title = 'Live Demo';
      a.innerHTML = '<i class="fas fa-external-link-alt"></i>';
      links.appendChild(a);
      titleRow.appendChild(h3);
      titleRow.appendChild(links);
      header.appendChild(titleRow);
      const badge = document.createElement('span');
      badge.className = `badge ${proj.badgeClass}`;
      badge.textContent = proj.badge;
      header.appendChild(badge);
      card.appendChild(header);
      // Body
      const body = document.createElement('div');
      body.className = 'project-body';
      const desc = document.createElement('p');
      desc.className = 'project-desc';
      desc.textContent = proj.description;
      body.appendChild(desc);
      const techStack = document.createElement('div');
      techStack.className = 'tech-stack';
      proj.tech.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = t;
        techStack.appendChild(tag);
      });
      body.appendChild(techStack);
      card.appendChild(body);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    main.appendChild(section);
  });
}

// Remove loading screen once page is loaded
window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none";
  renderProjects();
});

// Add animation delay to categories
document.querySelectorAll(".category").forEach((category, index) => {
  category.style.animationDelay = `${index * 0.2}s`;
}); 