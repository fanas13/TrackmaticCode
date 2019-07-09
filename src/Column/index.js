import React from 'react';
import Subject from '../Subject';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import data from '../Data';


const Container = styled.div`
  margin: 4px;
  border: 0px solid lightgrey;
  border-radius: 5px;
  width: 270px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  background-color: #dfe1e6;
`;

const Title = styled.div`
  padding: 10px;
`;

export default class Column extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = data;
    }
    
    render() {

        return (
            <Container>
                <Title className="cardHeaderTitle">{this.props.column.title}</Title>
                <div className="columnContainer">
                    <Droppable droppableId={this.props.column.id}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} >
                                {this.props.subjects.map((subject, index) => (
                                    <Subject key={subject.id} subject={subject} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </Container>
        );
    }
}
