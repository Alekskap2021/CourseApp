import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "../../configs/decorators/ThemeDecorator";
import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind(Button);
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: "clear",
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: "Text",
  theme: "clearInverted",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: "outline",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: "outline",
};
OutlineDark.decorators = [ThemeDecorator("dark")];
