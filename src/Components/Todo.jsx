import { Text, Flex, Button, Container, Space } from "@mantine/core";

const Todo = ({ todo, removeTodo, editTodo }) => {
  return (
    <Flex direction="row">
      <Container>
        <Flex wrap="wrap">
          <Text>{todo.task}</Text>
        </Flex>
      </Container>
      <Space h="lg"></Space>

      <Container>
        <Button onClick={() => editTodo(todo.id)} color="violet">
          edit
        </Button>

        {/* <TextInput label="Edit Todo" placeholder="New Task..." size="xs" /> */}

        <Button onClick={() => removeTodo(todo.id)} color="red">
          delete
        </Button>
      </Container>
    </Flex>
  );
};

export default Todo;