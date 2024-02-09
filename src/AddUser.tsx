import * as React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

interface ICreateUserProps {}

const CreateUser: React.FunctionComponent<ICreateUserProps> = (props) => {
  const [userDetails, setUserDetails] = React.useState({
    employeeCode: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactNumber: 0,
    emergencyContactNumber: 0,
    bloodGroup: "",
    userRole: "",
    password: "",
    doorNoCurrentAddress: "",
    streetCurrentAddress: "",
    cityCurrentAddress: "",
    districtCurrentAddress: "",
    pincodeCurrentAddress: 0,
    stateCurrentAddress: "",
    countryCurrentAddress: "",
    doorNoPermAddress: "",
    streetPermAddress: "",
    cityPermAddress: "",
    districtPermAddress: "",
    pincodePermAddress: 0,
    statePermAddress: "",
    countryPermAddress: "",

    bankName: "",
    branchName: "",
    bankAccountNumber: 0,
    bankAccountHolderName: "",
    ifscCode: "",
    accountType: "",
    cheque: 0,
    chequeFile: "",
    aadharNumber: 0,
    aadharFile: "",
    panNumber: 0,
    panFile: "",
    currentAddressAd: "",
    currentAddressAdFile: "",
    permanentAddressAd: "",
    permanentAddressAdFile: "",
    uanNumber: 0,
    uanFile: "",
    passportNumber: "",
    passportFile: "",
    dob: 0,
    dobFile: "",
    spouseName: "",
    spouseDob: 0,
    childOneName: "",
    childOneDob: 0,
    childTwoName: "",
    childTwoDob: 0,
    motherName: "",
    motherDob: 0,
    fatherName: "",
    fatherDob: 0,
    maritalStatus: "",
    dateOfJoining: 0,
    designation: "",
    department: "",
    reportingManager: "",
    officialEmail: "",
    officialContact: 0,
  });

  const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

  const mobileNoRegex = /^[6-9]\d{9}$/gm;

  const bloodGroupRegex = /^(A|B|AB|O)[-+]?$/gm;

  const pinCodeRegex = /^[1-9]{1}\d{2}\s?\d{3}$/gm;

  const bankAccountNumberRegex = /^\d{5,18}$/gm;

  const ifscCodeRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/gm;

  const chequeRegex = /^[0-9]\d{5}$/gm;

  const aadharNumberRegex = /^\d{12}$/gm;

  const panNumberRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/gm;

  const uanNumberRegex = /^\d{12}$/gm;

  const onSubmitUserForm = (Event: React.FormEvent) => {
    Event.preventDefault();
  };

  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Card.Title>Create User</Card.Title>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={onSubmitUserForm}>
            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>FirstName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="FirstName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      firstName: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>MiddleName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MiddleName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      middleName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="LastName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      lastName: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>EmailAddress</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>ContactNumber</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ContactNumber"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      contactNumber: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>EmergencyContact</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="EmergencyContact"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      emergencyContactNumber: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>SelfBloodGroup</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="BloodGroup"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      bloodGroup: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>UserRole</Form.Label>

                <div className="d-flex flex-row ">
                  <Form.Select
                    placeholder=" SelectRole"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        userRole: e.target.value,
                      });
                    }}
                    required
                  >
                    <option value="Guest">Guest</option>
                    <option value="Admin">Admin</option>
                    <option value="User"> User</option>
                  </Form.Select>

                  <Form.Text className="align-self-center">
                    ViewPermissions
                  </Form.Text>
                </div>
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Card.Header>CURRENT ADDRESS</Card.Header>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>DoorNumber</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="DoorNumber"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      doorNoCurrentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      streetCurrentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      cityCurrentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="District"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      districtCurrentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>PinCode</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="PinCode"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      pincodeCurrentAddress: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      stateCurrentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      countryCurrentAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Card.Header>PERMANENT ADDRESS</Card.Header>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>DoorNumber</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="DoorNumber"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      doorNoPermAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      streetPermAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      cityPermAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="District"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      districtPermAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>PinCode</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="PinCode"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      pincodePermAddress: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      statePermAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      countryPermAddress: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Card.Header>BANK DETAILS</Card.Header>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>BankName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="BankName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      bankName: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>BranchName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="BranchName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      branchName: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>AccountNumber</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="AccountNumber"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      bankAccountNumber: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>AccountHolderName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="AccountHolderName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      bankAccountHolderName: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>IfscCode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="IfscCode"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      ifscCode: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>AccountType</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="AccountType"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      accountType: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>Cheque</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cheque"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      cheque: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>ChequeFile</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      chequeFile: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Card.Header>ADDITIONAL DOCUMENTS</Card.Header>

            <Row>
              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>AadharCard</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="number"
                    placeholder="AadharNumber"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        aadharNumber: +e.target.value,
                      });
                    }}
                    required
                  />

                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        aadharFile: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>PanCard</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="text"
                    placeholder="PanCard"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        panNumber: +e.target.value,
                      });
                    }}
                    required
                  />
                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        panFile: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>CurrentAddress</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="text"
                    placeholder="CurrentAddress"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        currentAddressAd: e.target.value,
                      });
                    }}
                  />
                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        currentAddressAdFile: e.target.value,
                      });
                    }}
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>PermanentAddress</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="text"
                    placeholder="PermanentAddress"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        permanentAddressAd: e.target.value,
                      });
                    }}
                  />
                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        permanentAddressAdFile: e.target.value,
                      });
                    }}
                  />
                </div>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>UanNumber</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="number"
                    placeholder="UanNumber"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        uanNumber: +e.target.value,
                      });
                    }}
                    required
                  />
                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        uanFile: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>PassportNumber</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="text"
                    placeholder="PassportNumber"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        passportNumber: e.target.value,
                      });
                    }}
                    required
                  />
                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        passportFile: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={6}>
                <Form.Label>DateOfBirth</Form.Label>

                <div className="d-flex flex-row">
                  <Form.Control
                    type="date"
                    placeholder="DateOfBirth"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        dob: new Date(e.target.value).getTime(),
                      });
                    }}
                    required
                  />
                  <Form.Control
                    type="file"
                    className="align-self-center"
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        dobFile: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </Form.Group>
            </Row>

            <Card.Header>FAMILY INFORMATION</Card.Header>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>SpouseName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SpouseName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      spouseName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>SpouseDateOfBirth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="SpouseDateOfBirth"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      spouseDob: new Date(e.target.value).getTime(),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>ChildOneName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ChildOneName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      childOneName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>ChildOneDateOfBirth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="ChildOneDateOfBirth"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      childOneDob: new Date(e.target.value).getTime(),
                    });
                  }}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>ChildTwoName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ChildTwoName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      childTwoName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>ChildTwoDateOfBirth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="ChildTwoDateOfBirth"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      childTwoDob: new Date(e.target.value).getTime(),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>MotherName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MotherName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      motherName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>MotherDateOfBirth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="MotherDateOfBirth"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      motherDob: new Date(e.target.value).getTime(),
                    });
                  }}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>FatherName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="FatherName"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      fatherName: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>FatherDateOfBirth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="FatherDateOfBirth"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      fatherDob: new Date(e.target.value).getTime(),
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={4}>
                <Form.Label>MaritalStatus</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MaritalStatus"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      maritalStatus: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Card.Header>ADDITIONAL DETAILS</Card.Header>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>DateOfJoining</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DateOfJoining"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      dateOfJoining: new Date(e.target.value).getTime(),
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Designation"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      designation: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Department"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      department: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>ReportingManager</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ReportingManager"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      reportingManager: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>OfficialEmail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="OfficialEmail"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      officialEmail: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md={6} lg={3}>
                <Form.Label>OfficialContact</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="OfficialContact"
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      officialContact: +e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  SAVE
                </Button>
              </div>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateUser;
