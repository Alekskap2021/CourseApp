/* eslint-disable no-console */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "../../configs/decorators/ThemeDecorator";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  className: "dark",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ",
};
Dark.play = async ({ args, canvasElement }) => {
  console.log("🚀 ~ Dark.play= ~ canvasElement:", canvasElement.innerHTML);
  console.log("🚀 ~ Dark.play= ~ args:", args);
};
Dark.decorators = [ThemeDecorator("dark")];
