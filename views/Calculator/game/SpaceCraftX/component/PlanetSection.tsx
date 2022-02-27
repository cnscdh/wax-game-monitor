import React from "react";
import { Box, Grid } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import SubSectionInfo from "./SubSectionInfo";
import useCurrency from "../../../../../hook/useCurrency";
import { SxcTokens, planetCommon, planetRare, planetUltrarare } from "../const";

function PlanetSection({ assets }: { assets: AssetInfo[] }) {
  const { prices } = useCurrency({
    tokens: [
      SxcTokens.SCIC.toString(),
      SxcTokens.SCID.toString(),
      SxcTokens.SCIW.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetCommon?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionInfo
              prices={prices}
              key={assetData?.id}
              assetData={assetData}
            ></SubSectionInfo>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetRare?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionInfo
              prices={prices}
              key={assetData?.id}
              assetData={assetData}
            ></SubSectionInfo>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetUltrarare?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionInfo
              prices={prices}
              key={assetData?.id}
              assetData={assetData}
            ></SubSectionInfo>
          ))}
      </Grid>
    </Box>
  );
}

export default PlanetSection;
