import React, { useContext, useState } from "react";
import { Form, Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";

const ResumeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    contactNo: "",
    address: "",
    links: [
      {
        linksof: "",
        linkValue: "",
      },
    ],
    summary: "",
    workHistory: [
      {
        workPeriod: "",
        workPosition: "",
        workEmployer: "",
        workDescription: "",
      },
    ],
    education: [
      {
        eduPeriod: "",
        eduDegree: "",
        eduInstitute: "",
      },
    ],
    project: [
      {
        proName: "",
        proPeriod: "",
        proLink: "",
        proDescription: "",
      },
    ],
    cpTable: [
      {
        platformName: "",
        accLink: "",
        probCount: "",
        rating: "",
      },
    ],
    awardsHonours: [
      {
        awaname: "",
        awaDescription: "",
      },
    ],
    responsiblities: [
      {
        postName: "",
        period: "",
        orgName: "",
      },
    ],
    achievements: [{ achName: "" }],
    skills: [{ skillName: "" }],
    certificates: [{ certName: "", certLink: "" }],
    hobbies: [{ hobbiesName: "" }],
    languages: [{ langName: "" }],
  };

  const signInSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(3, "min. 3 characters"),
    email: Yup.string().email().required("Email is required"),
    contactNo: Yup.string()
      .required("Mobile no. is required")
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/,
        "Invalid mobile no."
      ),
    address: Yup.string().required("address is required"),
    links: Yup.array()
      .of(
        Yup.object().shape({
          linksof: Yup.string().min(2, "too short"),
          linksValue: Yup.string().min(3, "cmon"),
        })
      )
      .required("Social link required")
      .min(2, "min. 1 Link required"),
  });

  const submitHandler = (values) => {};

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          submitHandler(values);
          console.log(values);
        }}
      >
        {(formik, values) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div>
              <Form>
                <div>{values}</div>
                <div>
                  <label htmlFor="name">Name</label>
                  <Field type="name" name="name" id="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                </div>
                <div>
                  <label htmlFor="contactNo">Mobile No.</label>
                  <Field type="number" name="contactNo" id="contactNo" />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <Field type="address" name="address" id="address" />
                </div>
                <div>
                  <div>Links</div>
                  <FieldArray
                    name="links"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { links } = formik.values;
                      console.log(links);
                      return (
                        <div>
                          {links.map((link, index) => (
                            <div key={index}>
                              <Field type="" name={`links[${index}].linksof`} />
                              <Field name={`links[${index}].linkValue`} />
                              {index !== links.length - 1 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}
                              {!(index !== links.length - 1) && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    push({ linksof: "", linkValue: "" })
                                  }
                                >
                                  +
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="workHistory">Work History</label>
                  <FieldArray
                    name="workHistory"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { workHistory } = formik.values;
                      console.log(workHistory);
                      return (
                        <div>
                          {workHistory.map((workHistoryItem, index) => (
                            <div key={index}>
                              <Field
                                name={`workHistory[${index}].workPosition`}
                              />
                              <Field
                                name={`workHistory[${index}].workEmployer`}
                              />
                              <Field
                                name={`workHistory[${index}].workDescription`}
                              />
                              <Field
                                name={`workHistory[${index}].workPeriod`}
                              />
                              {index !== workHistory.length - 1 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}
                              {!(index !== workHistory.length - 1) && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    push({
                                      workPeriod: "",
                                      workPosition: "",
                                      workEmployer: "",
                                      workDescription: "",
                                    })
                                  }
                                >
                                  +
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="education">Education</label>
                  <FieldArray
                    name="education"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { education } = formik.values;
                      console.log(education);
                      return (
                        <div>
                          <div>
                            {education.map((educationItem, index) => (
                              <div key={index}>
                                <Field name={`education[${index}].eduDegree`} />
                                <Field
                                  name={`education[${index}].eduInstitute`}
                                />
                                <Field name={`education[${index}].eduPeriod`} />
                                {index !== education.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== education.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        eduPeriod: "",
                                        eduDegree: "",
                                        eduInstitute: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="project">Project</label>
                  <FieldArray
                    name="project"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { project } = formik.values;
                      console.log(project);
                      return (
                        <div>
                          <div>
                            {project.map((projectItem, index) => (
                              <div key={index}>
                                <Field name={`project[${index}].proName`} />
                                <Field name={`project[${index}].proPeriod`} />
                                <Field name={`project[${index}].proLink`} />
                                <Field
                                  name={`project[${index}].proDescription`}
                                />
                                {index !== project.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== project.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        proName: "",
                                        proPeriod: "",
                                        proLink: "",
                                        proDescription: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="cpTable">CP Table</label>
                  <FieldArray
                    name="cpTable"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { cpTable } = formik.values;
                      console.log(cpTable);
                      return (
                        <div>
                          <div>
                            {cpTable.map((cpTableItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`cpTable[${index}].platformName`}
                                />
                                <Field name={`cpTable[${index}].accLink`} />
                                <Field name={`cpTable[${index}].probCount`} />
                                <Field name={`cpTable[${index}].rating`} />
                                {index !== cpTable.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== cpTable.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        platformName: "",
                                        accLink: "",
                                        probCount: "",
                                        rating: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="awardsHonours">Awards & Honours</label>
                  <FieldArray
                    name="awardsHonours"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { awardsHonours } = formik.values;
                      console.log(awardsHonours);
                      return (
                        <div>
                          <div>
                            {awardsHonours.map((cpTableItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`awardsHonours[${index}].awaname`}
                                />
                                <Field
                                  name={`awardsHonours[${index}].awaDescription`}
                                />
                                {index !== awardsHonours.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== awardsHonours.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        awaname: "",
                                        awaDescription: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="responsiblities">Responsiblities</label>
                  <FieldArray
                    name="responsiblities"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { responsiblities } = formik.values;
                      console.log(responsiblities);
                      return (
                        <div>
                          <div>
                            {responsiblities.map((cpTableItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`responsiblities[${index}].postName`}
                                />
                                <Field
                                  name={`responsiblities[${index}].period`}
                                />
                                <Field
                                  name={`responsiblities[${index}].orgName`}
                                />
                                {index !== responsiblities.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== responsiblities.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        postName: "",
                                        period: "",
                                        orgName: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="achievements">Achievements</label>
                  <FieldArray
                    name="achievements"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { achievements } = formik.values;
                      console.log(achievements);
                      return (
                        <div>
                          <div>
                            {achievements.map((achievementItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`achievements[${index}].achName`}
                                />
                                {index !== achievements.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== achievements.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        achName: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="skills">Skills</label>
                  <FieldArray
                    name="skills"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { skills } = formik.values;
                      console.log(skills);
                      return (
                        <div>
                          <div>
                            {skills.map((achievementItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`skills[${index}].skillName`}
                                />
                                {index !== skills.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== skills.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        skillName: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="certificates">Certificates</label>
                  <FieldArray
                    name="certificates"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { certificates } = formik.values;
                      console.log(certificates);
                      return (
                        <div>
                          <div>
                            {certificates.map((achievementItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`certificates[${index}].certName`}
                                />
                                <Field
                                  name={`certificates[${index}].certLink`}
                                />
                                {index !== certificates.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== certificates.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        certName: "", certLink: ""
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="hobbies">Hobbies & Interests</label>
                  <FieldArray
                    name="hobbies"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { hobbies } = formik.values;
                      console.log(hobbies);
                      return (
                        <div>
                          <div>
                            {hobbies.map((hobbiesItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`hobbies[${index}].hobbiesName`}
                                />
                                {index !== hobbies.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== hobbies.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        hobbiesName: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="languages">Languages</label>
                  <FieldArray
                    name="languages"
                    render={(arrayHelpers) => {
                      const { remove, push } = arrayHelpers;
                      const { languages } = formik.values;
                      console.log(languages);
                      return (
                        <div>
                          <div>
                            {languages.map((hobbiesItem, index) => (
                              <div key={index}>
                                <Field
                                  name={`languages[${index}].langName`}
                                />
                                {index !== languages.length - 1 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                {!(index !== languages.length - 1) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      push({
                                        langName: "",
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className={
                    !(dirty && isValid) ? "disabled-btn" : "enabled-btn"
                  }
                  disabled={!(dirty && isValid)}
                >
                  Log In
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

export default ResumeForm;
