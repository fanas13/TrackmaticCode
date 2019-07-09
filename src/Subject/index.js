import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: whitesmoke;
`;

export default class Subject extends React.Component {
    render() {
        return (
            <Container>
                <Draggable draggableId={this.props.subject.id} index={this.props.index} >
                    {provided => (
                        <div ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                            {this.props.subject.name}
                        </div>
                    )}
                </Draggable>
            </Container>
        );
    }
}
