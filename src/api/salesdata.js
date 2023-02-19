import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import vdata from "./vdata.json";

export default function SaDatas() {
  const [salesValue, setSalesvalue] = useState();
  const baseURL = "https://mocki.io/v1/c0819841-d466-4037-9953-e32e0fea714b";
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        // eslint-disable-next-line no-use-before-define
        // const vdata = JSON.parse(vdata.json);
        const vdatas = JSON.parse(JSON.stringify(vdata));
        function getVersion(vdatass) {
          if (Array.isArray(vdatass) && vdatass.length > 0) {
            return vdatas[0].version;
          }
          return null;
        }
        const saversion = getVersion(vdata);
        const { data } = response;
        const filteredData = data.filter((item) => item.version === saversion);
        setSalesvalue(filteredData);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line no-undef
  }, [vdata]);
  console.log(salesValue);
  return <Grid container spacing={2} />;
}
