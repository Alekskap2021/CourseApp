import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/configs/decorators/StoreDecorator";
import { AuthByUsernameForm } from "./AuthByUsernameForm";

export default {
  title: "features/AuthByUsernameForm",
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
Primary.decorators = [
  StoreDecorator({
    authByUsername: { username: "123", password: "asd" },
  }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
  StoreDecorator({
    authByUsername: { username: "123", password: "asd", error: "ERROR" },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    authByUsername: { isLoading: true },
  }),
];
