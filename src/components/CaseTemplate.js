import { Grid, Box } from "@mui/material";
import React from "react";
import CaseCard from "./CaseCard";
import cases from "@/data/cases.json";

function CaseTemplate() {
  return (
    <Box>
      <Grid container spacing={3} justifyContent="center" sx={{ padding: 3 }}>
        {cases.map((caseData) => (
          <CaseCard key={caseData.id} caseData={caseData} />
        ))}
      </Grid>
    </Box>
  );
}

export default CaseTemplate;
