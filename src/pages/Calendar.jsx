import React from 'react'
import {ScheduleComponent,ViewsDirective,ViewDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import {scheduleData} from '../data/dummy';
import {Header} from '../components';
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar"/>
      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2024,5,8)}
      >
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
      <div>
      <p align="center"><br /><b>© 2024 React-Admin-Dashboard. All Rights Reserved | Design By Amit Roy.</b></p>
      </div>
    </div>
    
  )
}

export default Calendar