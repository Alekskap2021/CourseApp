import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/configs/decorators/ThemeDecorator";
import { Navbar } from "./Navbar";

export default {
  title: "widget/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];
