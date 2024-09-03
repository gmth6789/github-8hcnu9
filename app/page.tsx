export default function Home() {
  return (
    export const Foo = () => (
      <>
        <title>Template by KeenThemes</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US" />
        <link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"
        />
        <link
          href="assets/plugins/custom/fullcalendar/fullcalendar.bundle.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/plugins/custom/datatables/datatables.bundle.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/plugins/global/plugins.bundle.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
            <div
              id="kt_app_header"
              className="app-header"
              data-kt-sticky="true"
              data-kt-sticky-activate="{default: true, lg: true}"
              data-kt-sticky-name="app-header-minimize"
              data-kt-sticky-offset="{default: '200px', lg: '300px'}"
              data-kt-sticky-animation="false"
            >
              <div
                className="app-container container-fluid d-flex align-items-stretch flex-stack"
                id="kt_app_header_container"
              >
                <div className="d-flex align-items-center d-lg-none">
                  <button
                    id="kt_app_sidebar_mobile_toggle"
                    className="btn btn-icon btn-color-gray-500 btn-active-color-primary ms-n4 me-1"
                  >
                    <i className="ki-outline ki-burger-menu-6 fs-2x" />
                  </button>
                  <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
                    <a href="index.html">
                      <img
                        alt="Logo"
                        src="assets/media/logos/demo50.svg"
                        className="h-30px"
                      />
                    </a>
                  </div>
                  <div
                    className="d-flex align-items-center d-lg-none ms-2"
                    title="Show sidebar menu"
                  >
                    <div
                      className="btn btn-icon btn-color-white bg-white bg-opacity-0 bg-hover-opacity-10 w-35px h-35px"
                      id="kt_app_sidebar_mobile_toggle"
                    >
                      <i className="ki-outline ki-abstract-14 fs-2" />
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-stack justify-content-end flex-row-fluid"
                  id="kt_app_navbar_wrapper"
                >
                  <div className="app-page-entry d-flex align-items-center flex-row-fluid gap-3">
                    <img
                      src="assets/media//stock/600x600/img-87.jpg"
                      className="h-40px rounded"
                    />
                    <div className="d-flex flex-column">
                      <h1 className="text-gray-900 fs-2 fw-bold mb-0">
                        Project Nebula
                      </h1>
                    </div>
                  </div>
                  <div className="app-navbar flex-shrink-0 gap-1 gap-lg-3">
                    <div className="app-navbar-item">
                      <div
                        className="btn btn-icon btn-icon-gray-500 btn-active-light btn-active-color-primary w-35px h-35px w-lg-40px h-lg-40px"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-attach="parent"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-outline ki-add-notepad fs-1" />
                      </div>
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
                        data-kt-menu="true"
                      >
                        <div
                          className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                          style={{
                            backgroundImage:
                              'url("assets/media/misc/menu-header-bg.jpg")'
                          }}
                        >
                          <h3 className="text-white fw-semibold mb-3">
                            Quick Links
                          </h3>
                          <span className="badge bg-primary text-inverse-primary py-2 px-3">
                            25 pending tasks
                          </span>
                        </div>
                        <div className="row g-0">
                          <div className="col-6">
                            <a
                              href="apps/projects/budget.html"
                              className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
                            >
                              <i className="ki-outline ki-dollar fs-3x text-primary mb-2" />
                              <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                Accounting
                              </span>
                              <span className="fs-7 text-gray-500">eCommerce</span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="apps/projects/settings.html"
                              className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
                            >
                              <i className="ki-outline ki-sms fs-3x text-primary mb-2" />
                              <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                Administration
                              </span>
                              <span className="fs-7 text-gray-500">Console</span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="apps/projects/list.html"
                              className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
                            >
                              <i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2" />
                              <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                Projects
                              </span>
                              <span className="fs-7 text-gray-500">
                                Pending Tasks
                              </span>
                            </a>
                          </div>
                          <div className="col-6">
                            <a
                              href="apps/projects/users.html"
                              className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                            >
                              <i className="ki-outline ki-briefcase fs-3x text-primary mb-2" />
                              <span className="fs-5 fw-semibold text-gray-800 mb-0">
                                Customers
                              </span>
                              <span className="fs-7 text-gray-500">
                                Latest cases
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="py-2 text-center border-top">
                          <a
                            href="pages/user-profile/activity.html"
                            className="btn btn-color-gray-600 btn-active-color-primary"
                          >
                            View All{" "}
                            <i className="ki-outline ki-arrow-right fs-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="app-navbar-item">
                      <div
                        className="btn btn-icon btn-icon-gray-500 btn-active-light btn-active-color-primary w-35px h-35px w-lg-40px h-lg-40px"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-attach="parent"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i className="ki-outline ki-element-11 fs-1" />
                      </div>
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px"
                        data-kt-menu="true"
                      >
                        <div className="card">
                          <div className="card-header">
                            <div className="card-title">My Apps</div>
                            <div className="card-toolbar">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon btn-active-light-primary me-n3"
                                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                data-kt-menu-placement="bottom-end"
                              >
                                <i className="ki-outline ki-setting-3 fs-2" />
                              </button>
                              {/*begin::Menu 3*/}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                data-kt-menu="true"
                              >
                                <div className="menu-item px-3">
                                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                    Payments
                                  </div>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Create Invoice
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link flex-stack px-3">
                                    Create Payment
                                    <span
                                      className="ms-2"
                                      data-bs-toggle="tooltip"
                                      title="Specify a target name for future usage and reference"
                                    >
                                      <i className="ki-outline ki-information fs-6" />{" "}
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Generate Bill
                                  </a>
                                </div>
                                <div
                                  className="menu-item px-3"
                                  data-kt-menu-trigger="hover"
                                  data-kt-menu-placement="right-end"
                                >
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">Subscription</span>
                                    <span className="menu-arrow" />
                                  </a>
                                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Plans
                                      </a>
                                    </div>
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Billing
                                      </a>
                                    </div>
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Statements
                                      </a>
                                    </div>
                                    <div className="separator my-2" />
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3">
                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                          <input
                                            className="form-check-input w-30px h-20px"
                                            type="checkbox"
                                            defaultValue={1}
                                            defaultChecked="checked"
                                            name="notifications"
                                          />
                                          <span className="form-check-label text-muted fs-6">
                                            Recuring
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="menu-item px-3 my-1">
                                  <a href="#" className="menu-link px-3">
                                    Settings
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body py-5">
                            <div className="mh-450px scroll-y me-n5 pe-5">
                              <div className="row g-2">
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/amazon.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">AWS</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/angular-icon-1.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">AngularJS</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/atica.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Atica</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/beats-electronics.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Music</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/codeigniter.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Codeigniter</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/bootstrap-4.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Bootstrap</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/google-tag-manager.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">GTM</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/disqus.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Disqus</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Dribble</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/google-play-store.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Play Store</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/google-podcasts.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Podcasts</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/figma-1.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Figma</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/github.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Github</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/gitlab.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Gitlab</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/instagram-2-1.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Instagram</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-4">
                                  <a
                                    href="#"
                                    className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                                  >
                                    <img
                                      src="assets/media/svg/brand-logos/pinterest-p.svg"
                                      className="w-25px h-25px mb-2"
                                      alt=""
                                    />
                                    <span className="fw-semibold">Pinterest</span>
                                  </a>
                                </div>
                                {/*end::Col*/}
                              </div>
                              {/*end::Row*/}
                            </div>
                            {/*end::Scroll*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Card*/}
                      </div>
                      {/*end::My apps*/}
                      {/*end::Menu wrapper*/}
                    </div>
                    {/*end::My apps*/}
                    {/*begin::Chat*/}
                    <div className="app-navbar-item">
                      {/*begin::Menu wrapper*/}
                      <div
                        className="btn btn-icon btn-icon-gray-500 btn-active-light btn-active-color-primary w-35px h-35px w-lg-40px h-lg-40px position-relative"
                        id="kt_drawer_chat_toggle"
                      >
                        <i className="ki-outline ki-notification-on fs-1" />
                        <span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-danger w-15px h-15px ms-n4 mt-3">
                          5
                        </span>
                      </div>
                      {/*end::Menu wrapper*/}
                    </div>
                    {/*end::Chat*/}
                    {/*begin::Action*/}
                    <div className="app-navbar-item ps-lg-2">
                      <a
                        href="#"
                        className="btn btn-flex btn-icon align-self-center fw-bold btn-success w-35px w-md-100 h-35px h-md-40px px-4"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Try Preemium"
                      >
                        <i className="ki-outline ki-crown-2 fs-4" />
                        <span className="d-none d-md-inline ms-2">Try Premium</span>
                      </a>
                    </div>
                    {/*end::Action*/}
                  </div>
                  {/*end::Navbar*/}
                </div>
                {/*end::Navbar wrapper*/}
              </div>
              {/*end::Header container*/}
            </div>
            <div
              className="app-wrapper flex-column flex-row-fluid"
              id="kt_app_wrapper"
            >
              <div
                id="kt_app_sidebar"
                className="app-sidebar"
                data-kt-drawer="true"
                data-kt-drawer-name="app-sidebar"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="auto"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
              >
                <div className="app-sidebar-primary">
                  <div
                    className="app-sidebar-logo d-none d-md-flex flex-center pt-10 pb-10"
                    id="kt_app_sidebar_logo"
                  >
                    <a href="index.html">
                      <img
                        alt="Logo"
                        src="assets/media/logos/demo62.svg"
                        className="h-30px"
                      />
                    </a>
                  </div>
                  <div
                    className="app-sidebar-menu flex-grow-1 hover-scroll-y scroll-ms my-5"
                    id="kt_aside_menu_wrapper"
                    data-kt-scroll="true"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                    data-kt-scroll-wrappers="#kt_app_sidebar_menu"
                    data-kt-scroll-offset="5px"
                  >
                    <div
                      id="kt_aside_menu"
                      className="menu menu-column menu-title-gray-600 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold fs-6"
                      data-kt-menu="true"
                    >
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item here show py-2"
                      >
                        <span className="menu-link menu-center">
                          <span className="menu-icon me-0">
                            <i className="ki-outline ki-home-1 fs-2" />
                          </span>
                        </span>
                        <div className="menu-sub menu-sub-dropdown px-2 py-4 w-250px mh-75 overflow-auto">
                          <div className="menu-item">
                            <div className="menu-content">
                              <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                                Home
                              </span>
                            </div>
                          </div>
                          <div className="menu-item">
                            <a className="menu-link active" href="index.html">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Default</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="dashboards/ecommerce.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">eCommerce</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="dashboards/projects.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Projects</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="dashboards/online-courses.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Online Courses</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="dashboards/marketing.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Marketing</span>
                            </a>
                          </div>
                          <div
                            className="menu-inner flex-column collapse"
                            id="kt_app_sidebar_menu_dashboards_collapse"
                          >
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="dashboards/bidding.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Bidding</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a className="menu-link" href="dashboards/pos.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">POS System</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="dashboards/call-center.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Call Center</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="dashboards/logistics.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Logistics</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="dashboards/website-analytics.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Website Analytics
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="dashboards/finance-performance.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">
                                  Finance Performance
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link"
                                href="dashboards/store-analytics.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Store Analytics</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="dashboards/social.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Social</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="dashboards/delivery.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Delivery</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="dashboards/crypto.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Crypto</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="dashboards/school.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">School</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a
                                className="menu-link"
                                href="dashboards/podcast.html"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Podcast</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                              {/*begin:Menu link*/}
                              <a className="menu-link" href="landing.html">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Landing</span>
                              </a>
                              {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                          </div>
                          <div className="menu-item">
                            <div className="menu-content">
                              <a
                                className="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed"
                                data-bs-toggle="collapse"
                                href="#kt_app_sidebar_menu_dashboards_collapse"
                                data-kt-toggle-text="Show Less"
                              >
                                <span data-kt-toggle-text-target="true">
                                  Show 12 More
                                </span>
                                <i className="ki-outline ki-minus-square toggle-on fs-2 me-0" />
                                <i className="ki-outline ki-plus-square toggle-off fs-2 me-0" />
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item py-2"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link menu-center">
                          <span className="menu-icon me-0">
                            <i className="ki-outline ki-add-folder fs-2" />
                          </span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu content*/}
                            <div className="menu-content">
                              <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                                Pages
                              </span>
                            </div>
                            {/*end:Menu content*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">User Profile</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/user-profile/overview.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Overview</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/user-profile/projects.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Projects</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/user-profile/campaigns.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Campaigns</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/user-profile/documents.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Documents</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/user-profile/followers.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Followers</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/user-profile/activity.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Activity</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Account</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/overview.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Overview</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/security.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Security</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/activity.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Activity</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/billing.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Billing</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/statements.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Statements</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/referrals.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Referrals</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="account/api-keys.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">API Keys</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="account/logs.html">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Logs</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Authentication</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Corporate Layout
                                  </span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/corporate/sign-in.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-in</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/corporate/sign-up.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-up</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/corporate/two-factor.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Two-Factor</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/corporate/reset-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Reset Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/corporate/new-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        New Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Overlay Layout</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/overlay/sign-in.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-in</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/overlay/sign-up.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-up</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/overlay/two-factor.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Two-Factor</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/overlay/reset-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Reset Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/overlay/new-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        New Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Creative Layout
                                  </span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/creative/sign-in.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-in</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/creative/sign-up.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-up</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/creative/two-factor.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Two-Factor</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/creative/reset-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Reset Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/creative/new-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        New Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Fancy Layout</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/fancy/sign-in.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-in</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/fancy/sign-up.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sign-up</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/fancy/two-factor.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Two-Factor</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/fancy/reset-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Reset Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/layouts/fancy/new-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        New Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Email Templates
                                  </span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/welcome-message.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Welcome Message
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/reset-password.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Reset Password
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/subscription-confirmed.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Subscription Confirmed
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/card-declined.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Credit Card Declined
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/promo-1.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Promo 1</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/promo-2.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Promo 2</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="authentication/email/promo-3.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Promo 3</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/extended/multi-steps-sign-up.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Multi-steps Sign-up
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/welcome.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Welcome Message
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/verify-email.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Verify Email</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/coming-soon.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Coming Soon</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/password-confirmation.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Password Confirmation
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/account-deactivated.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Account Deactivation
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/error-404.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Error 404</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="authentication/general/error-500.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Error 500</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Corporate</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="pages/about.html">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">About</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="pages/team.html">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Our Team</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="pages/contact.html">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Contact Us</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="pages/licenses.html">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Licenses</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="pages/sitemap.html">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Sitemap</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Social</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/social/feeds.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Feeds</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/social/activity.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Activty</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/social/followers.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Followers</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/social/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Blog</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/blog/home.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Blog Home</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/blog/post.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Blog Post</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Careers</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/careers/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Careers List</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="pages/careers/apply.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Careers Apply</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item py-2"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link menu-center">
                          <span className="menu-icon me-0">
                            <i className="ki-outline ki-chart-line-star fs-2" />
                          </span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu content*/}
                            <div className="menu-content">
                              <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                                Utilities
                              </span>
                            </div>
                            {/*end:Menu content*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Modals</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">General</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/general/invite-friends.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Invite Friends
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/general/view-users.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">View Users</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/general/select-users.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Select Users
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/general/upgrade-plan.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Upgrade Plan
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/general/share-earn.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Share &amp; Earn
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Forms</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/forms/new-target.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">New Target</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/forms/new-card.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">New Card</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/forms/new-address.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        New Address
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/forms/create-api-key.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Create API Key
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/forms/bidding.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Bidding</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Wizards</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/create-app.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Create App</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/create-campaign.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Create Campaign
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/create-account.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Create Business Acc
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/create-project.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Create Project
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/top-up-wallet.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Top Up Wallet
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/offer-a-deal.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Offer a Deal
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/wizards/two-factor-authentication.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Two Factor Auth
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Search</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/search/users.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Users</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="utilities/modals/search/select-location.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Select Location
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Wizards</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/horizontal.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Horizontal</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/vertical.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Vertical</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/two-factor-authentication.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Two Factor Auth
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/create-app.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Create App</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/create-campaign.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Create Campaign
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/create-account.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Create Account</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/create-project.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Create Project</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/modals/wizards/top-up-wallet.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Top Up Wallet</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/wizards/offer-a-deal.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Offer a Deal</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Search</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion menu-active-bg">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/search/horizontal.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Horizontal</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/search/vertical.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Vertical</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/search/users.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Users</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="utilities/search/select-location.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Location</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item py-2"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link menu-center">
                          <span className="menu-icon me-0">
                            <i className="ki-outline ki-handcart fs-2" />
                          </span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown menu-sub-indention px-2 py-4 w-250px mh-75 overflow-auto">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu content*/}
                            <div className="menu-content">
                              <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                                Apps
                              </span>
                            </div>
                            {/*end:Menu content*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-rocket fs-2" />
                              </span>
                              <span className="menu-title">Projects</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">My Projects</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/project.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">View Project</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/targets.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Targets</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/budget.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Budget</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/users.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Users</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/files.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Files</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/activity.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Activity</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/projects/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-handcart fs-2" />
                              </span>
                              <span className="menu-title">eCommerce</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Catalog</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/catalog/products.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Products</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/catalog/categories.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Categories</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/catalog/add-product.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Add Product
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/catalog/edit-product.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Edit Product
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/catalog/add-category.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Add Category
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/catalog/edit-category.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Edit Category
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Sales</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/sales/listing.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Orders Listing
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/sales/details.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Order Details
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/sales/add-order.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Add Order</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/sales/edit-order.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Edit Order</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Customers</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/customers/listing.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Customer Listing
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/customers/details.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Customer Details
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Reports</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/reports/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Products Viewed
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/reports/sales.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Sales</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/reports/returns.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Returns</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/reports/customer-orders.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Customer Orders
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/ecommerce/reports/shipping.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Shipping</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/ecommerce/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-phone fs-2" />
                              </span>
                              <span className="menu-title">Contacts</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/contacts/getting-started.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Getting Started
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/contacts/add-contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Add Contact</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/contacts/edit-contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Edit Contact</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/contacts/view-contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">View Contact</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-chart fs-2" />
                              </span>
                              <span className="menu-title">Support Center</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/support-center/overview.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Overview</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion mb-1"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Tickets</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/support-center/tickets/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Tickets List
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/support-center/tickets/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        View Ticket
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion mb-1"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Tutorials</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/support-center/tutorials/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Tutorials List
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/support-center/tutorials/post.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">
                                        Tutorial Post
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/support-center/faq.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">FAQ</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/support-center/licenses.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Licenses</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/support-center/contact.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Contact Us</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-shield-tick fs-2" />
                              </span>
                              <span className="menu-title">User Management</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion mb-1"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Users</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/user-management/users/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Users List</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/user-management/users/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">View User</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Roles</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/user-management/roles/list.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Roles List</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/user-management/roles/view.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">View Role</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/user-management/permissions.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Permissions</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-briefcase fs-2" />
                              </span>
                              <span className="menu-title">Customers</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/customers/getting-started.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Getting Started
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/customers/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Customer Listing
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/customers/view.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Customer Details
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-map fs-2" />
                              </span>
                              <span className="menu-title">Subscription</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/subscriptions/getting-started.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Getting Started
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/subscriptions/list.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Subscription List
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/subscriptions/add.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Add Subscription
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/subscriptions/view.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    View Subscription
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-credit-cart fs-2" />
                              </span>
                              <span className="menu-title">Invoice Manager</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div
                                data-kt-menu-trigger="click"
                                className="menu-item menu-accordion"
                              >
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">View Invoices</span>
                                  <span className="menu-arrow" />
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/invoices/view/invoice-1.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Invoice 1</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/invoices/view/invoice-2.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Invoice 2</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a
                                      className="menu-link"
                                      href="apps/invoices/view/invoice-3.html"
                                    >
                                      <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                      </span>
                                      <span className="menu-title">Invoice 3</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/invoices/create.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Create Invoice</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-file-added fs-2" />
                              </span>
                              <span className="menu-title">File Manager</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/file-manager/folders.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Folders</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/file-manager/files.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Files</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/file-manager/blank.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    Blank Directory
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/file-manager/settings.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Settings</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-sms fs-2" />
                              </span>
                              <span className="menu-title">Inbox</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/inbox/listing.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Messages</span>
                                  <span className="menu-badge">
                                    <span className="badge badge-success">3</span>
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/inbox/compose.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Compose</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/inbox/reply.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">
                                    View &amp; Reply
                                  </span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div
                            data-kt-menu-trigger="click"
                            className="menu-item menu-accordion"
                          >
                            {/*begin:Menu link*/}
                            <span className="menu-link">
                              <span className="menu-icon">
                                <i className="ki-outline ki-message-text-2 fs-2" />
                              </span>
                              <span className="menu-title">Chat</span>
                              <span className="menu-arrow" />
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-accordion">
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/chat/private.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Private Chat</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/chat/group.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Group Chat</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                              {/*begin:Menu item*/}
                              <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a
                                  className="menu-link"
                                  href="apps/chat/drawer.html"
                                >
                                  <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                  </span>
                                  <span className="menu-title">Drawer Chat</span>
                                </a>
                                {/*end:Menu link*/}
                              </div>
                              {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a className="menu-link" href="apps/calendar.html">
                              <span className="menu-icon">
                                <i className="ki-outline ki-calendar-8 fs-2" />
                              </span>
                              <span className="menu-title">Calendar</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item py-2"
                      >
                        {/*begin:Menu link*/}
                        <span className="menu-link menu-center">
                          <span className="menu-icon me-0">
                            <i className="ki-outline ki-shield-tick fs-2" />
                          </span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown px-2 py-4 w-200px w-lg-225px mh-75 overflow-auto">
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu content*/}
                            <div className="menu-content">
                              <span className="menu-section fs-5 fw-bolder ps-1 py-1">
                                Help
                              </span>
                            </div>
                            {/*end:Menu content*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                              target="_blank"
                              title="Check out over 200 in-house components"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-dismiss="click"
                              data-bs-placement="right"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Components</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="https://preview.keenthemes.com/html/metronic/docs"
                              target="_blank"
                              title="Check out the complete documentation"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-dismiss="click"
                              data-bs-placement="right"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Documentation</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="https://preview.keenthemes.com/metronic8/demo62/layout-builder.html"
                              title="Build your layout and export HTML for server side integration"
                              data-bs-toggle="tooltip"
                              data-bs-trigger="hover"
                              data-bs-dismiss="click"
                              data-bs-placement="right"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Layout Builder</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a
                              className="menu-link"
                              href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                              target="_blank"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                              </span>
                              <span className="menu-title">Changelog v8.2.5</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Primary menu*/}
                  {/*begin::Footer*/}
                  <div
                    className="d-flex flex-column flex-center pb-4 pb-lg-8"
                    id="kt_app_sidebar_footer"
                  >
                    {/*begin::User menu*/}
                    <div
                      className="cursor-pointer symbol symbol-40px symbol-circle mb-9"
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-attach="parent"
                      data-kt-menu-placement="right-end"
                    >
                      <img src="assets/media/avatars/300-9.jpg" alt="user" />
                    </div>
                    {/*begin::User account menu*/}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-50px me-5">
                            <img alt="Logo" src="assets/media/avatars/300-9.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Username*/}
                          <div className="d-flex flex-column">
                            <div className="fw-bold d-flex align-items-center fs-5">
                              Max Smith
                              <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                                Pro
                              </span>
                            </div>
                            <a
                              href="#"
                              className="fw-semibold text-muted text-hover-primary fs-7"
                            >
                              emma@kt.com
                            </a>
                          </div>
                          {/*end::Username*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a href="account/overview.html" className="menu-link px-5">
                          My Profile
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a
                          href="apps/projects/list.html"
                          className="menu-link px-5"
                        >
                          <span className="menu-text">My Projects</span>
                          <span className="menu-badge">
                            <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                              3
                            </span>
                          </span>
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="left-end"
                        data-kt-menu-offset="-15px, 0"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title">My Subscription</span>
                          <span className="menu-arrow" />
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/referrals.html"
                              className="menu-link px-5"
                            >
                              Referrals
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/billing.html"
                              className="menu-link px-5"
                            >
                              Billing
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/statements.html"
                              className="menu-link px-5"
                            >
                              Payments
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/statements.html"
                              className="menu-link d-flex flex-stack px-5"
                            >
                              Statements
                              <span
                                className="ms-2 lh-0"
                                data-bs-toggle="tooltip"
                                title="View your statements"
                              >
                                <i className="ki-outline ki-information-5 fs-5" />{" "}
                              </span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu separator*/}
                          <div className="separator my-2" />
                          {/*end::Menu separator*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <div className="menu-content px-3">
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  className="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  defaultValue={1}
                                  defaultChecked="checked"
                                  name="notifications"
                                />
                                <span className="form-check-label text-muted fs-7">
                                  Notifications
                                </span>
                              </label>
                            </div>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a
                          href="account/statements.html"
                          className="menu-link px-5"
                        >
                          My Statements
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="left-start"
                        data-kt-menu-offset="-15px, 0"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title position-relative">
                            Mode
                            <span className="ms-5 position-absolute translate-middle-y top-50 end-0">
                              <i className="ki-outline ki-night-day theme-light-show fs-2" />
                              <i className="ki-outline ki-moon theme-dark-show fs-2" />{" "}
                            </span>
                          </span>
                        </a>
                        {/*begin::Menu*/}
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                          data-kt-menu="true"
                          data-kt-element="theme-mode-menu"
                        >
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-0">
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="mode"
                              data-kt-value="light"
                            >
                              <span className="menu-icon" data-kt-element="icon">
                                <i className="ki-outline ki-night-day fs-2" />
                              </span>
                              <span className="menu-title">Light</span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-0">
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="mode"
                              data-kt-value="dark"
                            >
                              <span className="menu-icon" data-kt-element="icon">
                                <i className="ki-outline ki-moon fs-2" />
                              </span>
                              <span className="menu-title">Dark</span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3 my-0">
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="mode"
                              data-kt-value="system"
                            >
                              <span className="menu-icon" data-kt-element="icon">
                                <i className="ki-outline ki-screen fs-2" />
                              </span>
                              <span className="menu-title">System</span>
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        className="menu-item px-5"
                        data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                        data-kt-menu-placement="left-start"
                        data-kt-menu-offset="0, 0"
                      >
                        <a href="#" className="menu-link px-5">
                          <span className="menu-title position-relative">
                            Language
                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                              English
                              <img
                                className="w-15px h-15px rounded-1 ms-2"
                                src="assets/media/flags/united-states.svg"
                                alt=""
                              />
                            </span>
                          </span>
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5 active"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/united-states.svg"
                                  alt=""
                                />{" "}
                              </span>
                              English
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/spain.svg"
                                  alt=""
                                />{" "}
                              </span>
                              Spanish
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/germany.svg"
                                  alt=""
                                />{" "}
                              </span>
                              German
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/japan.svg"
                                  alt=""
                                />{" "}
                              </span>
                              Japanese
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item px-3">
                            <a
                              href="account/settings.html"
                              className="menu-link d-flex px-5"
                            >
                              <span className="symbol symbol-20px me-4">
                                <img
                                  className="rounded-1"
                                  src="assets/media/flags/france.svg"
                                  alt=""
                                />{" "}
                              </span>
                              French
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5 my-1">
                        <a href="account/settings.html" className="menu-link px-5">
                          Account Settings
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-5">
                        <a
                          href="authentication/layouts/corporate/sign-in.html"
                          className="menu-link px-5"
                        >
                          Sign Out
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::User account menu*/}
                    {/*begin::Action*/}
                    <div className="app-navbar-item">
                      {/*begin::Link*/}
                      <a
                        href="authentication/layouts/corporate/sign-in.html"
                        className=""
                      >
                        <i className="ki-outline ki-exit-right fs-2" />
                      </a>
                      {/*end::Link*/}
                    </div>
                    {/*end::Action*/}
                  </div>
                  {/*end::Footer*/}
                </div>
                <div className="app-sidebar-secondary">
                  <div
                    className="d-flex flex-column gap-8 flew-grow-1 p-4 p-lg-6"
                    id="kt_sidebar_secondary_wrapper"
                  >
                    {/*begin::Categories*/}
                    <div id="kt_sidebar_secondary_project_select">
                      {/*begin::Toggle*/}
                      <button
                        type="button"
                        data-kt-element="selected"
                        className="btn btn-outline btn-outline-dashed h-50px d-flex text-start flex-stack w-100 ps-4 pe-8"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-start"
                        data-kt-menu-offset="0px, -1px"
                      >
                        {/*begin::Title*/}
                        <span
                          className="d-none d-md-flex flex-column pt-2"
                          data-kt-element="title"
                        >
                          <span className="fs-6 fw-bold lh-1 mb-1">Projects</span>
                          <span className="text-primary fs-7">
                            KeenThemes
                            <span className="text-gray-500">space</span>
                          </span>
                        </span>
                        {/*end::Title*/}
                        {/*begin::Arrows*/}
                        <span className="d-flex flex-column me-n4">
                          <i className="ki-outline ki-down fs-5 text-gray-500" />
                        </span>
                        {/*end::Arrows*/}
                      </button>
                      {/*end::Toggle*/}
                      {/*begin::Menu*/}
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-state-bg menu-rounded w-200px ps-3"
                        data-kt-menu="true"
                      >
                        {/*begin::Menu wrapper*/}
                        <div className="hover-scroll-y mh-200px my-3 pe-3 me-n1">
                          {/*begin::Menu item*/}
                          <div className="menu-item my-0 py-1">
                            {/*begin::Menu link*/}
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="project"
                            >
                              {/*begin::Info*/}
                              <span className="d-flex flex-column align-items-start">
                                <span
                                  className="fs-7 fw-semibold text-primary"
                                  data-kt-element="title"
                                >
                                  KeenThemes
                                  <span className="text-gray-500">space</span>
                                </span>
                              </span>
                              {/*end::Info*/}
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item my-0 py-1">
                            {/*begin::Menu link*/}
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="project"
                            >
                              {/*begin::Info*/}
                              <span className="d-flex flex-column align-items-start">
                                <span
                                  className="fs-7 fw-semibold text-primary"
                                  data-kt-element="title"
                                >
                                  Hero
                                  <span className="text-gray-500">design</span>
                                </span>
                              </span>
                              {/*end::Info*/}
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item my-0 py-1">
                            {/*begin::Menu link*/}
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="project"
                            >
                              {/*begin::Info*/}
                              <span className="d-flex flex-column align-items-start">
                                <span
                                  className="fs-7 fw-semibold text-primary"
                                  data-kt-element="title"
                                >
                                  Craft
                                  <span className="text-gray-500">app</span>
                                </span>
                              </span>
                              {/*end::Info*/}
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item my-0 py-1">
                            {/*begin::Menu link*/}
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="project"
                            >
                              {/*begin::Info*/}
                              <span className="d-flex flex-column align-items-start">
                                <span
                                  className="fs-7 fw-semibold text-primary"
                                  data-kt-element="title"
                                >
                                  Looper
                                  <span className="text-gray-500">cloud</span>
                                </span>
                              </span>
                              {/*end::Info*/}
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div className="menu-item my-0 py-1">
                            {/*begin::Menu link*/}
                            <a
                              href="#"
                              className="menu-link px-3 py-2"
                              data-kt-element="project"
                            >
                              {/*begin::Info*/}
                              <span className="d-flex flex-column align-items-start">
                                <span
                                  className="fs-7 fw-semibold text-primary"
                                  data-kt-element="title"
                                >
                                  Smartbizz
                                  <span className="text-gray-500">crm</span>
                                </span>
                              </span>
                              {/*end::Info*/}
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu wrapper*/}
                      </div>
                      {/*end::Menu*/}
                    </div>
                    {/*end::Categories*/}
                    <div
                      className="position-relative"
                      id="kt_sidebar_secondary_search"
                    >
                      <div className="d-flex align-items-center position-absolute translate-middle-y top-50 start-0 ms-3">
                        <i className="ki-outline ki-magnifier text-gray-600 fs-3" />
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-solid border ps-10"
                        minLength={3}
                        maxLength={4}
                        placeholder="Search Projects..."
                        name="project"
                      />
                    </div>
                    <div>
                      <ul
                        className="nav nav-tabs nav-line-tabs nav-line-tabs-2x d-flex mb-5 fs-6 fw-semibold"
                        id="kt_sidebar_secondary_tabs"
                      >
                        <li className="nav-item flex-fill">
                          <a
                            className="nav-link text-center text-gray-600 text-active-gray-800 py-2 px-2 mx-0 active"
                            data-bs-toggle="tab"
                            href="#kt_projects_active"
                          >
                            Active <span className="text-gray-500">(37)</span>
                          </a>
                        </li>
                        <li className="nav-item flex-fill">
                          <a
                            className="nav-link text-center text-gray-600 text-active-gray-800 py-2 px-2 mx-0"
                            data-bs-toggle="tab"
                            href="#kt_projects_completed"
                          >
                            Done <span className="text-gray-500">(37)</span>
                          </a>
                        </li>
                      </ul>
                      <div
                        className="hover-scroll-y"
                        data-kt-scroll="true"
                        data-kt-scroll-height="auto"
                        data-kt-scroll-dependencies="#kt_app_footer, #kt_sidebar_secondary_search, #kt_sidebar_secondary_project_select, #kt_sidebar_secondary_tabs"
                        data-kt-scroll-wrappers="#kt_sidebar_secondary_wrapper"
                        data-kt-scroll-offset="0px"
                      >
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="kt_projects_active"
                            role="tabpanel"
                          >
                            <div className="d-flex flex-column flex-grow-1 gap-1">
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-29.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Operation Apex
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 02 Jan, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-87.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Project Nebula
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 19 Feb, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-26.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Task Infinity
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 16 Mar, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-32.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Quantum
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 28 May, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-16.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Phoenix
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 30 May, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-3.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Task Infinity
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 10 June, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-36.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Unity Harbor
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 10 Aug, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-35.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Nexus
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 25 Sep, 2024
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="kt_projects_completed"
                            role="tabpanel"
                          >
                            <div className="d-flex flex-column flex-grow-1 gap-1">
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-10.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Stock App
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 02 Jan, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-87.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Project Nebula
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 19 Feb, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-26.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Task Infinity
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 16 Mar, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-32.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Quantum
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 28 May, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-16.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    Phoenix
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 30 May, 2024
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center p-3 gap-2 border border-transparent bg-hover-light-primary border-hover-primary-clarity rounded"
                              >
                                <img
                                  src="assets/media//stock/600x600/img-38.jpg"
                                  className="h-40px rounded"
                                />
                                <div className="d-flex flex-column">
                                  <div className="text-gray-900 fs-6 fw-semibold">
                                    UI/UX Rewamp
                                  </div>
                                  <div className="text-gray-600 fs-7">
                                    Due: 25 Sep, 2024
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Sidebar secondary*/}
              </div>
              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                <div className="d-flex flex-column flex-column-fluid">
                  <div id="kt_app_toolbar" className="app-toolbar mb-5 mb-lg-0">
                    <div
                      id="kt_app_toolbar_container"
                      className="app-container container-fluid d-flex flex-stack flex-wrap"
                    >
                      <ul className="nav nav-stretch nav-line-tabs flex-grow-1 fs-5 fw-semibold mb-10">
                        <li className="nav-item">
                          <a
                            className="nav-link text-active-primary ms-0 me-5 me-lg-8 pt-2 pb-3 pt-lg-4 pb-lg-5 active"
                            href="index.html"
                          >
                            Overview
                          </a>
                        </li>
                        {/*end::Nav item*/}
                        {/*begin::Nav item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link text-active-primary ms-0 me-5 me-lg-8 pt-2 pb-3 pt-lg-4 pb-lg-5"
                            href="pages/user-profile/overview.html"
                          >
                            Projects
                          </a>
                        </li>
                        {/*end::Nav item*/}
                        {/*begin::Nav item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link text-active-primary ms-0 me-5 me-lg-8 pt-2 pb-3 pt-lg-4 pb-lg-5"
                            href="pages/user-profile/campaigns.html"
                          >
                            Campaigns
                          </a>
                        </li>
                        {/*end::Nav item*/}
                        {/*begin::Nav item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link text-active-primary ms-0 me-5 me-lg-8 pt-2 pb-3 pt-lg-4 pb-lg-5"
                            href="pages/user-profile/documents.html"
                          >
                            Documents
                          </a>
                        </li>
                        {/*end::Nav item*/}
                        {/*begin::Nav item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link text-active-primary ms-0 me-5 me-lg-8 pt-2 pb-3 pt-lg-4 pb-lg-5"
                            href="pages/user-profile/followers.html"
                          >
                            Followers
                          </a>
                        </li>
                        {/*end::Nav item*/}
                        {/*begin::Nav item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link text-active-primary ms-0 me-5 me-lg-8 pt-2 pb-3 pt-lg-4 pb-lg-5"
                            href="pages/user-profile/activity.html"
                          >
                            Activity
                          </a>
                        </li>
                        {/*end::Nav item*/}
                      </ul>
                      {/*begin::Navs*/}
                    </div>
                    {/*end::Toolbar container*/}
                  </div>
                  {/*end::Toolbar*/}
                  {/*begin::Content*/}
                  <div
                    id="kt_app_content"
                    className="app-content flex-column-fluid"
                  >
                    {/*begin::Content container*/}
                    <div
                      id="kt_app_content_container"
                      className="app-container container-fluid"
                    >
                      {/*begin::Navbar*/}
                      <div className="card mb-6">
                        <div className="card-body pt-9 pb-0">
                          {/*begin::Details*/}
                          <div className="d-flex flex-wrap flex-sm-nowrap">
                            {/*begin: Pic*/}
                            <div className="me-7 mb-4">
                              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                <img
                                  src="assets/media/avatars/300-9.jpg"
                                  alt="image"
                                />
                                <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px" />
                              </div>
                            </div>
                            {/*end::Pic*/}
                            {/*begin::Info*/}
                            <div className="flex-grow-1">
                              {/*begin::Title*/}
                              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                {/*begin::User*/}
                                <div className="d-flex flex-column">
                                  {/*begin::Name*/}
                                  <div className="d-flex align-items-center mb-2">
                                    <a
                                      href="#"
                                      className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                                    >
                                      Max Smith
                                    </a>
                                    <a href="#">
                                      <i className="ki-outline ki-verify fs-1 text-primary" />
                                    </a>
                                  </div>
                                  {/*end::Name*/}
                                  {/*begin::Info*/}
                                  <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                    <a
                                      href="#"
                                      className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                                    >
                                      <i className="ki-outline ki-profile-circle fs-4 me-1" />
                                      Developer
                                    </a>
                                    <a
                                      href="#"
                                      className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                                    >
                                      <i className="ki-outline ki-geolocation fs-4 me-1" />
                                      SF, Bay Area
                                    </a>
                                    <a
                                      href="#"
                                      className="d-flex align-items-center text-gray-500 text-hover-primary mb-2"
                                    >
                                      <i className="ki-outline ki-sms fs-4 me-1" />
                                      max@kt.com
                                    </a>
                                  </div>
                                  {/*end::Info*/}
                                </div>
                                {/*end::User*/}
                                {/*begin::Actions*/}
                                <div className="d-flex my-4">
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-light me-2"
                                    id="kt_user_follow_button"
                                  >
                                    <i className="ki-outline ki-check fs-3 d-none" />
                                    {/*begin::Indicator label*/}
                                    <span className="indicator-label">Follow</span>
                                    {/*end::Indicator label*/}
                                    {/*begin::Indicator progress*/}
                                    <span className="indicator-progress">
                                      Please wait...
                                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>
                                    {/*end::Indicator progress*/}
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-sm btn-primary me-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_offer_a_deal"
                                  >
                                    Hire Me
                                  </a>
                                  {/*begin::Menu*/}
                                  <div className="me-0">
                                    <button
                                      className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      <i className="ki-solid ki-dots-horizontal fs-2x me-1" />
                                    </button>
                                    {/*begin::Menu 3*/}
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                      data-kt-menu="true"
                                    >
                                      {/*begin::Heading*/}
                                      <div className="menu-item px-3">
                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                          Payments
                                        </div>
                                      </div>
                                      {/*end::Heading*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Create Invoice
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link flex-stack px-3"
                                        >
                                          Create Payment
                                          <span
                                            className="ms-2"
                                            data-bs-toggle="tooltip"
                                            title="Specify a target name for future usage and reference"
                                          >
                                            <i className="ki-outline ki-information fs-6" />{" "}
                                          </span>
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3">
                                          Generate Bill
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div
                                        className="menu-item px-3"
                                        data-kt-menu-trigger="hover"
                                        data-kt-menu-placement="right-end"
                                      >
                                        <a href="#" className="menu-link px-3">
                                          <span className="menu-title">
                                            Subscription
                                          </span>
                                          <span className="menu-arrow" />
                                        </a>
                                        {/*begin::Menu sub*/}
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">
                                              Plans
                                            </a>
                                          </div>
                                          {/*end::Menu item*/}
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">
                                              Billing
                                            </a>
                                          </div>
                                          {/*end::Menu item*/}
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">
                                              Statements
                                            </a>
                                          </div>
                                          {/*end::Menu item*/}
                                          {/*begin::Menu separator*/}
                                          <div className="separator my-2" />
                                          {/*end::Menu separator*/}
                                          {/*begin::Menu item*/}
                                          <div className="menu-item px-3">
                                            <div className="menu-content px-3">
                                              {/*begin::Switch*/}
                                              <label className="form-check form-switch form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input
                                                  className="form-check-input w-30px h-20px"
                                                  type="checkbox"
                                                  defaultValue={1}
                                                  defaultChecked="checked"
                                                  name="notifications"
                                                />
                                                {/*end::Input*/}
                                                {/*end::Label*/}
                                                <span className="form-check-label text-muted fs-6">
                                                  Recuring
                                                </span>
                                                {/*end::Label*/}
                                              </label>
                                              {/*end::Switch*/}
                                            </div>
                                          </div>
                                          {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu sub*/}
                                      </div>
                                      {/*end::Menu item*/}
                                      {/*begin::Menu item*/}
                                      <div className="menu-item px-3 my-1">
                                        <a href="#" className="menu-link px-3">
                                          Settings
                                        </a>
                                      </div>
                                      {/*end::Menu item*/}
                                    </div>
                                    {/*end::Menu 3*/}
                                  </div>
                                  {/*end::Menu*/}
                                </div>
                                {/*end::Actions*/}
                              </div>
                              {/*end::Title*/}
                              {/*begin::Stats*/}
                              <div className="d-flex flex-wrap flex-stack">
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-column flex-grow-1 pe-8">
                                  {/*begin::Stats*/}
                                  <div className="d-flex flex-wrap">
                                    {/*begin::Stat*/}
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                      {/*begin::Number*/}
                                      <div className="d-flex align-items-center">
                                        <i className="ki-outline ki-arrow-up fs-3 text-success me-2" />
                                        <div
                                          className="fs-2 fw-bold"
                                          data-kt-countup="true"
                                          data-kt-countup-value={4500}
                                          data-kt-countup-prefix="$"
                                        >
                                          0
                                        </div>
                                      </div>
                                      {/*end::Number*/}
                                      {/*begin::Label*/}
                                      <div className="fw-semibold fs-6 text-gray-500">
                                        Earnings
                                      </div>
                                      {/*end::Label*/}
                                    </div>
                                    {/*end::Stat*/}
                                    {/*begin::Stat*/}
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                      {/*begin::Number*/}
                                      <div className="d-flex align-items-center">
                                        <i className="ki-outline ki-arrow-down fs-3 text-danger me-2" />
                                        <div
                                          className="fs-2 fw-bold"
                                          data-kt-countup="true"
                                          data-kt-countup-value={80}
                                        >
                                          0
                                        </div>
                                      </div>
                                      {/*end::Number*/}
                                      {/*begin::Label*/}
                                      <div className="fw-semibold fs-6 text-gray-500">
                                        Projects
                                      </div>
                                      {/*end::Label*/}
                                    </div>
                                    {/*end::Stat*/}
                                    {/*begin::Stat*/}
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                      {/*begin::Number*/}
                                      <div className="d-flex align-items-center">
                                        <i className="ki-outline ki-arrow-up fs-3 text-success me-2" />
                                        <div
                                          className="fs-2 fw-bold"
                                          data-kt-countup="true"
                                          data-kt-countup-value={60}
                                          data-kt-countup-prefix="%"
                                        >
                                          0
                                        </div>
                                      </div>
                                      {/*end::Number*/}
                                      {/*begin::Label*/}
                                      <div className="fw-semibold fs-6 text-gray-500">
                                        Success Rate
                                      </div>
                                      {/*end::Label*/}
                                    </div>
                                    {/*end::Stat*/}
                                  </div>
                                  {/*end::Stats*/}
                                </div>
                                {/*end::Wrapper*/}
                                {/*begin::Progress*/}
                                <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                  <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                    <span className="fw-semibold fs-6 text-gray-500">
                                      Profile Compleation
                                    </span>
                                    <span className="fw-bold fs-6">50%</span>
                                  </div>
                                  <div className="h-5px mx-3 w-100 bg-light mb-3">
                                    <div
                                      className="bg-success rounded h-5px"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                                {/*end::Progress*/}
                              </div>
                              {/*end::Stats*/}
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Details*/}
                        </div>
                      </div>
                      {/*end::Navbar*/}
                      {/*begin::Toolbar*/}
                      <div className="d-flex flex-wrap flex-stack mb-6">
                        {/*begin::Heading*/}
                        <h3 className="fw-bold my-2">
                          My Projects
                          <span className="fs-6 text-gray-500 fw-semibold ms-1">
                            Active
                          </span>
                        </h3>
                        {/*end::Heading*/}
                        {/*begin::Actions*/}
                        <div className="d-flex flex-wrap my-2">
                          <div className="me-4">
                            {/*begin::Select*/}
                            <select
                              name="status"
                              data-control="select2"
                              data-hide-search="true"
                              className="form-select form-select-sm form-select-solid w-125px"
                            >
                              <option value="Active" selected="selected">
                                Active
                              </option>
                              <option value="Approved">In Progress</option>
                              <option value="Declined">To Do</option>
                              <option value="In Progress">Completed</option>
                            </select>
                            {/*end::Select*/}
                          </div>
                          <a
                            href="#"
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_create_project"
                          >
                            New Project
                          </a>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Toolbar*/}
                      {/*begin::Row*/}
                      <div className="row g-6 g-xl-9">
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/plurk.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">
                                  In Progress
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Fitnes App
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Mar 10, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 50% completed"
                              >
                                <div
                                  className="bg-primary rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Emma Smith"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-6.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Rudy Stone"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-1.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Susan Redwood"
                                >
                                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                                    S
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/disqus.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light fw-bold me-auto px-4 py-3">
                                  Pending
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Leaf CRM
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    May 10, 2021
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $36,400.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 30% completed"
                              >
                                <div
                                  className="bg-info rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "30%" }}
                                  aria-valuenow={30}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Alan Warden"
                                >
                                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                    A
                                  </span>
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Brian Cox"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-5.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/figma-1.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-success fw-bold me-auto px-4 py-3">
                                  Completed
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Atica Banking
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Mar 14, 2021
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $605,100.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                              </div>
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 100% completed"
                              >
                                <div
                                  className="bg-success rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "100%" }}
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Mad Macy"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-2.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Cris Willson"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-9.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Mike Garcie"
                                >
                                  <span className="symbol-label bg-info text-inverse-info fw-bold">
                                    M
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/sentry-3.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light fw-bold me-auto px-4 py-3">
                                  Pending
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Finance Dispatch
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Jun 24, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 60% completed"
                              >
                                <div
                                  className="bg-info rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Nich Warden"
                                >
                                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                    N
                                  </span>
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Rob Otto"
                                >
                                  <span className="symbol-label bg-success text-inverse-success fw-bold">
                                    R
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/xing-icon.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">
                                  In Progress
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                9 Degree
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Mar 10, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 40% completed"
                              >
                                <div
                                  className="bg-primary rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "40%" }}
                                  aria-valuenow={40}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Francis Mitcham"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-20.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Michelle Swanston"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-7.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Susan Redwood"
                                >
                                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                                    S
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/tvit.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">
                                  In Progress
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                GoPro App
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Mar 10, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 70% completed"
                              >
                                <div
                                  className="bg-primary rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow={70}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Melody Macy"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-2.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Robin Watterman"
                                >
                                  <span className="symbol-label bg-success text-inverse-success fw-bold">
                                    R
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/aven.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">
                                  In Progress
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Buldozer CRM
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Nov 10, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 70% completed"
                              >
                                <div
                                  className="bg-primary rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow={70}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Melody Macy"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-2.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="John Mixin"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-14.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Emma Smith"
                                >
                                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                                    S
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/treva.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-danger fw-bold me-auto px-4 py-3">
                                  Overdue
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Aviasales App
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Aug 19, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 10% completed"
                              >
                                <div
                                  className="bg-danger rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "10%" }}
                                  aria-valuenow={10}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Alan Warden"
                                >
                                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">
                                    A
                                  </span>
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Brian Cox"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-5.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="col-md-6 col-xl-4">
                          {/*begin::Card*/}
                          <a
                            href="apps/projects/project.html"
                            className="card border-hover-primary"
                          >
                            {/*begin::Card header*/}
                            <div className="card-header border-0 pt-9">
                              {/*begin::Card Title*/}
                              <div className="card-title m-0">
                                {/*begin::Avatar*/}
                                <div className="symbol symbol-50px w-50px bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/kanba.svg"
                                    alt="image"
                                    className="p-3"
                                  />
                                </div>
                                {/*end::Avatar*/}
                              </div>
                              {/*end::Car Title*/}
                              {/*begin::Card toolbar*/}
                              <div className="card-toolbar">
                                <span className="badge badge-light-success fw-bold me-auto px-4 py-3">
                                  Completed
                                </span>
                              </div>
                              {/*end::Card toolbar*/}
                            </div>
                            {/*end:: Card header*/}
                            {/*begin:: Card body*/}
                            <div className="card-body p-9">
                              {/*begin::Name*/}
                              <div className="fs-3 fw-bold text-gray-900">
                                Oppo CRM
                              </div>
                              {/*end::Name*/}
                              {/*begin::Description*/}
                              <p className="text-gray-500 fw-semibold fs-5 mt-1 mb-7">
                                CRM App application to HR efficiency
                              </p>
                              {/*end::Description*/}
                              {/*begin::Info*/}
                              <div className="d-flex flex-wrap mb-5">
                                {/*begin::Due*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    Mar 10, 2024
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Due Date
                                  </div>
                                </div>
                                {/*end::Due*/}
                                {/*begin::Budget*/}
                                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                  <div className="fs-6 text-gray-800 fw-bold">
                                    $284,900.00
                                  </div>
                                  <div className="fw-semibold text-gray-500">
                                    Budget
                                  </div>
                                </div>
                                {/*end::Budget*/}
                              </div>
                              {/*end::Info*/}
                              {/*begin::Progress*/}
                              <div
                                className="h-4px w-100 bg-light mb-5"
                                data-bs-toggle="tooltip"
                                title="This project 100% completed"
                              >
                                <div
                                  className="bg-success rounded h-4px"
                                  role="progressbar"
                                  style={{ width: "100%" }}
                                  aria-valuenow={100}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Users*/}
                              <div className="symbol-group symbol-hover">
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Nick Macy"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-2.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Sean Paul"
                                >
                                  <img
                                    alt="Pic"
                                    src="assets/media/avatars/300-9.jpg"
                                  />
                                </div>
                                {/*begin::User*/}
                                {/*begin::User*/}
                                <div
                                  className="symbol symbol-35px symbol-circle"
                                  data-bs-toggle="tooltip"
                                  title="Mike Collin"
                                >
                                  <span className="symbol-label bg-info text-inverse-info fw-bold">
                                    M
                                  </span>
                                </div>
                                {/*begin::User*/}
                              </div>
                              {/*end::Users*/}
                            </div>
                            {/*end:: Card body*/}
                          </a>
                          {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Row*/}
                      {/*begin::Pagination*/}
                      <div className="d-flex flex-stack flex-wrap pt-10">
                        <div className="fs-6 fw-semibold text-gray-700">
                          Showing 1 to 10 of 50 entries
                        </div>
                        {/*begin::Pages*/}
                        <ul className="pagination">
                          <li className="page-item previous">
                            <a href="#" className="page-link">
                              <i className="previous" />
                            </a>
                          </li>
                          <li className="page-item active">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              6
                            </a>
                          </li>
                          <li className="page-item next">
                            <a href="#" className="page-link">
                              <i className="next" />
                            </a>
                          </li>
                        </ul>
                        {/*end::Pages*/}
                      </div>
                      {/*end::Pagination*/}
                      {/*begin::Modals*/}
                      {/*begin::Modal - Create Project*/}
                      <div
                        className="modal fade"
                        id="kt_modal_create_project"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-fullscreen p-9">
                          {/*begin::Modal content*/}
                          <div className="modal-content modal-rounded">
                            {/*begin::Modal header*/}
                            <div className="modal-header">
                              {/*begin::Modal title*/}
                              <h2>Create Project</h2>
                              {/*end::Modal title*/}
                              {/*begin::Close*/}
                              <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                              >
                                <i className="ki-outline ki-cross fs-1" />
                              </div>
                              {/*end::Close*/}
                            </div>
                            {/*end::Modal header*/}
                            {/*begin::Modal body*/}
                            <div className="modal-body scroll-y m-5">
                              {/*begin::Stepper*/}
                              <div
                                className="stepper stepper-links d-flex flex-column"
                                id="kt_modal_create_project_stepper"
                              >
                                {/*begin::Container*/}
                                <div className="container">
                                  {/*begin::Nav*/}
                                  <div className="stepper-nav justify-content-center py-2">
                                    {/*begin::Step 1*/}
                                    <div
                                      className="stepper-item me-5 me-md-15 current"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">
                                        Project Type
                                      </h3>
                                    </div>
                                    {/*end::Step 1*/}
                                    {/*begin::Step 2*/}
                                    <div
                                      className="stepper-item me-5 me-md-15"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">
                                        Project Settings
                                      </h3>
                                    </div>
                                    {/*end::Step 2*/}
                                    {/*begin::Step 3*/}
                                    <div
                                      className="stepper-item me-5 me-md-15"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">Budget</h3>
                                    </div>
                                    {/*end::Step 3*/}
                                    {/*begin::Step 4*/}
                                    <div
                                      className="stepper-item me-5 me-md-15"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">
                                        Build A Team
                                      </h3>
                                    </div>
                                    {/*end::Step 4*/}
                                    {/*begin::Step 5*/}
                                    <div
                                      className="stepper-item me-5 me-md-15"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">
                                        Set First Target
                                      </h3>
                                    </div>
                                    {/*end::Step 5*/}
                                    {/*begin::Step 6*/}
                                    <div
                                      className="stepper-item me-5 me-md-15"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">
                                        Upload Files
                                      </h3>
                                    </div>
                                    {/*end::Step 6*/}
                                    {/*begin::Step 7*/}
                                    <div
                                      className="stepper-item"
                                      data-kt-stepper-element="nav"
                                    >
                                      <h3 className="stepper-title">Completed</h3>
                                    </div>
                                    {/*end::Step 7*/}
                                  </div>
                                  {/*end::Nav*/}
                                  {/*begin::Form*/}
                                  <form
                                    className="mx-auto w-100 mw-600px pt-15 pb-10"
                                    noValidate="novalidate"
                                    id="kt_modal_create_project_form"
                                    method="post"
                                  >
                                    {/*begin::Type*/}
                                    <div
                                      className="current"
                                      data-kt-stepper-element="content"
                                    >
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-7 pb-lg-12">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Project Type
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Description*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check out
                                            <a
                                              href="#"
                                              className="link-primary fw-bold"
                                            >
                                              FAQ Page
                                            </a>
                                          </div>
                                          {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div
                                          className="fv-row mb-15"
                                          data-kt-buttons="true"
                                        >
                                          {/*begin::Option*/}
                                          <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                            {/*begin::Input*/}
                                            <input
                                              className="btn-check"
                                              type="radio"
                                              defaultChecked="checked"
                                              name="project_type"
                                              defaultValue={1}
                                            />
                                            {/*end::Input*/}
                                            {/*begin::Label*/}
                                            <span className="d-flex">
                                              {/*begin::Icon*/}
                                              <i className="ki-outline ki-profile-circle fs-3hx" />
                                              {/*end::Icon*/}
                                              {/*begin::Info*/}
                                              <span className="ms-4">
                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                                  Personal Project
                                                </span>
                                                <span className="fw-semibold fs-4 text-muted">
                                                  If you need more info, please
                                                  check it out
                                                </span>
                                              </span>
                                              {/*end::Info*/}
                                            </span>
                                            {/*end::Label*/}
                                          </label>
                                          {/*end::Option*/}
                                          {/*begin::Option*/}
                                          <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                            {/*begin::Input*/}
                                            <input
                                              className="btn-check"
                                              type="radio"
                                              name="project_type"
                                              defaultValue={2}
                                            />
                                            {/*end::Input*/}
                                            {/*begin::Label*/}
                                            <span className="d-flex">
                                              {/*begin::Icon*/}
                                              <i className="ki-outline ki-rocket fs-3hx" />
                                              {/*end::Icon*/}
                                              {/*begin::Info*/}
                                              <span className="ms-4">
                                                <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                                  Team Project
                                                </span>
                                                <span className="fw-semibold fs-4 text-muted">
                                                  Create corporate account to manage
                                                  users
                                                </span>
                                              </span>
                                              {/*end::Info*/}
                                            </span>
                                            {/*end::Label*/}
                                          </label>
                                          {/*end::Option*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex justify-content-end">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            data-kt-element="type-next"
                                          >
                                            <span className="indicator-label">
                                              Project Settings
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                        {/*end::Actions*/}
                                      </div>
                                      {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Type*/}
                                    {/*begin::Settings*/}
                                    <div data-kt-stepper-element="content">
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-12">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Project Settings
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Description*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check
                                            <a href="#" className="link-primary">
                                              Project Guidelines
                                            </a>
                                          </div>
                                          {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Dropzone*/}
                                          <div
                                            className="dropzone"
                                            id="kt_modal_create_project_settings_logo"
                                          >
                                            {/*begin::Message*/}
                                            <div className="dz-message needsclick">
                                              {/*begin::Icon*/}
                                              <i className="ki-outline ki-file-up fs-3hx text-primary" />
                                              {/*end::Icon*/}
                                              {/*begin::Info*/}
                                              <div className="ms-4">
                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                                  Drop files here or click to
                                                  upload.
                                                </h3>
                                                <span className="fw-semibold fs-4 text-muted">
                                                  Upload up to 10 files
                                                </span>
                                              </div>
                                              {/*end::Info*/}
                                            </div>
                                          </div>
                                          {/*end::Dropzone*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Label*/}
                                          <label className="required fs-6 fw-semibold mb-2">
                                            Customer
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Input*/}
                                          <select
                                            className="form-select form-select-solid"
                                            data-control="select2"
                                            data-hide-search="true"
                                            data-placeholder="Select..."
                                            name="settings_customer"
                                          >
                                            <option />
                                            <option value={1}>Keenthemes</option>
                                            <option value={2}>CRM App</option>
                                          </select>
                                          {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Label*/}
                                          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                            <span className="required">
                                              Project Name
                                            </span>
                                            <span
                                              className="ms-1"
                                              data-bs-toggle="tooltip"
                                              title="Specify project name"
                                            >
                                              <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                                            </span>
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Input*/}
                                          <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Enter Project Name"
                                            defaultValue="StockPro Mobile App"
                                            name="settings_name"
                                          />
                                          {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Label*/}
                                          <label className="required fs-6 fw-semibold mb-2">
                                            Project Description
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Input*/}
                                          <textarea
                                            className="form-control form-control-solid"
                                            rows={3}
                                            placeholder="Enter Project Description"
                                            name="settings_description"
                                            defaultValue={
                                              "Experience share market at your fingertips with TICK PRO stock investment mobile trading app"
                                            }
                                          />
                                          {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Label*/}
                                          <label className="required fs-6 fw-semibold mb-2">
                                            Release Date
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Wrapper*/}
                                          <div className="position-relative d-flex align-items-center">
                                            {/*begin::Icon*/}
                                            <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4" />
                                            {/*end::Icon*/}
                                            {/*begin::Input*/}
                                            <input
                                              className="form-control form-control-solid ps-12"
                                              placeholder="Pick date range"
                                              name="settings_release_date"
                                            />
                                            {/*end::Input*/}
                                          </div>
                                          {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-15">
                                          {/*begin::Wrapper*/}
                                          <div className="d-flex flex-stack">
                                            {/*begin::Label*/}
                                            <div className="me-5">
                                              <label className="required fs-6 fw-semibold">
                                                Notifications
                                              </label>
                                              <div className="fs-7 fw-semibold text-muted">
                                                Allow Notifications by Phone or
                                                Email
                                              </div>
                                            </div>
                                            {/*end::Label*/}
                                            {/*begin::Checkboxes*/}
                                            <div className="d-flex">
                                              {/*begin::Checkbox*/}
                                              <label className="form-check form-check-custom form-check-solid me-10">
                                                {/*begin::Input*/}
                                                <input
                                                  className="form-check-input h-20px w-20px"
                                                  type="checkbox"
                                                  defaultValue="email"
                                                  name="settings_notifications[]"
                                                />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <span className="form-check-label fw-semibold">
                                                  Email
                                                </span>
                                                {/*end::Label*/}
                                              </label>
                                              {/*end::Checkbox*/}
                                              {/*begin::Checkbox*/}
                                              <label className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input
                                                  className="form-check-input h-20px w-20px"
                                                  type="checkbox"
                                                  defaultValue="phone"
                                                  defaultChecked="checked"
                                                  name="settings_notifications[]"
                                                />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <span className="form-check-label fw-semibold">
                                                  Phone
                                                </span>
                                                {/*end::Label*/}
                                              </label>
                                              {/*end::Checkbox*/}
                                            </div>
                                            {/*end::Checkboxes*/}
                                          </div>
                                          {/*begin::Wrapper*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-stack">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-light me-3"
                                            data-kt-element="settings-previous"
                                          >
                                            Project Type
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            data-kt-element="settings-next"
                                          >
                                            <span className="indicator-label">
                                              Budget
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                        {/*end::Actions*/}
                                      </div>
                                      {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Settings*/}
                                    {/*begin::Budget*/}
                                    <div data-kt-stepper-element="content">
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-10 pb-lg-12">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Budget
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Description*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check
                                            <a href="#" className="link-primary">
                                              Project Guidelines
                                            </a>
                                          </div>
                                          {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Label*/}
                                          <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                            <span className="required">
                                              Setup Budget
                                            </span>
                                            <span
                                              className="lh-1 ms-1"
                                              data-bs-toggle="popover"
                                              data-bs-trigger="hover"
                                              data-bs-html="true"
                                              data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class=&quot;ki-outline ki-bank fs-3 me-3&quot;></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-semibold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-gray-900 fw-bold mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>"
                                            >
                                              <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                                            </span>
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Dialer*/}
                                          <div
                                            className="position-relative w-lg-250px"
                                            id="kt_modal_create_project_budget_setup"
                                            data-kt-dialer="true"
                                            data-kt-dialer-min={50}
                                            data-kt-dialer-max={50000}
                                            data-kt-dialer-step={100}
                                            data-kt-dialer-prefix="$"
                                            data-kt-dialer-decimals={2}
                                          >
                                            {/*begin::Decrease control*/}
                                            <button
                                              type="button"
                                              className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                              data-kt-dialer-control="decrease"
                                            >
                                              <i className="ki-outline ki-minus-circle fs-1" />
                                            </button>
                                            {/*end::Decrease control*/}
                                            {/*begin::Input control*/}
                                            <input
                                              type="text"
                                              className="form-control form-control-solid border-0 ps-12"
                                              data-kt-dialer-control="input"
                                              placeholder="Amount"
                                              name="budget_setup"
                                              readOnly="readonly"
                                              defaultValue="$50"
                                            />
                                            {/*end::Input control*/}
                                            {/*begin::Increase control*/}
                                            <button
                                              type="button"
                                              className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                              data-kt-dialer-control="increase"
                                            >
                                              <i className="ki-outline ki-plus-circle fs-1" />
                                            </button>
                                            {/*end::Increase control*/}
                                          </div>
                                          {/*end::Dialer*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Label*/}
                                          <label className="fs-6 fw-semibold mb-2">
                                            Budget Usage
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Row*/}
                                          <div
                                            className="row g-9"
                                            data-kt-buttons="true"
                                            data-kt-buttons-target="[data-kt-button='true']"
                                          >
                                            {/*begin::Col*/}
                                            <div className="col-md-6 col-lg-12 col-xxl-6">
                                              {/*begin::Option*/}
                                              <label
                                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                                data-kt-button="true"
                                              >
                                                {/*begin::Radio*/}
                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="budget_usage"
                                                    defaultValue={1}
                                                    defaultChecked="checked"
                                                  />
                                                </span>
                                                {/*end::Radio*/}
                                                {/*begin::Info*/}
                                                <span className="ms-5">
                                                  <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                                    Precise Usage
                                                  </span>
                                                  <span className="fw-semibold fs-7 text-gray-600">
                                                    Withdraw money to your bank
                                                    account per transaction under
                                                    $50,000 budget
                                                  </span>
                                                </span>
                                                {/*end::Info*/}
                                              </label>
                                              {/*end::Option*/}
                                            </div>
                                            {/*end::Col*/}
                                            {/*begin::Col*/}
                                            <div className="col-md-6 col-lg-12 col-xxl-6">
                                              {/*begin::Option*/}
                                              <label
                                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                                data-kt-button="true"
                                              >
                                                {/*begin::Radio*/}
                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                  <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="budget_usage"
                                                    defaultValue={2}
                                                  />
                                                </span>
                                                {/*end::Radio*/}
                                                {/*begin::Info*/}
                                                <span className="ms-5">
                                                  <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                                    Extreme Usage
                                                  </span>
                                                  <span className="fw-semibold fs-7 text-gray-600">
                                                    Withdraw money to your bank
                                                    account per transaction under
                                                    $50,000 budget
                                                  </span>
                                                </span>
                                                {/*end::Info*/}
                                              </label>
                                              {/*end::Option*/}
                                            </div>
                                            {/*end::Col*/}
                                          </div>
                                          {/*end::Row*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-15">
                                          {/*begin::Wrapper*/}
                                          <div className="d-flex flex-stack">
                                            {/*begin::Label*/}
                                            <div className="me-5">
                                              <label className="fs-6 fw-semibold">
                                                Allow Changes in Budget
                                              </label>
                                              <div className="fs-7 fw-semibold text-muted">
                                                If you need more info, please check
                                                budget planning
                                              </div>
                                            </div>
                                            {/*end::Label*/}
                                            {/*begin::Switch*/}
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue={1}
                                                name="budget_allow"
                                                defaultChecked="checked"
                                              />
                                              <span className="form-check-label fw-semibold text-muted">
                                                Allowed
                                              </span>
                                            </label>
                                            {/*end::Switch*/}
                                          </div>
                                          {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-stack">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-light me-3"
                                            data-kt-element="budget-previous"
                                          >
                                            Project Settings
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            data-kt-element="budget-next"
                                          >
                                            <span className="indicator-label">
                                              Build Team
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                        {/*end::Actions*/}
                                      </div>
                                      {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Budget*/}
                                    {/*begin::Team*/}
                                    <div data-kt-stepper-element="content">
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-12">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Build a Team
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Description*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check
                                            <a href="#" className="link-primary">
                                              Project Guidelines
                                            </a>
                                          </div>
                                          {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-8">
                                          {/*begin::Label*/}
                                          <label className="fs-6 fw-semibold mb-2">
                                            Invite Teammates
                                          </label>
                                          {/*end::Label*/}
                                          {/*begin::Input*/}
                                          <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Add project memnbers by name or email.."
                                            name="invite_teammates"
                                          />
                                          {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-8">
                                          {/*begin::Label*/}
                                          <div className="fs-6 fw-semibold mb-2">
                                            Team Members
                                          </div>
                                          {/*end::Label*/}
                                          {/*begin::Users*/}
                                          <div className="mh-300px scroll-y me-n7 pe-7">
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-6.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Emma Smith
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    smith@kpmg.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option
                                                    value={2}
                                                    selected="selected"
                                                  >
                                                    Owner
                                                  </option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                    M
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Melody Macy
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    melody@altbox.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option
                                                    value={1}
                                                    selected="selected"
                                                  >
                                                    Guest
                                                  </option>
                                                  <option value={2}>Owner</option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-1.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Max Smith
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    max@kt.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-5.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Sean Bean
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    sean@dellito.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option
                                                    value={2}
                                                    selected="selected"
                                                  >
                                                    Owner
                                                  </option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-25.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Brian Cox
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    brian@exchange.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                                    C
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Mikaela Collins
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    mik@pex.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option
                                                    value={2}
                                                    selected="selected"
                                                  >
                                                    Owner
                                                  </option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-9.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Francis Mitcham
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    f.mit@kpmg.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                    O
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Olivia Wild
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    olivia@corpmail.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option
                                                    value={2}
                                                    selected="selected"
                                                  >
                                                    Owner
                                                  </option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                                    N
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Neil Owen
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    owen.neil@gmail.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option
                                                    value={1}
                                                    selected="selected"
                                                  >
                                                    Guest
                                                  </option>
                                                  <option value={2}>Owner</option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-23.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Dan Wilson
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    dam@consilting.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                                    E
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Emma Bold
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    emma@intenso.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option
                                                    value={2}
                                                    selected="selected"
                                                  >
                                                    Owner
                                                  </option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-12.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Ana Crown
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    ana.cf@limtel.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option
                                                    value={1}
                                                    selected="selected"
                                                  >
                                                    Guest
                                                  </option>
                                                  <option value={2}>Owner</option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-info text-info fw-semibold">
                                                    A
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Robert Doe
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    robert@benko.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-13.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    John Miller
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    miller@mapple.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-success text-success fw-semibold">
                                                    L
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Lucy Kunic
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    lucy.m@fentech.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option
                                                    value={2}
                                                    selected="selected"
                                                  >
                                                    Owner
                                                  </option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <img
                                                    alt="Pic"
                                                    src="assets/media/avatars/300-21.jpg"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Ethan Wilder
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    ethan@loop.com.au
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option
                                                    value={1}
                                                    selected="selected"
                                                  >
                                                    Guest
                                                  </option>
                                                  <option value={2}>Owner</option>
                                                  <option value={3}>
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                            {/*begin::User*/}
                                            <div className="d-flex flex-stack py-4">
                                              {/*begin::Details*/}
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle">
                                                  <span className="symbol-label bg-light-success text-success fw-semibold">
                                                    L
                                                  </span>
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-5">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Lucy Kunic
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    lucy.m@fentech.com
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*end::Details*/}
                                              {/*begin::Access menu*/}
                                              <div className="ms-2 w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                >
                                                  <option value={1}>Guest</option>
                                                  <option value={2}>Owner</option>
                                                  <option
                                                    value={3}
                                                    selected="selected"
                                                  >
                                                    Can Edit
                                                  </option>
                                                </select>
                                              </div>
                                              {/*end::Access menu*/}
                                            </div>
                                            {/*end::User*/}
                                          </div>
                                          {/*end::Users*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Notice*/}
                                        <div className="d-flex flex-stack mb-15">
                                          {/*begin::Label*/}
                                          <div className="me-5 fw-semibold">
                                            <label className="fs-6">
                                              Adding Users by Team Members
                                            </label>
                                            <div className="fs-7 text-muted">
                                              If you need more info, please check
                                              budget planning
                                            </div>
                                          </div>
                                          {/*end::Label*/}
                                          {/*begin::Switch*/}
                                          <label className="form-check form-switch form-check-custom form-check-solid">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              defaultValue=""
                                              defaultChecked="checked"
                                            />
                                          </label>
                                          {/*end::Switch*/}
                                        </div>
                                        {/*end::Notice*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-stack">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-light me-3"
                                            data-kt-element="team-previous"
                                          >
                                            Budget
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            data-kt-element="team-next"
                                          >
                                            <span className="indicator-label">
                                              Set Target
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                        {/*end::Actions*/}
                                      </div>
                                      {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Team*/}
                                    {/*begin::Targets*/}
                                    <div data-kt-stepper-element="content">
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-12">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Set First Target
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Title*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check
                                            <a href="#" className="link-primary">
                                              Project Guidelines
                                            </a>
                                          </div>
                                          {/*end::Title*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          <label className="fs-6 fw-semibold mb-2">
                                            Target Title
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control form-control-solid"
                                            placeholder="Enter Target Title"
                                            name="Project Launch"
                                          />
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="row g-9 mb-8">
                                          {/*begin::Col*/}
                                          <div className="col-md-6 fv-row">
                                            <label className="required fs-6 fw-semibold mb-2">
                                              Assign
                                            </label>
                                            <select
                                              className="form-select form-select-solid"
                                              data-control="select2"
                                              data-hide-search="true"
                                              data-placeholder="Select a Team Member"
                                              name="target_assign"
                                            >
                                              <option />
                                              <option value={1}>
                                                Karina Clark
                                              </option>
                                              <option value={2} selected="selected">
                                                Robert Doe
                                              </option>
                                              <option value={3}>Niel Owen</option>
                                              <option value={4}>Olivia Wild</option>
                                              <option value={5}>Sean Bean</option>
                                            </select>
                                          </div>
                                          {/*end::Col*/}
                                          {/*begin::Col*/}
                                          <div className="col-md-6 fv-row">
                                            <label className="required fs-6 fw-semibold mb-2">
                                              Due Date
                                            </label>
                                            <div className="position-relative d-flex align-items-center">
                                              {/*begin::Icon*/}
                                              <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4" />
                                              {/*end::Icon*/}
                                              {/*begin::Datepicker*/}
                                              <input
                                                className="form-control form-control-solid ps-12"
                                                placeholder="Pick date range"
                                                name="target_due_date"
                                              />
                                              {/*end::Datepicker*/}
                                            </div>
                                          </div>
                                          {/*end::Col*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          <label className="fs-6 fw-semibold mb-2">
                                            Target Details
                                          </label>
                                          <textarea
                                            className="form-control form-control-solid"
                                            rows={2}
                                            name="target_details"
                                            placeholder="Type Target Details"
                                            defaultValue={
                                              "Experience share market at your fingertips with TICK PRO stock investment mobile trading app"
                                            }
                                          />
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          <label className="required fs-6 fw-semibold mb-2">
                                            Tags
                                          </label>
                                          <input
                                            className="form-control form-control-solid"
                                            defaultValue="Important, Urgent"
                                            name="target_tags"
                                          />
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Wrapper*/}
                                          <div className="d-flex flex-stack">
                                            {/*begin::Label*/}
                                            <div className="me-5">
                                              <label className="fs-6 fw-semibold">
                                                Allow Changes in Budget
                                              </label>
                                              <div className="fs-7 fw-semibold text-muted">
                                                If you need more info, please check
                                                budget planning
                                              </div>
                                            </div>
                                            {/*end::Label*/}
                                            {/*begin::Switch*/}
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue={1}
                                                name="target_allow"
                                                defaultChecked="checked"
                                              />
                                              <span className="form-check-label fw-semibold text-muted">
                                                Allowed
                                              </span>
                                            </label>
                                            {/*end::Switch*/}
                                          </div>
                                          {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-15">
                                          {/*begin::Wrapper*/}
                                          <div className="d-flex flex-stack">
                                            {/*begin::Label*/}
                                            <div className="me-5">
                                              <label className="fs-6 fw-semibold">
                                                Notifications
                                              </label>
                                              <div className="fs-7 fw-semibold text-muted">
                                                Allow Notifications by Phone or
                                                Email
                                              </div>
                                            </div>
                                            {/*end::Label*/}
                                            {/*begin::Checkboxes*/}
                                            <div className="d-flex">
                                              {/*begin::Checkbox*/}
                                              <label className="form-check form-check-custom form-check-solid me-10">
                                                {/*begin::Input*/}
                                                <input
                                                  className="form-check-input h-20px w-20px"
                                                  type="checkbox"
                                                  defaultValue="email"
                                                  name="target_notifications[]"
                                                />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <span className="form-check-label fw-semibold">
                                                  Email
                                                </span>
                                                {/*end::Label*/}
                                              </label>
                                              {/*end::Checkbox*/}
                                              {/*begin::Checkbox*/}
                                              <label className="form-check form-check-custom form-check-solid">
                                                {/*begin::Input*/}
                                                <input
                                                  className="form-check-input h-20px w-20px"
                                                  type="checkbox"
                                                  defaultValue="phone"
                                                  defaultChecked="checked"
                                                  name="target_notifications[]"
                                                />
                                                {/*end::Input*/}
                                                {/*begin::Label*/}
                                                <span className="form-check-label fw-semibold">
                                                  Phone
                                                </span>
                                                {/*end::Label*/}
                                              </label>
                                              {/*end::Checkbox*/}
                                            </div>
                                            {/*end::Checkboxes*/}
                                          </div>
                                          {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-stack">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-light me-3"
                                            data-kt-element="targets-previous"
                                          >
                                            Build a Team
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            data-kt-element="targets-next"
                                          >
                                            <span className="indicator-label">
                                              Upload Files
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                        {/*end::Actions*/}
                                      </div>
                                      {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Targets*/}
                                    {/*begin::Files*/}
                                    <div data-kt-stepper-element="content">
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-10 pb-lg-12">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Upload Files
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Description*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check
                                            <a href="#" className="link-primary">
                                              Project Guidelines
                                            </a>
                                          </div>
                                          {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Dropzone*/}
                                          <div
                                            className="dropzone"
                                            id="kt_modal_create_project_files_upload"
                                          >
                                            {/*begin::Message*/}
                                            <div className="dz-message needsclick">
                                              {/*begin::Icon*/}
                                              <i className="ki-outline ki-file-up fs-3hx text-primary" />
                                              {/*end::Icon*/}
                                              {/*begin::Info*/}
                                              <div className="ms-4">
                                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                                  Drop files here or click to
                                                  upload.
                                                </h3>
                                                <span className="fw-semibold fs-4 text-muted">
                                                  Upload up to 10 files
                                                </span>
                                              </div>
                                              {/*end::Info*/}
                                            </div>
                                          </div>
                                          {/*end::Dropzone*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-8">
                                          {/*begin::Label*/}
                                          <label className="fs-6 fw-semibold mb-2">
                                            Uploaded File
                                          </label>
                                          {/*End::Label*/}
                                          {/*begin::Files*/}
                                          <div className="mh-300px scroll-y me-n7 pe-7">
                                            {/*begin::File*/}
                                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px">
                                                  <img
                                                    src="assets/media/svg/files/pdf.svg"
                                                    alt="icon"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-6">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Avionica Technical Requirements
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    230kb
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*begin::Menu*/}
                                              <div className="min-w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                  data-placeholder="Edit"
                                                >
                                                  <option />
                                                  <option value={1}>Remove</option>
                                                  <option value={2}>Modify</option>
                                                  <option value={3}>Select</option>
                                                </select>
                                              </div>
                                              {/*end::Menu*/}
                                            </div>
                                            {/*end::File*/}
                                            {/*begin::File*/}
                                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px">
                                                  <img
                                                    src="assets/media/svg/files/doc.svg"
                                                    alt="icon"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-6">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    9 Degree CURD draftplan
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    3.6mb
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*begin::Menu*/}
                                              <div className="min-w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                  data-placeholder="Edit"
                                                >
                                                  <option />
                                                  <option value={1}>Remove</option>
                                                  <option value={2}>Modify</option>
                                                  <option value={3}>Select</option>
                                                </select>
                                              </div>
                                              {/*end::Menu*/}
                                            </div>
                                            {/*end::File*/}
                                            {/*begin::File*/}
                                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px">
                                                  <img
                                                    src="assets/media/svg/files/css.svg"
                                                    alt="icon"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-6">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    User CRUD Styles
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    85kb
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*begin::Menu*/}
                                              <div className="min-w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                  data-placeholder="Edit"
                                                >
                                                  <option />
                                                  <option value={1}>Remove</option>
                                                  <option value={2}>Modify</option>
                                                  <option value={3}>Select</option>
                                                </select>
                                              </div>
                                              {/*end::Menu*/}
                                            </div>
                                            {/*end::File*/}
                                            {/*begin::File*/}
                                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px">
                                                  <img
                                                    src="assets/media/svg/files/ai.svg"
                                                    alt="icon"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-6">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Design Initial Logo
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    40kb
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*begin::Menu*/}
                                              <div className="min-w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                  data-placeholder="Edit"
                                                >
                                                  <option />
                                                  <option value={1}>Remove</option>
                                                  <option value={2}>Modify</option>
                                                  <option value={3}>Select</option>
                                                </select>
                                              </div>
                                              {/*end::Menu*/}
                                            </div>
                                            {/*end::File*/}
                                            {/*begin::File*/}
                                            <div className="d-flex flex-stack py-4">
                                              <div className="d-flex align-items-center">
                                                {/*begin::Avatar*/}
                                                <div className="symbol symbol-35px">
                                                  <img
                                                    src="assets/media/svg/files/tif.svg"
                                                    alt="icon"
                                                  />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Details*/}
                                                <div className="ms-6">
                                                  <a
                                                    href="#"
                                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                                  >
                                                    Tower Hill Bilboard
                                                  </a>
                                                  <div className="fw-semibold text-muted">
                                                    27mb
                                                  </div>
                                                </div>
                                                {/*end::Details*/}
                                              </div>
                                              {/*begin::Menu*/}
                                              <div className="min-w-100px">
                                                <select
                                                  className="form-select form-select-solid form-select-sm"
                                                  data-control="select2"
                                                  data-hide-search="true"
                                                  data-placeholder="Edit"
                                                >
                                                  <option />
                                                  <option value={1}>Remove</option>
                                                  <option value={2}>Modify</option>
                                                  <option value={3}>Select</option>
                                                </select>
                                              </div>
                                              {/*end::Menu*/}
                                            </div>
                                            {/*end::File*/}
                                          </div>
                                          {/*end::Files*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8">
                                          {/*begin::Wrapper*/}
                                          <div className="d-flex flex-stack">
                                            {/*begin::Label*/}
                                            <div className="me-5">
                                              <label className="fs-6 fw-semibold">
                                                Allow Changes in Budget
                                              </label>
                                              <div className="fs-7 fw-semibold text-muted">
                                                If you need more info, please check
                                                budget planning
                                              </div>
                                            </div>
                                            {/*end::Label*/}
                                            {/*begin::Switch*/}
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue={1}
                                                name="target_allow"
                                                defaultChecked="checked"
                                              />
                                              <span className="form-check-label fw-semibold text-muted">
                                                Allowed
                                              </span>
                                            </label>
                                            {/*end::Switch*/}
                                          </div>
                                          {/*end::Wrapper*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-stack">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-light me-3"
                                            data-kt-element="files-previous"
                                          >
                                            Set First Target
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            data-kt-element="files-next"
                                          >
                                            <span className="indicator-label">
                                              Complete
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                        {/*end::Actions*/}
                                      </div>
                                      {/*end::Wrapper*/}
                                    </div>
                                    {/*end::Files*/}
                                    {/*begin::Complete*/}
                                    <div data-kt-stepper-element="content">
                                      {/*begin::Wrapper*/}
                                      <div className="w-100">
                                        {/*begin::Heading*/}
                                        <div className="pb-12 text-center">
                                          {/*begin::Title*/}
                                          <h1 className="fw-bold text-gray-900">
                                            Project Created!
                                          </h1>
                                          {/*end::Title*/}
                                          {/*begin::Description*/}
                                          <div className="text-muted fw-semibold fs-4">
                                            If you need more info, please check how
                                            to create project
                                          </div>
                                          {/*end::Description*/}
                                        </div>
                                        {/*end::Heading*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex flex-center pb-20">
                                          <button
                                            type="button"
                                            className="btn btn-lg btn-light me-3"
                                            data-kt-element="complete-start"
                                          >
                                            Create New Project
                                          </button>
                                          <a
                                            href=""
                                            className="btn btn-lg btn-primary"
                                            data-bs-toggle="tooltip"
                                            title="Coming Soon"
                                          >
                                            View Project
                                          </a>
                                        </div>
                                        {/*end::Actions*/}
                                        {/*begin::Illustration*/}
                                        <div className="text-center px-4">
                                          <img
                                            src="assets/media/illustrations/sketchy-1/9.png"
                                            alt=""
                                            className="mww-100 mh-350px"
                                          />
                                        </div>
                                        {/*end::Illustration*/}
                                      </div>
                                    </div>
                                    {/*end::Complete*/}
                                  </form>
                                  {/*end::Form*/}
                                </div>
                                {/*begin::Container*/}
                              </div>
                              {/*end::Stepper*/}
                            </div>
                            {/*end::Modal body*/}
                          </div>
                          {/*end::Modal content*/}
                        </div>
                        {/*end::Modal dialog*/}
                      </div>
                      {/*end::Modal - Create Project*/}
                      {/*begin::Modal - Offer A Deal*/}
                      <div
                        className="modal fade"
                        id="kt_modal_offer_a_deal"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-1000px">
                          {/*begin::Modal content*/}
                          <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header py-7 d-flex justify-content-between">
                              {/*begin::Modal title*/}
                              <h2>Offer a Deal</h2>
                              {/*end::Modal title*/}
                              {/*begin::Close*/}
                              <div
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-bs-dismiss="modal"
                              >
                                <i className="ki-outline ki-cross fs-1" />
                              </div>
                              {/*end::Close*/}
                            </div>
                            {/*begin::Modal header*/}
                            {/*begin::Modal body*/}
                            <div className="modal-body scroll-y m-5">
                              {/*begin::Stepper*/}
                              <div
                                className="stepper stepper-links d-flex flex-column"
                                id="kt_modal_offer_a_deal_stepper"
                              >
                                {/*begin::Nav*/}
                                <div className="stepper-nav justify-content-center py-2">
                                  {/*begin::Step 1*/}
                                  <div
                                    className="stepper-item me-5 me-md-15 current"
                                    data-kt-stepper-element="nav"
                                  >
                                    <h3 className="stepper-title">Deal Type</h3>
                                  </div>
                                  {/*end::Step 1*/}
                                  {/*begin::Step 2*/}
                                  <div
                                    className="stepper-item me-5 me-md-15"
                                    data-kt-stepper-element="nav"
                                  >
                                    <h3 className="stepper-title">Deal Details</h3>
                                  </div>
                                  {/*end::Step 2*/}
                                  {/*begin::Step 3*/}
                                  <div
                                    className="stepper-item me-5 me-md-15"
                                    data-kt-stepper-element="nav"
                                  >
                                    <h3 className="stepper-title">
                                      Finance Settings
                                    </h3>
                                  </div>
                                  {/*end::Step 3*/}
                                  {/*begin::Step 4*/}
                                  <div
                                    className="stepper-item"
                                    data-kt-stepper-element="nav"
                                  >
                                    <h3 className="stepper-title">Completed</h3>
                                  </div>
                                  {/*end::Step 4*/}
                                </div>
                                {/*end::Nav*/}
                                {/*begin::Form*/}
                                <form
                                  className="mx-auto mw-500px w-100 pt-15 pb-10"
                                  noValidate="novalidate"
                                  id="kt_modal_offer_a_deal_form"
                                >
                                  {/*begin::Type*/}
                                  <div
                                    className="current"
                                    data-kt-stepper-element="content"
                                  >
                                    {/*begin::Wrapper*/}
                                    <div className="w-100">
                                      {/*begin::Heading*/}
                                      <div className="mb-13">
                                        {/*begin::Title*/}
                                        <h2 className="mb-3">Deal Type</h2>
                                        {/*end::Title*/}
                                        {/*begin::Description*/}
                                        <div className="text-muted fw-semibold fs-5">
                                          If you need more info, please check out
                                          <a
                                            href="#"
                                            className="link-primary fw-bold"
                                          >
                                            FAQ Page
                                          </a>
                                          .
                                        </div>
                                        {/*end::Description*/}
                                      </div>
                                      {/*end::Heading*/}
                                      {/*begin::Input group*/}
                                      <div
                                        className="fv-row mb-15"
                                        data-kt-buttons="true"
                                      >
                                        {/*begin::Option*/}
                                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                          {/*begin::Input*/}
                                          <input
                                            className="btn-check"
                                            type="radio"
                                            defaultChecked="checked"
                                            name="offer_type"
                                            defaultValue={1}
                                          />
                                          {/*end::Input*/}
                                          {/*begin::Label*/}
                                          <span className="d-flex">
                                            {/*begin::Icon*/}
                                            <i className="ki-outline ki-profile-circle fs-3hx" />
                                            {/*end::Icon*/}
                                            {/*begin::Info*/}
                                            <span className="ms-4">
                                              <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                                Personal Deal
                                              </span>
                                              <span className="fw-semibold fs-4 text-muted">
                                                If you need more info, please check
                                                it out
                                              </span>
                                            </span>
                                            {/*end::Info*/}
                                          </span>
                                          {/*end::Label*/}
                                        </label>
                                        {/*end::Option*/}
                                        {/*begin::Option*/}
                                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                          {/*begin::Input*/}
                                          <input
                                            className="btn-check"
                                            type="radio"
                                            name="offer_type"
                                            defaultValue={2}
                                          />
                                          {/*end::Input*/}
                                          {/*begin::Label*/}
                                          <span className="d-flex">
                                            {/*begin::Icon*/}
                                            <i className="ki-outline ki-element-11 fs-3hx" />
                                            {/*end::Icon*/}
                                            {/*begin::Info*/}
                                            <span className="ms-4">
                                              <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">
                                                Corporate Deal
                                              </span>
                                              <span className="fw-semibold fs-4 text-muted">
                                                Create corporate account to manage
                                                users
                                              </span>
                                            </span>
                                            {/*end::Info*/}
                                          </span>
                                          {/*end::Label*/}
                                        </label>
                                        {/*end::Option*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Actions*/}
                                      <div className="d-flex justify-content-end">
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-primary"
                                          data-kt-element="type-next"
                                        >
                                          <span className="indicator-label">
                                            Offer Details
                                          </span>
                                          <span className="indicator-progress">
                                            Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                          </span>
                                        </button>
                                      </div>
                                      {/*end::Actions*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                  </div>
                                  {/*end::Type*/}
                                  {/*begin::Details*/}
                                  <div data-kt-stepper-element="content">
                                    {/*begin::Wrapper*/}
                                    <div className="w-100">
                                      {/*begin::Heading*/}
                                      <div className="mb-13">
                                        {/*begin::Title*/}
                                        <h2 className="mb-3">Deal Details</h2>
                                        {/*end::Title*/}
                                        {/*begin::Description*/}
                                        <div className="text-muted fw-semibold fs-5">
                                          If you need more info, please check out
                                          <a
                                            href="#"
                                            className="link-primary fw-bold"
                                          >
                                            FAQ Page
                                          </a>
                                          .
                                        </div>
                                        {/*end::Description*/}
                                      </div>
                                      {/*end::Heading*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-8">
                                        {/*begin::Label*/}
                                        <label className="required fs-6 fw-semibold mb-2">
                                          Customer
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <select
                                          className="form-select form-select-solid"
                                          data-control="select2"
                                          data-placeholder="Select an option"
                                          name="details_customer"
                                        >
                                          <option />
                                          <option value={1} selected="selected">
                                            Keenthemes
                                          </option>
                                          <option value={2}>CRM App</option>
                                        </select>
                                        {/*end::Input*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-8">
                                        {/*begin::Label*/}
                                        <label className="required fs-6 fw-semibold mb-2">
                                          Deal Title
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <input
                                          type="text"
                                          className="form-control form-control-solid"
                                          placeholder="Enter Deal Title"
                                          name="details_title"
                                          defaultValue="Marketing Campaign"
                                        />
                                        {/*end::Input*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-8">
                                        {/*begin::Label*/}
                                        <label className="fs-6 fw-semibold mb-2">
                                          Deal Description
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Label*/}
                                        <textarea
                                          className="form-control form-control-solid"
                                          rows={3}
                                          placeholder="Enter Deal Description"
                                          name="details_description"
                                          defaultValue={
                                            "Experience share market at your fingertips with TICK PRO stock investment mobile trading app"
                                          }
                                        />
                                        {/*end::Label*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-8">
                                        <label className="required fs-6 fw-semibold mb-2">
                                          Activation Date
                                        </label>
                                        <div className="position-relative d-flex align-items-center">
                                          {/*begin::Icon*/}
                                          <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4" />
                                          {/*end::Icon*/}
                                          {/*begin::Datepicker*/}
                                          <input
                                            className="form-control form-control-solid ps-12"
                                            placeholder="Pick date range"
                                            name="details_activation_date"
                                          />
                                          {/*end::Datepicker*/}
                                        </div>
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-15">
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-stack">
                                          {/*begin::Label*/}
                                          <div className="me-5">
                                            <label className="required fs-6 fw-semibold">
                                              Notifications
                                            </label>
                                            <div className="fs-7 fw-semibold text-muted">
                                              Allow Notifications by Phone or Email
                                            </div>
                                          </div>
                                          {/*end::Label*/}
                                          {/*begin::Checkboxes*/}
                                          <div className="d-flex">
                                            {/*begin::Checkbox*/}
                                            <label className="form-check form-check-custom form-check-solid me-10">
                                              {/*begin::Input*/}
                                              <input
                                                className="form-check-input h-20px w-20px"
                                                type="checkbox"
                                                defaultValue="email"
                                                name="details_notifications[]"
                                              />
                                              {/*end::Input*/}
                                              {/*begin::Label*/}
                                              <span className="form-check-label fw-semibold">
                                                Email
                                              </span>
                                              {/*end::Label*/}
                                            </label>
                                            {/*end::Checkbox*/}
                                            {/*begin::Checkbox*/}
                                            <label className="form-check form-check-custom form-check-solid">
                                              {/*begin::Input*/}
                                              <input
                                                className="form-check-input h-20px w-20px"
                                                type="checkbox"
                                                defaultValue="phone"
                                                defaultChecked="checked"
                                                name="details_notifications[]"
                                              />
                                              {/*end::Input*/}
                                              {/*begin::Label*/}
                                              <span className="form-check-label fw-semibold">
                                                Phone
                                              </span>
                                              {/*end::Label*/}
                                            </label>
                                            {/*end::Checkbox*/}
                                          </div>
                                          {/*end::Checkboxes*/}
                                        </div>
                                        {/*begin::Wrapper*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Actions*/}
                                      <div className="d-flex flex-stack">
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-light me-3"
                                          data-kt-element="details-previous"
                                        >
                                          Deal Type
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-primary"
                                          data-kt-element="details-next"
                                        >
                                          <span className="indicator-label">
                                            Financing
                                          </span>
                                          <span className="indicator-progress">
                                            Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                          </span>
                                        </button>
                                      </div>
                                      {/*end::Actions*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                  </div>
                                  {/*end::Details*/}
                                  {/*begin::Budget*/}
                                  <div data-kt-stepper-element="content">
                                    {/*begin::Wrapper*/}
                                    <div className="w-100">
                                      {/*begin::Heading*/}
                                      <div className="mb-13">
                                        {/*begin::Title*/}
                                        <h2 className="mb-3">Finance</h2>
                                        {/*end::Title*/}
                                        {/*begin::Description*/}
                                        <div className="text-muted fw-semibold fs-5">
                                          If you need more info, please check out
                                          <a
                                            href="#"
                                            className="link-primary fw-bold"
                                          >
                                            FAQ Page
                                          </a>
                                          .
                                        </div>
                                        {/*end::Description*/}
                                      </div>
                                      {/*end::Heading*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-8">
                                        {/*begin::Label*/}
                                        <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                          <span className="required">
                                            Setup Budget
                                          </span>
                                          <span
                                            className="lh-1 ms-1"
                                            data-bs-toggle="popover"
                                            data-bs-trigger="hover"
                                            data-bs-html="true"
                                            data-bs-content="<div class='p-4 rounded bg-light'> <div class='d-flex flex-stack text-muted mb-4'> <i class=&quot;ki-outline ki-bank fs-3 me-3&quot;></i> <div class='fw-bold'>INCBANK **** 1245 STATEMENT</div> </div> <div class='d-flex flex-stack fw-semibold text-gray-600'> <div>Amount</div> <div>Transaction</div> </div> <div class='separator separator-dashed my-2'></div> <div class='d-flex flex-stack text-gray-900 fw-bold mb-2'> <div>USD345.00</div> <div>KEENTHEMES*</div> </div> <div class='d-flex flex-stack text-muted mb-2'> <div>USD75.00</div> <div>Hosting fee</div> </div> <div class='d-flex flex-stack text-muted'> <div>USD3,950.00</div> <div>Payrol</div> </div> </div>"
                                          >
                                            <i className="ki-outline ki-information-5 text-gray-500 fs-6" />
                                          </span>
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Dialer*/}
                                        <div
                                          className="position-relative w-lg-250px"
                                          id="kt_modal_finance_setup"
                                          data-kt-dialer="true"
                                          data-kt-dialer-min={50}
                                          data-kt-dialer-max={50000}
                                          data-kt-dialer-step={100}
                                          data-kt-dialer-prefix="$"
                                          data-kt-dialer-decimals={2}
                                        >
                                          {/*begin::Decrease control*/}
                                          <button
                                            type="button"
                                            className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                                            data-kt-dialer-control="decrease"
                                          >
                                            <i className="ki-outline ki-minus-circle fs-1" />
                                          </button>
                                          {/*end::Decrease control*/}
                                          {/*begin::Input control*/}
                                          <input
                                            type="text"
                                            className="form-control form-control-solid border-0 ps-12"
                                            data-kt-dialer-control="input"
                                            placeholder="Amount"
                                            name="finance_setup"
                                            readOnly="readonly"
                                            defaultValue="$50"
                                          />
                                          {/*end::Input control*/}
                                          {/*begin::Increase control*/}
                                          <button
                                            type="button"
                                            className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                                            data-kt-dialer-control="increase"
                                          >
                                            <i className="ki-outline ki-plus-circle fs-1" />
                                          </button>
                                          {/*end::Increase control*/}
                                        </div>
                                        {/*end::Dialer*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-8">
                                        {/*begin::Label*/}
                                        <label className="fs-6 fw-semibold mb-2">
                                          Budget Usage
                                        </label>
                                        {/*end::Label*/}
                                        {/*begin::Row*/}
                                        <div
                                          className="row g-9"
                                          data-kt-buttons="true"
                                          data-kt-buttons-target="[data-kt-button='true']"
                                        >
                                          {/*begin::Col*/}
                                          <div className="col-md-6 col-lg-12 col-xxl-6">
                                            {/*begin::Option*/}
                                            <label
                                              className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                              data-kt-button="true"
                                            >
                                              {/*begin::Radio*/}
                                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="finance_usage"
                                                  defaultValue={1}
                                                  defaultChecked="checked"
                                                />
                                              </span>
                                              {/*end::Radio*/}
                                              {/*begin::Info*/}
                                              <span className="ms-5">
                                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                                  Precise Usage
                                                </span>
                                                <span className="fw-semibold fs-7 text-gray-600">
                                                  Withdraw money to your bank
                                                  account per transaction under
                                                  $50,000 budget
                                                </span>
                                              </span>
                                              {/*end::Info*/}
                                            </label>
                                            {/*end::Option*/}
                                          </div>
                                          {/*end::Col*/}
                                          {/*begin::Col*/}
                                          <div className="col-md-6 col-lg-12 col-xxl-6">
                                            {/*begin::Option*/}
                                            <label
                                              className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                              data-kt-button="true"
                                            >
                                              {/*begin::Radio*/}
                                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="finance_usage"
                                                  defaultValue={2}
                                                />
                                              </span>
                                              {/*end::Radio*/}
                                              {/*begin::Info*/}
                                              <span className="ms-5">
                                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">
                                                  Extreme Usage
                                                </span>
                                                <span className="fw-semibold fs-7 text-gray-600">
                                                  Withdraw money to your bank
                                                  account per transaction under
                                                  $50,000 budget
                                                </span>
                                              </span>
                                              {/*end::Info*/}
                                            </label>
                                            {/*end::Option*/}
                                          </div>
                                          {/*end::Col*/}
                                        </div>
                                        {/*end::Row*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Input group*/}
                                      <div className="fv-row mb-15">
                                        {/*begin::Wrapper*/}
                                        <div className="d-flex flex-stack">
                                          {/*begin::Label*/}
                                          <div className="me-5">
                                            <label className="fs-6 fw-semibold">
                                              Allow Changes in Budget
                                            </label>
                                            <div className="fs-7 fw-semibold text-muted">
                                              If you need more info, please check
                                              budget planning
                                            </div>
                                          </div>
                                          {/*end::Label*/}
                                          {/*begin::Switch*/}
                                          <label className="form-check form-switch form-check-custom form-check-solid">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              defaultValue={1}
                                              name="finance_allow"
                                              defaultChecked="checked"
                                            />
                                            <span className="form-check-label fw-semibold text-muted">
                                              Allowed
                                            </span>
                                          </label>
                                          {/*end::Switch*/}
                                        </div>
                                        {/*end::Wrapper*/}
                                      </div>
                                      {/*end::Input group*/}
                                      {/*begin::Actions*/}
                                      <div className="d-flex flex-stack">
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-light me-3"
                                          data-kt-element="finance-previous"
                                        >
                                          Project Settings
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-primary"
                                          data-kt-element="finance-next"
                                        >
                                          <span className="indicator-label">
                                            Build Team
                                          </span>
                                          <span className="indicator-progress">
                                            Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                          </span>
                                        </button>
                                      </div>
                                      {/*end::Actions*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                  </div>
                                  {/*end::Budget*/}
                                  {/*begin::Complete*/}
                                  <div data-kt-stepper-element="content">
                                    {/*begin::Wrapper*/}
                                    <div className="w-100">
                                      {/*begin::Heading*/}
                                      <div className="mb-13">
                                        {/*begin::Title*/}
                                        <h2 className="mb-3">Deal Created!</h2>
                                        {/*end::Title*/}
                                        {/*begin::Description*/}
                                        <div className="text-muted fw-semibold fs-5">
                                          If you need more info, please check out
                                          <a
                                            href="#"
                                            className="link-primary fw-bold"
                                          >
                                            FAQ Page
                                          </a>
                                          .
                                        </div>
                                        {/*end::Description*/}
                                      </div>
                                      {/*end::Heading*/}
                                      {/*begin::Actions*/}
                                      <div className="d-flex flex-center pb-20">
                                        <button
                                          type="button"
                                          className="btn btn-lg btn-light me-3"
                                          data-kt-element="complete-start"
                                        >
                                          Create New Deal
                                        </button>
                                        <a
                                          href="#"
                                          className="btn btn-lg btn-primary"
                                          data-bs-toggle="tooltip"
                                          title="Coming Soon"
                                        >
                                          View Deal
                                        </a>
                                      </div>
                                      {/*end::Actions*/}
                                      {/*begin::Illustration*/}
                                      <div className="text-center px-4">
                                        <img
                                          src="assets/media/illustrations/sketchy-1/20.png"
                                          alt=""
                                          className="mw-100 mh-300px"
                                        />
                                      </div>
                                      {/*end::Illustration*/}
                                    </div>
                                  </div>
                                  {/*end::Complete*/}
                                </form>
                                {/*end::Form*/}
                              </div>
                              {/*end::Stepper*/}
                            </div>
                            {/*begin::Modal body*/}
                          </div>
                        </div>
                      </div>
                      {/*end::Modal - Offer A Deal*/}
                      {/*end::Modals*/}
                    </div>
                    {/*end::Content container*/}
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Content wrapper*/}
                {/*begin::Footer*/}
                <div id="kt_app_footer" className="app-footer">
                  {/*begin::Footer container*/}
                  <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                    {/*begin::Copyright*/}
                    <div className="text-gray-900 order-2 order-md-1">
                      <span className="text-muted fw-semibold me-1">2024©</span>
                      <a
                        href="https://keenthemes.com"
                        target="_blank"
                        className="text-gray-800 text-hover-primary"
                      >
                        Keenthemes
                      </a>
                    </div>
                    {/*end::Copyright*/}
                    {/*begin::Menu*/}
                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                      <li className="menu-item">
                        <a
                          href="https://keenthemes.com"
                          target="_blank"
                          className="menu-link px-2"
                        >
                          About
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="https://devs.keenthemes.com"
                          target="_blank"
                          className="menu-link px-2"
                        >
                          Support
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="https://1.envato.market/EA4JP"
                          target="_blank"
                          className="menu-link px-2"
                        >
                          Purchase
                        </a>
                      </li>
                    </ul>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Footer container*/}
                </div>
                {/*end::Footer*/}
              </div>
              {/*end:::Main*/}
            </div>
          </div>
          {/*end::Page*/}
        </div>
        <div
          id="kt_activities"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="activities"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_activities_toggle"
          data-kt-drawer-close="#kt_activities_close"
        >
          <div className="card shadow-none border-0 rounded-0">
            <div className="card-header" id="kt_activities_header">
              <h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                  id="kt_activities_close"
                >
                  <i className="ki-outline ki-cross fs-1" />
                </button>
              </div>
            </div>
            <div className="card-body position-relative" id="kt_activities_body">
              <div
                id="kt_activities_scroll"
                className="position-relative scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_activities_body"
                data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
                data-kt-scroll-offset="5px"
              >
                <div className="timeline timeline-border-dashed">
                  <div className="timeline-item">
                    <div className="timeline-line" />
                    <div className="timeline-icon">
                      <i className="ki-outline ki-message-text-2 fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          There are 2 new tasks for you in “AirPlus Mobile App”
                          project:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Added at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Nina Nilson"
                          >
                            <img src="assets/media/avatars/300-14.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        {/*begin::Record*/}
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                          {/*begin::Title*/}
                          <a
                            href="apps/projects/project.html"
                            className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Meeting with customer
                          </a>
                          {/*end::Title*/}
                          {/*begin::Label*/}
                          <div className="min-w-175px pe-2">
                            <span className="badge badge-light text-muted">
                              Application Design
                            </span>
                          </div>
                          {/*end::Label*/}
                          {/*begin::Users*/}
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/media/avatars/300-2.jpg" alt="img" />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-14.jpg"
                                alt="img"
                              />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                                A
                              </div>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Users*/}
                          {/*begin::Progress*/}
                          <div className="min-w-125px pe-2">
                            <span className="badge badge-light-primary">
                              In Progress
                            </span>
                          </div>
                          {/*end::Progress*/}
                          {/*begin::Action*/}
                          <a
                            href="apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Record*/}
                        {/*begin::Record*/}
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                          {/*begin::Title*/}
                          <a
                            href="apps/projects/project.html"
                            className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Project Delivery Preparation
                          </a>
                          {/*end::Title*/}
                          {/*begin::Label*/}
                          <div className="min-w-175px">
                            <span className="badge badge-light text-muted">
                              CRM System Development
                            </span>
                          </div>
                          {/*end::Label*/}
                          {/*begin::Users*/}
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <img
                                src="assets/media/avatars/300-20.jpg"
                                alt="img"
                              />
                            </div>
                            {/*end::User*/}
                            {/*begin::User*/}
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                                B
                              </div>
                            </div>
                            {/*end::User*/}
                          </div>
                          {/*end::Users*/}
                          {/*begin::Progress*/}
                          <div className="min-w-125px">
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </div>
                          {/*end::Progress*/}
                          {/*begin::Action*/}
                          <a
                            href="apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                          {/*end::Action*/}
                        </div>
                        {/*end::Record*/}
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon me-4">
                      <i className="ki-outline ki-flag fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n2">
                      {/*begin::Timeline heading*/}
                      <div className="overflow-auto pe-3">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          Invitation for crafting engaging designs that speak human
                          workshop
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Sent at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Alan Nilson"
                          >
                            <img src="assets/media/avatars/300-1.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon">
                      <i className="ki-outline ki-disconnect fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="mb-5 pe-3">
                        {/*begin::Title*/}
                        <a
                          href="#"
                          className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                        >
                          3 New Incoming Project Files:
                        </a>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Sent at 10:30 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Jan Hummer"
                          >
                            <img src="assets/media/avatars/300-23.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                          {/*begin::Item*/}
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            {/*begin::Icon*/}
                            <img
                              alt=""
                              className="w-30px me-3"
                              src="assets/media/svg/files/pdf.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="apps/projects/project.html"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance KPI App Guidelines
                              </a>
                              {/*end::Desc*/}
                              {/*begin::Number*/}
                              <div className="text-gray-500">1.9mb</div>
                              {/*end::Number*/}
                            </div>
                            {/*begin::Info*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            {/*begin::Icon*/}
                            <img
                              alt="apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/media/svg/files/doc.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Client UAT Testing Results
                              </a>
                              {/*end::Desc*/}
                              {/*begin::Number*/}
                              <div className="text-gray-500">18kb</div>
                              {/*end::Number*/}
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-aligns-center">
                            {/*begin::Icon*/}
                            <img
                              alt="apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/media/svg/files/css.svg"
                            />
                            {/*end::Icon*/}
                            {/*begin::Info*/}
                            <div className="ms-1 fw-semibold">
                              {/*begin::Desc*/}
                              <a
                                href="#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance Reports
                              </a>
                              {/*end::Desc*/}
                              {/*begin::Number*/}
                              <div className="text-gray-500">20mb</div>
                              {/*end::Number*/}
                            </div>
                            {/*end::Icon*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon">
                      <i className="ki-outline ki-abstract-26 fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          Task
                          <a href="#" className="text-primary fw-bold me-1">
                            #45890
                          </a>
                          merged with
                          <a href="#" className="text-primary fw-bold me-1">
                            #45890
                          </a>
                          in “Ads Pro Admin Dashboard project:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Initiated at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Nina Nilson"
                          >
                            <img src="assets/media/avatars/300-14.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon">
                      <i className="ki-outline ki-pencil fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          3 new application design concepts added:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Created at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Marcus Dotson"
                          >
                            <img src="assets/media/avatars/300-2.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                          {/*begin::Item*/}
                          <div className="overlay me-10">
                            {/*begin::Image*/}
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-29.jpg"
                              />
                            </div>
                            {/*end::Image*/}
                            {/*begin::Link*/}
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                            {/*end::Link*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="overlay me-10">
                            {/*begin::Image*/}
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-31.jpg"
                              />
                            </div>
                            {/*end::Image*/}
                            {/*begin::Link*/}
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                            {/*end::Link*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Item*/}
                          <div className="overlay">
                            {/*begin::Image*/}
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/media/stock/600x400/img-40.jpg"
                              />
                            </div>
                            {/*end::Image*/}
                            {/*begin::Link*/}
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                            {/*end::Link*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon">
                      <i className="ki-outline ki-sms fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          New case
                          <a href="#" className="text-primary fw-bold me-1">
                            #67890
                          </a>
                          is assigned to you in Multi-platform Database Design
                          project
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="overflow-auto pb-5">
                          {/*begin::Wrapper*/}
                          <div className="d-flex align-items-center mt-1 fs-6">
                            {/*begin::Info*/}
                            <div className="text-muted me-2 fs-7">
                              Added at 4:23 PM by
                            </div>
                            {/*end::Info*/}
                            {/*begin::User*/}
                            <a href="#" className="text-primary fw-bold me-1">
                              Alice Tan
                            </a>
                            {/*end::User*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon">
                      <i className="ki-outline ki-pencil fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mb-10 mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          You have received a new order:
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Placed at 5:05 AM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            title="Robert Rich"
                          >
                            <img src="assets/media/avatars/300-4.jpg" alt="img" />
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                      {/*begin::Timeline details*/}
                      <div className="overflow-auto pb-5">
                        {/*begin::Notice*/}
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                          {/*begin::Icon*/}
                          <i className="ki-outline ki-devices-2 fs-2tx text-primary me-4" />
                          {/*end::Icon*/}
                          {/*begin::Wrapper*/}
                          <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                            {/*begin::Content*/}
                            <div className="mb-3 mb-md-0 fw-semibold">
                              <h4 className="text-gray-900 fw-bold">
                                Database Backup Process Completed!
                              </h4>
                              <div className="fs-6 text-gray-700 pe-7">
                                Login into Admin Dashboard to make sure the data
                                integrity is OK
                              </div>
                            </div>
                            {/*end::Content*/}
                            {/*begin::Action*/}
                            <a
                              href="#"
                              className="btn btn-primary px-6 align-self-center text-nowrap"
                            >
                              Proceed
                            </a>
                            {/*end::Action*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Notice*/}
                      </div>
                      {/*end::Timeline details*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                  {/*begin::Timeline item*/}
                  <div className="timeline-item">
                    {/*begin::Timeline line*/}
                    <div className="timeline-line" />
                    {/*end::Timeline line*/}
                    {/*begin::Timeline icon*/}
                    <div className="timeline-icon">
                      <i className="ki-outline ki-basket fs-2 text-gray-500" />
                    </div>
                    {/*end::Timeline icon*/}
                    {/*begin::Timeline content*/}
                    <div className="timeline-content mt-n1">
                      {/*begin::Timeline heading*/}
                      <div className="pe-3 mb-5">
                        {/*begin::Title*/}
                        <div className="fs-5 fw-semibold mb-2">
                          New order
                          <a href="#" className="text-primary fw-bold me-1">
                            #67890
                          </a>
                          is placed for Workshow Planning &amp; Budget Estimation
                        </div>
                        {/*end::Title*/}
                        {/*begin::Description*/}
                        <div className="d-flex align-items-center mt-1 fs-6">
                          {/*begin::Info*/}
                          <div className="text-muted me-2 fs-7">
                            Placed at 4:23 PM by
                          </div>
                          {/*end::Info*/}
                          {/*begin::User*/}
                          <a href="#" className="text-primary fw-bold me-1">
                            Jimmy Bold
                          </a>
                          {/*end::User*/}
                        </div>
                        {/*end::Description*/}
                      </div>
                      {/*end::Timeline heading*/}
                    </div>
                    {/*end::Timeline content*/}
                  </div>
                  {/*end::Timeline item*/}
                </div>
                {/*end::Timeline items*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Body*/}
            {/*begin::Footer*/}
            <div className="card-footer py-5 text-center" id="kt_activities_footer">
              <a
                href="pages/user-profile/activity.html"
                className="btn btn-bg-body text-primary"
              >
                View All Activities
                <i className="ki-outline ki-arrow-right fs-3 text-primary" />
              </a>
            </div>
            {/*end::Footer*/}
          </div>
        </div>
        <div
          id="kt_drawer_chat"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="chat"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_chat_toggle"
          data-kt-drawer-close="#kt_drawer_chat_close"
        >
          <div
            className="card w-100 border-0 rounded-0"
            id="kt_drawer_chat_messenger"
          >
            {/*begin::Card header*/}
            <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
              {/*begin::Title*/}
              <div className="card-title">
                {/*begin::User*/}
                <div className="d-flex justify-content-center flex-column me-3">
                  <a
                    href="#"
                    className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >
                    Brian Cox
                  </a>
                  {/*begin::Info*/}
                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                    <span className="fs-7 fw-semibold text-muted">Active</span>
                  </div>
                  {/*end::Info*/}
                </div>
                {/*end::User*/}
              </div>
              {/*end::Title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <div className="me-0">
                  <button
                    className="btn btn-sm btn-icon btn-active-color-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-outline ki-dots-square fs-2" />
                  </button>
                  {/*begin::Menu 3*/}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    {/*begin::Heading*/}
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Contacts
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_users_search"
                      >
                        Add Contact
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link flex-stack px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_invite_friends"
                      >
                        Invite Contacts
                        <span
                          className="ms-2"
                          data-bs-toggle="tooltip"
                          title="Specify a contact email to send an invitation"
                        >
                          <i className="ki-outline ki-information fs-7" />{" "}
                        </span>
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a href="#" className="menu-link px-3">
                        <span className="menu-title">Groups</span>
                        <span className="menu-arrow" />
                      </a>
                      {/*begin::Menu sub*/}
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Create Group
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Invite Members
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            title="Coming soon"
                          >
                            Settings
                          </a>
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu sub*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3 my-1">
                      <a
                        href="#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        title="Coming soon"
                      >
                        Settings
                      </a>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu 3*/}
                </div>
                {/*end::Menu*/}
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  id="kt_drawer_chat_close"
                >
                  <i className="ki-outline ki-cross-square fs-2" />
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body" id="kt_drawer_chat_messenger_body">
              {/*begin::Messages*/}
              <div
                className="scroll-y me-n5 pe-5"
                data-kt-element="messages"
                data-kt-scroll="true"
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
                data-kt-scroll-offset="0px"
              >
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      How likely are you to recommend our company to your friends
                      and family ?
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Hey there, we’re just writing to let you know that you’ve been
                      subscribed to a repository on GitHub.
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Ok, Understood!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      You’ll receive notifications for all issues, pull requests!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      You can unwatch this repository immediately by clicking here:
                      <a href="https://keenthemes.com">Keenthemes.com</a>
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(out)*/}
                <div className="d-flex justify-content-end mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Most purchased Business courses during this sale!
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(out)*/}
                {/*begin::Message(in)*/}
                <div className="d-flex justify-content-start mb-10">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Company BBQ to celebrate the last quater achievements and
                      goals. Food and drinks provided
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(in)*/}
                {/*begin::Message(template for out)*/}
                <div
                  className="d-flex justify-content-end mb-10 d-none"
                  data-kt-element="template-out"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-end">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Details*/}
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">Just now</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      {/*end::Details*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    />
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(template for out)*/}
                {/*begin::Message(template for in)*/}
                <div
                  className="d-flex justify-content-start mb-10 d-none"
                  data-kt-element="template-in"
                >
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">Just now</span>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::Text*/}
                    <div
                      className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Right before vacation season we have the next Big Deal for
                      you.
                    </div>
                    {/*end::Text*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Message(template for in)*/}
              </div>
              {/*end::Messages*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
              {/*begin::Input*/}
              <textarea
                className="form-control form-control-flush mb-3"
                rows={1}
                data-kt-element="input"
                placeholder="Type a message"
                defaultValue={""}
              />
              {/*end::Input*/}
              {/*begin:Toolbar*/}
              <div className="d-flex flex-stack">
                {/*begin::Actions*/}
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="ki-outline ki-paper-clip fs-3" />
                  </button>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="Coming soon"
                  >
                    <i className="ki-outline ki-cloud-add fs-3" />
                  </button>
                </div>
                {/*end::Actions*/}
                {/*begin::Send*/}
                <button
                  className="btn btn-primary"
                  type="button"
                  data-kt-element="send"
                >
                  Send
                </button>
                {/*end::Send*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Messenger*/}
        </div>
        <div
          id="kt_shopping_cart"
          className="bg-body"
          data-kt-drawer="true"
          data-kt-drawer-name="cart"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
          data-kt-drawer-close="#kt_drawer_shopping_cart_close"
        >
          {/*begin::Messenger*/}
          <div className="card card-flush w-100 rounded-0">
            {/*begin::Card header*/}
            <div className="card-header">
              {/*begin::Title*/}
              <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
              {/*end::Title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar">
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  id="kt_drawer_shopping_cart_close"
                >
                  <i className="ki-outline ki-cross fs-2" />
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body hover-scroll-overlay-y h-400px pt-5">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Iblender
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      The best kitchen gadget in 2022
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      SmartCleaner
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Smart tool for cooking
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      CameraMaxr
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Professional camera for edge
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      MotionWire
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Perfect animation tool
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Samsung
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Profile info,Timeline etc
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-6" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column me-3">
                  {/*begin::Section*/}
                  <div className="mb-3">
                    <a
                      href="apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-500 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  {/*end::Section*/}
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <i className="ki-outline ki-minus fs-4" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <i className="ki-outline ki-plus fs-4" />
                    </a>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Pic*/}
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
                </div>
                {/*end::Pic*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Total</span>
                <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Sub total</span>
                <span className="text-primary fw-bolder fs-5">$ 246.35</span>
              </div>
              {/*end::Item*/}
              {/*end::Action*/}
              <div className="d-flex justify-content-end mt-9">
                <a href="#" className="btn btn-primary d-flex justify-content-end">
                  Pleace Order
                </a>
              </div>
              {/*end::Action*/}
            </div>
            {/*end::Card footer*/}
          </div>
          {/*end::Messenger*/}
        </div>
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <i className="ki-outline ki-arrow-up" />
        </div>
        <div
          className="modal fade"
          id="kt_modal_users_search"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mw-650px">
            <div className="modal-content">
              <div className="modal-header pb-0 border-0 justify-content-end">
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <i className="ki-outline ki-cross fs-1" />
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                {/*begin::Content*/}
                <div className="text-center mb-13">
                  <h1 className="mb-3">Search Users</h1>
                  <div className="text-muted fw-semibold fs-5">
                    Invite Collaborators To Your Project
                  </div>
                </div>
                {/*end::Content*/}
                {/*begin::Search*/}
                <div
                  id="kt_modal_users_search_handler"
                  data-kt-search-keypress="true"
                  data-kt-search-min-length={2}
                  data-kt-search-enter="enter"
                  data-kt-search-layout="inline"
                >
                  {/*begin::Form*/}
                  <form
                    data-kt-search-element="form"
                    className="w-100 position-relative mb-5"
                    autoComplete="off"
                  >
                    {/*begin::Hidden input(Added to disable form autocomplete)*/}
                    <input type="hidden" />
                    {/*end::Hidden input*/}
                    {/*begin::Icon*/}
                    <i className="ki-outline ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y" />
                    {/*end::Icon*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid px-15"
                      name="search"
                      defaultValue=""
                      placeholder="Search by username, full name or email..."
                      data-kt-search-element="input"
                    />
                    {/*end::Input*/}
                    {/*begin::Spinner*/}
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                      data-kt-search-element="spinner"
                    >
                      <span className="spinner-border h-15px w-15px align-middle text-muted" />
                    </span>
                    {/*end::Spinner*/}
                    {/*begin::Reset*/}
                    <span
                      className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                      data-kt-search-element="clear"
                    >
                      <i className="ki-outline ki-cross fs-2 fs-lg-1 me-0" />
                    </span>
                    {/*end::Reset*/}
                  </form>
                  {/*end::Form*/}
                  {/*begin::Wrapper*/}
                  <div className="py-5">
                    {/*begin::Suggestions*/}
                    <div data-kt-search-element="suggestions">
                      {/*begin::Heading*/}
                      <h3 className="fw-semibold mb-5">Recently searched:</h3>
                      {/*end::Heading*/}
                      {/*begin::Users*/}
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Emma Smith
                            </span>
                            <span className="badge badge-light">Art Director</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              M
                            </span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Melody Macy
                            </span>
                            <span className="badge badge-light">
                              Marketing Analytic
                            </span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Max Smith
                            </span>
                            <span className="badge badge-light">
                              Software Enginer
                            </span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Sean Bean
                            </span>
                            <span className="badge badge-light">Web Developer</span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                        {/*begin::User*/}
                        <a
                          href="#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Info*/}
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Brian Cox
                            </span>
                            <span className="badge badge-light">
                              UI/UX Designer
                            </span>
                          </div>
                          {/*end::Info*/}
                        </a>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}
                    </div>
                    {/*end::Suggestions*/}
                    {/*begin::Results(add d-none to below element to hide the users list by default)*/}
                    <div data-kt-search-element="results" className="d-none">
                      {/*begin::Users*/}
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={0}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='0']"
                                defaultValue={0}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                smith@kpmg.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={1}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='1']"
                                defaultValue={1}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                M
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Melody Macy
                              </a>
                              <div className="fw-semibold text-muted">
                                melody@altbox.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={2}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='2']"
                                defaultValue={2}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Max Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                max@kt.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={3}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='3']"
                                defaultValue={3}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Sean Bean
                              </a>
                              <div className="fw-semibold text-muted">
                                sean@dellito.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={4}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='4']"
                                defaultValue={4}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-25.jpg"
                              />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Brian Cox
                              </a>
                              <div className="fw-semibold text-muted">
                                brian@exchange.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={5}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='5']"
                                defaultValue={5}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                C
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Mikaela Collins
                              </a>
                              <div className="fw-semibold text-muted">
                                mik@pex.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={6}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='6']"
                                defaultValue={6}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Francis Mitcham
                              </a>
                              <div className="fw-semibold text-muted">
                                f.mit@kpmg.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={7}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='7']"
                                defaultValue={7}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                O
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Olivia Wild
                              </a>
                              <div className="fw-semibold text-muted">
                                olivia@corpmail.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={8}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='8']"
                                defaultValue={8}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                N
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Neil Owen
                              </a>
                              <div className="fw-semibold text-muted">
                                owen.neil@gmail.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={9}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='9']"
                                defaultValue={9}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-23.jpg"
                              />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Dan Wilson
                              </a>
                              <div className="fw-semibold text-muted">
                                dam@consilting.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={10}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='10']"
                                defaultValue={10}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                E
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Bold
                              </a>
                              <div className="fw-semibold text-muted">
                                emma@intenso.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={11}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='11']"
                                defaultValue={11}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-12.jpg"
                              />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ana Crown
                              </a>
                              <div className="fw-semibold text-muted">
                                ana.cf@limtel.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={12}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='12']"
                                defaultValue={12}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-info text-info fw-semibold">
                                A
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Robert Doe
                              </a>
                              <div className="fw-semibold text-muted">
                                robert@benko.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={13}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='13']"
                                defaultValue={13}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-13.jpg"
                              />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                John Miller
                              </a>
                              <div className="fw-semibold text-muted">
                                miller@mapple.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={14}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='14']"
                                defaultValue={14}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-success text-success fw-semibold">
                                L
                              </span>
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Lucy Kunic
                              </a>
                              <div className="fw-semibold text-muted">
                                lucy.m@fentech.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2} selected="selected">
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={15}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='15']"
                                defaultValue={15}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-21.jpg"
                              />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ethan Wilder
                              </a>
                              <div className="fw-semibold text-muted">
                                ethan@loop.com.au
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1} selected="selected">
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                        {/*begin::Separator*/}
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        {/*end::Separator*/}
                        {/*begin::User*/}
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={16}
                        >
                          {/*begin::Details*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Checkbox*/}
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='16']"
                                defaultValue={16}
                              />
                            </label>
                            {/*end::Checkbox*/}
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-35px symbol-circle">
                              <img
                                alt="Pic"
                                src="assets/media/avatars/300-13.jpg"
                              />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Details*/}
                            <div className="ms-5">
                              <a
                                href="#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                John Miller
                              </a>
                              <div className="fw-semibold text-muted">
                                miller@mapple.com
                              </div>
                            </div>
                            {/*end::Details*/}
                          </div>
                          {/*end::Details*/}
                          {/*begin::Access menu*/}
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm"
                              data-control="select2"
                              data-hide-search="true"
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option value={3} selected="selected">
                                Can Edit
                              </option>
                            </select>
                          </div>
                          {/*end::Access menu*/}
                        </div>
                        {/*end::User*/}
                      </div>
                      {/*end::Users*/}
                      {/*begin::Actions*/}
                      <div className="d-flex flex-center mt-15">
                        <button
                          type="reset"
                          id="kt_modal_users_search_reset"
                          data-bs-dismiss="modal"
                          className="btn btn-active-light me-3"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_users_search_submit"
                          className="btn btn-primary"
                        >
                          Add Selected Users
                        </button>
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Results*/}
                    {/*begin::Empty*/}
                    <div
                      data-kt-search-element="empty"
                      className="text-center d-none"
                    >
                      {/*begin::Message*/}
                      <div className="fw-semibold py-10">
                        <div className="text-gray-600 fs-3 mb-2">
                          No users found
                        </div>
                        <div className="text-muted fs-6">
                          Try to search by username, full name or email...
                        </div>
                      </div>
                      {/*end::Message*/}
                      {/*begin::Illustration*/}
                      <div className="text-center px-5">
                        <img
                          src="assets/media/illustrations/sketchy-1/1.png"
                          alt=""
                          className="w-100 h-200px h-sm-325px"
                        />
                      </div>
                      {/*end::Illustration*/}
                    </div>
                    {/*end::Empty*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Search*/}
              </div>
              {/*end::Modal body*/}
            </div>
            {/*end::Modal content*/}
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_invite_friends"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog mw-650px">
            <div className="modal-content">
              {/*begin::Modal header*/}
              <div className="modal-header pb-0 border-0 justify-content-end">
                {/*begin::Close*/}
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <i className="ki-outline ki-cross fs-1" />
                </div>
                {/*end::Close*/}
              </div>
              {/*begin::Modal header*/}
              {/*begin::Modal body*/}
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                {/*begin::Heading*/}
                <div className="text-center mb-13">
                  {/*begin::Title*/}
                  <h1 className="mb-3">Invite a Friend</h1>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check out
                    <a href="#" className="link-primary fw-bold">
                      FAQ Page
                    </a>
                    .
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Heading*/}
                {/*begin::Google Contacts Invite*/}
                <div className="btn btn-light-primary fw-bold w-100 mb-8">
                  <img
                    alt="Logo"
                    src="assets/media/svg/brand-logos/google-icon.svg"
                    className="h-20px me-3"
                  />
                  Invite Gmail Contacts
                </div>
                {/*end::Google Contacts Invite*/}
                {/*begin::Separator*/}
                <div className="separator d-flex flex-center mb-8">
                  <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                    or
                  </span>
                </div>
                {/*end::Separator*/}
                {/*begin::Textarea*/}
                <textarea
                  className="form-control form-control-solid mb-8"
                  rows={3}
                  placeholder="Type or paste emails here"
                  defaultValue={""}
                />
                {/*end::Textarea*/}
                {/*begin::Users*/}
                <div className="mb-10">
                  {/*begin::Heading*/}
                  <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                  {/*end::Heading*/}
                  {/*begin::List*/}
                  <div className="mh-300px scroll-y me-n7 pe-7">
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Smith
                          </a>
                          <div className="fw-semibold text-muted">
                            smith@kpmg.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            M
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Melody Macy
                          </a>
                          <div className="fw-semibold text-muted">
                            melody@altbox.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Max Smith
                          </a>
                          <div className="fw-semibold text-muted">max@kt.com</div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Sean Bean
                          </a>
                          <div className="fw-semibold text-muted">
                            sean@dellito.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Brian Cox
                          </a>
                          <div className="fw-semibold text-muted">
                            brian@exchange.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-warning text-warning fw-semibold">
                            C
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Mikaela Collins
                          </a>
                          <div className="fw-semibold text-muted">mik@pex.com</div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Francis Mitcham
                          </a>
                          <div className="fw-semibold text-muted">
                            f.mit@kpmg.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            O
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Olivia Wild
                          </a>
                          <div className="fw-semibold text-muted">
                            olivia@corpmail.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-primary text-primary fw-semibold">
                            N
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Neil Owen
                          </a>
                          <div className="fw-semibold text-muted">
                            owen.neil@gmail.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Dan Wilson
                          </a>
                          <div className="fw-semibold text-muted">
                            dam@consilting.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            E
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Bold
                          </a>
                          <div className="fw-semibold text-muted">
                            emma@intenso.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ana Crown
                          </a>
                          <div className="fw-semibold text-muted">
                            ana.cf@limtel.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-info text-info fw-semibold">
                            A
                          </span>
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Robert Doe
                          </a>
                          <div className="fw-semibold text-muted">
                            robert@benko.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            John Miller
                          </a>
                          <div className="fw-semibold text-muted">
                            miller@mapple.com
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-success text-success fw-semibold">
                            L
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Lucy Kunic
                          </a>
                          <div className="fw-semibold text-muted">
                            lucy.m@fentech.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2} selected="selected">
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ethan Wilder
                          </a>
                          <div className="fw-semibold text-muted">
                            ethan@loop.com.au
                          </div>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::Details*/}
                      {/*begin::Access menu*/}
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1} selected="selected">
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                      </div>
                      {/*end::Access menu*/}
                    </div>
                    {/*end::User*/}
                    {/*begin::User*/}
                    <div className="d-flex flex-stack py-4">
                      {/*begin::Details*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            John Miller
                          </a>
                          <div className="fw-semibold text-muted">
                            miller@mapple.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option value={3} selected="selected">
                            Can Edit
                          </option>
                        </select>
                      </div>
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::List*/}
                </div>
                {/*end::Users*/}
                {/*begin::Notice*/}
                <div className="d-flex flex-stack">
                  {/*begin::Label*/}
                  <div className="me-5 fw-semibold">
                    <label className="fs-6">Adding Users by Team Members</label>
                    <div className="fs-7 text-muted">
                      If you need more info, please check budget planning
                    </div>
                  </div>
                  {/*end::Label*/}
                  {/*begin::Switch*/}
                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={1}
                      defaultChecked="checked"
                    />
                    <span className="form-check-label fw-semibold text-muted">
                      Allowed
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
    
  );
}
