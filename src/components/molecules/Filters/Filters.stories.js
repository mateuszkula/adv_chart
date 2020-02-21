import React from "react";

import { Filters } from "./";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { datasources, campaigns } from "./fixtures";

storiesOf("molecules/Filters", module).add("default", () => (
  <Filters
    campaigns={campaigns}
    datasources={datasources}
    onCampaignsChange={action("Campaings has changed")}
    onDatasourcesChange={action("Datasources has changed")}
  />
));
