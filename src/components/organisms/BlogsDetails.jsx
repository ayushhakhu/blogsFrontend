import React from "react";
import { Typography } from "../atoms/Typography";
import { Paper } from "../molecules/Paper";

export const    BlogsDetails = ({ blogId, ...props }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        padding: 10,
        marginTop: 10,
        flexDirection: "column",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="userDetails">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  width: 48,
                  height: 48,
                  borderRadius: 100,
                  border: "1px solid black",
                }}
                src={`${require("../../data/AYUSHHAKHU.jpg")}`}
                alt="userImage"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div class="username">
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "rgba(41, 41, 41, 1)",
                    fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
                    fontWeight: 400,
                    paddingInline: 2,
                  }}
                  variant="subtitle1"
                  title="ayush.hakhu"
                />
              </div>
            </div>
            <div className="">

            </div>
          </div>
        </div>
      </header>
      <section></section>
      <footer></footer>
    </Paper>
  );
};
