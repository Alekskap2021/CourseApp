import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/configs/decorators/ThemeDecorator";
import { AppErrorFallback } from "./AppErrorFallback";

export default {
  title: "widget/AppErrorFallback",
  component: AppErrorFallback,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppErrorFallback>;

const Template: ComponentStory<typeof AppErrorFallback> = (args) => <AppErrorFallback {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator("dark")];
