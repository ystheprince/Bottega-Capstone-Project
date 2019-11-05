import React from "react";
import { Grid, Cell } from "react-mdl";
import "./index.scss";
import { Link } from "react-router-dom";
import Typist from "react-typist-updated";

export default function HomePage() {
  return (
    <div>
      <Grid className="home">
        <Cell col={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Link to="/home">
              <Typist className="typeWriter">
                Enter <Typist.Delay ms={500} /> Site
              </Typist>
            </Link>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}
