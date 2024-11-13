// eslint-disable-next-line @conarti/feature-sliced/layers-slices, @conarti/feature-sliced/absolute-relative
import "@/app/styles/index.scss";
import type { Story } from "@storybook/react";

export const StyleDecorator = (story: () => Story) => story();
