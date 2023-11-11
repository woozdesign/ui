import React, { FC, useState } from 'react';
import { Card, Checkbox, Col, Flex, Row, Typography } from '../../components';

interface TodoCardProps {}

const TodoCard: FC<TodoCardProps> = ({}) => {
  const [todo, setTodo] = useState([true, false, false, false]);

  const handleTodo = (index: number) => {
    setTodo(
      todo.map((t, i) => {
        if (index == i) {
          t = !t;
        }
        return t;
      }),
    );
  };

  return (
    <Card variant={'translucent'} size={'large'}>
      <Card.Header title="To-do" titleSize={'4'} subtitle={'Stay on top of your daily tasks.'} subtitleSize={'2'} />
      <Card.Body
        content={
          <Row>
            <Col xs={24}>
              <Flex width={'100%'} mb="1" justify={'space-between'}>
                <Flex direction="column">
                  <Checkbox
                    highContrast
                    onChange={() => handleTodo(0)}
                    defaultChecked={todo[0]}
                    label={
                      <span style={{ textDecoration: todo[0] ? 'line-through' : '' }}>
                        Respond to comment <Typography.Link href="https://github.com/woozdesign/ui">#13</Typography.Link>
                      </span>
                    }
                  />
                  <Checkbox
                    highContrast
                    onChange={() => handleTodo(1)}
                    defaultChecked={todo[1]}
                    label={
                      <span style={{ textDecoration: todo[1] ? 'line-through' : '' }}>
                        Invite John for <Typography.Link href="https://github.com/woozdesign/ui">Zoom</Typography.Link> Interview
                      </span>
                    }
                  />
                  <Checkbox
                    highContrast
                    onChange={() => handleTodo(2)}
                    defaultChecked={todo[2]}
                    label={
                      <span style={{ textDecoration: todo[2] ? 'line-through' : '' }}>
                        Create PR for <Typography.Link href="https://github.com/woozdesign/ui">#119</Typography.Link>
                      </span>
                    }
                  />
                  <Checkbox
                    highContrast
                    onChange={() => handleTodo(3)}
                    defaultChecked={todo[3]}
                    label={<span style={{ textDecoration: todo[3] ? 'line-through' : '' }}>Release 1.2.0</span>}
                  />
                </Flex>
              </Flex>
            </Col>
          </Row>
        }
      ></Card.Body>
    </Card>
  );
};

export default TodoCard;
