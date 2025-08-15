"use client";
import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Text,
  Title,
  Button,
  Group,
  Stack,
} from "@mantine/core";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format, addDays, subDays } from "date-fns";

const Home = () => {
  const [date, setDate] = useState(new Date());

  const previousDay = () => setDate(subDays(date, 1));
  const nextDay = () => setDate(addDays(date, 1));
  return (
    <Container size="xl" p="md">
      <Title order={2} mb="md">
        Good evening, Ali
      </Title>
      <div className="columns-1 md:columns-2 gap-4 space-y-4">
        <Paper
          shadow="md"
          p="sm"
          radius="md"
          withBorder
          className="break-inside-avoid relative min-h-[300px] md:min-h-[600px] !flex 
            !flex-col 
            !items-center !justify-center !text-center"
        >
          <div className="absolute top-4 left-4 text-left">
            <Title order={4}>My Work</Title>
          </div>
          <Text size="sm" c="dimmed" mt="md">
            Tasks and Reminders assigned to you will show here.
          </Text>
          <Button mt="md" variant="filled" color="teal">
            <Plus size={16} /> Add task or reminder
          </Button>
        </Paper>

        <Paper
          shadow="md"
          p="lg"
          radius="md"
          withBorder
          className="break-inside-avoid relative min-h-[250px] md:min-h-[350px] !flex 
            !flex-col 
            !items-center !justify-center !text-center"
        >
          <Group justify="space-between">
            <div className="absolute top-4 left-4 text-left">
              <Title order={4}>Agenda</Title>
              <div className="flex gap-3 mt-2">
                <Text>{format(date, "MMM d, EEE")}</Text>
                <Button onClick={previousDay} size="xs" variant="transparent">
                  <ChevronLeft size={16} className="text-gray-700" />
                </Button>

                <Button onClick={nextDay} size="xs" variant="transparent">
                  <ChevronRight size={16} className="text-gray-700" />
                </Button>
              </div>
            </div>
          </Group>
          <Text c="dimmed" mt="md" size="sm">
            Agenda items from your calendars will show here.
          </Text>
          <Button mt="md" variant="filled" color="teal">
            <Plus size={16} /> Add calendar integrations
          </Button>
        </Paper>
        <Paper
          shadow="md"
          p="sm"
          radius="md"
          withBorder
          className="break-inside-avoid relative min-h-[250px] md:min-h-[500px] !flex 
            !flex-col 
            !items-center !justify-center !text-center"
        >
          <div className="absolute top-4 left-4 text-left">
            <Title order={4}>Priorities</Title>
          </div>
          <Text size="sm" c="dimmed" mt="md">
            LineUp keeps your most important tasks in one list. Add your most
            important task to get started.
          </Text>
          <Button mt="md" variant="filled" color="teal">
            <Plus size={16} /> Add Task
          </Button>
        </Paper>
        <Paper
          shadow="lg"
          p="sm"
          radius="md"
          withBorder
          className="break-inside-avoid relative min-h-[250px] md:min-h-[500px] !flex 
            !flex-col 
            !items-center !justify-center !text-center"
        >
          <div className="absolute top-4 left-4 text-left">
            <Title order={4}>Personal List</Title>
          </div>
          <Text size="sm" c="dimmed" mt="md">
            Personal List is a home of your tasks.
          </Text>
          <Button mt="md" variant="filled" color="teal">
            <Plus size={16} /> Create a Task
          </Button>
        </Paper>

        <Paper
          shadow="md"
          p="sm"
          radius="md"
          withBorder
          className="break-inside-avoid relative min-h-[300px] md:min-h-[600px] !flex 
            !flex-col 
            !items-center !justify-center !text-center"
        >
          <div className="absolute top-4 left-4 text-left">
            <Title order={4}>Assigned comments</Title>
          </div>
          <Title order={4}>No Comments</Title>
          <Text size="sm" c="dimmed" mt="md">
            You don't have any assigned comments.
          </Text>
        </Paper>
      </div>
    </Container>
  );
};

export default Home;
