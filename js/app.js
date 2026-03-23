/* =========================================
   Meridian Partners — Client Portal JS
   ========================================= */

// ---- Sample Document Data ----
const documents = [
    {
        id: 1,
        title: "Master Services Agreement — Q1 2026",
        category: "contract",
        status: "completed",
        date: "2026-01-15",
        author: "Sarah Mitchell",
        description: "This Master Services Agreement (\"Agreement\") is entered into as of January 15, 2026, by and between Meridian Partners LLC (\"Provider\") and the undersigned client (\"Client\"). This Agreement governs the terms under which consulting, advisory, and professional services shall be rendered throughout the first quarter of 2026. All deliverables, timelines, and fee structures are outlined in the attached Statement of Work (SOW). Both parties agree to maintain confidentiality as described in Section 7 of this document.",
        /*
            =============================================
            PDF PATH — Replace "documents/sample.pdf"
            with the actual path to YOUR PDF file.
            =============================================
        */
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 2,
        title: "Annual Compliance Report 2025",
        category: "compliance",
        status: "completed",
        date: "2025-12-20",
        author: "James Holden",
        description: "The Annual Compliance Report for fiscal year 2025 presents a comprehensive review of regulatory adherence across all business units. Key findings include full compliance with GDPR requirements, successful completion of SOC 2 Type II audit, and implementation of enhanced data retention policies. Three minor non-conformities were identified during internal audits and have been addressed through corrective action plans detailed in Appendix B.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 3,
        title: "Q4 2025 Financial Performance Review",
        category: "report",
        status: "completed",
        date: "2026-01-08",
        author: "Elena Ruiz",
        description: "This report summarizes the financial performance for Q4 2025, including revenue analysis, cost allocations, and margin trends. Total revenue for the quarter reached $4.2M, representing a 12% increase year-over-year. Operating expenses remained within budget at $2.8M. The report also includes a forward-looking projection for Q1 2026 based on current pipeline and market conditions. Key risks and mitigation strategies are outlined in Section 4.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 4,
        title: "Vendor Onboarding Agreement — TechNova Inc.",
        category: "contract",
        status: "pending",
        date: "2026-02-28",
        author: "David Chen",
        description: "Vendor Onboarding Agreement for TechNova Inc., outlining the terms of engagement for cloud infrastructure services. This document includes service level agreements (SLAs), data processing addendum, liability provisions, and termination clauses. TechNova Inc. will provide managed Kubernetes hosting and CI/CD pipeline services effective April 1, 2026. Pending final legal review and approval from both parties.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 5,
        title: "Invoice #INV-2026-0041",
        category: "invoice",
        status: "completed",
        date: "2026-02-01",
        author: "Accounting Dept.",
        description: "Invoice for professional services rendered during January 2026. Services include 120 hours of senior consulting at $185/hr, 40 hours of project management at $150/hr, and travel expenses totaling $2,340. Payment terms: Net 30. Please remit payment to the account specified on the attached document. For questions regarding this invoice, contact accounts@meridianpartners.example.com.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 6,
        title: "Data Processing Agreement (DPA)",
        category: "compliance",
        status: "completed",
        date: "2025-11-10",
        author: "Legal Department",
        description: "This Data Processing Agreement establishes the obligations of Meridian Partners LLC as a data processor on behalf of the client (data controller). The agreement covers the nature and purpose of data processing, types of personal data involved, categories of data subjects, and the technical and organizational security measures in place. Standard contractual clauses (SCCs) for international data transfers are included as Annex I.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 7,
        title: "Strategic Roadmap — 2026 Initiatives",
        category: "report",
        status: "pending",
        date: "2026-03-10",
        author: "Amanda Foster",
        description: "The 2026 Strategic Roadmap outlines planned initiatives across three key areas: digital transformation, market expansion, and operational efficiency. Priority projects include migration to a cloud-native architecture (target completion: Q3 2026), expansion into the APAC region, and implementation of an AI-driven analytics platform. Each initiative includes a detailed timeline, resource allocation plan, and success metrics. This document is currently in draft status pending executive approval.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 8,
        title: "Employee Benefits Summary — 2026",
        category: "compliance",
        status: "completed",
        date: "2026-01-02",
        author: "HR Department",
        description: "This document provides a summary of employee benefits for the 2026 calendar year, including health insurance options, retirement plan details (401k with 4% employer match), paid time off policies, and professional development allowances. Open enrollment changes are highlighted in Section 2. New this year: expanded mental health coverage and a $2,500 annual education stipend for all full-time employees.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 9,
        title: "Invoice #INV-2026-0058",
        category: "invoice",
        status: "pending",
        date: "2026-03-01",
        author: "Accounting Dept.",
        description: "Invoice for professional services rendered during February 2026. This invoice covers 96 hours of senior consulting, 32 hours of data analysis, and software licensing fees for the Meridian Analytics Platform. Subtotal: $24,680. Applicable taxes: $1,975. Total due: $26,655. Payment terms: Net 30. A 2% early payment discount applies if paid within 10 days of receipt.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 10,
        title: "Non-Disclosure Agreement — Project Aurora",
        category: "contract",
        status: "completed",
        date: "2025-10-05",
        author: "Legal Department",
        description: "Mutual Non-Disclosure Agreement executed in connection with Project Aurora, a joint development initiative. This NDA covers all proprietary information, trade secrets, technical data, and business plans exchanged between the parties. The confidentiality obligations survive for a period of three (3) years following the termination of the underlying project. Exclusions and permitted disclosures are detailed in Clause 4.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 11,
        title: "IT Security Audit — February 2026",
        category: "report",
        status: "completed",
        date: "2026-02-15",
        author: "InfoSec Team",
        description: "Results of the semi-annual IT security audit conducted in February 2026. The audit covered network infrastructure, application security, access controls, and incident response procedures. Overall security posture rated as \"Strong\" with a score of 92/100. Two medium-severity findings related to outdated TLS configurations on legacy systems have been flagged for remediation by April 30, 2026. Full technical findings are included in the appendix.",
        pdfPath: "documents/sample.pdf"
    },
    {
        id: 12,
        title: "Service Level Agreement — Managed IT Support",
        category: "contract",
        status: "draft",
        date: "2026-03-18",
        author: "David Chen",
        description: "Draft Service Level Agreement for Managed IT Support services. Proposed coverage: 24/7 monitoring, 4-hour response time for critical incidents, 8-hour response for standard requests. Includes monthly reporting, quarterly business reviews, and annual disaster recovery testing. Pricing tiers (Bronze/Silver/Gold) are detailed in Schedule A. This document is in draft status and subject to negotiation before final execution.",
        pdfPath: "documents/sample.pdf"
    }
];

// ---- Category metadata ----
const categoryIcons = {
    contract: "📄",
    report: "📊",
    compliance: "🛡️",
    invoice: "💰"
};
const categoryLabels = {
    contract: "Contract",
    report: "Report",
    compliance: "Compliance",
    invoice: "Invoice"
};
const statusLabels = {
    completed: "Completed",
    pending: "Pending Review",
    draft: "Draft"
};

// ---- Page Detection ----
const isLoginPage = document.body.classList.contains("login-page");
const isDashboardPage = document.body.classList.contains("dashboard-page");

// =============================
// LOGIN PAGE LOGIC
// =============================
if (isLoginPage) {
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");
    const loginBtn = document.getElementById("login-btn");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        // Show spinner
        loginBtn.querySelector(".btn-text").style.display = "none";
        loginBtn.querySelector(".btn-spinner").style.display = "inline-block";
        loginBtn.disabled = true;
        loginError.style.display = "none";

        // Simulate network delay
        setTimeout(function () {
            // Accept any non-empty credentials for demo purposes
            if (username.length > 0 && password.length > 0) {
                sessionStorage.setItem("mp_authenticated", "true");
                sessionStorage.setItem("mp_username", username);
                window.location.href = "dashboard.html";
            } else {
                loginError.style.display = "block";
                loginBtn.querySelector(".btn-text").style.display = "inline";
                loginBtn.querySelector(".btn-spinner").style.display = "none";
                loginBtn.disabled = false;
            }
        }, 800);
    });
}

// =============================
// DASHBOARD PAGE LOGIC
// =============================
if (isDashboardPage) {
    // ---- Auth guard ----
    if (sessionStorage.getItem("mp_authenticated") !== "true") {
        window.location.href = "index.html";
    }

    // ---- Set username display ----
    const storedUser = sessionStorage.getItem("mp_username") || "User";
    const displayName = storedUser.charAt(0).toUpperCase() + storedUser.slice(1);
    const initials = displayName.split(/\s+/).map(w => w[0]).join("").substring(0, 2).toUpperCase();

    const userAvatar = document.getElementById("user-avatar");
    const userDisplayName = document.getElementById("user-display-name");
    if (userAvatar) userAvatar.textContent = initials || "U";
    if (userDisplayName) userDisplayName.textContent = displayName;

    // ---- Logout ----
    document.getElementById("logout-btn").addEventListener("click", function () {
        sessionStorage.removeItem("mp_authenticated");
        sessionStorage.removeItem("mp_username");
        window.location.href = "index.html";
    });

    // ---- Render Documents ----
    const listEl = document.getElementById("document-list");
    const emptyState = document.getElementById("empty-state");
    const searchInput = document.getElementById("search-input");
    const filterCategory = document.getElementById("filter-category");
    const filterStatus = document.getElementById("filter-status");

    function renderDocuments() {
        const query = searchInput.value.toLowerCase().trim();
        const catFilter = filterCategory.value;
        const statusFilter = filterStatus.value;

        const filtered = documents.filter(function (doc) {
            const matchesQuery = !query || doc.title.toLowerCase().includes(query) || doc.author.toLowerCase().includes(query);
            const matchesCat = catFilter === "all" || doc.category === catFilter;
            const matchesStatus = statusFilter === "all" || doc.status === statusFilter;
            return matchesQuery && matchesCat && matchesStatus;
        });

        listEl.innerHTML = "";

        if (filtered.length === 0) {
            emptyState.style.display = "block";
            return;
        }
        emptyState.style.display = "none";

        filtered.forEach(function (doc) {
            const card = document.createElement("div");
            card.className = "document-card";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.innerHTML =
                '<div class="doc-icon ' + doc.category + '">' + (categoryIcons[doc.category] || "📁") + '</div>' +
                '<div class="doc-info">' +
                    '<div class="doc-title">' + escapeHtml(doc.title) + '</div>' +
                    '<div class="doc-meta">' +
                        '<span>' + categoryLabels[doc.category] + '</span>' +
                        '<span>' + formatDate(doc.date) + '</span>' +
                        '<span>' + escapeHtml(doc.author) + '</span>' +
                    '</div>' +
                '</div>' +
                '<span class="doc-status ' + doc.status + '">' + statusLabels[doc.status] + '</span>' +
                '<svg class="doc-chevron" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>';

            card.addEventListener("click", function () { openModal(doc); });
            card.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(doc); }
            });
            listEl.appendChild(card);
        });
    }

    searchInput.addEventListener("input", renderDocuments);
    filterCategory.addEventListener("change", renderDocuments);
    filterStatus.addEventListener("change", renderDocuments);

    // Initial render
    renderDocuments();

    // ---- Modal Logic ----
    const overlay = document.getElementById("modal-overlay");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const modalDownload = document.getElementById("modal-download");
    const modalCloseBtn = document.getElementById("modal-close");
    const modalCloseBtn2 = document.getElementById("modal-close-btn");

    function openModal(doc) {
        modalTitle.textContent = doc.title;
        modalBody.innerHTML =
            '<div class="detail-row"><span class="detail-label">Category</span><span>' + categoryLabels[doc.category] + '</span></div>' +
            '<div class="detail-row"><span class="detail-label">Status</span><span>' + statusLabels[doc.status] + '</span></div>' +
            '<div class="detail-row"><span class="detail-label">Date</span><span>' + formatDate(doc.date) + '</span></div>' +
            '<div class="detail-row"><span class="detail-label">Author</span><span>' + escapeHtml(doc.author) + '</span></div>' +
            '<div class="detail-description"><p>' + escapeHtml(doc.description) + '</p></div>';

        /*
            =============================================
            PDF DOWNLOAD — The href below points to the
            placeholder. Replace "documents/sample.pdf"
            in each document's pdfPath with your own file.
            =============================================
        */
        modalDownload.href = doc.pdfPath;
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    modalCloseBtn.addEventListener("click", closeModal);
    modalCloseBtn2.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
    });
}

// ---- Utility Functions ----
function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function formatDate(dateStr) {
    var d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
