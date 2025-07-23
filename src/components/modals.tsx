"use client";

import {
  Button,
  Modal,
  Grid,
  Text,
  TextInput,
  Paper,
  Title,
} from "@mantine/core";

import { Form } from "@mantine/form";

export default function CreateSpaceModals({
  createModalOpen,
  setCreateModalOpen,
  secondModalOpen,
  setSecondModalOpen,
}: {
  createModalOpen: boolean;
  setCreateModalOpen: (value: boolean) => void;
  secondModalOpen: boolean;
  setSecondModalOpen: (value: boolean) => void;
}) {
  return (
    <>
      <Modal
        opened={createModalOpen}
        size={"lg"}
        onClose={() => setCreateModalOpen(false)}
        title={
          <Text size="lg" fw={600} className="text-gray-800">
            Create a Space
          </Text>
        }
        centered
      >
        <Form>
          <Text size="sm" className=" !text-neutral-500">
            A Space represents teams, departments, or groups, each with its own
            Lists, workflows, and settings.
          </Text>
          <TextInput
            className="mt-2 text-neutral-600"
            label="Icon & name"
            placeholder="e.g., Marketing, Engineering, HR"
          />
          <TextInput
            className="mt-5 text-neutral-600"
            label={
              <span className="text-gray-700">
                Description{" "}
                <span className="text-xs text-gray-500">(optional)</span>
              </span>
            }
          />

          <Text size="sm" className="!text-neutral-600">
            Choose a pre-configured solution or customize to your liking with
            advanced ClickApps, required views, and task statuses.
          </Text>

          <Grid>
            <Grid.Col span={6}>
              <Paper shadow="md" p="md">
                <Title size="sm" className="text-gray-700">
                  Starter
                </Title>
                <Text size="sm" className="!text-gray-500">
                  For everyday tasks
                </Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper shadow="md" p="md">
                <Title size="sm" className="text-gray-700">
                  Marketing teams
                </Title>
                <Text size="sm" className="!text-gray-500">
                  Run effective compaigns
                </Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper shadow="md" p="md">
                <Title size="sm" className="text-gray-700">
                  Project Management
                </Title>
                <Text className="!text-gray-500">
                  plan, manage and execute projects
                </Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper shadow="md" p="md">
                <Title size="sm" className="text-gray-700">
                  Product + Engineering
                </Title>
                <Text className="!text-gray-500">
                  Streamline your product lifecycle
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>

          <div className="flex justify-between mt-4">
            <Button
              variant="subtle"
              color="gray"
              onClick={() => {
                setSecondModalOpen(false);
                setCreateModalOpen(true);
              }}
            >
              Back
            </Button>

            <Button color="teal" onClick={() => setSecondModalOpen(false)}>
              Create Space
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
