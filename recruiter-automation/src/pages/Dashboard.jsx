import { useState } from "react";

function Dashboard({ recruiters, setRecruiters }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const addRecruiter = (event) => {
    event.preventDefault();

    if (!name || !company || !email) {
      alert("Please fill all fields");
      return;
    }

    const newRecruiter = {
      id: Date.now(),
      name: name,
      company: company,
      email: email,
      status: "PENDING",
    };

    setRecruiters([...recruiters, newRecruiter]);

    setName("");
    setCompany("");
    setEmail("");
  };

  const sendEmail = (id) => {
    const updatedRecruiters = recruiters.map((recruiter) => {
      if (recruiter.id === id) {
        return {
          ...recruiter,
          status: "SENT",
        };
      }

      return recruiter;
    });

    setRecruiters(updatedRecruiters);
  };

  const pendingCount = recruiters.filter(
    (recruiter) => recruiter.status === "PENDING",
  ).length;

  const sentCount = recruiters.filter(
    (recruiter) => recruiter.status === "SENT",
  ).length;

  return (
    <section className="section dashboard-page">
      <div className="container is-fluid">
        {/* HEADER */}

        <div className="mb-6">
          <p className="tag is-info is-light mb-3">RECRUITER OUTREACH</p>

          <h1 className="title is-2">Dashboard</h1>

          <p className="subtitle is-6">
            Manage recruiters and send personalized outreach.
          </p>
        </div>

        {/* STATS */}

        <div className="columns is-variable is-5">
          <div className="column is-4">
            <div className="box stat-card">
              <p className="heading">Recruiters</p>

              <p className="title">{recruiters.length}</p>
            </div>
          </div>

          <div className="column is-4">
            <div className="box stat-card">
              <p className="heading">Pending</p>

              <p className="title">{pendingCount}</p>
            </div>
          </div>

          <div className="column is-4">
            <div className="box stat-card">
              <p className="heading">Emails Sent</p>

              <p className="title">{sentCount}</p>
            </div>
          </div>
        </div>

        {/* ADD RECRUITER */}

        <div className="box mt-5">
          <h2 className="title is-4">Add Recruiter</h2>

          <form onSubmit={addRecruiter}>
            <div className="columns">
              {/* NAME */}

              <div className="column">
                <div className="field">
                  <label className="label">Name</label>

                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Tushar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* COMPANY */}

              <div className="column">
                <div className="field">
                  <label className="label">Organisation</label>

                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="TCS"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* EMAIL */}

              <div className="column">
                <div className="field">
                  <label className="label">Email</label>

                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="r.tushar@tcs.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="has-text-right">
              <button type="submit" className="button is-info">
                + Add Recruiter
              </button>
            </div>
          </form>
        </div>

        {/* RECRUITER TABLE */}

        <div className="box mt-5">
          <div className="mb-5">
            <h2 className="title is-4 mb-1">Recruiters</h2>

            <p className="has-text-grey is-size-7">Your outreach pipeline</p>
          </div>

          {recruiters.length === 0 ? (
            <div className="has-text-centered py-6">
              <p className="has-text-grey">No recruiters added yet.</p>

              <p className="is-size-7 has-text-grey mt-2">
                Add your first recruiter above to get started.
              </p>
            </div>
          ) : (
            <div className="table-container">
              <table className="table is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Organisation</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {recruiters.map((recruiter) => (
                    <tr key={recruiter.id}>
                      <td>{recruiter.name}</td>

                      <td>{recruiter.company}</td>

                      <td>{recruiter.email}</td>

                      <td>
                        <span
                          className={
                            recruiter.status === "PENDING"
                              ? "tag is-warning is-light"
                              : "tag is-success is-light"
                          }
                        >
                          {recruiter.status}
                        </span>
                      </td>

                      <td>
                        {recruiter.status === "PENDING" ? (
                          <button
                            className="button is-small is-info is-light"
                            onClick={() => sendEmail(recruiter.id)}
                          >
                            Send
                          </button>
                        ) : (
                          <span className="has-text-success is-size-7">
                            ✓ Sent
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
