import React, { Component } from 'react';
import data from '../Data';
import Column from '../Column';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import TopNav from '../TopNav/TopNav';


const Title = styled.div`
  text-align: center;
  margin-top: 5px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
`;

class App extends Component {
    constructor(props, state) {
        super(props, state);
        this.state = data;
    }

    //method when grabbing an item to drop it on another column
    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        //constant variables, begin is where the item is, end is where you going to drop the item... 
        const begin = this.state.columns[source.droppableId];
        const end = this.state.columns[destination.droppableId];



        // The first conditional statement is for the case where there is no destination. In such cases, we don’t have to do anything, so we simply return nothing. so an item stays in the same column
        if (begin === end) {

            const newSubjectIds = Array.from(begin.subjectId);
            newSubjectIds.splice(source.index, 1);
            newSubjectIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...begin,
                subjectId: newSubjectIds,
            };
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            this.setState(newState);

            debugger
        } else {
            //check if the location of the draggable has changed. 
            const beginSubjectId = Array.from(begin.subjectId);
            beginSubjectId.splice(source.index, 1);
            const newBegin = {
                ...begin,
                subkectId: beginSubjectId
            };

            const endSubjectIds = Array.from(end.subjectId);
            endSubjectIds.splice(source.index, 1);
            endSubjectIds.splice(destination.index, 0, draggableId);

            const newEnd = {
                ...end,
                subjectId: endSubjectIds
            };

            const updateState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newBegin.id]: newBegin,
                    [newEnd.id]: newEnd,
                },
            };
            this.setState(updateState);

            debugger
        }
    };

    render() {
        return (
            <div>
                <TopNav />
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Container>
                        {this.state.columnsort.map(columnId => {
                            const column = this.state.columns[columnId];
                            const subjects = column.subjectId.map(subjectId => this.state.subjects[subjectId]);
                            return <Column key={Column.id} column={column} subjects={subjects} />;
                        })}
                    </Container>
                </DragDropContext>
            </div>
        );
    }
}

export default App;
