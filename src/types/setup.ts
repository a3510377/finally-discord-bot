import { Client } from "./client";
import { SnowflakeTool } from "./util/snowflake";

export default () => {
  Object.assign(window, {
    Client,
    SnowflakeTool,
  });
};
