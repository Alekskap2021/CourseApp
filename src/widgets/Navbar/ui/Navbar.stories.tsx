import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "@/shared/configs/decorators/StoreDecorator";
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
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark"), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [
  StoreDecorator({
    user: { authData: { username: "alex", id: "123" } },
  }),
];
