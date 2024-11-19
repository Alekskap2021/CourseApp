import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { AuthByUsernameForm } from "./AuthByUsernameForm";

export default {
  title: "features/LoginForm",
  component: AuthByUsernameForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AuthByUsernameForm>;

const Template: ComponentStory<typeof AuthByUsernameForm> = (args) => (
  <AuthByUsernameForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
