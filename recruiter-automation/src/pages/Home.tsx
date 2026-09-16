function Home({ recruiters }) {
  return (
    <section className="hero is-fullheight home-page">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-7">
              <p className="tag is-info is-light mb-5"> ⚡RECRUITER OUTREACH </p>

              <h1 className="title is-1 has-text-white home-title">
                Turn recruiter outreach
                <br />
                into a <span className="has-text-info">workflow.</span>
              </h1>

              <p className="subtitle has-text-grey-light mt-5 home-subtitle">
                Manage recruiters, send personalized outreach, and track your
                applications from one simple dashboard.
              </p>

              <div className="mt-6">
                <a
                  href="/dashboard"
                  className="button is-info is-medium home-button"
                >
                  Explore the site
                  <span className="ml-2">→</span>
                </a>
              </div>
              <p class="mt-6" className="test">
                {" "}
                Made with 🩷 by Tushar !!
              </p>
            </div>

            <div className="column is-5">
              <div className="home-card">
                <div className="home-card-dot"></div>

                <p className="has-text-grey-light is-size-7">
                  OUTREACH PIPELINE
                </p>

                <h2 className="title is-3 has-text-white mt-3">
                  RecruiterFlow
                </h2>

                <div className="mt-5">
                  <div className="pipeline-row">
                    <span>Recruiters</span>
                    <strong>{recruiters.length}</strong>
                  </div>

                  <div className="pipeline-row">
                    <span>Pending</span>
                    <strong>
                      {
                        recruiters.filter(
                          (recruiter) => recruiter.status === "PENDING",
                        ).length
                      }
                    </strong>
                  </div>

                  <div className="pipeline-row">
                    <span>Emails Sent</span>
                    {
                      recruiters.filter(
                        (recruiter) => recruiter.status === "SENT",
                      ).length
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
