import React from "react";
import { Card } from "react-bootstrap";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog5.png";
const Blog = () => {
  return (
    <div className="container mt-5">
      <>
        <Card>
          <Card.Img
            style={{ height: "500px", weight: "100px" }}
            variant="top"
            src={blog1}
          />
          <Card.Body>
            <Card.Text>
              <h1 className="text-3xl">
                How will you improve the performance of a React Application?
              </h1>
              <h1 className="text-2xl">
                Improve the performance of a React Application
              </h1>
              <div>
                <ul className="list-[upper-roman]">
                  <li>Keeping component state local where necessary.</li>
                  <li>
                    Memoizing React components to prevent unnecessary
                    re-renders.
                  </li>
                  <li>Code-splitting in React using dynamic import()</li>
                  <li>Windowing or list virtualization in React.</li>
                  <li>Lazy loading images in React.</li>
                </ul>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card.Img
          style={{ height: "350px", weight: "150px" }}
          mt-3
          variant="top"
          src={blog2}
        />
        <Card.Body>
          <Card.Text>
            <h1 className="text-3xl font-bold">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <h4 className="text-2xl">
              Ways to manage a state in a React application
            </h4>
            <br />
            <ul className="list-disc">
              <li> Use useReducer for Complex State</li>
              <li> Custom Hooks </li>
              <li> Global State Management</li>
              <li> Use Data Fetching Libraries(React Query)</li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card>
          <Card.Body>
            <Card.Text>
              <h1 className="text-3xl">
                {" "}
                Why you do not set the state directly in React?{" "}
              </h1>
              <br />
              <h2>SQL</h2>
              Basically, When we update the state of a component all it's
              children are going to be rendered as well. or our entire component
              tree rendered. but when i say our entire component tree is
              rendered that doesn’t mean that the entire DOM is updated. when a
              component is rendered we basically get a react element, so that is
              updating our virtual dom. React will then look at the virtual DOM,
              it also has a copy of the old virtual DOM, that is why we
              shouldn’t update the state directly, so we can have two different
              object references in memory, we have the old virtual DOM as well
              as the new virtual DOM. then react will figure out what is changed
              and based on that it will update the real DOM accordingly .
              <br />
              <br />
              <h2>NoSQL</h2>
              NoSQL is a non-relational DMS, that does not require a fixed
              schema, avoids joins, and is easy to scale. NoSQL database is used
              for distributed data stores with humongous data storage needs.
              NoSQL is used for Big data and real-time web apps. For example
              companies like Twitter, Facebook, Google that collect terabytes of
              user data every single day.
            </Card.Text>
          </Card.Body>
          <Card.Img
            style={{ height: "400px", weight: "180px" }}
            variant="bottom"
            src={blog3}
          />
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Text>
              <h1> What is the purpose of jwt and how does it work?</h1>
              In short, JWTs are used as a secure way to authenticate users and
              share information.Typically, a private key, or secret, is used by
              the issuer to sign the JWT. The receiver of the JWT will verify
              the signature to ensure that the token hasn’t been altered after
              it was signed by the issuer. It is difficult for unauthenticated
              sources to guess the signing key and attempt to change the claims
              within the JWT.
              <br />
              <br />
              <h2>How JWT Works</h2>
              JWTS differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted. A
              JWT is a string made up of three parts, separated by dots (.), and
              serialized using base64. In the most common serialization format,
              compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:
              <ul>
                <li>The header and the payload. </li>
                <li>The signature.</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Img
            style={{ height: "400px", weight: "200px" }}
            variant="bottom"
            src={blog4}
            className="mb-1"
          />
        </Card>
      </>
    </div>
  );
};

export default Blog;
