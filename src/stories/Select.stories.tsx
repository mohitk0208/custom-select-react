import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import Select from "../Select"

export default {
  title: "Components/Select",
  component: Select

} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />


export const SingleSelect = Template.bind({})
SingleSelect.args = {
  value: { label: "First", value: 1 },
  options: [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
  ]
}



export const MultipleSelect = Template.bind({})
MultipleSelect.args = {
  multiple: true,
  value: [
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
  ],
  options: [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
  ]
}