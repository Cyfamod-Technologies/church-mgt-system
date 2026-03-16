(function () {
  const currentPage = (location.pathname.split("/").pop() || "index.html").split("#")[0];

  const navGroups = [
    {
      title: "Overview",
      items: [
        { type: "link", label: "Entry Flow", href: "index.html", icon: "home" },
        { type: "link", label: "Dashboard", href: "dashboard.html", icon: "stack" }
      ]
    },
    {
      title: "Church Administration",
      id: "church-admin",
      icon: "briefcase",
      items: [
        { label: "Church Profile", href: "church-profile.html" },
        { label: "Church Structure", href: "church-profile.html#structure" },
        { label: "Branches", href: "church-profile.html#branches" },
        { label: "Districts", href: "church-profile.html#districts" },
        { label: "Sub-Districts / Zones", href: "church-profile.html#zones" },
        { label: "Homecells", href: "church-profile.html#homecells" },
        { label: "Church Units", href: "church-profile.html#units" }
      ]
    },
    {
      title: "People Management",
      id: "people-management",
      icon: "users",
      items: [
        { label: "Members", href: "members.html" },
        { label: "First Timers", href: "members.html#first-timers" },
        { label: "New Converts", href: "members.html#new-converts" },
        { label: "Re-Dedications", href: "members.html#rededications" },
        { label: "Workers / Leaders", href: "members.html#workers" },
        { label: "Users", href: "members.html#users" }
      ]
    },
    {
      title: "Leadership Management",
      id: "leadership-management",
      icon: "gift",
      items: [
        { label: "Pastors", href: "leadership.html" },
        { label: "District Pastors", href: "leadership.html#district-pastors" },
        { label: "District Ministers", href: "leadership.html#district-ministers" },
        { label: "Zone Ministers", href: "leadership.html#zone-ministers" },
        { label: "Homecell Leaders", href: "leadership.html#homecell-leaders" },
        { label: "Assignments", href: "leadership.html#assignments" }
      ]
    },
    {
      title: "Follow-Up & Growth",
      id: "follow-up-growth",
      icon: "briefcase-advance",
      items: [
        { label: "Hospitality Unit", href: "follow-up.html" },
        { label: "Callers Squad", href: "follow-up.html#callers" },
        { label: "Counselling Unit", href: "follow-up.html#counselling" },
        { label: "Believers Foundation Class", href: "follow-up.html#foundation" },
        { label: "Homecell Office", href: "follow-up.html#homecell-office" }
      ]
    },
    {
      title: "Reports",
      id: "reports-group",
      icon: "chart",
      items: [
        { label: "Attendance Reports", href: "reports.html" },
        { label: "Homecell Reports", href: "reports.html#homecell-reports" },
        { label: "Growth Reports", href: "reports.html#growth" },
        { label: "Retention Reports", href: "reports.html#retention" },
        { label: "Baptism Reports", href: "reports.html#baptism" },
        { label: "Foundation Class Reports", href: "reports.html#foundation-reports" }
      ]
    },
    {
      title: "Access Control",
      items: [
        { type: "link", label: "Roles & Permissions", href: "access-control.html", icon: "shield" }
      ]
    },
    {
      title: "System",
      items: [
        { type: "link", label: "Settings & Audit", href: "settings.html", icon: "settings" }
      ]
    }
  ];

  function icon(sprite) {
    return `<svg stroke="currentColor" stroke-width="1.5"><use xlink:href="assets/svg/_sprite.svg#${sprite}"></use></svg>`;
  }

  function isActive(href) {
    return href.split("#")[0] === currentPage;
  }

  function buildNav() {
    const nav = document.getElementById("church-nav");
    if (!nav) return;

    const groupsHtml = navGroups.map((group) => {
      const hasCollapse = Boolean(group.id);
      const groupOpen = group.items.some((item) => isActive(item.href));

      if (!hasCollapse) {
        const items = group.items.map((item) => `
          <li class="no-sub ${isActive(item.href) ? "active" : ""}">
            <a href="${item.href}">
              ${icon(item.icon)}
              ${item.label}
            </a>
          </li>
        `).join("");
        return `<li class="menu-title"><span>${group.title}</span></li>${items}`;
      }

      return `
        <li class="menu-title"><span>${group.title}</span></li>
        <li>
          <a aria-expanded="${groupOpen ? "true" : "false"}" data-bs-toggle="collapse" href="#${group.id}">
            ${icon(group.icon)}
            ${group.title}
          </a>
          <ul class="collapse ${groupOpen ? "show" : ""}" id="${group.id}">
            ${group.items.map((item) => `<li class="${isActive(item.href) ? "active" : ""}"><a href="${item.href}">${item.label}</a></li>`).join("")}
          </ul>
        </li>
      `;
    }).join("");

    nav.innerHTML = `
      <div class="app-logo">
        <a class="logo d-inline-block" href="dashboard.html">
          <img alt="logo" src="assets/images/logo/1.png">
        </a>

        <span class="bg-light-primary toggle-semi-nav d-flex-center">
          <i class="ti ti-chevron-right"></i>
        </span>

        <div class="d-flex align-items-center nav-profile p-3">
          <span class="h-45 w-45 d-flex-center b-r-10 position-relative bg-primary m-auto">
            <img alt="avatar" class="img-fluid b-r-10" src="assets/images/avatar/1.png">
            <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
          </span>
          <div class="flex-grow-1 ps-2">
            <h6 class="text-primary mb-0"> Church Admin</h6>
            <p class="text-muted f-s-12 mb-0">Living Faith Central</p>
          </div>
        </div>
      </div>
      <div class="app-nav" id="app-simple-bar">
        <ul class="main-nav p-0 mt-2">
          ${groupsHtml}
          <li class="menu-title"><span>Support</span></li>
          <li class="no-sub">
            <a href="settings.html#support">
              ${icon("chat-bubble")}
              Support
            </a>
          </li>
        </ul>
      </div>
      <div class="menu-navs">
        <span class="menu-previous"><i class="ti ti-chevron-left"></i></span>
        <span class="menu-next"><i class="ti ti-chevron-right"></i></span>
      </div>
    `;
  }

  function buildHeader() {
    const header = document.getElementById("church-header");
    if (!header) return;

    const title = document.body.dataset.title || "Church Management System";
    const subtitle = document.body.dataset.subtitle || "Administrative workspace";

    header.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-sm-6 d-flex align-items-center header-left p-0">
            <span class="header-toggle">
              <i class="ti ti-layout-sidebar-left-collapse"></i>
            </span>
            <div class="header-searchbar w-100">
              <form action="#" class="mx-3 app-form app-icon-form">
                <div class="position-relative">
                  <input aria-label="Search" class="form-control" placeholder="Search members, districts, homecells..." type="search">
                  <i class="ti ti-search text-dark"></i>
                </div>
              </form>
            </div>
          </div>

          <div class="col-6 col-sm-6 d-flex align-items-center justify-content-end header-right p-0">
            <ul class="d-flex align-items-center">
              <li class="header-notification">
                <a class="d-block head-icon position-relative" href="dashboard.html#notifications">
                  <i class="ti ti-bell-ringing"></i>
                  <span class="position-absolute translate-middle badge rounded-pill bg-danger" style="top: 8px; right: -6px;">8</span>
                </a>
              </li>
              <li class="header-profile">
                <a aria-expanded="false" class="d-block head-icon" data-bs-toggle="dropdown" href="#">
                  <img alt="avatar" class="b-r-10 h-35 w-35" src="assets/images/avatar/1.png">
                </a>
                <ul class="dropdown-menu profile-dropdown p-2">
                  <li class="dropdown-item-text">
                    <h6 class="mb-0">${title}</h6>
                    <p class="text-muted mb-0 f-s-12">${subtitle}</p>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="settings.html">Settings</a></li>
                  <li><a class="dropdown-item text-danger" href="sign_in.html">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  function init() {
    buildNav();
    buildHeader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
