// Service Database
const serviceData = {
    fullstack: {
        title: "Full-Stack Development",
        description: "Robust, scalable web applications built from the ground up.",
        features: [
            "Custom PHP & Python backend logic",
            "Secure user authentication & portals",
            "Responsive frontend interfaces",
            "Database architecture (MySQL/PostgreSQL)"
        ]
    },
    cybersecurity: {
        title: "Cybersecurity & Defense",
        description: "Hardening your digital assets against modern threats.",
        features: [
            "Web application vulnerability scanning",
            "Server-side protection & firewall config",
            "Password analyzer integrations",
            "Spam classification systems"
        ]
    },
    automation: {
        title: "Server Automation",
        description: "Streamlining operations with intelligent scripts and bots.",
        features: [
            "Custom Discord server architecture",
            "Role & verification gate automation",
            "GitHub deployment webhooks",
            "API integrations (Zapier, Webhooks)"
        ]
    }
};

// Live Links
const myWhatsAppLink = "https://wa.link/q1qvtr";
const myDiscordInvite = "https://discord.gg/Bd3RtPCJe5";

// DOM Elements
const modal = document.getElementById("serviceModal");
const closeBtn = document.querySelector(".close-btn");
const cards = document.querySelectorAll(".service-card");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

// Event Listeners
cards.forEach(card => {
    card.addEventListener("click", () => {
        // Prevent click if the service is coming soon
        if (card.classList.contains("coming-soon")) return;

        const serviceKey = card.getAttribute("data-service");
        const data = serviceData[serviceKey];

        // Populate Modal Content
        modalTitle.textContent = data.title;
        
        let featuresHTML = data.features.map(feature => `<li>${feature}</li>`).join("");
        modalBody.innerHTML = `
            <p>${data.description}</p>
            <ul>${featuresHTML}</ul>
        `;

        // Set Button Links directly to your URLs
        document.getElementById("whatsappBtn").href = myWhatsAppLink;
        document.getElementById("discordBtn").href = myDiscordInvite;

        // Show Modal
        modal.style.display = "flex";
    });
});

// Close Modal Logic
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
