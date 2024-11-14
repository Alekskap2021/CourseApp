import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/configs/decorators/ThemeDecorator";
import MainPage from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];