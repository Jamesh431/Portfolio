import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingPage(props) {
  const { data } = props;
  const {
    project_name,
    project_type,
    company,
    description,
    accomplishments,
    hostedURL,
    githubRepoURL,
  } = data;

  return (
    <div className="project-container">
      <div className="project-wrapper" key={project_name}>
        <div className="project-name">
          <h2>{project_name}</h2>
        </div>

        <div id="project-information">
          <div className="description">
            <p>{description}</p>
          </div>

          <div className="accomplishments">
            <p>{accomplishments}</p>
          </div>
        </div>

        <div className="project-footer">
          <div className="project-type">
            <p>{project_type}</p>
          </div>

          <div className="project-links">
            <div className="links-wrapper">
              {hostedURL ? (
                <div className="hosted-link">
                  <a href={hostedURL} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon="fa-solid fa-globe" />
                  </a>
                </div>
              ) : null}

              {githubRepoURL ? (
                <div className="github-repo-link">
                  <a href={githubRepoURL} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </a>
                </div>
              ) : null}

              {company ? (
                <div className="company">
                  {company === "DevPipeline" ? (
                    <a
                      id="company-link"
                      href="https://devpipeline.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-code"
                        style={{ color: "#3aafa9" }}
                      />
                    </a>
                  ) : (
                    company
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
